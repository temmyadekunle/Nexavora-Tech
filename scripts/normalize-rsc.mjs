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
 * Delete this script if a future Next release emits the flat filename.
 */
const outDir = join(process.cwd(), "out");
let mirrored = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (entry.startsWith("__next.")) {
      for (const file of readdirSync(full)) {
        if (!file.endsWith(".txt")) continue;
        copyFileSync(full + "/" + file, join(dir, `${entry}.${file}`));
        mirrored++;
      }
    } else {
      walk(full);
    }
  }
}

walk(outDir);
console.log(`normalize-rsc: mirrored ${mirrored} payload file(s)`);
