import sharp from 'sharp';
import path from 'path';

async function createOrraPreview() {
  const dir = 'c:/Users/Hegxcorp4/hegxcorp project/hegxcorp/public/case-studies/orra';
  const width = 1600;
  const height = 900;

  // 1. Resize main banner to fit 1600x550
  const bannerBuffer = await sharp(path.join(dir, 'orra-main-banner-desktop.jpg'))
    .resize(1600, 550, { fit: 'cover', position: 'center' })
    .toBuffer();

  // 2. Prepare Category / Showcase cards
  const cardW = 345;
  const cardH = 200;
  const cardY = 675;

  const ringBuffer = await sharp(path.join(dir, 'orra-rings.jpg'))
    .resize(cardW, cardH, { fit: 'cover' })
    .toBuffer();

  const earringBuffer = await sharp(path.join(dir, 'orra-earrings.jpg'))
    .resize(cardW, cardH, { fit: 'cover' })
    .toBuffer();

  const storeBuffer = await sharp(path.join(dir, 'orra-journey.jpg'))
    .resize(cardW, cardH, { fit: 'cover' })
    .toBuffer();

  const crownBuffer = await sharp(path.join(dir, 'orra-jewellery-collection.png'))
    .resize(cardW, cardH, { fit: 'cover' })
    .toBuffer();

  // 3. Orra Logo
  const logoBuffer = await sharp(path.join(dir, 'orra-logo.png'))
    .resize({ height: 32 })
    .toBuffer();

  // 4. Header & Top Bar SVG
  const svgHeader = `
  <svg width="${width}" height="110" viewBox="0 0 ${width} 110" xmlns="http://www.w3.org/2000/svg">
    <!-- Top Utility Announcement Bar -->
    <rect x="0" y="0" width="${width}" height="32" fill="#111827"/>
    <text x="50" y="21" fill="#E2E8F0" font-family="'Inter', sans-serif" font-size="11" font-weight="600" letter-spacing="1">
      INDIA'S PREMIER DIAMOND &amp; PLATINUM DESTINATION · 95 STORES ACROSS 40 CITIES
    </text>
    <text x="1550" y="21" fill="#E2E8F0" font-family="'Inter', sans-serif" font-size="11" text-anchor="end" font-weight="600">
      5 GLOBAL DESIGN CENTRES | 100% CERTIFIED NATURAL DIAMONDS
    </text>

    <!-- Main Navigation Bar -->
    <rect x="0" y="32" width="${width}" height="78" fill="#FFFFFF"/>
    <line x1="0" y1="110" x2="${width}" y2="110" stroke="#E2E8F0" stroke-width="1"/>

    <!-- Nav Links -->
    <g font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#2D3748" letter-spacing="1">
      <text x="240" y="76">RINGS</text>
      <text x="320" y="76">EARRINGS</text>
      <text x="430" y="76">NECKLACES</text>
      <text x="550" y="76">BRACELETS</text>
      <text x="670" y="76">SOLITAIRES</text>
      <text x="790" y="76" fill="#B7791F">CROWN STAR™</text>
      <text x="940" y="76">STORE LOCATOR</text>
    </g>

    <!-- Search & Action icons -->
    <rect x="1200" y="52" width="240" height="38" rx="19" fill="#F7FAFC" stroke="#E2E8F0" stroke-width="1"/>
    <text x="1230" y="75" fill="#A0AEC0" font-family="'Inter', sans-serif" font-size="12">Search jewellery, solitaires...</text>
    
    <circle cx="1475" cy="71" r="14" fill="#F7FAFC" stroke="#CBD5E0" stroke-width="1"/>
    <circle cx="1515" cy="71" r="14" fill="#F7FAFC" stroke="#CBD5E0" stroke-width="1"/>
    <circle cx="1555" cy="71" r="14" fill="#F7FAFC" stroke="#CBD5E0" stroke-width="1"/>
  </svg>
  `;

  // 5. Card Labels SVG
  const svgBadgesAndLabels = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">

    <!-- Card 1 Label Overlay -->
    <rect x="45" y="825" width="${cardW}" height="50" rx="4" fill="#000000" fill-opacity="0.8"/>
    <text x="60" y="847" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="13" font-weight="700">Diamond Rings Collection</text>
    <text x="60" y="863" fill="#D69E2E" font-family="'Inter', sans-serif" font-size="10" font-weight="600">EXPLORE DESIGNS →</text>

    <!-- Card 2 Label Overlay -->
    <rect x="435" y="825" width="${cardW}" height="50" rx="4" fill="#000000" fill-opacity="0.8"/>
    <text x="450" y="847" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="13" font-weight="700">Solitaire Earrings &amp; Drops</text>
    <text x="450" y="863" fill="#D69E2E" font-family="'Inter', sans-serif" font-size="10" font-weight="600">VIEW COLLECTION →</text>

    <!-- Card 3 Label Overlay -->
    <rect x="825" y="825" width="${cardW}" height="50" rx="4" fill="#000000" fill-opacity="0.8"/>
    <text x="840" y="847" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="13" font-weight="700">95 Boutiques Across 40 Cities</text>
    <text x="840" y="863" fill="#D69E2E" font-family="'Inter', sans-serif" font-size="10" font-weight="600">FIND NEAREST STORE →</text>

    <!-- Card 4 Label Overlay -->
    <rect x="1215" y="825" width="${cardW}" height="50" rx="4" fill="#000000" fill-opacity="0.8"/>
    <text x="1230" y="847" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="13" font-weight="700">Fine Jewellery Showcase</text>
    <text x="1230" y="863" fill="#D69E2E" font-family="'Inter', sans-serif" font-size="10" font-weight="600">INNOVATION &amp; CRAFT →</text>
  </svg>
  `;

  // Composite in clean layers: background -> banner & cards -> labels & header -> logo
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 250, g: 247, b: 242, alpha: 1 }
    }
  })
  .composite([
    { input: bannerBuffer, top: 110, left: 0 },
    { input: ringBuffer, top: cardY, left: 45 },
    { input: earringBuffer, top: cardY, left: 435 },
    { input: storeBuffer, top: cardY, left: 825 },
    { input: crownBuffer, top: cardY, left: 1215 },
    { input: Buffer.from(svgBadgesAndLabels), top: 0, left: 0 },
    { input: Buffer.from(svgHeader), top: 0, left: 0 },
    { input: logoBuffer, top: 55, left: 45 }
  ])
  .png({ quality: 95 })
  .toFile(path.join(dir, 'orra-hero-preview.png'));

  console.log('Successfully created perfected orra-hero-preview.png (1600x900)!');
}

createOrraPreview().catch(console.error);
