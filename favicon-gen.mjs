// favicon-gen.mjs
// Generates all favicon PNG sizes from the source PNG using sharp
// Run with: node favicon-gen.mjs

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Install sharp if not present
try {
  await import('sharp');
  console.log('sharp already available');
} catch {
  console.log('Installing sharp...');
  execSync('npm install --no-save sharp', { stdio: 'inherit', cwd: __dirname });
}

const { default: sharp } = await import('sharp');

const SRC = path.join(__dirname, 'src/assets/Hegxcorp brand logo.png');
const OUT = path.join(__dirname, 'public');
const OUT_FAVICON = path.join(__dirname, 'public/favicon');

// Ensure output directories exist
if (!fs.existsSync(OUT_FAVICON)) {
  fs.mkdirSync(OUT_FAVICON, { recursive: true });
}

if (!fs.existsSync(SRC)) {
  console.error(`Error: Source file not found at ${SRC}`);
  process.exit(1);
}

const meta = await sharp(SRC).metadata();
console.log('Source image dimensions:', meta.width, 'x', meta.height, 'format:', meta.format);

const sizes = [
  { dir: OUT_FAVICON, name: 'favicon-16x16.png', size: 16 },
  { dir: OUT_FAVICON, name: 'favicon-32x32.png', size: 32 },
  { dir: OUT_FAVICON, name: 'apple-touch-icon.png', size: 180 },
  { dir: OUT_FAVICON, name: 'android-chrome-192x192.png', size: 192 },
  { dir: OUT_FAVICON, name: 'android-chrome-512x512.png', size: 512 },
];

for (const { dir, name, size } of sizes) {
  const outPath = path.join(dir, name);
  await sharp(SRC)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(outPath);
  console.log(`✓ Generated ${name} (${size}x${size})`);
}

// Also generate a favicon.ico in the public root directory
const icoPath = path.join(OUT, 'favicon.ico');
await sharp(SRC)
  .resize(32, 32)
  .png()
  .toFile(icoPath);
console.log('✓ Generated favicon.ico in public/');

console.log('\n✅ All favicon PNGs generated successfully!');
