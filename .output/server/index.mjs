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
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": '"11ee-foxvX49HbhL62QtsIvKMrSjGw18"',
    "mtime": "2026-09-08T11:17:50.676Z",
    "size": 4590,
    "path": "../public/apple-touch-icon.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"73e-YJivTF9V4XkeCBTZjRZoz70Esnw"',
    "mtime": "2026-09-08T11:17:51.155Z",
    "size": 1854,
    "path": "../public/favicon.ico"
  },
  "/cropped-hegxcorp-logo-new-web.webp": {
    "type": "image/webp",
    "etag": '"3114-kHdSM34/6cgixrqh02l5DrrA/Hs"',
    "mtime": "2026-06-10T06:32:50.774Z",
    "size": 12564,
    "path": "../public/cropped-hegxcorp-logo-new-web.webp"
  },
  "/og-image.webp": {
    "type": "image/webp",
    "etag": '"12a6-IvEsDqsahS9clQUAyHmQQEkMFok"',
    "mtime": "2026-09-08T11:17:51.492Z",
    "size": 4774,
    "path": "../public/og-image.webp"
  },
  "/hegxcorp-4k-emblem.webp": {
    "type": "image/webp",
    "etag": '"ec2a-3wVZduQNPPDHlPnpamDg1viIIPk"',
    "mtime": "2026-09-08T11:16:18.818Z",
    "size": 60458,
    "path": "../public/hegxcorp-4k-emblem.webp"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"79-WsOSh+X7rjiYX+apx8QHadWz6yo"',
    "mtime": "2026-08-31T06:14:29.744Z",
    "size": 121,
    "path": "../public/robots.txt"
  },
  "/assets/admin.website-content.about-_2jp1rc1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6fb6-szhn36pTykFk3cQaNs9NntGDo5M"',
    "mtime": "2026-09-11T11:28:47.436Z",
    "size": 28598,
    "path": "../public/assets/admin.website-content.about-_2jp1rc1.js"
  },
  "/assets/about-bL5R-md6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"96cc-VgLoyUM9QPZb3L7Zom1rFGknI8o"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 38604,
    "path": "../public/assets/about-bL5R-md6.js"
  },
  "/assets/admin.website-content.header-Ca5hsih_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2479-U4kUBkZlLb5qk8QrWbVnNPUh66k"',
    "mtime": "2026-09-11T11:28:47.436Z",
    "size": 9337,
    "path": "../public/assets/admin.website-content.header-Ca5hsih_.js"
  },
  "/assets/admin.website-content.service._slug-D--n8rIM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6209-ljOq70FJ28hxg4i4QnwqWyb7GUg"',
    "mtime": "2026-09-11T11:28:47.437Z",
    "size": 25097,
    "path": "../public/assets/admin.website-content.service._slug-D--n8rIM.js"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": '"187-qOXOKc9AviAicJhJxccQImRVYLw"',
    "mtime": "2026-09-08T11:17:51.493Z",
    "size": 391,
    "path": "../public/site.webmanifest"
  },
  "/assets/arrow-up-DM2eHbvM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"118-PA9GAJjEvqo0F1iZrtlGRoAN4Ts"',
    "mtime": "2026-09-11T11:28:47.440Z",
    "size": 280,
    "path": "../public/assets/arrow-up-DM2eHbvM.js"
  },
  "/assets/badge-check-BnrMVWS3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"138-H3xWwE/4K+shiRSCl5wq5r/KDCs"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 312,
    "path": "../public/assets/badge-check-BnrMVWS3.js"
  },
  "/assets/award-Cdc5IGvA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10e-MlbGPT/HxPe6DFSJUFNRlKt2Itk"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 270,
    "path": "../public/assets/award-Cdc5IGvA.js"
  },
  "/assets/admin.website-content.home-uqG9nq_L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14609-PhFlUdgODJPCm9bJKVedq7AgZkg"',
    "mtime": "2026-09-11T11:28:47.436Z",
    "size": 83465,
    "path": "../public/assets/admin.website-content.home-uqG9nq_L.js"
  },
  "/assets/admin.website-content.services-Coms16k_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69e6-4zPpcvTg5U1sJPD+EhUpLv0spMY"',
    "mtime": "2026-09-11T11:28:47.435Z",
    "size": 27110,
    "path": "../public/assets/admin.website-content.services-Coms16k_.js"
  },
  "/assets/blog._slug-DZ2mU2NM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fd-5/NNljc1B2bJjBvTcFG+sorxF+Q"',
    "mtime": "2026-09-11T11:28:47.431Z",
    "size": 1533,
    "path": "../public/assets/blog._slug-DZ2mU2NM.js"
  },
  "/assets/blog.index-BrfnLtMT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"45ad-M1sT677iP8mxhCikw8nKD2Jm2yc"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 17837,
    "path": "../public/assets/blog.index-BrfnLtMT.js"
  },
  "/assets/blog._slug-ByTjrK90.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6095-k3MHqaVkjRHpF20hOa+9zLJQlRo"',
    "mtime": "2026-09-11T11:28:47.432Z",
    "size": 24725,
    "path": "../public/assets/blog._slug-ByTjrK90.js"
  },
  "/assets/BrowserPreview-BgLApIY8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f5b-khXk3PH2zy0I+kmZ+cxZe+FM7+Q"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 3931,
    "path": "../public/assets/BrowserPreview-BgLApIY8.js"
  },
  "/assets/blog._slug-BzNmF98E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f4-Oe2U3g3kjHXAfJBojoYPIPFK3E8"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 1524,
    "path": "../public/assets/blog._slug-BzNmF98E.js"
  },
  "/assets/case-studies._slug-Dk-RTuWf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"564b-thew74z5y/wD0UGdODZIXKRr1Yo"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 22091,
    "path": "../public/assets/case-studies._slug-Dk-RTuWf.js"
  },
  "/assets/case-studies.index-BlomdFOi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5d61-6DEHNr4jF4SzCrBgVkSK11tRSts"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 23905,
    "path": "../public/assets/case-studies.index-BlomdFOi.js"
  },
  "/hegxcorp-4k-emblem.png": {
    "type": "image/png",
    "etag": '"6cd06-up9knAOGOmbH7hyyjsosMffcwQY"',
    "mtime": "2026-09-08T11:16:18.051Z",
    "size": 445702,
    "path": "../public/hegxcorp-4k-emblem.png"
  },
  "/assets/compound-DSk0rL_0.png": {
    "type": "image/png",
    "etag": '"1c6b9c-HmTjPWJbIc+41u95hclEZ0Z/ba4"',
    "mtime": "2026-09-11T11:28:47.445Z",
    "size": 1862556,
    "path": "../public/assets/compound-DSk0rL_0.png"
  },
  "/assets/cookie-policy-B7e5saXk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"709-plNFOB7PDctKmH6Hpffky5qq564"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 1801,
    "path": "../public/assets/cookie-policy-B7e5saXk.js"
  },
  "/assets/contact-ByNn4KzB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4876-U/Bg+FqEkSzCLPy4M+IRxbnjo5U"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 18550,
    "path": "../public/assets/contact-ByNn4KzB.js"
  },
  "/assets/cropped-hegxcorp-logo-new-web-jmKFR4Um.webp": {
    "type": "image/webp",
    "etag": '"3114-kHdSM34/6cgixrqh02l5DrrA/Hs"',
    "mtime": "2026-09-11T11:28:47.426Z",
    "size": 12564,
    "path": "../public/assets/cropped-hegxcorp-logo-new-web-jmKFR4Um.webp"
  },
  "/assets/cpu-den3kbiq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"283-ZTc755E14FxZ9uC7oCZ9La0cEqc"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 643,
    "path": "../public/assets/cpu-den3kbiq.js"
  },
  "/assets/free-growth-audit-RqH2UznO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b9e-YbrsLGNRaV270sgPJoElPB3yeZo"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 11166,
    "path": "../public/assets/free-growth-audit-RqH2UznO.js"
  },
  "/assets/index-xgxdCp6f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11198-9ubDNODqOLALvTTPNnR3eEdAXgI"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 70040,
    "path": "../public/assets/index-xgxdCp6f.js"
  },
  "/assets/index-XNpqHEVs.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"b77-iBqzoCYvKe9c9nLU2CNzvar9+1M"',
    "mtime": "2026-09-11T11:28:47.427Z",
    "size": 2935,
    "path": "../public/assets/index-XNpqHEVs.css"
  },
  "/assets/layout-dashboard-C04RMPv8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"160-v8oRDaI2iQZkOrdTVIm4ZHM4U6k"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 352,
    "path": "../public/assets/layout-dashboard-C04RMPv8.js"
  },
  "/assets/LegalPage-Bpj713Jh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b9a-NxfLqT0RccEzGlPt1EsvTYfb9xI"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 2970,
    "path": "../public/assets/LegalPage-Bpj713Jh.js"
  },
  "/assets/lightbulb-z3HhVhHn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11a-/9LUH31xhdfNVDc1q3KvxvaS2ic"',
    "mtime": "2026-09-11T11:28:47.432Z",
    "size": 282,
    "path": "../public/assets/lightbulb-z3HhVhHn.js"
  },
  "/assets/monitor-smartphone-BNZ_N2q6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20a-tnc7VKmGUVZu1phQQuZF2McSInU"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 522,
    "path": "../public/assets/monitor-smartphone-BNZ_N2q6.js"
  },
  "/assets/loader-circle-DSXscm7K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15b-pkygQxpp45PpDfon3AxLmM1p9jw"',
    "mtime": "2026-09-11T11:28:47.434Z",
    "size": 347,
    "path": "../public/assets/loader-circle-DSXscm7K.js"
  },
  "/assets/phone-call-D5kv-Vgi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a8-MAcYXmSfVuCwP16WH7HkcO5ahsg"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 424,
    "path": "../public/assets/phone-call-D5kv-Vgi.js"
  },
  "/assets/service.branding-utnsfyaU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7e3d-Yp/a3vzVz1qFqonjGUAl/cYv8Bo"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 32317,
    "path": "../public/assets/service.branding-utnsfyaU.js"
  },
  "/assets/privacy-policy-rGAbbyJo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"95d-/73+TMWhLz3KdkyHp8P6mDKVQCM"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 2397,
    "path": "../public/assets/privacy-policy-rGAbbyJo.js"
  },
  "/assets/service.e-comm-DPaoSMyk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"39e1-3Oaiy57YfVyjIx/hGqYC3G+pVmA"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 14817,
    "path": "../public/assets/service.e-comm-DPaoSMyk.js"
  },
  "/assets/service.seo-DF1oN9Mn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b6d9-5y+kReS8YrN7sbkuMINhoKZmmIQ"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 46809,
    "path": "../public/assets/service.seo-DF1oN9Mn.js"
  },
  "/assets/index-Bc5UCeok.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6c45-Wi7kIThqy0wgQfLHyouBZhXj1xU"',
    "mtime": "2026-09-11T11:28:47.442Z",
    "size": 683077,
    "path": "../public/assets/index-Bc5UCeok.js"
  },
  "/assets/core--eSAZnfi.png": {
    "type": "image/png",
    "etag": '"f25b4-3YQmkmmuX1IDRlXjRBFj+sVhv5k"',
    "mtime": "2026-09-11T11:28:47.439Z",
    "size": 992692,
    "path": "../public/assets/core--eSAZnfi.png"
  },
  "/assets/organic-CeeObELc.png": {
    "type": "image/png",
    "etag": '"123fd2-KHWLLTwRybFtey9/MvRGmua4Kj8"',
    "mtime": "2026-09-11T11:28:47.443Z",
    "size": 1195986,
    "path": "../public/assets/organic-CeeObELc.png"
  },
  "/assets/index-2D2uNu83.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16fdf0-bCQI9bJjrN937XlZ8FjmX7zRleQ"',
    "mtime": "2026-09-11T11:28:47.444Z",
    "size": 1506800,
    "path": "../public/assets/index-2D2uNu83.js"
  },
  "/assets/psycho-CqDCmmnC.png": {
    "type": "image/png",
    "etag": '"1c9da5-7MqE7nCiaPU0He4tfiTVeK88dFE"',
    "mtime": "2026-09-11T11:28:47.445Z",
    "size": 1875365,
    "path": "../public/assets/psycho-CqDCmmnC.png"
  },
  "/assets/How AI Search Changes Rankings-CVbelTlb.png": {
    "type": "image/png",
    "etag": '"1ee6cb-aNOUETzcNslJ5PaS3t0z0YoBjSw"',
    "mtime": "2026-09-11T11:28:47.445Z",
    "size": 2025163,
    "path": "../public/assets/How AI Search Changes Rankings-CVbelTlb.png"
  },
  "/assets/service.web-app-crDWQOgH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b1f-KQUZqYH2q+jxki8z8/lF7B4SNSA"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 19231,
    "path": "../public/assets/service.web-app-crDWQOgH.js"
  },
  "/assets/maximizing-DIDylDLW.png": {
    "type": "image/png",
    "etag": '"1c9141-C/vjQ5saKx9BXndmwgzNK9ELrq4"',
    "mtime": "2026-09-11T11:28:47.445Z",
    "size": 1872193,
    "path": "../public/assets/maximizing-DIDylDLW.png"
  },
  "/assets/service.web-dev-DJgK_y1r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"62b9-Nndvo9scuBQ4uXMF9+xFZDbYk9A"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 25273,
    "path": "../public/assets/service.web-dev-DJgK_y1r.js"
  },
  "/assets/service.wordpress-VxZXI9eI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"57c9-5Nm8H6QX+qB18GDVJ2xQi4sx7ZA"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 22473,
    "path": "../public/assets/service.wordpress-VxZXI9eI.js"
  },
  "/assets/services-VufSySqU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3909-iF2fXOKBIL1/YAANTPpVSBE72QE"',
    "mtime": "2026-09-11T11:28:47.427Z",
    "size": 14601,
    "path": "../public/assets/services-VufSySqU.js"
  },
  "/assets/ShapeGrid-BlAIR2MO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14ad-2npI5qcBlF8QfVRCNAt1qXO8nh4"',
    "mtime": "2026-09-11T11:28:47.435Z",
    "size": 5293,
    "path": "../public/assets/ShapeGrid-BlAIR2MO.js"
  },
  "/assets/ShapeGrid-DpO7rVc6.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"44-mjIQV62xp76EWGpGGjvcBzu6XRc"',
    "mtime": "2026-09-11T11:28:47.427Z",
    "size": 68,
    "path": "../public/assets/ShapeGrid-DpO7rVc6.css"
  },
  "/assets/team-loft-Cru_9bP-.jpg": {
    "type": "image/jpeg",
    "etag": '"2ab51-gyVwnpC1/pv8OIzQpaMMKsIp0IE"',
    "mtime": "2026-09-11T11:28:47.404Z",
    "size": 174929,
    "path": "../public/assets/team-loft-Cru_9bP-.jpg"
  },
  "/assets/team-meeting-BuCGqfrY.jpg": {
    "type": "image/jpeg",
    "etag": '"2b1c9-gbM5VYJioCAJuVrYhHdpqF9hw6I"',
    "mtime": "2026-09-11T11:28:47.426Z",
    "size": 176585,
    "path": "../public/assets/team-meeting-BuCGqfrY.jpg"
  },
  "/assets/team-smiles-Cfhh8xl-.jpg": {
    "type": "image/jpeg",
    "etag": '"20813-fUSWcezuCu+d5L/nwonIjTgPKy8"',
    "mtime": "2026-09-11T11:28:47.426Z",
    "size": 133139,
    "path": "../public/assets/team-smiles-Cfhh8xl-.jpg"
  },
  "/assets/styles-yVAB4U--.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"352d6-lcTlIK6zy711bkJ3gbNmad29TO8"',
    "mtime": "2026-09-11T11:28:47.427Z",
    "size": 217814,
    "path": "../public/assets/styles-yVAB4U--.css"
  },
  "/assets/use-spring-B5GyQjC6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"250b-IoKDuZTBUcwx3vzLSz7VkonbXsU"',
    "mtime": "2026-09-11T11:28:47.435Z",
    "size": 9483,
    "path": "../public/assets/use-spring-B5GyQjC6.js"
  },
  "/assets/terms-of-service-Bmb02jhj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"932-Y53gweL/XUnmrWz21SkTHQ4RgRo"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 2354,
    "path": "../public/assets/terms-of-service-Bmb02jhj.js"
  },
  "/assets/team-workshop-BaPy7uKW.jpg": {
    "type": "image/jpeg",
    "etag": '"2c9a7-PCClD1QNQTLID60gJgsAoBEJO9I"',
    "mtime": "2026-09-11T11:28:47.426Z",
    "size": 182695,
    "path": "../public/assets/team-workshop-BaPy7uKW.jpg"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": '"138c-utok2jtKaNgSCSgdT+yZA7mRWZ4"',
    "mtime": "2026-09-08T11:17:50.777Z",
    "size": 5004,
    "path": "../public/favicon/android-chrome-192x192.png"
  },
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": '"3f1e-6DmpNzmpCRaYjKFX5Y8pFTRx6nc"',
    "mtime": "2026-09-08T11:17:50.916Z",
    "size": 16158,
    "path": "../public/favicon/android-chrome-512x512.png"
  },
  "/assets/users-round-D1STSXqW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7a5-Xc8kUqbCT7K+Ju9r1GA3LsPm8sg"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 1957,
    "path": "../public/assets/users-round-D1STSXqW.js"
  },
  "/assets/workflow-sLvBrl2i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"42d-dyVOZNeU++tHkqWe+4xIUqAFkTU"',
    "mtime": "2026-09-11T11:28:47.430Z",
    "size": 1069,
    "path": "../public/assets/workflow-sLvBrl2i.js"
  },
  "/assets/zod-C8_zinoC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7a8d-T4NcNV9CxZJBAgieIy34YALi/uw"',
    "mtime": "2026-09-11T11:28:47.429Z",
    "size": 31373,
    "path": "../public/assets/zod-C8_zinoC.js"
  },
  "/favicon/apple-touch-icon.png": {
    "type": "image/png",
    "etag": '"11ee-foxvX49HbhL62QtsIvKMrSjGw18"',
    "mtime": "2026-09-08T11:17:50.574Z",
    "size": 4590,
    "path": "../public/favicon/apple-touch-icon.png"
  },
  "/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": '"11d-ewLVY/QtLuEY0GuLoZnnEKloGhk"',
    "mtime": "2026-09-08T11:17:50.224Z",
    "size": 285,
    "path": "../public/favicon/favicon-16x16.png"
  },
  "/favicon/favicon-48x48.png": {
    "type": "image/png",
    "etag": '"3a2-H1X39pF4c6mPdWSRddqGjbm8Pgw"',
    "mtime": "2026-09-08T11:17:50.388Z",
    "size": 930,
    "path": "../public/favicon/favicon-48x48.png"
  },
  "/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": '"249-B75mP0Xj6wteFZtN5IUa1DHkRu8"',
    "mtime": "2026-09-08T11:17:50.305Z",
    "size": 585,
    "path": "../public/favicon/favicon-32x32.png"
  },
  "/favicon/favicon-96x96.png": {
    "type": "image/png",
    "etag": '"83e-DbI0SS/COo0AOD380cDFhk4/+u0"',
    "mtime": "2026-09-08T11:17:50.477Z",
    "size": 2110,
    "path": "../public/favicon/favicon-96x96.png"
  },
  "/favicon/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"73e-YJivTF9V4XkeCBTZjRZoz70Esnw"',
    "mtime": "2026-09-08T11:17:51.157Z",
    "size": 1854,
    "path": "../public/favicon/favicon.ico"
  },
  "/favicon/favicon.svg": {
    "type": "image/svg+xml",
    "etag": '"54fb-TPNfV7nqeP5KWlSVbPTk1J3Gp90"',
    "mtime": "2026-09-08T11:17:51.301Z",
    "size": 21755,
    "path": "../public/favicon/favicon.svg"
  },
  "/logos/gpen.svg": {
    "type": "image/svg+xml",
    "etag": '"138-aZ0X3C8wDPTTm815M1eKODnMrYo"',
    "mtime": "2026-09-11T10:00:27.935Z",
    "size": 312,
    "path": "../public/logos/gpen.svg"
  },
  "/logos/learning-tree.svg": {
    "type": "image/svg+xml",
    "etag": '"24f-tjt8SG7WjsbUfK8cFN3Pvq30ve8"',
    "mtime": "2026-09-11T10:00:35.266Z",
    "size": 591,
    "path": "../public/logos/learning-tree.svg"
  },
  "/logos/rollink.svg": {
    "type": "image/svg+xml",
    "etag": '"13c-eoZ9K43wrtV/6uz70mlmISswma8"',
    "mtime": "2026-09-11T10:00:19.803Z",
    "size": 316,
    "path": "../public/logos/rollink.svg"
  },
  "/logos/tnc.png": {
    "type": "image/png",
    "etag": '"63ad-eTw46IULWCJJmi6LYyn+sV1t1Jg"',
    "mtime": "2026-09-11T10:30:51.536Z",
    "size": 25517,
    "path": "../public/logos/tnc.png"
  },
  "/placeholders/gpen-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"845-X/rIIq0O+QPB6UvNA3nWChJPmZQ"',
    "mtime": "2026-09-08T10:11:24.805Z",
    "size": 2117,
    "path": "../public/placeholders/gpen-preview.svg"
  },
  "/placeholders/learning-tree-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"849-ixi4nKiISNVI/TyVnVDA5Jhnx3s"',
    "mtime": "2026-09-08T10:11:15.768Z",
    "size": 2121,
    "path": "../public/placeholders/learning-tree-preview.svg"
  },
  "/logos/tbs.png": {
    "type": "image/png",
    "etag": '"2b4b-KFbxLN/ZFgW7YwFmexA7oiAd3AA"',
    "mtime": "2026-09-11T10:30:31.845Z",
    "size": 11083,
    "path": "../public/logos/tbs.png"
  },
  "/placeholders/rollink-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"854-JZsQJpx7p7JShYDzVmH0XSuysaI"',
    "mtime": "2026-09-08T10:11:33.519Z",
    "size": 2132,
    "path": "../public/placeholders/rollink-preview.svg"
  },
  "/placeholders/orra-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"84d-ubzMcsiC3bDY6nUZxDbP+3IunSQ"',
    "mtime": "2026-09-08T10:11:04.145Z",
    "size": 2125,
    "path": "../public/placeholders/orra-preview.svg"
  },
  "/placeholders/tarkashastra-preview.svg": {
    "type": "image/svg+xml",
    "etag": '"be3-wD9tOZK2dWx6O3wjZXifqIyDngU"',
    "mtime": "2026-09-08T10:10:55.577Z",
    "size": 3043,
    "path": "../public/placeholders/tarkashastra-preview.svg"
  },
  "/case-studies/orra/orra-crownstar.jpg": {
    "type": "image/jpeg",
    "etag": '"4ef4-f5EwOyVKZyUOHIfmibwB8KHEUAs"',
    "mtime": "2026-09-11T07:49:03.466Z",
    "size": 20212,
    "path": "../public/case-studies/orra/orra-crownstar.jpg"
  },
  "/case-studies/orra/orra-earrings.jpg": {
    "type": "image/jpeg",
    "etag": '"2c2d7-fEfLWXJjo6tF+6FCCivqcWyt1do"',
    "mtime": "2026-09-11T07:49:59.547Z",
    "size": 180951,
    "path": "../public/case-studies/orra/orra-earrings.jpg"
  },
  "/case-studies/orra/orra-journey.jpg": {
    "type": "image/jpeg",
    "etag": '"19bfd-WxsdS+MDYf6CpjzJxLO1K7z9KH0"',
    "mtime": "2026-09-11T07:49:03.459Z",
    "size": 105469,
    "path": "../public/case-studies/orra/orra-journey.jpg"
  },
  "/case-studies/orra/orra-logo.png": {
    "type": "image/png",
    "etag": '"1924-20o+50E4rbO6pJHm4v3cQNRFtVg"',
    "mtime": "2026-09-11T07:49:03.427Z",
    "size": 6436,
    "path": "../public/case-studies/orra/orra-logo.png"
  },
  "/case-studies/orra/orra-hero-preview.png": {
    "type": "image/png",
    "etag": '"7c502-TpByqB8SsPqGEzWuvo+4aoKOwv4"',
    "mtime": "2026-09-11T09:25:36.606Z",
    "size": 509186,
    "path": "../public/case-studies/orra/orra-hero-preview.png"
  },
  "/case-studies/orra/orra-banner-hero.jpg": {
    "type": "image/jpeg",
    "etag": '"9c79f-p8X92aMBZkSa70EINnO/aSAs15E"',
    "mtime": "2026-09-11T07:49:03.527Z",
    "size": 640927,
    "path": "../public/case-studies/orra/orra-banner-hero.jpg"
  },
  "/case-studies/orra/orra-rings.jpg": {
    "type": "image/jpeg",
    "etag": '"39651-HHkVcuA5VSusy+dQJ7VuiDxtiqg"',
    "mtime": "2026-09-11T07:49:59.525Z",
    "size": 235089,
    "path": "../public/case-studies/orra/orra-rings.jpg"
  },
  "/case-studies/orra/orra-main-banner-mobile.jpg": {
    "type": "image/jpeg",
    "etag": '"6edd8-dH9lPj99fHs8RSSyH7oI7GGHw3Y"',
    "mtime": "2026-09-11T07:49:59.500Z",
    "size": 454104,
    "path": "../public/case-studies/orra/orra-main-banner-mobile.jpg"
  },
  "/case-studies/orra/orra-jewellery-collection.png": {
    "type": "image/png",
    "etag": '"a9d3a-mEaduezWtw+dUIdwjBChtRUx4yY"',
    "mtime": "2026-09-11T07:49:59.612Z",
    "size": 695610,
    "path": "../public/case-studies/orra/orra-jewellery-collection.png"
  },
  "/case-studies/orra/orra-main-banner-desktop.jpg": {
    "type": "image/jpeg",
    "etag": '"c03a7-uPAEInGFrK532Hh5ph9MCjmDtz8"',
    "mtime": "2026-09-11T07:49:59.445Z",
    "size": 787367,
    "path": "../public/case-studies/orra/orra-main-banner-desktop.jpg"
  },
  "/case-studies/orra/orra-store.png": {
    "type": "image/png",
    "etag": '"114a-8Po3Bg8mVlGzWL6gtsHTJm380Bk"',
    "mtime": "2026-09-11T07:49:03.440Z",
    "size": 4426,
    "path": "../public/case-studies/orra/orra-store.png"
  },
  "/case-studies/tarkashastra/aditya-thakare-founder.png": {
    "type": "image/png",
    "etag": '"38e40-A5pDTF+m80fGnWy3SalMzM9ufgE"',
    "mtime": "2026-09-10T10:15:18.172Z",
    "size": 233024,
    "path": "../public/case-studies/tarkashastra/aditya-thakare-founder.png"
  },
  "/case-studies/tarkashastra/tarkashastra-hero-banner-focused.png": {
    "type": "image/png",
    "etag": '"1111b-7S6goguC7by5p8D93eYl6EWm7nk"',
    "mtime": "2026-09-10T11:16:51.613Z",
    "size": 69915,
    "path": "../public/case-studies/tarkashastra/tarkashastra-hero-banner-focused.png"
  },
  "/case-studies/tarkashastra/tarkashastra-growth-graph.png": {
    "type": "image/png",
    "etag": '"76aa-lqt68NNfoJGUpsVtUNGnasOMa/o"',
    "mtime": "2026-09-10T10:15:18.206Z",
    "size": 30378,
    "path": "../public/case-studies/tarkashastra/tarkashastra-growth-graph.png"
  },
  "/case-studies/tarkashastra/tarkashastra-classroom.webp": {
    "type": "image/webp",
    "etag": '"32dd2-Bq+rAB0ToFicQ/yQS/tex6Acihg"',
    "mtime": "2026-09-10T10:15:18.194Z",
    "size": 208338,
    "path": "../public/case-studies/tarkashastra/tarkashastra-classroom.webp"
  },
  "/case-studies/tarkashastra/tarkashastra-hero-1080.png": {
    "type": "image/png",
    "etag": '"14f44-5+BbxziXsHJLa/3/bza6drTwc3g"',
    "mtime": "2026-09-10T11:16:51.399Z",
    "size": 85828,
    "path": "../public/case-studies/tarkashastra/tarkashastra-hero-1080.png"
  },
  "/case-studies/tarkashastra/tarkashastra-hero-clarity-16x9.png": {
    "type": "image/png",
    "etag": '"fac7-1SMf6SBNtD/AdWLa8AAYatB0Y4A"',
    "mtime": "2026-09-10T11:16:51.780Z",
    "size": 64199,
    "path": "../public/case-studies/tarkashastra/tarkashastra-hero-clarity-16x9.png"
  },
  "/case-studies/tarkashastra/tarkashastra-hero-closeup.png": {
    "type": "image/png",
    "etag": '"e34e-wZKPiTEXCsUcAuSgSjgQzcQTPbI"',
    "mtime": "2026-09-10T11:16:51.944Z",
    "size": 58190,
    "path": "../public/case-studies/tarkashastra/tarkashastra-hero-closeup.png"
  },
  "/case-studies/tarkashastra/tarkashastra-hero-banner.webp": {
    "type": "image/webp",
    "etag": '"2fdc4-sm/MKZjsodkXRDwqTYik4uZdeeg"',
    "mtime": "2026-09-10T10:15:18.129Z",
    "size": 196036,
    "path": "../public/case-studies/tarkashastra/tarkashastra-hero-banner.webp"
  },
  "/case-studies/tarkashastra/tarkashastra-hero-perfect-16x9.png": {
    "type": "image/png",
    "etag": '"16bfa-yHbhiGukNzsfk+WAvxlC5plEx8c"',
    "mtime": "2026-09-10T12:35:16.688Z",
    "size": 93178,
    "path": "../public/case-studies/tarkashastra/tarkashastra-hero-perfect-16x9.png"
  },
  "/case-studies/tarkashastra/tarkashastra-results-rank.png": {
    "type": "image/png",
    "etag": '"3d01-eFwOiRXCa5xZ//ajJcVK4vKfELk"',
    "mtime": "2026-09-10T10:15:18.200Z",
    "size": 15617,
    "path": "../public/case-studies/tarkashastra/tarkashastra-results-rank.png"
  },
  "/case-studies/tarkashastra/tarkashastra-hero-readable.png": {
    "type": "image/png",
    "etag": '"f142-fFNWQPE78mnHSiAEzXI+d5sOaN4"',
    "mtime": "2026-09-10T11:16:24.901Z",
    "size": 61762,
    "path": "../public/case-studies/tarkashastra/tarkashastra-hero-readable.png"
  },
  "/case-studies/tarkashastra/tarkashastra-logo.png": {
    "type": "image/png",
    "etag": '"fa32-6hGOkev5WEFT8b3WFvQlXDqVPus"',
    "mtime": "2026-09-10T10:15:18.048Z",
    "size": 64050,
    "path": "../public/case-studies/tarkashastra/tarkashastra-logo.png"
  },
  "/case-studies/nivesh/award2-DoZyalhk.webp": {
    "type": "image/webp",
    "etag": '"1a18-AxjvHoVLFB9W2Gg3nfJpv/oV3G4"',
    "mtime": "2026-09-11T08:11:47.671Z",
    "size": 6680,
    "path": "../public/case-studies/nivesh/award2-DoZyalhk.webp"
  },
  "/case-studies/nivesh/AIF-C3vjIMwN.png": {
    "type": "image/png",
    "etag": '"1a8f7-yOQungtQL3vPa4lbTMyKI2QwYts"',
    "mtime": "2026-09-11T08:11:48.097Z",
    "size": 108791,
    "path": "../public/case-studies/nivesh/AIF-C3vjIMwN.png"
  },
  "/case-studies/tarkashastra/tarkashastra-hero-preview.png": {
    "type": "image/png",
    "etag": '"21f76-U3gjC8zDkGnieEYPc1NX/ftfSIg"',
    "mtime": "2026-09-10T12:53:36.423Z",
    "size": 139126,
    "path": "../public/case-studies/tarkashastra/tarkashastra-hero-preview.png"
  },
  "/case-studies/nivesh/award1-CC6HEy7k.jpeg": {
    "type": "image/jpeg",
    "etag": '"1a020-CxTj+5gPherzMFi+G/E7fLMrRwE"',
    "mtime": "2026-09-11T08:11:47.658Z",
    "size": 106528,
    "path": "../public/case-studies/nivesh/award1-CC6HEy7k.jpeg"
  },
  "/case-studies/nivesh/Bonds-DhPtktF_.png": {
    "type": "image/png",
    "etag": '"16daf-rwQLwCU6i3fyv9K6H3bdjkB6xWY"',
    "mtime": "2026-09-11T08:11:48.132Z",
    "size": 93615,
    "path": "../public/case-studies/nivesh/Bonds-DhPtktF_.png"
  },
  "/case-studies/tarkashastra/tarkashastra-web-preview.png": {
    "type": "image/png",
    "etag": '"21f76-U3gjC8zDkGnieEYPc1NX/ftfSIg"',
    "mtime": "2026-09-10T12:53:36.423Z",
    "size": 139126,
    "path": "../public/case-studies/tarkashastra/tarkashastra-web-preview.png"
  },
  "/case-studies/nivesh/award9-CJnrru8U.jpeg": {
    "type": "image/jpeg",
    "etag": '"46dda-wA5R2T66OPKBvTsd2j3oaNy2Y4A"',
    "mtime": "2026-09-11T08:11:47.705Z",
    "size": 290266,
    "path": "../public/case-studies/nivesh/award9-CJnrru8U.jpeg"
  },
  "/case-studies/nivesh/Bond_Img3-QflqfBHL.png": {
    "type": "image/png",
    "etag": '"1509d-PXkBjzfL+2pCp5HVnzu8HfkQ+u4"',
    "mtime": "2026-09-11T08:11:48.187Z",
    "size": 86173,
    "path": "../public/case-studies/nivesh/Bond_Img3-QflqfBHL.png"
  },
  "/case-studies/nivesh/Bond_Img2-BwL431xI.png": {
    "type": "image/png",
    "etag": '"138f5-NeA6vaCdTz76IMs+n8lpL2c7aX4"',
    "mtime": "2026-09-11T08:11:48.171Z",
    "size": 80117,
    "path": "../public/case-studies/nivesh/Bond_Img2-BwL431xI.png"
  },
  "/case-studies/nivesh/Bond_Img1-C5Q__IpQ.png": {
    "type": "image/png",
    "etag": '"1baf6-ht9JD/4BoXyv3U6FL28tzfX94pY"',
    "mtime": "2026-09-11T08:11:48.155Z",
    "size": 113398,
    "path": "../public/case-studies/nivesh/Bond_Img1-C5Q__IpQ.png"
  },
  "/case-studies/nivesh/bse-JaLD8pPT.jpeg": {
    "type": "image/jpeg",
    "etag": '"5f68-c0Hg1HRL2plbwuiu4RixNXHbKw0"',
    "mtime": "2026-09-11T08:11:47.542Z",
    "size": 24424,
    "path": "../public/case-studies/nivesh/bse-JaLD8pPT.jpeg"
  },
  "/case-studies/nivesh/build_long_term-CG_Qxt5E.png": {
    "type": "image/png",
    "etag": '"1dbb7-Jce6OOdFx/zF6lG0nqgKOdiW2b8"',
    "mtime": "2026-09-11T08:11:48.329Z",
    "size": 121783,
    "path": "../public/case-studies/nivesh/build_long_term-CG_Qxt5E.png"
  },
  "/case-studies/nivesh/build_long_term_graph-C-rF-n5E.png": {
    "type": "image/png",
    "etag": '"209e0-H1KAqqden/uHXz2QQiWyY6AZxHc"',
    "mtime": "2026-09-11T08:11:48.351Z",
    "size": 133600,
    "path": "../public/case-studies/nivesh/build_long_term_graph-C-rF-n5E.png"
  },
  "/case-studies/nivesh/cams-Wu7Q7gM4.jpeg": {
    "type": "image/jpeg",
    "etag": '"111b8-Jolr5UfTboSDBj3Ksogc/5nKUOQ"',
    "mtime": "2026-09-11T08:11:47.557Z",
    "size": 70072,
    "path": "../public/case-studies/nivesh/cams-Wu7Q7gM4.jpeg"
  },
  "/case-studies/nivesh/Crisil-CtnmTEET.svg": {
    "type": "image/svg+xml",
    "etag": '"1f3d-FIHZuswmhnu9moN58vKs6p5vYZU"',
    "mtime": "2026-09-11T08:11:48.079Z",
    "size": 7997,
    "path": "../public/case-studies/nivesh/Crisil-CtnmTEET.svg"
  },
  "/case-studies/nivesh/dashboard_mobile-CWXFsZBo.webp": {
    "type": "image/webp",
    "etag": '"40cc-07RJnaid99+fTMClViN1hqNm548"',
    "mtime": "2026-09-11T08:11:47.449Z",
    "size": 16588,
    "path": "../public/case-studies/nivesh/dashboard_mobile-CWXFsZBo.webp"
  },
  "/case-studies/nivesh/dashboard_webImg-DP8Jk-Hx.jpeg": {
    "type": "image/jpeg",
    "etag": '"215c4-x28W+bysJpx9m0hBN+ydN5i7/yc"',
    "mtime": "2026-09-11T08:11:47.273Z",
    "size": 136644,
    "path": "../public/case-studies/nivesh/dashboard_webImg-DP8Jk-Hx.jpeg"
  },
  "/case-studies/nivesh/Edelweiss-DageiPfu.jpeg": {
    "type": "image/jpeg",
    "etag": '"ccac-PKisb4n4YRJsx0Bjf3eCeAPuTsM"',
    "mtime": "2026-09-11T08:11:47.981Z",
    "size": 52396,
    "path": "../public/case-studies/nivesh/Edelweiss-DageiPfu.jpeg"
  },
  "/case-studies/nivesh/footer3-DPZoaiTm.jpeg": {
    "type": "image/jpeg",
    "etag": '"16e5-ulsLUJaiUgEvUP0aVQlZ4//04y8"',
    "mtime": "2026-09-11T08:11:47.134Z",
    "size": 5861,
    "path": "../public/case-studies/nivesh/footer3-DPZoaiTm.jpeg"
  },
  "/case-studies/nivesh/FD-jvl7Yd-a.jpeg": {
    "type": "image/jpeg",
    "etag": '"c263-W1tO0Tcw4nuomBaSwVEBnJz7pDc"',
    "mtime": "2026-09-11T08:11:48.068Z",
    "size": 49763,
    "path": "../public/case-studies/nivesh/FD-jvl7Yd-a.jpeg"
  },
  "/case-studies/nivesh/gupshup-BFt7SftR.jpeg": {
    "type": "image/jpeg",
    "etag": '"7ba7-/HLvj+HTpd1V63FaZqlRVNs1JIM"',
    "mtime": "2026-09-11T08:11:47.569Z",
    "size": 31655,
    "path": "../public/case-studies/nivesh/gupshup-BFt7SftR.jpeg"
  },
  "/case-studies/nivesh/Favicon-CGSoNZEt.png": {
    "type": "image/png",
    "etag": '"356d0-KBMRAFKxsO89WLjVNN8NORh6LgI"',
    "mtime": "2026-09-11T08:11:47.529Z",
    "size": 218832,
    "path": "../public/case-studies/nivesh/Favicon-CGSoNZEt.png"
  },
  "/case-studies/nivesh/graph-DYxVvHQP.webp": {
    "type": "image/webp",
    "etag": '"ef34-yBWSOj4VAF2glBJ7xGQTZ0anQuM"',
    "mtime": "2026-09-11T08:11:47.931Z",
    "size": 61236,
    "path": "../public/case-studies/nivesh/graph-DYxVvHQP.webp"
  },
  "/case-studies/nivesh/g_image2-mZ7VLJE0.webp": {
    "type": "image/webp",
    "etag": '"141fa-GNfPtVy+OKGxRtKZZ43qKFK7Ymk"',
    "mtime": "2026-09-11T08:11:48.385Z",
    "size": 82426,
    "path": "../public/case-studies/nivesh/g_image2-mZ7VLJE0.webp"
  },
  "/case-studies/nivesh/gift_city-DJuWLYie.jpeg": {
    "type": "image/jpeg",
    "etag": '"26b5a-1/Bdq9sC7v4uxTIIpTNIrmC5v+s"',
    "mtime": "2026-09-11T08:11:48.032Z",
    "size": 158554,
    "path": "../public/case-studies/nivesh/gift_city-DJuWLYie.jpeg"
  },
  "/case-studies/nivesh/g_image3-dFjWlNkb.webp": {
    "type": "image/webp",
    "etag": '"114a4-j7Wh5xB69v2juK1+MoP2i8K0PoE"',
    "mtime": "2026-09-11T08:11:48.400Z",
    "size": 70820,
    "path": "../public/case-studies/nivesh/g_image3-dFjWlNkb.webp"
  },
  "/case-studies/nivesh/g_image1-D16qicMc.webp": {
    "type": "image/webp",
    "etag": '"175b2-cPedRsrPwStXdNwEwCJz9ehBLxo"',
    "mtime": "2026-09-11T08:11:48.369Z",
    "size": 95666,
    "path": "../public/case-studies/nivesh/g_image1-D16qicMc.webp"
  },
  "/case-studies/nivesh/g_image4-gwzqHKn3.webp": {
    "type": "image/webp",
    "etag": '"137ce-kr+kPSayW5Cr1dF9yL2CiYGSBNA"',
    "mtime": "2026-09-11T08:11:48.415Z",
    "size": 79822,
    "path": "../public/case-studies/nivesh/g_image4-gwzqHKn3.webp"
  },
  "/case-studies/nivesh/g_image5-DcmuM8Aw.webp": {
    "type": "image/webp",
    "etag": '"130de-wmYKHofTb+H14WSgKh2IZvZoK/o"',
    "mtime": "2026-09-11T08:11:48.434Z",
    "size": 78046,
    "path": "../public/case-studies/nivesh/g_image5-DcmuM8Aw.webp"
  },
  "/case-studies/nivesh/Hero2-BaAHGbHw.jpeg": {
    "type": "image/jpeg",
    "etag": '"1a3f1-Lr8ImhWNPe/qhMTOuC5KTZcjRaU"',
    "mtime": "2026-09-11T08:11:47.246Z",
    "size": 107505,
    "path": "../public/case-studies/nivesh/Hero2-BaAHGbHw.jpeg"
  },
  "/case-studies/nivesh/IncredWealth-DHid2oB5.jpeg": {
    "type": "image/jpeg",
    "etag": '"314f-uxT3inHcqwTPvfGcH5YyR3OLbL4"',
    "mtime": "2026-09-11T08:11:47.992Z",
    "size": 12623,
    "path": "../public/case-studies/nivesh/IncredWealth-DHid2oB5.jpeg"
  },
  "/case-studies/nivesh/investor1-C_wmNoY0.svg": {
    "type": "image/svg+xml",
    "etag": '"5f23-PI6R59GQoEBjkAk7P491VAN3bd4"',
    "mtime": "2026-09-11T08:11:47.746Z",
    "size": 24355,
    "path": "../public/case-studies/nivesh/investor1-C_wmNoY0.svg"
  },
  "/case-studies/nivesh/investor2-DrbQ2k82.svg": {
    "type": "image/svg+xml",
    "etag": '"617c-QqpM30Pfgr4MRFUt+Bs2TY9EIOw"',
    "mtime": "2026-09-11T08:11:47.761Z",
    "size": 24956,
    "path": "../public/case-studies/nivesh/investor2-DrbQ2k82.svg"
  },
  "/case-studies/nivesh/karvy-BgaRCMKb.jpeg": {
    "type": "image/jpeg",
    "etag": '"6177-7BzD4rFd/8Ga68YYcFW1+LKHQPU"',
    "mtime": "2026-09-11T08:11:47.582Z",
    "size": 24951,
    "path": "../public/case-studies/nivesh/karvy-BgaRCMKb.jpeg"
  },
  "/case-studies/nivesh/investor3-DWH4lGzP.svg": {
    "type": "image/svg+xml",
    "etag": '"ce83-Bw+CaiVvfuYgXrlK5M58tfin6Dw"',
    "mtime": "2026-09-11T08:11:47.776Z",
    "size": 52867,
    "path": "../public/case-studies/nivesh/investor3-DWH4lGzP.svg"
  },
  "/case-studies/nivesh/Hero1-CGoebXP4.png": {
    "type": "image/png",
    "etag": '"a7a45-vVl2bHo+NnZ4AZpqJtUqKZoF3gY"',
    "mtime": "2026-09-11T08:11:47.208Z",
    "size": 686661,
    "path": "../public/case-studies/nivesh/Hero1-CGoebXP4.png"
  },
  "/case-studies/nivesh/LAS-B-7hmwkr.png": {
    "type": "image/png",
    "etag": '"163b2-TMbi3vTEs7PNuK1hAOR1BLiO0Yw"',
    "mtime": "2026-09-11T08:11:48.205Z",
    "size": 91058,
    "path": "../public/case-studies/nivesh/LAS-B-7hmwkr.png"
  },
  "/case-studies/nivesh/mf-v3t4AsKJ.jpeg": {
    "type": "image/jpeg",
    "etag": '"6e21-joC95LI45JPuFHT5i0zgCR1ncz4"',
    "mtime": "2026-09-11T08:11:47.610Z",
    "size": 28193,
    "path": "../public/case-studies/nivesh/mf-v3t4AsKJ.jpeg"
  },
  "/case-studies/nivesh/MiraeAsset-C6HfgQfz.png": {
    "type": "image/png",
    "etag": '"1d03-Z5SIwaiMsOwBxtAMg5+E+AgwQVQ"',
    "mtime": "2026-09-11T08:11:48.215Z",
    "size": 7427,
    "path": "../public/case-studies/nivesh/MiraeAsset-C6HfgQfz.png"
  },
  "/case-studies/nivesh/MLD2-CFTp2ygP.webp": {
    "type": "image/webp",
    "etag": '"706c-gJVvP/JPKwRWntgbMP8wDEEFB1Q"',
    "mtime": "2026-09-11T08:11:47.966Z",
    "size": 28780,
    "path": "../public/case-studies/nivesh/MLD2-CFTp2ygP.webp"
  },
  "/case-studies/nivesh/MLD-BrlcbYbo.jpeg": {
    "type": "image/jpeg",
    "etag": '"2644a-UldVISpcL2wJvQua8RnIWRK7J1g"',
    "mtime": "2026-09-11T08:11:47.953Z",
    "size": 156746,
    "path": "../public/case-studies/nivesh/MLD-BrlcbYbo.jpeg"
  },
  "/case-studies/nivesh/MutualFunds-IbZ2MoGH.jpeg": {
    "type": "image/jpeg",
    "etag": '"247bf-pXW+xUiiPTCoXj5SKZul5lCcM3M"',
    "mtime": "2026-09-11T08:11:48.456Z",
    "size": 149439,
    "path": "../public/case-studies/nivesh/MutualFunds-IbZ2MoGH.jpeg"
  },
  "/case-studies/nivesh/nivesh-logo.png": {
    "type": "image/png",
    "etag": '"44d7-9I+kjjjDJMZmhFpIzGIB3Slr0Fg"',
    "mtime": "2026-09-11T08:18:41.791Z",
    "size": 17623,
    "path": "../public/case-studies/nivesh/nivesh-logo.png"
  },
  "/case-studies/nivesh/nivesh-hero-preview.png": {
    "type": "image/png",
    "etag": '"2f198-WIirUhhDEXCN+Sc5si+TKYPGCG4"',
    "mtime": "2026-09-11T08:19:36.029Z",
    "size": 192920,
    "path": "../public/case-studies/nivesh/nivesh-hero-preview.png"
  },
  "/case-studies/nivesh/NPS-aGk6u5AR.png": {
    "type": "image/png",
    "etag": '"119ee-M6TXUKldPvywVcvCVAIiXFZYpHs"',
    "mtime": "2026-09-11T08:11:48.114Z",
    "size": 72174,
    "path": "../public/case-studies/nivesh/NPS-aGk6u5AR.png"
  },
  "/case-studies/nivesh/OurStory-DIzP_d_f.png": {
    "type": "image/png",
    "etag": '"fdac-enfT/GYUMG/x65uVAOUS79tTi2w"',
    "mtime": "2026-09-11T08:11:47.720Z",
    "size": 64940,
    "path": "../public/case-studies/nivesh/OurStory-DIzP_d_f.png"
  },
  "/case-studies/nivesh/nivesh-team-BXcO4eCc.jpeg": {
    "type": "image/jpeg",
    "etag": '"2056f-BWNIg5RLwV+dnPmfUL0TaJbxcv4"',
    "mtime": "2026-09-11T08:11:47.894Z",
    "size": 132463,
    "path": "../public/case-studies/nivesh/nivesh-team-BXcO4eCc.jpeg"
  },
  "/case-studies/nivesh/partner2-CzGuEXLM.svg": {
    "type": "image/svg+xml",
    "etag": '"16de-pzZu+tsIbEskIfFj8PqTTue4wF4"',
    "mtime": "2026-09-11T08:11:47.809Z",
    "size": 5854,
    "path": "../public/case-studies/nivesh/partner2-CzGuEXLM.svg"
  },
  "/case-studies/nivesh/ONDC-DqdWeVEF.jpeg": {
    "type": "image/jpeg",
    "etag": '"b923-qTirnSkdAdNnUaXhnk6C0TtNZNU"',
    "mtime": "2026-09-11T08:11:47.596Z",
    "size": 47395,
    "path": "../public/case-studies/nivesh/ONDC-DqdWeVEF.jpeg"
  },
  "/case-studies/nivesh/partner3-Dx_8tBhX.svg": {
    "type": "image/svg+xml",
    "etag": '"36b2-lLng8QPb7goEAjejJFpmbWokE1o"',
    "mtime": "2026-09-11T08:11:47.828Z",
    "size": 14002,
    "path": "../public/case-studies/nivesh/partner3-Dx_8tBhX.svg"
  },
  "/case-studies/nivesh/partner4-VawfA-e2.svg": {
    "type": "image/svg+xml",
    "etag": '"452f-UdzQieBdhN8uTBuRgBuuybpVv7M"',
    "mtime": "2026-09-11T08:11:47.839Z",
    "size": 17711,
    "path": "../public/case-studies/nivesh/partner4-VawfA-e2.svg"
  },
  "/case-studies/nivesh/partner1-Cih3wwMc.svg": {
    "type": "image/svg+xml",
    "etag": '"26585-s74YlgwYhIgzcFx0qN85KeKoF/w"',
    "mtime": "2026-09-11T08:11:47.799Z",
    "size": 157061,
    "path": "../public/case-studies/nivesh/partner1-Cih3wwMc.svg"
  },
  "/case-studies/nivesh/partner6-Bus4sd8Z.svg": {
    "type": "image/svg+xml",
    "etag": '"7a42-MGpgNazRtHMTTCnXx2P9hnk+CZ0"',
    "mtime": "2026-09-11T08:11:47.873Z",
    "size": 31298,
    "path": "../public/case-studies/nivesh/partner6-Bus4sd8Z.svg"
  },
  "/case-studies/nivesh/partner5-BDkvVPi_.svg": {
    "type": "image/svg+xml",
    "etag": '"23727-lfdEqPt4BFjQ1CecAzcazaVRt30"',
    "mtime": "2026-09-11T08:11:47.861Z",
    "size": 145191,
    "path": "../public/case-studies/nivesh/partner5-BDkvVPi_.svg"
  },
  "/case-studies/nivesh/formImg-DNPqlnFT.jpg": {
    "type": "image/jpeg",
    "etag": '"1b8506-PB8sU4O78bVZhHrkNOp3WseQE/0"',
    "mtime": "2026-09-11T08:11:47.438Z",
    "size": 1803526,
    "path": "../public/case-studies/nivesh/formImg-DNPqlnFT.jpg"
  },
  "/case-studies/nivesh/Person-Ue3o_J1z.webp": {
    "type": "image/webp",
    "etag": '"2346e-bd4I+xhac423+SDLVvtptoaYKak"',
    "mtime": "2026-09-11T08:11:47.916Z",
    "size": 144494,
    "path": "../public/case-studies/nivesh/Person-Ue3o_J1z.webp"
  },
  "/case-studies/nivesh/PFR-CwRNt8Ya.png": {
    "type": "image/png",
    "etag": '"9e45-xcNA38j+v4S5zOCIzfQ0gLzDgTE"',
    "mtime": "2026-09-11T08:11:48.266Z",
    "size": 40517,
    "path": "../public/case-studies/nivesh/PFR-CwRNt8Ya.png"
  },
  "/case-studies/nivesh/PMS-DvCyB2zS.png": {
    "type": "image/png",
    "etag": '"17e18-2MVKwwF82Z/GDHhsN6Me5XkDkoc"',
    "mtime": "2026-09-11T08:11:48.253Z",
    "size": 97816,
    "path": "../public/case-studies/nivesh/PMS-DvCyB2zS.png"
  },
  "/case-studies/nivesh/POP-C9hbATE3.webp": {
    "type": "image/webp",
    "etag": '"8296-M2tBCN1aocX/vYLf3auKXqYk9fo"',
    "mtime": "2026-09-11T08:11:48.008Z",
    "size": 33430,
    "path": "../public/case-studies/nivesh/POP-C9hbATE3.webp"
  },
  "/case-studies/nivesh/Save_for_Child-D331mHqJ.png": {
    "type": "image/png",
    "etag": '"1b68a-aRvjmotQhyXJuSoapyiSk7hLs/A"',
    "mtime": "2026-09-11T08:11:48.292Z",
    "size": 112266,
    "path": "../public/case-studies/nivesh/Save_for_Child-D331mHqJ.png"
  },
  "/case-studies/nivesh/Save_Tax-CcZelLao.png": {
    "type": "image/png",
    "etag": '"137b5-+AeXHa3aqtfDspVtkWr6Rvz3cO4"',
    "mtime": "2026-09-11T08:11:48.309Z",
    "size": 79797,
    "path": "../public/case-studies/nivesh/Save_Tax-CcZelLao.png"
  },
  "/case-studies/nivesh/sendgrid-BELMV98K.jpeg": {
    "type": "image/jpeg",
    "etag": '"576d-KhD5aBK5D5venbACvR5DyEpzGDA"',
    "mtime": "2026-09-11T08:11:47.623Z",
    "size": 22381,
    "path": "../public/case-studies/nivesh/sendgrid-BELMV98K.jpeg"
  },
  "/case-studies/nivesh/Shridhar-DuSXL5On.png": {
    "type": "image/png",
    "etag": '"fae6-ISq5U7e1bjR3lCMFvXnzTaXkC6g"',
    "mtime": "2026-09-11T08:11:47.735Z",
    "size": 64230,
    "path": "../public/case-studies/nivesh/Shridhar-DuSXL5On.png"
  },
  "/case-studies/nivesh/StandardChartered-BurlfyhF.png": {
    "type": "image/png",
    "etag": '"2099d-C8E1ZCwiKNElX6FnIdmdzsfglmo"',
    "mtime": "2026-09-11T08:11:48.236Z",
    "size": 133533,
    "path": "../public/case-studies/nivesh/StandardChartered-BurlfyhF.png"
  },
  "/case-studies/nivesh/whatsapp-BD452o7w.jpeg": {
    "type": "image/jpeg",
    "etag": '"6829-veNjfJqsBD+P9bsQVI09aS4dXq8"',
    "mtime": "2026-09-11T08:11:47.636Z",
    "size": 26665,
    "path": "../public/case-studies/nivesh/whatsapp-BD452o7w.jpeg"
  },
  "/case-studies/nivesh/Unlisted_Share-BvLmdeqg.jpeg": {
    "type": "image/jpeg",
    "etag": '"22f39-XU1Ooy0Ni8j9ABBp8CwDBzIgd5M"',
    "mtime": "2026-09-11T08:11:48.054Z",
    "size": 143161,
    "path": "../public/case-studies/nivesh/Unlisted_Share-BvLmdeqg.jpeg"
  },
  "/case-studies/nivesh/Website-Home-Page-Design-D7JLAhhb.png": {
    "type": "image/png",
    "etag": '"6ed65-NYvOn5BQKxlanegDS9FqW+CzOoU"',
    "mtime": "2026-09-11T08:11:47.500Z",
    "size": 453989,
    "path": "../public/case-studies/nivesh/Website-Home-Page-Design-D7JLAhhb.png"
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
