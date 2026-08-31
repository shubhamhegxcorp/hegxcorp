import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { g as getWebsiteSection, s as saveWebsiteSection } from "./router-CGOjT-Wf.mjs";
import { D as DEFAULT_CMS_SECTIONS } from "./cms-config-CJ9tlu-0.mjs";
import "../_libs/seroval.mjs";
import "../_libs/gsap__react.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { b7 as Pen, n as Check, X, at as Plus, aw as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "./createSsrRpc-DcZ7Clyk.mjs";
import "./server-yv7ZiuMh.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./lead-source-C0KU7OxF.mjs";
import "../_libs/lenis.mjs";
import "./blog-drafts-D6gaYuCP.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/react-hook-form.mjs";
import "../_libs/hookform__resolvers.mjs";
import "./contact-inquiries-JN2Pe8Z0.mjs";
import "../_libs/gsap.mjs";
import "../_libs/tiptap__extension-placeholder.mjs";
import "../_libs/tiptap__react.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/tiptap__core.mjs";
import "../_libs/prosemirror-transform.mjs";
import "../_libs/prosemirror-model.mjs";
import "../_libs/orderedmap.mjs";
import "../_libs/prosemirror-commands.mjs";
import "../_libs/prosemirror-state.mjs";
import "../_libs/prosemirror-schema-list.mjs";
import "../_libs/prosemirror-view.mjs";
import "../_libs/prosemirror-keymap.mjs";
import "../_libs/w3c-keyname.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/linkifyjs.mjs";
import "../_libs/prosemirror-dropcursor.mjs";
import "../_libs/prosemirror-gapcursor.mjs";
import "../_libs/prosemirror-history.mjs";
import "../_libs/rope-sequence.mjs";
import "../_libs/tiptap__extension-blockquote.mjs";
import "../_libs/tiptap__extension-bold.mjs";
import "../_libs/tiptap__extension-code.mjs";
import "../_libs/tiptap__extension-code-block.mjs";
import "../_libs/tiptap__extension-document.mjs";
import "../_libs/tiptap__extension-hard-break.mjs";
import "../_libs/tiptap__extension-heading.mjs";
import "../_libs/@tiptap/extension-horizontal-rule+[...].mjs";
import "../_libs/tiptap__extension-italic.mjs";
import "../_libs/tiptap__extension-list.mjs";
import "../_libs/tiptap__extension-paragraph.mjs";
import "../_libs/tiptap__extension-strike.mjs";
import "../_libs/tiptap__extension-text.mjs";
import "../_libs/tiptap__extension-underline.mjs";
function AdminProductsCMS() {
  const [activeSection, setActiveSection] = reactExports.useState(null);
  const [hero, setHero] = reactExports.useState(null);
  const [list, setList] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    async function loadData() {
      try {
        const [heroData, listData] = await Promise.all([
          getWebsiteSection({
            data: {
              key: "products.hero",
            },
          }),
          getWebsiteSection({
            data: {
              key: "products.list",
            },
          }),
        ]);
        setHero(heroData || DEFAULT_CMS_SECTIONS["products.hero"]);
        setList(listData || DEFAULT_CMS_SECTIONS["products.list"]);
      } catch (err) {
        console.error("Failed to load products CMS data:", err);
        toast.error("Failed to load website content.");
      } finally {
        setLoading(false);
      }
    }
    void loadData();
  }, []);
  const handleSave = async (key, value) => {
    try {
      await saveWebsiteSection({
        data: {
          key,
          value,
        },
      });
      toast.success("Section updated successfully!");
      setActiveSection(null);
    } catch (err) {
      console.error("Save failed:", err);
      toast.error("Failed to save changes.");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "flex min-h-[400px] items-center justify-center",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "text-sm font-bold text-slate-500",
        children: "Loading website content...",
      }),
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-8 p-6 lg:p-8",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "border-b border-[#E4E7EC] pb-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "text-sm text-slate-500",
          children:
            "Manage and edit products, SaaS solutions, and visual assets listed on the Products page.",
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                    className: "text-lg font-black text-[#06133D]",
                    children: "Hero Section",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-slate-500",
                    children: "Intro headline and subtitle copy",
                  }),
                ],
              }),
              activeSection !== "hero"
                ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    onClick: () => setActiveSection("hero"),
                    className:
                      "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" }),
                      " Edit",
                    ],
                  })
                : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                        onClick: () => void handleSave("products.hero", hero),
                        className:
                          "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, {
                            className: "h-3.5 w-3.5",
                          }),
                          " Save",
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                        onClick: () => {
                          setActiveSection(null);
                          getWebsiteSection({
                            data: {
                              key: "products.hero",
                            },
                          }).then((res) => setHero(res));
                        },
                        className:
                          "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
                          " Cancel",
                        ],
                      }),
                    ],
                  }),
            ],
          }),
          activeSection === "hero"
            ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-6 space-y-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "grid gap-4 sm:grid-cols-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                        className: "grid gap-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className: "text-xs font-bold uppercase tracking-wider text-slate-500",
                            children: "Tagline",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: hero.tagline,
                            onChange: (e) =>
                              setHero({
                                ...hero,
                                tagline: e.target.value,
                              }),
                            className:
                              "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                        className: "grid gap-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className: "text-xs font-bold uppercase tracking-wider text-slate-500",
                            children: "Headline Title",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: hero.title,
                            onChange: (e) =>
                              setHero({
                                ...hero,
                                title: e.target.value,
                              }),
                            className:
                              "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                    className: "grid gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "text-xs font-bold uppercase tracking-wider text-slate-500",
                        children: "Description",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
                        rows: 3,
                        value: hero.description,
                        onChange: (e) =>
                          setHero({
                            ...hero,
                            description: e.target.value,
                          }),
                        className:
                          "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]",
                      }),
                    ],
                  }),
                ],
              })
            : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-4 space-y-2 text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "font-bold text-[#06133D]",
                        children: "Headline:",
                      }),
                      " ",
                      hero.title,
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "font-bold text-[#06133D]",
                        children: "Description:",
                      }),
                      " ",
                      hero.description,
                    ],
                  }),
                ],
              }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                    className: "text-lg font-black text-[#06133D]",
                    children: "Products List",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-slate-500",
                    children: "Add, remove and manage pricing of dynamic software/SaaS products",
                  }),
                ],
              }),
              activeSection !== "list"
                ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    onClick: () => setActiveSection("list"),
                    className:
                      "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" }),
                      " Edit",
                    ],
                  })
                : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                        onClick: () => void handleSave("products.list", list),
                        className:
                          "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, {
                            className: "h-3.5 w-3.5",
                          }),
                          " Save",
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                        onClick: () => {
                          setActiveSection(null);
                          getWebsiteSection({
                            data: {
                              key: "products.list",
                            },
                          }).then((res) => setList(res));
                        },
                        className:
                          "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
                          " Cancel",
                        ],
                      }),
                    ],
                  }),
            ],
          }),
          activeSection === "list"
            ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-6 space-y-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "text-sm font-black text-[#06133D]",
                        children: "Products / SaaS items",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                        type: "button",
                        onClick: () => {
                          const items = [...list.products];
                          items.push({
                            title: "New Product",
                            description: "Description of the product",
                            price: "Contact for pricing",
                            buttonText: "Request Access",
                            buttonUrl: "/contact",
                            features: ["Feature point 1"],
                          });
                          setList({
                            ...list,
                            products: items,
                          });
                        },
                        className:
                          "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
                          " Add Product",
                        ],
                      }),
                    ],
                  }),
                  list.products.map((item, idx) =>
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className:
                          "rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4 space-y-4",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                                className:
                                  "text-xs font-black text-[#FC9C44] uppercase tracking-wider",
                                children: ["Product #", idx + 1],
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                                type: "button",
                                onClick: () => {
                                  const items = list.products.filter((_, i) => i !== idx);
                                  setList({
                                    ...list,
                                    products: items,
                                  });
                                },
                                className:
                                  "rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, {
                                  className: "h-4 w-4",
                                }),
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                            className: "grid gap-4 sm:grid-cols-3",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                                className: "grid gap-1",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "text-[10px] font-bold text-slate-400",
                                    children: "PRODUCT NAME",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                                    type: "text",
                                    value: item.title,
                                    onChange: (e) => {
                                      const items = [...list.products];
                                      items[idx].title = e.target.value;
                                      setList({
                                        ...list,
                                        products: items,
                                      });
                                    },
                                    className:
                                      "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]",
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                                className: "grid gap-1",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "text-[10px] font-bold text-slate-400",
                                    children: "PRICE INFO",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                                    type: "text",
                                    value: item.price,
                                    onChange: (e) => {
                                      const items = [...list.products];
                                      items[idx].price = e.target.value;
                                      setList({
                                        ...list,
                                        products: items,
                                      });
                                    },
                                    className:
                                      "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]",
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                                className: "grid gap-1",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "text-[10px] font-bold text-slate-400",
                                    children: "BUTTON LABEL",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                                    type: "text",
                                    value: item.buttonText,
                                    onChange: (e) => {
                                      const items = [...list.products];
                                      items[idx].buttonText = e.target.value;
                                      setList({
                                        ...list,
                                        products: items,
                                      });
                                    },
                                    className:
                                      "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]",
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                                className: "grid gap-1",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "text-[10px] font-bold text-slate-400",
                                    children: "BUTTON URL",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                                    type: "text",
                                    value: item.buttonUrl,
                                    onChange: (e) => {
                                      const items = [...list.products];
                                      items[idx].buttonUrl = e.target.value;
                                      setList({
                                        ...list,
                                        products: items,
                                      });
                                    },
                                    className:
                                      "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]",
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                                className: "sm:col-span-2 grid gap-1",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "text-[10px] font-bold text-slate-400",
                                    children: "DESCRIPTION",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                                    type: "text",
                                    value: item.description,
                                    onChange: (e) => {
                                      const items = [...list.products];
                                      items[idx].description = e.target.value;
                                      setList({
                                        ...list,
                                        products: items,
                                      });
                                    },
                                    className:
                                      "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                            className: "pl-4 border-l-2 border-slate-200 space-y-2",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: "text-[10px] font-bold text-slate-400",
                                    children: "PRODUCT FEATURES",
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      const items = [...list.products];
                                      items[idx].features.push("New Feature");
                                      setList({
                                        ...list,
                                        products: items,
                                      });
                                    },
                                    className:
                                      "text-[10px] text-[#FC9C44] font-bold hover:underline",
                                    children: "+ Add Feature",
                                  }),
                                ],
                              }),
                              item.features.map((feature, fIdx) =>
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "div",
                                  {
                                    className: "flex gap-2 items-center",
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                                        type: "text",
                                        value: feature,
                                        onChange: (e) => {
                                          const items = [...list.products];
                                          items[idx].features[fIdx] = e.target.value;
                                          setList({
                                            ...list,
                                            products: items,
                                          });
                                        },
                                        className:
                                          "flex-1 rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none",
                                      }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                          const items = [...list.products];
                                          items[idx].features = items[idx].features.filter(
                                            (_, i) => i !== fIdx,
                                          );
                                          setList({
                                            ...list,
                                            products: items,
                                          });
                                        },
                                        className: "text-red-500 hover:text-red-700",
                                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, {
                                          className: "h-3 w-3",
                                        }),
                                      }),
                                    ],
                                  },
                                  fIdx,
                                ),
                              ),
                            ],
                          }),
                        ],
                      },
                      idx,
                    ),
                  ),
                ],
              })
            : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-4 space-y-3 text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                    className: "font-bold text-[#06133D] block",
                    children: ["Products Grid Preview (", list.products.length, "):"],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: list.products.map((item, idx) =>
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                  className: "font-black text-[#06133D] text-xs",
                                  children: item.title,
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded",
                                  children: item.price,
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                              className: "text-[11px] text-slate-500 leading-relaxed mt-1",
                              children: item.description,
                            }),
                          ],
                        },
                        idx,
                      ),
                    ),
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
export { AdminProductsCMS as component };
