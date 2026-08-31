import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as cn } from "./router-aQpsgqE2.mjs";
function BrowserPreview({
  children,
  src,
  alt = "Browser Preview",
  className,
  innerClassName,
  aspectRatio = "video",
  proofLabel,
  proofDuration,
  proofMetric,
  url
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_16px_36px_rgba(29,39,66,0.06)] overflow-hidden transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-[#FF5F56]/60 transition-all duration-300 ease-out group-hover:bg-[#FF5F56] group-hover:scale-[1.05]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-[#FFBD2E]/60 transition-all duration-300 ease-out group-hover:bg-[#FFBD2E] group-hover:scale-[1.05]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-[#27C93F]/60 transition-all duration-300 ease-out group-hover:bg-[#27C93F] group-hover:scale-[1.05]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 max-w-[280px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[9px] text-[#9CA3AF] font-mono text-center select-none truncate", children: url || "www.hegxcorp-client.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "overflow-hidden bg-[#FAFAF8] relative",
              aspectRatio === "video" && "aspect-video",
              aspectRatio === "square" && "aspect-square",
              aspectRatio === "auto" && "h-auto",
              innerClassName
            ),
            children: [
              src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src,
                  alt,
                  className: "w-full h-full object-cover object-top transition-transform duration-[350ms] ease-out group-hover:scale-[1.01]",
                  loading: "lazy"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full transition-transform duration-[350ms] ease-out group-hover:scale-[1.01]", children }),
              (proofLabel || proofDuration || proofMetric) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-[#EAEAEA] rounded-lg p-3.5 shadow-lg flex items-center gap-4 max-w-[280px] z-10 transition-all duration-[350ms] ease-out group-hover:translate-y-[-3px] group-hover:shadow-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  proofMetric && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-sm font-bold text-[#1D2742] tracking-tight truncate leading-tight",
                      style: { fontFamily: "'Space Grotesk', sans-serif" },
                      children: proofMetric
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-[#FC9C44] uppercase tracking-wider mt-0.5 leading-none", children: proofLabel }),
                  proofDuration && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-[#6B7280] font-medium uppercase tracking-wider mt-1 leading-none", children: [
                    "Timeline: ",
                    proofDuration
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-8 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", viewBox: "0 0 100 40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "sparkline-grad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#FC9C44", stopOpacity: "0.2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#FC9C44", stopOpacity: "0" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M 0 40 L 0 35 L 20 28 L 40 32 L 60 18 L 80 12 L 100 2 L 100 40 Z",
                      fill: "url(#sparkline-grad)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M 0 35 L 20 28 L 40 32 L 60 18 L 80 12 L 100 2",
                      fill: "none",
                      stroke: "#FC9C44",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "2", r: "2.5", fill: "#FC9C44" })
                ] }) })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  BrowserPreview as B
};
