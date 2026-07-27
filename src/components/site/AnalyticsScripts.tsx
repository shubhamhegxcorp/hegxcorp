const gtmId = import.meta.env.VITE_GTM_ID;
const ga4Id = import.meta.env.VITE_GA4_ID;
const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID;
const metaPixelId = import.meta.env.VITE_META_PIXEL_ID;

function createGoogleInitScript() {
  const tagIds = [ga4Id, googleAdsId].filter(Boolean);

  if (!tagIds.length) return "";

  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    ${tagIds.map((id) => `gtag('config', '${id}');`).join("\n")}
  `;
}

function createMetaPixelScript() {
  if (!metaPixelId) return "";

  return `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${metaPixelId}');
    fbq('track', 'PageView');
  `;
}

export function AnalyticsScripts() {
  const googleInitScript = createGoogleInitScript();
  const googleTagId = ga4Id || googleAdsId;
  const metaPixelScript = createMetaPixelScript();

  return (
    <>
      {gtmId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {googleTagId && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} />
      )}
      {googleInitScript && <script dangerouslySetInnerHTML={{ __html: googleInitScript }} />}
      {metaPixelScript && <script dangerouslySetInnerHTML={{ __html: metaPixelScript }} />}
    </>
  );
}
