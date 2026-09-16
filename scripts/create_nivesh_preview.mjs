import sharp from 'sharp';
import path from 'path';

async function createNiveshPreview() {
  const dir = 'c:/Users/Hegxcorp4/hegxcorp project/hegxcorp/public/case-studies/nivesh';
  const width = 1600;
  const height = 900;

  // 1. Prepare Dashboard Mockup
  const laptopBuf = await sharp(path.join(dir, 'dashboard_webImg-DP8Jk-Hx.jpeg'))
    .trim()
    .resize(920, 540, { fit: 'contain', background: { r: 248, g: 250, b: 252, alpha: 0 } })
    .toBuffer();

  // 2. Prepare Nivesh Logo
  const logoBuf = await sharp(path.join(dir, 'nivesh-logo.png'))
    .resize({ height: 34 })
    .toBuffer();

  // 3. Product vertical cards for bottom strip
  const cardW = 345;
  const cardH = 190;
  const cardY = 680;

  const mfBuf = await sharp(path.join(dir, 'MutualFunds-IbZ2MoGH.jpeg'))
    .resize(cardW, cardH, { fit: 'cover' })
    .toBuffer();

  const fdBuf = await sharp(path.join(dir, 'FD-jvl7Yd-a.jpeg'))
    .resize(cardW, cardH, { fit: 'cover' })
    .toBuffer();

  const bondBuf = await sharp(path.join(dir, 'Bonds-DhPtktF_.png'))
    .resize(cardW, cardH, { fit: 'cover' })
    .toBuffer();

  const awardBuf = await sharp(path.join(dir, 'award9-CJnrru8U.jpeg'))
    .resize(cardW, cardH, { fit: 'cover' })
    .toBuffer();

  // 4. Header SVG
  const svgHeader = `
  <svg width="${width}" height="110" viewBox="0 0 ${width} 110" xmlns="http://www.w3.org/2000/svg">
    <!-- Top Utility Bar -->
    <rect x="0" y="0" width="${width}" height="32" fill="#0A192F"/>
    <text x="50" y="21" fill="#E2E8F0" font-family="'Inter', sans-serif" font-size="11" font-weight="600" letter-spacing="1">
      DIGITAL-FIRST WEALTH PLATFORM · SERVING INVESTORS &amp; DISTRIBUTORS ACROSS INDIA
    </text>
    <text x="1550" y="21" fill="#E2E8F0" font-family="'Inter', sans-serif" font-size="11" text-anchor="end" font-weight="600">
      AMFI REGISTERED · BACKED BY LETVENTURE &amp; RAJAN ANANDAN
    </text>

    <!-- Main Navigation Bar -->
    <rect x="0" y="32" width="${width}" height="78" fill="#FFFFFF"/>
    <line x1="0" y1="110" x2="${width}" y2="110" stroke="#E2E8F0" stroke-width="1"/>

    <!-- Nav Links -->
    <g font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#2D3748">
      <text x="240" y="76">MUTUAL FUNDS</text>
      <text x="380" y="76">FIXED DEPOSITS</text>
      <text x="525" y="76">CORPORATE BONDS</text>
      <text x="695" y="76">NPS &amp; GOLD</text>
      <text x="815" y="76" fill="#E53E3E">CALCULATORS</text>
      <text x="945" y="76">FOR PARTNERS</text>
    </g>

    <!-- CTAs on Right -->
    <rect x="1260" y="52" width="130" height="38" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
    <text x="1325" y="76" fill="#2D3748" font-family="'Inter', sans-serif" font-size="12" font-weight="600" text-anchor="middle">Partner Login</text>

    <rect x="1410" y="52" width="140" height="38" rx="8" fill="#E53E3E"/>
    <text x="1480" y="76" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Start Investing</text>
  </svg>
  `;

  // 5. Floating Badges and Card Labels SVG
  const svgBadgesAndLabels = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <!-- Floating Metric Badge 1 (Top Left) -->
    <rect x="50" y="150" width="310" height="135" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"/>
    <text x="75" y="185" fill="#E53E3E" font-family="'Inter', sans-serif" font-size="11" font-weight="800" letter-spacing="1.5">
      ORGANIC GROWTH VELOCITY
    </text>
    <text x="75" y="228" fill="#0F172A" font-family="'Space Grotesk', sans-serif" font-size="36" font-weight="bold">
      +700%
    </text>
    <text x="75" y="258" fill="#64748B" font-family="'Inter', sans-serif" font-size="12" font-weight="600">
      Organic Search Traffic in 6 Months
    </text>

    <!-- Floating Metric Badge 2 (Tier 2/3 Reach - Bottom Left) -->
    <rect x="50" y="320" width="310" height="135" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"/>
    <text x="75" y="355" fill="#0D9488" font-family="'Inter', sans-serif" font-size="11" font-weight="800" letter-spacing="1.5">
      EXPANDING MARKET FOOTPRINT
    </text>
    <text x="75" y="398" fill="#0F172A" font-family="'Space Grotesk', sans-serif" font-size="32" font-weight="bold">
      Tier-2 &amp; Tier-3
    </text>
    <text x="75" y="428" fill="#64748B" font-family="'Inter', sans-serif" font-size="12" font-weight="600">
      Pan-India Mutual Fund Penetration
    </text>

    <!-- Floating Metric Badge 3 (Right - SEO Architecture) -->
    <rect x="1240" y="160" width="310" height="140" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"/>
    <text x="1265" y="195" fill="#2563EB" font-family="'Inter', sans-serif" font-size="11" font-weight="800" letter-spacing="1.5">
      TECHNICAL SEO ENGINE
    </text>
    <text x="1265" y="235" fill="#0F172A" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="bold">
      Content Clusters
    </text>
    <text x="1265" y="265" fill="#64748B" font-family="'Inter', sans-serif" font-size="12" font-weight="600">
      Instant Indexing &amp; Calculators
    </text>

    <!-- Floating Metric Badge 4 (Right - B2B2C Platform) -->
    <rect x="1240" y="330" width="310" height="140" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"/>
    <text x="1265" y="365" fill="#D97706" font-family="'Inter', sans-serif" font-size="11" font-weight="800" letter-spacing="1.5">
      B2B2C WEALTH STACK
    </text>
    <text x="1265" y="405" fill="#0F172A" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="bold">
      Distributors &amp; RIA
    </text>
    <text x="1265" y="435" fill="#64748B" font-family="'Inter', sans-serif" font-size="12" font-weight="600">
      Wealthzi RIA Acquisition (2023)
    </text>

    <!-- Bottom Card Labels -->
    <rect x="45" y="820" width="${cardW}" height="50" rx="4" fill="#0F172A" fill-opacity="0.85"/>
    <text x="60" y="842" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="13" font-weight="700">Curated Mutual Funds</text>
    <text x="60" y="858" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="10" font-weight="600">TAXONOMY CLUSTERS →</text>

    <rect x="435" y="820" width="${cardW}" height="50" rx="4" fill="#0F172A" fill-opacity="0.85"/>
    <text x="450" y="842" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="13" font-weight="700">High-Yield Fixed Deposits</text>
    <text x="450" y="858" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="10" font-weight="600">COMMERCIAL CONVERSIONS →</text>

    <rect x="825" y="820" width="${cardW}" height="50" rx="4" fill="#0F172A" fill-opacity="0.85"/>
    <text x="840" y="842" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="13" font-weight="700">Corporate Bonds &amp; Yields</text>
    <text x="840" y="858" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="10" font-weight="600">PRODUCT LANDING PAGES →</text>

    <rect x="1215" y="820" width="${cardW}" height="50" rx="4" fill="#0F172A" fill-opacity="0.85"/>
    <text x="1230" y="842" fill="#FFFFFF" font-family="'Inter', sans-serif" font-size="13" font-weight="700">Fintech Excellence Awards</text>
    <text x="1230" y="858" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="10" font-weight="600">INDUSTRY RECOGNITION →</text>
  </svg>
  `;

  // Composite layers cleanly
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 248, g: 250, b: 252, alpha: 1 }
    }
  })
  .composite([
    // Laptop Dashboard in Center
    { input: laptopBuf, top: 120, left: 340 },
    // Bottom 4 product/authority cards
    { input: mfBuf, top: cardY, left: 45 },
    { input: fdBuf, top: cardY, left: 435 },
    { input: bondBuf, top: cardY, left: 825 },
    { input: awardBuf, top: cardY, left: 1215 },
    // SVG Badges and Labels
    { input: Buffer.from(svgBadgesAndLabels), top: 0, left: 0 },
    // Header Bar on top
    { input: Buffer.from(svgHeader), top: 0, left: 0 },
    // Logo in Header
    { input: logoBuf, top: 54, left: 45 }
  ])
  .png({ quality: 95 })
  .toFile(path.join(dir, 'nivesh-hero-preview.png'));

  console.log('Successfully created refined nivesh-hero-preview.png (1600x900)!');
}

createNiveshPreview().catch(console.error);
