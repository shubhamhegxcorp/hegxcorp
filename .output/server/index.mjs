globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"18b-oJdMEuBRzmPCjgWsuTyVM5pL3sY"',
    "mtime": "2026-06-13T07:17:18.857Z",
    "size": 395,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"79-WsOSh+X7rjiYX+apx8QHadWz6yo"',
    "mtime": "2026-08-31T06:14:29.744Z",
    "size": 121,
    "path": "../public/robots.txt"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": '"188-b44fHHXmy851luNlb3EjFx++Nkg"',
    "mtime": "2026-06-13T07:17:23.648Z",
    "size": 392,
    "path": "../public/site.webmanifest"
  },
  "/cropped-hegxcorp-logo-new-web.webp": {
    "type": "image/webp",
    "etag": '"3114-kHdSM34/6cgixrqh02l5DrrA/Hs"',
    "mtime": "2026-06-10T06:32:50.774Z",
    "size": 12564,
    "path": "../public/cropped-hegxcorp-logo-new-web.webp"
  },
  "/favicon/apple-touch-icon.png": {
    "type": "image/png",
    "etag": '"dbe-Q1uwnenEkGZgMgpAHDr2o+n6sLU"',
    "mtime": "2026-06-13T07:17:18.795Z",
    "size": 3518,
    "path": "../public/favicon/apple-touch-icon.png"
  },
  "/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": '"f1-U4mVUEQuwHWfTbLV8y7pM2iPaHM"',
    "mtime": "2026-06-13T07:17:18.756Z",
    "size": 241,
    "path": "../public/favicon/favicon-16x16.png"
  },
  "/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": '"18b-oJdMEuBRzmPCjgWsuTyVM5pL3sY"',
    "mtime": "2026-06-13T07:17:18.772Z",
    "size": 395,
    "path": "../public/favicon/favicon-32x32.png"
  },
  "/favicon/favicon.svg": {
    "type": "image/svg+xml",
    "etag": '"24d-dHOMeZnmfZ+3cLEIApF7+PKwKCE"',
    "mtime": "2026-06-13T07:02:58.930Z",
    "size": 589,
    "path": "../public/favicon/favicon.svg"
  },
  "/placeholders/gpen-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"4b8-vtJ/D/H13wvR7Qx35KtGXTntrXs"',
    "mtime": "2026-09-02T12:49:01.552Z",
    "size": 1208,
    "path": "../public/placeholders/gpen-preview.svg"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": '"e9e-0i8bdrdmQQWzde0O3LI246SwLKU"',
    "mtime": "2026-06-13T07:17:18.818Z",
    "size": 3742,
    "path": "../public/favicon/android-chrome-192x192.png"
  },
  "/placeholders/learning-tree-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"452-3eDOUJd0mGX18vUV0xVIWUQZYSU"',
    "mtime": "2026-07-21T10:20:14.852Z",
    "size": 1106,
    "path": "../public/placeholders/learning-tree-preview.svg"
  },
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": '"d21c-QhHvfuhmvwYbM/6Itpb/IvO7b4w"',
    "mtime": "2026-06-13T07:17:18.840Z",
    "size": 53788,
    "path": "../public/favicon/android-chrome-512x512.png"
  },
  "/og-image.webp": {
    "type": "image/webp",
    "etag": '"3114-kHdSM34/6cgixrqh02l5DrrA/Hs"',
    "mtime": "2026-06-10T06:32:50.774Z",
    "size": 12564,
    "path": "../public/og-image.webp"
  },
  "/assets/12-5-Dpuj0Kw4.webp": {
    "type": "image/webp",
    "etag": '"1732-F9z0gJsJ85C3exoa12Utft4OKOI"',
    "mtime": "2026-09-02T13:03:33.080Z",
    "size": 5938,
    "path": "../public/assets/12-5-Dpuj0Kw4.webp"
  },
  "/assets/13-3-2ehNKuf3.webp": {
    "type": "image/webp",
    "etag": '"1282-kgbdPAs8VPeed5ttLLESIZ8GcMk"',
    "mtime": "2026-09-02T13:03:33.077Z",
    "size": 4738,
    "path": "../public/assets/13-3-2ehNKuf3.webp"
  },
  "/assets/15-D1G8ZCM3.webp": {
    "type": "image/webp",
    "etag": '"2088-+xJGAfBk7st6XefXlB6gO8qAvh8"',
    "mtime": "2026-09-02T13:03:33.083Z",
    "size": 8328,
    "path": "../public/assets/15-D1G8ZCM3.webp"
  },
  "/assets/16-DWwC_Xc-.webp": {
    "type": "image/webp",
    "etag": '"1318-u2OIKNEOQAJiRcGSitqrOEToD74"',
    "mtime": "2026-09-02T13:03:33.076Z",
    "size": 4888,
    "path": "../public/assets/16-DWwC_Xc-.webp"
  },
  "/assets/2-4-RSujknJL.webp": {
    "type": "image/webp",
    "etag": '"12fa-Jxvq0I5PZXcAwCv3KuaiShCiNEw"',
    "mtime": "2026-09-02T13:03:33.075Z",
    "size": 4858,
    "path": "../public/assets/2-4-RSujknJL.webp"
  },
  "/assets/20-6SQeXImn.webp": {
    "type": "image/webp",
    "etag": '"363a-iteKDUksEk4UFYBs8BB+HLtvFwY"',
    "mtime": "2026-09-02T13:03:33.083Z",
    "size": 13882,
    "path": "../public/assets/20-6SQeXImn.webp"
  },
  "/assets/22-6eurBCOs.webp": {
    "type": "image/webp",
    "etag": '"12f6-85M7Oc8wDXR7M2UQ78NmQZ/uh8U"',
    "mtime": "2026-09-02T13:03:33.083Z",
    "size": 4854,
    "path": "../public/assets/22-6eurBCOs.webp"
  },
  "/assets/9-4-C8GHvnEm.webp": {
    "type": "image/webp",
    "etag": '"118e-U60Yz6Ny0BosidbgtIDUDVaRGxg"',
    "mtime": "2026-09-02T13:03:33.075Z",
    "size": 4494,
    "path": "../public/assets/9-4-C8GHvnEm.webp"
  },
  "/placeholders/orra-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"447-OumPSS+w93Ha3iTA8p9sd7w5raY"',
    "mtime": "2026-07-21T10:20:21.151Z",
    "size": 1095,
    "path": "../public/placeholders/orra-preview.svg"
  },
  "/placeholders/tarkashastra-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"4af-ON1AheMW2tN6mXJVH1+ZypqmtzI"',
    "mtime": "2026-07-21T10:20:16.156Z",
    "size": 1199,
    "path": "../public/placeholders/tarkashastra-preview.svg"
  },
  "/placeholders/rollink-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"4dd-+gxKsWtpHLrrK1HQE+G4S6v25Pk"',
    "mtime": "2026-09-02T12:49:08.163Z",
    "size": 1245,
    "path": "../public/placeholders/rollink-preview.svg"
  },
  "/assets/about-m24wqQaa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"95fe-MCBS9djRQg/7OlQlO1OuFGXf9zk"',
    "mtime": "2026-09-02T13:03:33.138Z",
    "size": 38398,
    "path": "../public/assets/about-m24wqQaa.js"
  },
  "/assets/admin.website-content.contact-PxLIOFnn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2de5-iVK7hxUWReI+2Dw7qwAVpgv3lww"',
    "mtime": "2026-09-02T13:03:33.138Z",
    "size": 11749,
    "path": "../public/assets/admin.website-content.contact-PxLIOFnn.js"
  },
  "/assets/admin.website-content.about-Dz_hxTlU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"749d-5uBO0KIgQzgAZTC10/xraXU7rCo"',
    "mtime": "2026-09-02T13:03:33.139Z",
    "size": 29853,
    "path": "../public/assets/admin.website-content.about-Dz_hxTlU.js"
  },
  "/assets/admin.website-content.home-DZsZRCp-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13e43-sSBZCqbqHL8lHwXBwZ+kXydWrr8"',
    "mtime": "2026-09-02T13:03:33.138Z",
    "size": 81475,
    "path": "../public/assets/admin.website-content.home-DZsZRCp-.js"
  },
  "/assets/arrow-up-GeuI0kYT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"118-md9opMOrH7NA/6amn1NlOSpj6ZY"',
    "mtime": "2026-09-02T13:03:33.138Z",
    "size": 280,
    "path": "../public/assets/arrow-up-GeuI0kYT.js"
  },
  "/assets/badge-check-BK-LQPRQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"138-V1r6c4xgshSlMNcZ6bcS7YiMj8U"',
    "mtime": "2026-09-02T13:03:33.134Z",
    "size": 312,
    "path": "../public/assets/badge-check-BK-LQPRQ.js"
  },
  "/assets/blog.index-DdNc5qBA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"41dd-gOdvcdMwooOzZx9+WcUuB1vcT8Q"',
    "mtime": "2026-09-02T13:03:33.137Z",
    "size": 16861,
    "path": "../public/assets/blog.index-DdNc5qBA.js"
  },
  "/assets/blog._slug-Dvfvtdrn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79f5-egDQ0R9MaHtH3T9Ufot5OiFi4qg"',
    "mtime": "2026-09-02T13:03:33.136Z",
    "size": 31221,
    "path": "../public/assets/blog._slug-Dvfvtdrn.js"
  },
  "/assets/BrowserPreview-N13zYt4V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d94-Gowus2X/ZvyWykIU9I26PFdxfWk"',
    "mtime": "2026-09-02T13:03:33.138Z",
    "size": 3476,
    "path": "../public/assets/BrowserPreview-N13zYt4V.js"
  },
  "/assets/case-studies.index-DJ3hdf6e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"54eb-DV07Kt3+kEOY3sUDOBI40MluOaE"',
    "mtime": "2026-09-02T13:03:33.135Z",
    "size": 21739,
    "path": "../public/assets/case-studies.index-DJ3hdf6e.js"
  },
  "/assets/admin.website-content.services-ezhc_2XV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"34c5-tzUp0M/fHmAZ+DsVs1lw3vdGMLw"',
    "mtime": "2026-09-02T13:03:33.139Z",
    "size": 13509,
    "path": "../public/assets/admin.website-content.services-ezhc_2XV.js"
  },
  "/assets/cookie-policy-DVB-4Mkm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"709-gmHADoDPVPxWCPZFU86TLc50zKY"',
    "mtime": "2026-09-02T13:03:33.126Z",
    "size": 1801,
    "path": "../public/assets/cookie-policy-DVB-4Mkm.js"
  },
  "/assets/cropped-hegxcorp-logo-new-web-jmKFR4Um.webp": {
    "type": "image/webp",
    "etag": '"3114-kHdSM34/6cgixrqh02l5DrrA/Hs"',
    "mtime": "2026-09-02T13:03:33.075Z",
    "size": 12564,
    "path": "../public/assets/cropped-hegxcorp-logo-new-web-jmKFR4Um.webp"
  },
  "/assets/contact-zWhiwYum.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"40fb-IXqMeP9lfUHNEVWraqi2m4Fu/iU"',
    "mtime": "2026-09-02T13:03:33.126Z",
    "size": 16635,
    "path": "../public/assets/contact-zWhiwYum.js"
  },
  "/assets/case-studies._slug-DR-G6aaC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d6e-48nHM6e3myeeRXV1Tv/2so0zLho"',
    "mtime": "2026-09-02T13:03:33.136Z",
    "size": 11630,
    "path": "../public/assets/case-studies._slug-DR-G6aaC.js"
  },
  "/assets/free-growth-audit-wiL2slfk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b9e-uEPQ+5/Uj3V7z2cfqg0I80/OPeA"',
    "mtime": "2026-09-02T13:03:33.124Z",
    "size": 11166,
    "path": "../public/assets/free-growth-audit-wiL2slfk.js"
  },
  "/assets/layout-dashboard-CooK0SBZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"160-NCG3sKPIYXy1XsAP1ptpXvFlrXU"',
    "mtime": "2026-09-02T13:03:33.133Z",
    "size": 352,
    "path": "../public/assets/layout-dashboard-CooK0SBZ.js"
  },
  "/assets/index-DwGjmE2J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27d08-Iv9GjMJ7sJjEdn88IZypcyhBkSM"',
    "mtime": "2026-09-02T13:03:33.133Z",
    "size": 163080,
    "path": "../public/assets/index-DwGjmE2J.js"
  },
  "/assets/lightbulb-BD0907ZU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11a-hkoGkwa9YIbu2e1pmwIIXI0xsW0"',
    "mtime": "2026-09-02T13:03:33.136Z",
    "size": 282,
    "path": "../public/assets/lightbulb-BD0907ZU.js"
  },
  "/assets/index-xgxdCp6f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11198-9ubDNODqOLALvTTPNnR3eEdAXgI"',
    "mtime": "2026-09-02T13:03:33.136Z",
    "size": 70040,
    "path": "../public/assets/index-xgxdCp6f.js"
  },
  "/assets/LegalPage-Ct8YpZbC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b9a-thSN3bma5UDCUhGY2qCPRgOuZqs"',
    "mtime": "2026-09-02T13:03:33.125Z",
    "size": 2970,
    "path": "../public/assets/LegalPage-Ct8YpZbC.js"
  },
  "/assets/core--eSAZnfi.png": {
    "type": "image/png",
    "etag": '"f25b4-3YQmkmmuX1IDRlXjRBFj+sVhv5k"',
    "mtime": "2026-09-02T13:03:33.155Z",
    "size": 992692,
    "path": "../public/assets/core--eSAZnfi.png"
  },
  "/assets/index-BAtK_H9_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14e78a-ofa94TXRXJapxl67C2fzvu+ymuc"',
    "mtime": "2026-09-02T13:03:33.175Z",
    "size": 1369994,
    "path": "../public/assets/index-BAtK_H9_.js"
  },
  "/assets/compound-DSk0rL_0.png": {
    "type": "image/png",
    "etag": '"1c6b9c-HmTjPWJbIc+41u95hclEZ0Z/ba4"',
    "mtime": "2026-09-02T13:03:33.185Z",
    "size": 1862556,
    "path": "../public/assets/compound-DSk0rL_0.png"
  },
  "/assets/How AI Search Changes Rankings-CVbelTlb.png": {
    "type": "image/png",
    "etag": '"1ee6cb-aNOUETzcNslJ5PaS3t0z0YoBjSw"',
    "mtime": "2026-09-02T13:03:33.185Z",
    "size": 2025163,
    "path": "../public/assets/How AI Search Changes Rankings-CVbelTlb.png"
  },
  "/assets/maximizing-DIDylDLW.png": {
    "type": "image/png",
    "etag": '"1c9141-C/vjQ5saKx9BXndmwgzNK9ELrq4"',
    "mtime": "2026-09-02T13:03:33.185Z",
    "size": 1872193,
    "path": "../public/assets/maximizing-DIDylDLW.png"
  },
  "/assets/monitor-smartphone-SZNrUcs7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20a-LRK1nNUDr6An7zCdA3qAvMRk+Fw"',
    "mtime": "2026-09-02T13:03:33.133Z",
    "size": 522,
    "path": "../public/assets/monitor-smartphone-SZNrUcs7.js"
  },
  "/assets/privacy-policy-rvt9ViTM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"95d-ppSbddQaQX1BeW2Sk713b5W2nvg"',
    "mtime": "2026-09-02T13:03:33.137Z",
    "size": 2397,
    "path": "../public/assets/privacy-policy-rvt9ViTM.js"
  },
  "/assets/service.e-comm-XrUCRWI_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"39e2-ruINGarDAEsfbSYpdy8VtzqZdU4"',
    "mtime": "2026-09-02T13:03:33.137Z",
    "size": 14818,
    "path": "../public/assets/service.e-comm-XrUCRWI_.js"
  },
  "/assets/pen-BYtpoLno.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ec-i7pCRb3XillO+JikoCMEmuiQn3o"',
    "mtime": "2026-09-02T13:03:33.138Z",
    "size": 236,
    "path": "../public/assets/pen-BYtpoLno.js"
  },
  "/assets/service.branding-BPxvtqJW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7e43-evnSrczTNnfsFZM9FtdZ+J0i7QI"',
    "mtime": "2026-09-02T13:03:33.134Z",
    "size": 32323,
    "path": "../public/assets/service.branding-BPxvtqJW.js"
  },
  "/assets/service.web-app-6dQQLh9g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b20-GwkGkFZFBO+y4vYZ72Nt1IWysyE"',
    "mtime": "2026-09-02T13:03:33.134Z",
    "size": 19232,
    "path": "../public/assets/service.web-app-6dQQLh9g.js"
  },
  "/assets/service.wordpress-C-HPL0cZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"59eb-sD9n0SCMg0EM92nDMNAYCphF54U"',
    "mtime": "2026-09-02T13:03:33.133Z",
    "size": 23019,
    "path": "../public/assets/service.wordpress-C-HPL0cZ.js"
  },
  "/assets/ShapeGrid-BGcohHef.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14ad-q1d8UtwhHu5TaWs4Ei8aI20g5SA"',
    "mtime": "2026-09-02T13:03:33.137Z",
    "size": 5293,
    "path": "../public/assets/ShapeGrid-BGcohHef.js"
  },
  "/assets/service.seo-B9LZQut2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5e9-EhWEq6USFXKJ8pLHtQNdS6Un6Ik"',
    "mtime": "2026-09-02T13:03:33.133Z",
    "size": 46569,
    "path": "../public/assets/service.seo-B9LZQut2.js"
  },
  "/assets/ShapeGrid-DpO7rVc6.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"44-mjIQV62xp76EWGpGGjvcBzu6XRc"',
    "mtime": "2026-09-02T13:03:33.121Z",
    "size": 68,
    "path": "../public/assets/ShapeGrid-DpO7rVc6.css"
  },
  "/assets/service.web-dev-BzcDXxvr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"60c9-w03DtE0G0nByIctiridlaOAN8OE"',
    "mtime": "2026-09-02T13:03:33.132Z",
    "size": 24777,
    "path": "../public/assets/service.web-dev-BzcDXxvr.js"
  },
  "/assets/services-FjmxAUQf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c0f-UJxi12eccGjBHQxqW/mD1Lvoy44"',
    "mtime": "2026-09-02T13:03:33.124Z",
    "size": 15375,
    "path": "../public/assets/services-FjmxAUQf.js"
  },
  "/assets/styles-BNy-iEVz.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"30259-NIPe0zAJ5ki8l9W4CAUq5kpOQY4"',
    "mtime": "2026-09-02T13:03:33.134Z",
    "size": 197209,
    "path": "../public/assets/styles-BNy-iEVz.css"
  },
  "/assets/team-loft-Cru_9bP-.jpg": {
    "type": "image/jpeg",
    "etag": '"2ab51-gyVwnpC1/pv8OIzQpaMMKsIp0IE"',
    "mtime": "2026-09-02T13:03:32.934Z",
    "size": 174929,
    "path": "../public/assets/team-loft-Cru_9bP-.jpg"
  },
  "/assets/team-workshop-BaPy7uKW.jpg": {
    "type": "image/jpeg",
    "etag": '"2c9a7-PCClD1QNQTLID60gJgsAoBEJO9I"',
    "mtime": "2026-09-02T13:03:33.084Z",
    "size": 182695,
    "path": "../public/assets/team-workshop-BaPy7uKW.jpg"
  },
  "/assets/team-meeting-BuCGqfrY.jpg": {
    "type": "image/jpeg",
    "etag": '"2b1c9-gbM5VYJioCAJuVrYhHdpqF9hw6I"',
    "mtime": "2026-09-02T13:03:33.082Z",
    "size": 176585,
    "path": "../public/assets/team-meeting-BuCGqfrY.jpg"
  },
  "/assets/team-smiles-Cfhh8xl-.jpg": {
    "type": "image/jpeg",
    "etag": '"20813-fUSWcezuCu+d5L/nwonIjTgPKy8"',
    "mtime": "2026-09-02T13:03:33.081Z",
    "size": 133139,
    "path": "../public/assets/team-smiles-Cfhh8xl-.jpg"
  },
  "/assets/terms-of-service-CqA1938B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"932-imRr89stOtN5Rqv16hHZ9bqoF3c"',
    "mtime": "2026-09-02T13:03:33.123Z",
    "size": 2354,
    "path": "../public/assets/terms-of-service-CqA1938B.js"
  },
  "/assets/use-spring-03BAfQPI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"912-0YJ/j5nEdhlQmpTaSRjjCCzVFkM"',
    "mtime": "2026-09-02T13:03:33.136Z",
    "size": 2322,
    "path": "../public/assets/use-spring-03BAfQPI.js"
  },
  "/assets/organic-CeeObELc.png": {
    "type": "image/png",
    "etag": '"123fd2-KHWLLTwRybFtey9/MvRGmua4Kj8"',
    "mtime": "2026-09-02T13:03:33.162Z",
    "size": 1195986,
    "path": "../public/assets/organic-CeeObELc.png"
  },
  "/assets/users-round-BACFlAox.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7a5-1QPCuCjII69DWrod3WRW2cg3d5E"',
    "mtime": "2026-09-02T13:03:33.139Z",
    "size": 1957,
    "path": "../public/assets/users-round-BACFlAox.js"
  },
  "/assets/psycho-CqDCmmnC.png": {
    "type": "image/png",
    "etag": '"1c9da5-7MqE7nCiaPU0He4tfiTVeK88dFE"',
    "mtime": "2026-09-02T13:03:33.179Z",
    "size": 1875365,
    "path": "../public/assets/psycho-CqDCmmnC.png"
  },
  "/assets/zod-BRQMOuYM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7a8d-56UYIsEprHEe9unhM8AOqOZ2UFk"',
    "mtime": "2026-09-02T13:03:33.132Z",
    "size": 31373,
    "path": "../public/assets/zod-BRQMOuYM.js"
  },
  "/assets/workflow-04FX5tkY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"42d-3YzE0aa6QwXdtMElpxOqpCGnxj0"',
    "mtime": "2026-09-02T13:03:33.134Z",
    "size": 1069,
    "path": "../public/assets/workflow-04FX5tkY.js"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _8bo4rX = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_P7NsEQ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_P7NsEQ };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_8bo4rX)
].filter(Boolean);
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    middleware.push(...h3App["~middleware"]);
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
