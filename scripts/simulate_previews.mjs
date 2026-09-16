import sharp from "sharp";
import fs from "fs";

const inputPath = "src/assets/cropped-hegxcorp-logo-new-web.webp";

const original = sharp(inputPath);
const trimmed = original.clone().trim();
const trimmedMeta = await trimmed.metadata();

// 1. Generate base 512x512 with white background
// Logo scaled so width is 400 (aspect ratio preserved)
const targetWidth = 400;
const targetHeight = Math.round(targetWidth * (trimmedMeta.height / trimmedMeta.width));
const resizedLogo = await trimmed
  .resize(targetWidth, targetHeight, { fit: "contain" })
  .toBuffer();

const icon512 = await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  },
})
  .composite([
    {
      input: resizedLogo,
      gravity: "center",
    },
  ])
  .png()
  .toBuffer();

// Simulate Browser Tab (32x32 and 16x16) on dark theme tab (#202124)
const icon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
const icon16 = await sharp(icon512).resize(16, 16).png().toBuffer();

// Simulate Chrome Shortcut Tile (user's screenshot 2)
// User's screenshot shows a rounded rectangle tile (~140x140 with ~24px radius) on dark background #1a1d24
const tileMaskSvg = Buffer.from(
  `<svg width="180" height="180"><rect width="180" height="180" rx="36" fill="#fff"/></svg>`
);
const tileContent = await sharp(icon512)
  .resize(180, 180)
  .composite([{ input: tileMaskSvg, blend: "dest-in" }])
  .png()
  .toBuffer();

const tilePreview = await sharp({
  create: {
    width: 320,
    height: 320,
    channels: 4,
    background: { r: 26, g: 29, b: 36, alpha: 1 },
  },
})
  .composite([
    {
      input: tileContent,
      top: 70,
      left: 70,
    },
  ])
  .png()
  .toBuffer();

fs.writeFileSync(
  "C:/Users/Hegxcorp4/.gemini/antigravity-ide/brain/fa016099-5c4e-4edf-b9b1-6fe486b4f75f/test_tile_preview.png",
  tilePreview
);

console.log("Saved test_tile_preview.png");
