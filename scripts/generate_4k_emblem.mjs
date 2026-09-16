import sharp from "sharp";
import fs from "fs";

const SRC = "src/assets/cropped-hegxcorp-logo-new-web.webp";

// Extract clean original elements
const rawMark = await sharp(SRC)
  .extract({ left: 228, top: 9, width: 77, height: 255 })
  .png()
  .toBuffer();
const markBuffer = await sharp(rawMark).trim().png().toBuffer();
const markMeta = await sharp(markBuffer).metadata();

const rawWordmark = await sharp(SRC)
  .extract({ left: 11, top: 9, width: 604, height: 255 })
  .png()
  .toBuffer();
const wordmarkBuffer = await sharp(rawWordmark).trim().png().toBuffer();

const rawTagline = await sharp(SRC)
  .extract({ left: 30, top: 290, width: 565, height: 25 })
  .png()
  .toBuffer();
const taglineBuffer = await sharp(rawTagline).trim().png().toBuffer();
const taglineMeta = await sharp(taglineBuffer).metadata();

// Turn non-transparent pixels into pure black (#000000)
async function toPureBlack(buffer) {
  const { data, info } = await sharp(buffer).raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += info.channels) {
    data[i] = 0;
    data[i + 1] = 0;
    data[i + 2] = 0;
  }
  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
    .png()
    .toBuffer();
}

const blackMark = await toPureBlack(markBuffer);
const blackWordmark = await toPureBlack(wordmarkBuffer);
const blackTagline = await toPureBlack(taglineBuffer);

// Canvas 4096 x 4096 (4K Ultra HD)
const CANVAS = 4096;
const BG_COLOR = { r: 234, g: 214, b: 141, alpha: 1 }; // #EAD68D

// Exact proportions matching user's image (225x225):
// Mark: width = 348, height = 1129
// Wordmark: width = 1110, height = 273
// Tagline: width = 1001, height = Math.round(1001 * (19 / 551)) = 35 px
const markW = 348;
const markH = 1129;

const wordmarkW = 1110;
const wordmarkH = 273;

const taglineW = 1001;
const taglineH = Math.round(taglineW * (taglineMeta.height / taglineMeta.width)); // 35 px

console.log("Computed sizes:");
console.log("- Mark:", markW, "x", markH);
console.log("- Wordmark:", wordmarkW, "x", wordmarkH);
console.log("- Tagline:", taglineW, "x", taglineH);

const resizedMark = await sharp(blackMark)
  .resize(markW, markH, { kernel: "lanczos3" })
  .png()
  .toBuffer();

const resizedWordmark = await sharp(blackWordmark)
  .resize(wordmarkW, wordmarkH, { fit: "fill", kernel: "lanczos3" })
  .png()
  .toBuffer();

const resizedTagline = await sharp(blackTagline)
  .resize(taglineW, taglineH, { kernel: "lanczos3" })
  .png()
  .toBuffer();

// Positions
const markTop = 1056;
const markLeft = Math.round((CANVAS - markW) / 2);

const wordmarkTop = 2294; // markTop + markH + 109 gap
const wordmarkLeft = Math.round((CANVAS - wordmarkW) / 2);

const taglineTop = 2676; // wordmarkTop + wordmarkH + 109 gap
const taglineLeft = Math.round((CANVAS - taglineW) / 2);

const master4K = await sharp({
  create: {
    width: CANVAS,
    height: CANVAS,
    channels: 4,
    background: BG_COLOR,
  },
})
  .composite([
    { input: resizedMark, top: markTop, left: markLeft },
    { input: resizedWordmark, top: wordmarkTop, left: wordmarkLeft },
    { input: resizedTagline, top: taglineTop, left: taglineLeft },
  ])
  .png()
  .toBuffer();

// Save 4K PNG master files
fs.writeFileSync("src/assets/hegxcorp-4k-emblem.png", master4K);
fs.writeFileSync("public/hegxcorp-4k-emblem.png", master4K);

// Save 4K WebP master files
const webp4K = await sharp(master4K).webp({ quality: 95 }).toBuffer();
fs.writeFileSync("public/hegxcorp-4k-emblem.webp", webp4K);
fs.writeFileSync("src/assets/hegxcorp-4k-emblem.webp", webp4K);

// Also replace "Hegxcorp brand logo.png" in src/assets
fs.writeFileSync("src/assets/Hegxcorp brand logo.png", master4K);

// Save side-by-side comparison with user uploaded image
const preview600 = await sharp(master4K).resize(400, 400).png().toBuffer();
const userImg400 = await sharp("C:/Users/Hegxcorp4/.gemini/antigravity-ide/brain/fa016099-5c4e-4edf-b9b1-6fe486b4f75f/.user_uploaded/media_1788865431239.png")
  .resize(400, 400, { kernel: "nearest" })
  .png()
  .toBuffer();

const comparison = await sharp({
  create: {
    width: 840,
    height: 440,
    channels: 4,
    background: { r: 32, g: 33, b: 36, alpha: 1 },
  },
})
  .composite([
    { input: userImg400, top: 20, left: 15 },
    { input: preview600, top: 20, left: 425 },
  ])
  .png()
  .toBuffer();

fs.writeFileSync(
  "C:/Users/Hegxcorp4/.gemini/antigravity-ide/brain/fa016099-5c4e-4edf-b9b1-6fe486b4f75f/test_comparison_side_by_side.png",
  comparison
);

// Save Google Search Circle preview simulation
const circleSvg = Buffer.from(
  `<svg width="400" height="400"><circle cx="200" cy="200" r="200" fill="#fff"/></svg>`
);
const circular = await sharp(preview600)
  .composite([{ input: circleSvg, blend: "dest-in" }])
  .png()
  .toBuffer();

const googleSnippetPreview = await sharp({
  create: {
    width: 500,
    height: 500,
    channels: 4,
    background: { r: 32, g: 33, b: 36, alpha: 1 },
  },
})
  .composite([{ input: circular, top: 50, left: 50 }])
  .png()
  .toBuffer();

fs.writeFileSync(
  "C:/Users/Hegxcorp4/.gemini/antigravity-ide/brain/fa016099-5c4e-4edf-b9b1-6fe486b4f75f/test_4k_google_circle_preview.png",
  googleSnippetPreview
);

console.log("✓ Saved 4K master emblem and side-by-side comparison successfully!");
