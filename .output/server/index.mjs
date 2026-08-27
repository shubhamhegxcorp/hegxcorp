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
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": '"188-b44fHHXmy851luNlb3EjFx++Nkg"',
    "mtime": "2026-06-13T07:17:23.648Z",
    "size": 392,
    "path": "../public/site.webmanifest"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"42-64vvsHjkMkCWH7gA0wO6gCi1kfU"',
    "mtime": "2026-07-29T06:39:34.165Z",
    "size": 66,
    "path": "../public/robots.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"18b-oJdMEuBRzmPCjgWsuTyVM5pL3sY"',
    "mtime": "2026-06-13T07:17:18.857Z",
    "size": 395,
    "path": "../public/favicon.ico"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": '"e9e-0i8bdrdmQQWzde0O3LI246SwLKU"',
    "mtime": "2026-06-13T07:17:18.818Z",
    "size": 3742,
    "path": "../public/favicon/android-chrome-192x192.png"
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
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": '"d21c-QhHvfuhmvwYbM/6Itpb/IvO7b4w"',
    "mtime": "2026-06-13T07:17:18.840Z",
    "size": 53788,
    "path": "../public/favicon/android-chrome-512x512.png"
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
    "etag": '"434-VWyOO1MMdw/yVh+2Nym94Obq1Ag"',
    "mtime": "2026-07-21T10:20:17.848Z",
    "size": 1076,
    "path": "../public/placeholders/gpen-preview.svg"
  },
  "/placeholders/learning-tree-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"452-3eDOUJd0mGX18vUV0xVIWUQZYSU"',
    "mtime": "2026-07-21T10:20:14.852Z",
    "size": 1106,
    "path": "../public/placeholders/learning-tree-preview.svg"
  },
  "/placeholders/rollink-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"439-gRnsz2BqGfdGvHLHPJug/C6dxyw"',
    "mtime": "2026-07-21T10:20:19.487Z",
    "size": 1081,
    "path": "../public/placeholders/rollink-preview.svg"
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
  "/assets/13-3-2ehNKuf3.webp": {
    "type": "image/webp",
    "etag": '"1282-kgbdPAs8VPeed5ttLLESIZ8GcMk"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 4738,
    "path": "../public/assets/13-3-2ehNKuf3.webp"
  },
  "/assets/12-5-Dpuj0Kw4.webp": {
    "type": "image/webp",
    "etag": '"1732-F9z0gJsJ85C3exoa12Utft4OKOI"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 5938,
    "path": "../public/assets/12-5-Dpuj0Kw4.webp"
  },
  "/assets/16-DWwC_Xc-.webp": {
    "type": "image/webp",
    "etag": '"1318-u2OIKNEOQAJiRcGSitqrOEToD74"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 4888,
    "path": "../public/assets/16-DWwC_Xc-.webp"
  },
  "/assets/15-D1G8ZCM3.webp": {
    "type": "image/webp",
    "etag": '"2088-+xJGAfBk7st6XefXlB6gO8qAvh8"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 8328,
    "path": "../public/assets/15-D1G8ZCM3.webp"
  },
  "/assets/2-4-RSujknJL.webp": {
    "type": "image/webp",
    "etag": '"12fa-Jxvq0I5PZXcAwCv3KuaiShCiNEw"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 4858,
    "path": "../public/assets/2-4-RSujknJL.webp"
  },
  "/assets/22-6eurBCOs.webp": {
    "type": "image/webp",
    "etag": '"12f6-85M7Oc8wDXR7M2UQ78NmQZ/uh8U"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 4854,
    "path": "../public/assets/22-6eurBCOs.webp"
  },
  "/assets/20-6SQeXImn.webp": {
    "type": "image/webp",
    "etag": '"363a-iteKDUksEk4UFYBs8BB+HLtvFwY"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 13882,
    "path": "../public/assets/20-6SQeXImn.webp"
  },
  "/assets/admin.website-content.about-gGqJ6M1S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"42b8-y2uPQfdHFa3zvOX6J/sWZzxljhM"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 17080,
    "path": "../public/assets/admin.website-content.about-gGqJ6M1S.js"
  },
  "/assets/9-4-C8GHvnEm.webp": {
    "type": "image/webp",
    "etag": '"118e-U60Yz6Ny0BosidbgtIDUDVaRGxg"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 4494,
    "path": "../public/assets/9-4-C8GHvnEm.webp"
  },
  "/assets/admin.website-content.contact-BbpJwBoj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2de0-OIuV065ERSHKhvjq7qgoGz3x2Io"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 11744,
    "path": "../public/assets/admin.website-content.contact-BbpJwBoj.js"
  },
  "/assets/admin.website-content.home-6F4nVpZR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9a2c-8B7gieOMI1I4dBgJigdRuApvFx8"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 39468,
    "path": "../public/assets/admin.website-content.home-6F4nVpZR.js"
  },
  "/assets/arrow-up-BA03rmQn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"118-PL9dOB12bUw4EPH8OPyLt4wHEN0"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 280,
    "path": "../public/assets/arrow-up-BA03rmQn.js"
  },
  "/assets/admin.website-content.services-DzCzJQWM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"34c0-ZDK0bFKRpJWcrwMOfSwWaVhdHhA"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 13504,
    "path": "../public/assets/admin.website-content.services-DzCzJQWM.js"
  },
  "/assets/cookie-policy-DdIc-HGp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"709-O8XxLqhSPyETTgq8a/+umPi/o7Q"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 1801,
    "path": "../public/assets/cookie-policy-DdIc-HGp.js"
  },
  "/assets/cropped-hegxcorp-logo-new-web-jmKFR4Um.webp": {
    "type": "image/webp",
    "etag": '"3114-kHdSM34/6cgixrqh02l5DrrA/Hs"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 12564,
    "path": "../public/assets/cropped-hegxcorp-logo-new-web-jmKFR4Um.webp"
  },
  "/assets/hegxcorp-story-CH04ezgc.webp": {
    "type": "image/webp",
    "etag": '"ce08-jY6+LRHOP8y8P7D5kFCkPG0UpKA"',
    "mtime": "2026-08-27T06:14:14.630Z",
    "size": 52744,
    "path": "../public/assets/hegxcorp-story-CH04ezgc.webp"
  },
  "/assets/admin.website-content.products-DTZO-qLt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"283e-AFgnqXw62PIYT/u6uLm9U9KpFOg"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 10302,
    "path": "../public/assets/admin.website-content.products-DTZO-qLt.js"
  },
  "/assets/index-DpO7rVc6.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"44-mjIQV62xp76EWGpGGjvcBzu6XRc"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 68,
    "path": "../public/assets/index-DpO7rVc6.css"
  },
  "/assets/LegalPage-Bm-vAazi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b95-7vifxsCsqIIrDk4lgfzF/2BGGok"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 2965,
    "path": "../public/assets/LegalPage-Bm-vAazi.js"
  },
  "/assets/layout-dashboard-BG4qoFbf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"160-EDh+iKy+gudKuwnEyWhdNZ9SzAk"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 352,
    "path": "../public/assets/layout-dashboard-BG4qoFbf.js"
  },
  "/assets/monitor-smartphone-BuovhmnC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20a-LKBO57NxjQhrTt18ol69M3t8PFA"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 522,
    "path": "../public/assets/monitor-smartphone-BuovhmnC.js"
  },
  "/assets/our-mission-CuHrmjRP.webp": {
    "type": "image/webp",
    "etag": '"1127c-IgEhVwhbBXUp/dZgT2xuF0S9Bd4"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 70268,
    "path": "../public/assets/our-mission-CuHrmjRP.webp"
  },
  "/assets/our-story-C7rBGqNZ.webp": {
    "type": "image/webp",
    "etag": '"15972-NamE3z8DQR5hiA1F75fNLXUy8DI"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 88434,
    "path": "../public/assets/our-story-C7rBGqNZ.webp"
  },
  "/assets/our-values-DGEYjPt7.webp": {
    "type": "image/webp",
    "etag": '"16664-ndRTM9nN/Mi6JvfOkJncdLW6xjY"',
    "mtime": "2026-08-27T06:14:14.639Z",
    "size": 91748,
    "path": "../public/assets/our-values-DGEYjPt7.webp"
  },
  "/assets/privacy-policy-D5W5UU0v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"95d-RfofUVXa5f1B5exoWDNJnGQIjsM"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 2397,
    "path": "../public/assets/privacy-policy-D5W5UU0v.js"
  },
  "/assets/pen-DaIe_bTp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ec-QcnhrmdWcUTio6hXKIxj/+z+ctc"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 236,
    "path": "../public/assets/pen-DaIe_bTp.js"
  },
  "/assets/products-4lxQ_fjk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d78-eo8584eNyz70Z0SViFtR5eA4Tw4"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 3448,
    "path": "../public/assets/products-4lxQ_fjk.js"
  },
  "/assets/service.branding-B4WNgVNg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7e15-EVYM1Il0v2Ev7dkfb4X0z4R8Gfc"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 32277,
    "path": "../public/assets/service.branding-B4WNgVNg.js"
  },
  "/assets/service.e-comm-BPGal3R0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"38f2-BagL9yyM5JjAAQLIcpQd+FUwS1U"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 14578,
    "path": "../public/assets/service.e-comm-BPGal3R0.js"
  },
  "/assets/core--eSAZnfi.png": {
    "type": "image/png",
    "etag": '"f25b4-3YQmkmmuX1IDRlXjRBFj+sVhv5k"',
    "mtime": "2026-08-27T06:14:14.642Z",
    "size": 992692,
    "path": "../public/assets/core--eSAZnfi.png"
  },
  "/assets/organic-CeeObELc.png": {
    "type": "image/png",
    "etag": '"123fd2-KHWLLTwRybFtey9/MvRGmua4Kj8"',
    "mtime": "2026-08-27T06:14:14.643Z",
    "size": 1195986,
    "path": "../public/assets/organic-CeeObELc.png"
  },
  "/assets/index-CRQvjAYK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1bcfbb-pPWsFXwQPbbg8OqA38yeyh8kEfY"',
    "mtime": "2026-08-27T06:14:14.644Z",
    "size": 1822651,
    "path": "../public/assets/index-CRQvjAYK.js"
  },
  "/assets/compound-DSk0rL_0.png": {
    "type": "image/png",
    "etag": '"1c6b9c-HmTjPWJbIc+41u95hclEZ0Z/ba4"',
    "mtime": "2026-08-27T06:14:14.644Z",
    "size": 1862556,
    "path": "../public/assets/compound-DSk0rL_0.png"
  },
  "/assets/How AI Search Changes Rankings-CVbelTlb.png": {
    "type": "image/png",
    "etag": '"1ee6cb-aNOUETzcNslJ5PaS3t0z0YoBjSw"',
    "mtime": "2026-08-27T06:14:14.643Z",
    "size": 2025163,
    "path": "../public/assets/How AI Search Changes Rankings-CVbelTlb.png"
  },
  "/assets/psycho-CqDCmmnC.png": {
    "type": "image/png",
    "etag": '"1c9da5-7MqE7nCiaPU0He4tfiTVeK88dFE"',
    "mtime": "2026-08-27T06:14:14.644Z",
    "size": 1875365,
    "path": "../public/assets/psycho-CqDCmmnC.png"
  },
  "/assets/maximizing-DIDylDLW.png": {
    "type": "image/png",
    "etag": '"1c9141-C/vjQ5saKx9BXndmwgzNK9ELrq4"',
    "mtime": "2026-08-27T06:14:14.644Z",
    "size": 1872193,
    "path": "../public/assets/maximizing-DIDylDLW.png"
  },
  "/assets/service.web-dev-D_Me0G_s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"60c5-tCkWDv+9Naz49nfcB1PvtAymU0k"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 24773,
    "path": "../public/assets/service.web-dev-D_Me0G_s.js"
  },
  "/assets/service.web-app-B1G3ctuI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b1e-iKTwOgk7hY3ZK1inTq3KpTmyOM4"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 19230,
    "path": "../public/assets/service.web-app-B1G3ctuI.js"
  },
  "/assets/services-CiyJu33Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3b08-61m9Fuj40FkWjgCLGwhzSdObNVI"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 15112,
    "path": "../public/assets/services-CiyJu33Y.js"
  },
  "/assets/service.wordpress-j7NxgkID.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"59e8-Q7WmlaLprnsTlhWVsrGDtvAxMY0"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 23016,
    "path": "../public/assets/service.wordpress-j7NxgkID.js"
  },
  "/assets/terms-of-service-DW1HS5MA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"932-HHWSpE2AbgHt9ikLrKTuiDSuNE0"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 2354,
    "path": "../public/assets/terms-of-service-DW1HS5MA.js"
  },
  "/assets/shopping-bag-WOzcsO38.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"155-7YUGwdn/KfIW2YiCOaUi7/LJghg"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 341,
    "path": "../public/assets/shopping-bag-WOzcsO38.js"
  },
  "/assets/users-round-BATbsC2r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7a5-I3Rs2jD2EWtrpa3OtqEhIHTEW6g"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 1957,
    "path": "../public/assets/users-round-BATbsC2r.js"
  },
  "/assets/workflow-COxUHScn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"42d-cMxqKFOIYndeAae7cucOdAFpwd4"',
    "mtime": "2026-08-27T06:14:14.641Z",
    "size": 1069,
    "path": "../public/assets/workflow-COxUHScn.js"
  },
  "/assets/styles-3EJqYSb7.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2f392-NyA0PDWG39yOQqk2XryTQOuIG0w"',
    "mtime": "2026-08-27T06:14:14.640Z",
    "size": 193426,
    "path": "../public/assets/styles-3EJqYSb7.css"
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
