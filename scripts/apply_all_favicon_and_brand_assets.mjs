import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MASTER_PNG = path.join(ROOT, "src/assets/hegxcorp-4k-emblem.png");
const PUBLIC_DIR = path.join(ROOT, "public");
const FAVICON_DIR = path.join(ROOT, "public/favicon");

if (!fs.existsSync(FAVICON_DIR)) {
  fs.mkdirSync(FAVICON_DIR, { recursive: true });
}

// 1. Generate all PNG favicon sizes
const pngSizes = [
  { dir: FAVICON_DIR, name: "favicon-16x16.png", size: 16 },
  { dir: FAVICON_DIR, name: "favicon-32x32.png", size: 32 },
  { dir: FAVICON_DIR, name: "favicon-48x48.png", size: 48 }, // Google Search standard
  { dir: FAVICON_DIR, name: "favicon-96x96.png", size: 96 },
  { dir: FAVICON_DIR, name: "apple-touch-icon.png", size: 180 },
  { dir: PUBLIC_DIR, name: "apple-touch-icon.png", size: 180 },
  { dir: FAVICON_DIR, name: "android-chrome-192x192.png", size: 192 },
  { dir: FAVICON_DIR, name: "android-chrome-512x512.png", size: 512 },
];

for (const { dir, name, size } of pngSizes) {
  const outPath = path.join(dir, name);
  await sharp(MASTER_PNG)
    .resize(size, size, { kernel: "lanczos3" })
    .png()
    .toFile(outPath);
  console.log(`✓ Generated ${name} (${size}x${size})`);
}

// 2. Generate multi-size ICO (16, 32, 48)
async function createIco(sizes) {
  const frames = [];
  for (const size of sizes) {
    const buf = await sharp(MASTER_PNG)
      .resize(size, size, { kernel: "lanczos3" })
      .png()
      .toBuffer();
    frames.push({ size, buf });
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);

  const dirSize = 16 * frames.length;
  let offset = 6 + dirSize;

  const entries = [];
  for (const frame of frames) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(frame.size >= 256 ? 0 : frame.size, 0);
    entry.writeUInt8(frame.size >= 256 ? 0 : frame.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(frame.buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += frame.buf.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...frames.map((f) => f.buf)]);
}

const icoBuffer = await createIco([16, 32, 48]);
fs.writeFileSync(path.join(PUBLIC_DIR, "favicon.ico"), icoBuffer);
fs.writeFileSync(path.join(FAVICON_DIR, "favicon.ico"), icoBuffer);
console.log("✓ Generated multi-size favicon.ico (16, 32, 48) in public/ and public/favicon/");

// 3. Generate SVG favicon with embedded high-res emblem
const emblem512 = await sharp(MASTER_PNG).resize(512, 512).png().toBuffer();
const emblemBase64 = emblem512.toString("base64");

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#EAD68D"/>
  <image href="data:image/png;base64,${emblemBase64}" width="512" height="512"/>
</svg>
`;
fs.writeFileSync(path.join(FAVICON_DIR, "favicon.svg"), svgContent, "utf-8");
console.log("✓ Generated favicon.svg in public/favicon/");

// 4. Generate OG image (1200x630) with 4K emblem
const emblemForOg = await sharp(MASTER_PNG).resize(500, 500).png().toBuffer();
const ogImageBuffer = await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 234, g: 214, b: 141, alpha: 1 },
  },
})
  .composite([
    {
      input: emblemForOg,
      top: 65,
      left: 350,
    },
  ])
  .webp({ quality: 90 })
  .toBuffer();

fs.writeFileSync(path.join(PUBLIC_DIR, "og-image.webp"), ogImageBuffer);
console.log("✓ Generated og-image.webp (1200x630) in public/");

// 5. Update site.webmanifest
const manifest = {
  name: "Hegxcorp",
  short_name: "Hegxcorp",
  icons: [
    {
      src: "/favicon/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/favicon/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  theme_color: "#EAD68D",
  background_color: "#EAD68D",
  display: "standalone",
};
fs.writeFileSync(
  path.join(PUBLIC_DIR, "site.webmanifest"),
  JSON.stringify(manifest, null, 2),
  "utf-8"
);
console.log("✓ Updated site.webmanifest with #EAD68D theme and background colors");

console.log("\n✅ All brand and favicon assets deployed successfully!");
