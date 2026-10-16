import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";

/**
 * Neutral "asset pending" placeholders for CareNBuddi.
 *
 * These are deliberately abstract panel graphics — NOT application
 * screenshots. Real captures should replace them; until then they are
 * honest about being placeholders rather than faking a product UI.
 *
 * Run with: node scripts/make-placeholders.mjs
 */
const OUT_DIR = path.join(process.cwd(), "public", "projects", "carenbuddi");
const W = 800;
const H = 600;

function crc32(buf) {
  const table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const td = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td), 0);
  return Buffer.concat([len, td, crc]);
}

function makePng(pixelAt) {
  const raw = Buffer.alloc(H * (1 + W * 3));
  let o = 0;
  for (let y = 0; y < H; y++) {
    raw[o++] = 0;
    for (let x = 0; x < W; x++) {
      const [r, g, b] = pixelAt(x, y);
      raw[o++] = r;
      raw[o++] = g;
      raw[o++] = b;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const hex = (h) => [
  parseInt(h.slice(1, 3), 16),
  parseInt(h.slice(3, 5), 16),
  parseInt(h.slice(5, 7), 16),
];

function placeholder(tintHex) {
  const tint = hex(tintHex);
  const top = hex("#0d1428");
  const bottom = hex("#080d1c");
  const cx = W / 2;
  const cy = H / 2;

  return makePng((x, y) => {
    const t = y / H;
    let r = Math.round(top[0] + (bottom[0] - top[0]) * t);
    let g = Math.round(top[1] + (bottom[1] - top[1]) * t);
    let b = Math.round(top[2] + (bottom[2] - top[2]) * t);

    const d = Math.hypot(x - W * 0.18, y - H * 0.1) / (W * 0.8);
    const glow = Math.max(0, 1 - d) ** 2 * 0.16;
    r = Math.min(255, Math.round(r + tint[0] * glow));
    g = Math.min(255, Math.round(g + tint[1] * glow));
    b = Math.min(255, Math.round(b + tint[2] * glow));

    const inset = 44;
    const onFrame =
      x > inset && x < W - inset && y > inset && y < H - inset &&
      (x < inset + 2 || x > W - inset - 2 || y < inset + 2 || y > H - inset - 2);
    const edgeDist = Math.min(x - inset, W - inset - x, y - inset, H - inset - y);
    const dashOn = Math.floor((x + y) / 22) % 2 === 0;
    if (onFrame && dashOn) {
      const edge = Math.max(0, 1 - edgeDist / 3) * 0.5 + 0.18;
      r = Math.min(255, Math.round(r + 90 * edge));
      g = Math.min(255, Math.round(g + 120 * edge));
      b = Math.min(255, Math.round(b + 150 * edge));
    }

    const arm = 34;
    const thick = 2;
    const onCross =
      (Math.abs(x - cx) <= thick && Math.abs(y - cy) <= arm) ||
      (Math.abs(y - cy) <= thick && Math.abs(x - cx) <= arm);
    if (onCross) {
      r = Math.round(r * 0.5 + tint[0] * 0.5);
      g = Math.round(g * 0.5 + tint[1] * 0.5);
      b = Math.round(b * 0.5 + tint[2] * 0.5);
    }
    return [r, g, b];
  });
}

const files = {
  "cover.png": "#19BFFF",
  "home-dashboard.png": "#19BFFF",
  "find-care.png": "#19BFFF",
  "appointments.png": "#19BFFF",
  "health.png": "#19BFFF",
};

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const [name, tint] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT_DIR, name), placeholder(tint));
  console.log("wrote " + name);
}