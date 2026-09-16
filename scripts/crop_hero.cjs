const sharp = require('sharp');
const path = require('path');

async function processImages() {
  const input = 'public/case-studies/tarkashastra/tarkashastra-hero-preview.png';

  // 1. Standard 16:9 desktop hero view (top 1920x1080)
  await sharp(input)
    .extract({ left: 0, top: 0, width: 1920, height: 1080 })
    .png({ quality: 100 })
    .toFile('public/case-studies/tarkashastra/tarkashastra-hero-1080.png');
  console.log('Saved tarkashastra-hero-1080.png (1920x1080)');

  // 2. Focused Hero banner view (top 1920x860, tightly focused on the blue banner and header)
  await sharp(input)
    .extract({ left: 0, top: 0, width: 1920, height: 860 })
    .png({ quality: 100 })
    .toFile('public/case-studies/tarkashastra/tarkashastra-hero-banner-focused.png');
  console.log('Saved tarkashastra-hero-banner-focused.png (1920x860)');

  // 4. Ultra-clarity centered 16:9 crop (1536x864, perfectly framed on logo, headline & topper cards)
  await sharp(input)
    .extract({ left: 192, top: 0, width: 1536, height: 864 })
    .png({ quality: 100 })
    .toFile('public/case-studies/tarkashastra/tarkashastra-hero-clarity-16x9.png');
  console.log('Saved tarkashastra-hero-clarity-16x9.png');

  // 5. Close-up high-impact banner crop (1400x788, centered on the headline, alumni cards, and CTAs)
  await sharp(input)
    .extract({ left: 260, top: 0, width: 1400, height: 788 })
    .png({ quality: 100 })
    .toFile('public/case-studies/tarkashastra/tarkashastra-hero-closeup.png');
  console.log('Saved tarkashastra-hero-closeup.png');
}

processImages().catch(console.error);
