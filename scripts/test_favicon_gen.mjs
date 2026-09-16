import sharp from "sharp";
import fs from "fs";

const inputPath = "src/assets/cropped-hegxcorp-logo-new-web.webp";

// 1. Inspect original image trimmed
const original = sharp(inputPath);
const trimmed = original.clone().trim();
const trimmedMeta = await trimmed.metadata();
console.log("Trimmed dimensions:", trimmedMeta.width, "x", trimmedMeta.height);

// Target width for safe circular crop
const targetWidth = 400;
const targetHeight = Math.round(targetWidth * (trimmedMeta.height / trimmedMeta.width));
console.log("Scaled logo dimensions:", targetWidth, "x", targetHeight);

const resizedLogo = await trimmed
  .resize(targetWidth, targetHeight, { fit: "contain" })
  .toBuffer();

// Composite onto 512x512 white background
const base512 = sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  },
});

const final512 = await base512
  .composite([
    {
      input: resizedLogo,
      gravity: "center",
    },
  ])
  .png()
  .toBuffer();

fs.writeFileSync(
  "C:/Users/Hegxcorp4/.gemini/antigravity-ide/brain/fa016099-5c4e-4edf-b9b1-6fe486b4f75f/test_favicon_512.png",
  final512
);
console.log("Saved test_favicon_512.png");

// Also simulate Google's circular crop to verify
const circleSvg = Buffer.from(
  `<svg width="512" height="512"><circle cx="256" cy="256" r="256" fill="#fff"/></svg>`
);
const circularPreview = await sharp(final512)
  .composite([
    {
      input: circleSvg,
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();

// Composite circular preview onto Google dark mode background #202124
const googleDarkPreview = await sharp({
  create: {
    width: 600,
    height: 600,
    channels: 4,
    background: { r: 32, g: 33, b: 36, alpha: 1 },
  },
})
  .composite([
    {
      input: circularPreview,
      top: 44,
      left: 44,
    },
  ])
  .png()
  .toBuffer();

fs.writeFileSync(
  "C:/Users/Hegxcorp4/.gemini/antigravity-ide/brain/fa016099-5c4e-4edf-b9b1-6fe486b4f75f/test_google_circle_preview.png",
  googleDarkPreview
);
console.log("Saved test_google_circle_preview.png");
