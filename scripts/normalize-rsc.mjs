import { readdirSync, statSync, copyFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Next.js (16.4) writes each page's App Router payload to
 *   out/<route>/__next.<route>/__PAGE__.txt
 * while the client requests
 *   out/<route>/__next.<route>.__PAGE__.txt
 * so every prefetch/navigation on a static host answers 404 and Next has to
 * fall back to a full document request. This post-build step mirrors the
 * nested payload to the dotted filename the client actually asks for.
 *
 * Dynamic routes nest one level deeper, e.g.
 *   out/portfolio/<slug>/__next.portfolio/$d$slug/__PAGE__.txt
 * is requested as `__next.portfolio.$d$slug.__PAGE__.txt`, so the mirror
 * walks every payload directory recursively and joins the segments with dots.
 *
 * Delete this script if a future Next release emits the flat filename.
 */
const outDir = join(process.cwd(), "out");
let mirrored = 0;

function collectTxt(dir, parts, found) {
  for (const item of readdirSync(dir)) {
    const full = join(dir, item);
    if (statSync(full).isDirectory()) {
      collectTxt(full, [...parts, item], found);
    } else if (item.endsWith(".txt")) {
      found.push([...parts, item]);
    }
  }
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (entry.startsWith("__next.")) {
      const found = [];
      collectTxt(full, [], found);
      for (const parts of found) {
        copyFileSync(join(full, ...parts), join(dir, [entry, ...parts].join(".")));
        mirrored++;
      }
    } else {
      walk(full);
    }
  }
}

walk(outDir);
console.log(`normalize-rsc: mirrored ${mirrored} payload file(s)`);
