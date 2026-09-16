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
import {
  b7 as Pen,
  n as Check,
  X,
  at as Plus,
  b8 as ArrowUp,
  b9 as ArrowDown,
  aw as Trash2,
} from "../_libs/lucide-react.mjs";
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
function AdminAboutCMS() {
  const [activeSection, setActiveSection] = reactExports.useState(null);
  const [hero, setHero] = reactExports.useState(null);
  const [whoWeAre, setWhoWeAre] = reactExports.useState(null);
  const [ourMission, setOurMission] = reactExports.useState(null);
  const [ourValues, setOurValues] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    async function loadData() {
      try {
        const [heroData, whoWeAreData, ourMissionData, ourValuesData] = await Promise.all([
          getWebsiteSection({
            data: {
              key: "about.hero",
            },
          }),
          getWebsiteSection({
            data: {
              key: "about.whoWeAre",
            },
          }),
          getWebsiteSection({
            data: {
              key: "about.ourMission",
            },
          }),
          getWebsiteSection({
            data: {
              key: "about.ourValues",
            },
          }),
        ]);
        setHero(heroData || DEFAULT_CMS_SECTIONS["about.hero"]);
        setWhoWeAre(whoWeAreData || DEFAULT_CMS_SECTIONS["about.whoWeAre"]);
        setOurMission(ourMissionData || DEFAULT_CMS_SECTIONS["about.ourMission"]);
        setOurValues(ourValuesData || DEFAULT_CMS_SECTIONS["about.ourValues"]);
      } catch (err) {
        console.error("Failed to load about CMS data:", err);
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
          children: "Manage and edit all frontend About page sections.",
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
                    children: "Hero introduction banner",
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
                        onClick: () => void handleSave("about.hero", hero),
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
                              key: "about.hero",
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
                            children: "Headline",
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
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "grid gap-4 sm:grid-cols-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                        className: "grid gap-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className: "text-xs font-bold uppercase tracking-wider text-slate-500",
                            children: "Primary Button Label",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: hero.buttonText,
                            onChange: (e) =>
                              setHero({
                                ...hero,
                                buttonText: e.target.value,
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
                            children: "Primary Button URL",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: hero.buttonUrl,
                            onChange: (e) =>
                              setHero({
                                ...hero,
                                buttonUrl: e.target.value,
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
                            children: "Secondary Button Label",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: hero.secondaryButtonText,
                            onChange: (e) =>
                              setHero({
                                ...hero,
                                secondaryButtonText: e.target.value,
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
                            children: "Secondary Button URL",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: hero.secondaryButtonUrl,
                            onChange: (e) =>
                              setHero({
                                ...hero,
                                secondaryButtonUrl: e.target.value,
                              }),
                            className:
                              "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]",
                          }),
                        ],
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
                    children: "Who We Are",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-slate-500",
                    children: "Overview copy with team image reference",
                  }),
                ],
              }),
              activeSection !== "whoWeAre"
                ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    onClick: () => setActiveSection("whoWeAre"),
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
                        onClick: () => void handleSave("about.whoWeAre", whoWeAre),
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
                              key: "about.whoWeAre",
                            },
                          }).then((res) => setWhoWeAre(res));
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
          activeSection === "whoWeAre"
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
                            value: whoWeAre.tagline,
                            onChange: (e) =>
                              setWhoWeAre({
                                ...whoWeAre,
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
                            children: "Title",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: whoWeAre.title,
                            onChange: (e) =>
                              setWhoWeAre({
                                ...whoWeAre,
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
                        rows: 4,
                        value: whoWeAre.description,
                        onChange: (e) =>
                          setWhoWeAre({
                            ...whoWeAre,
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
                        children: "Title:",
                      }),
                      " ",
                      whoWeAre.title,
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "font-bold text-[#06133D]",
                        children: "Description:",
                      }),
                      " ",
                      whoWeAre.description,
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
                    children: "Our Mission",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-slate-500",
                    children: "Overview copy with mission image reference",
                  }),
                ],
              }),
              activeSection !== "ourMission"
                ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    onClick: () => setActiveSection("ourMission"),
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
                        onClick: () => void handleSave("about.ourMission", ourMission),
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
                              key: "about.ourMission",
                            },
                          }).then((res) => setOurMission(res));
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
          activeSection === "ourMission"
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
                            value: ourMission.tagline,
                            onChange: (e) =>
                              setOurMission({
                                ...ourMission,
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
                            children: "Title",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: ourMission.title,
                            onChange: (e) =>
                              setOurMission({
                                ...ourMission,
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
                        rows: 4,
                        value: ourMission.description,
                        onChange: (e) =>
                          setOurMission({
                            ...ourMission,
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
                        children: "Title:",
                      }),
                      " ",
                      ourMission.title,
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "font-bold text-[#06133D]",
                        children: "Description:",
                      }),
                      " ",
                      ourMission.description,
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
                    children: "Our Values Section",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-slate-500",
                    children: "Company standards grid list",
                  }),
                ],
              }),
              activeSection !== "ourValues"
                ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    onClick: () => setActiveSection("ourValues"),
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
                        onClick: () => void handleSave("about.ourValues", ourValues),
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
                              key: "about.ourValues",
                            },
                          }).then((res) => setOurValues(res));
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
          activeSection === "ourValues"
            ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-6 space-y-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "grid gap-4 sm:grid-cols-3",
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
                            value: ourValues.tagline,
                            onChange: (e) =>
                              setOurValues({
                                ...ourValues,
                                tagline: e.target.value,
                              }),
                            className:
                              "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                        className: "grid gap-1.5 sm:col-span-2",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className: "text-xs font-bold uppercase tracking-wider text-slate-500",
                            children: "Heading",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                            type: "text",
                            value: ourValues.title,
                            onChange: (e) =>
                              setOurValues({
                                ...ourValues,
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
                        rows: 2,
                        value: ourValues.description,
                        onChange: (e) =>
                          setOurValues({
                            ...ourValues,
                            description: e.target.value,
                          }),
                        className:
                          "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "space-y-4 border-t border-slate-100 pt-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className: "text-sm font-black text-[#06133D]",
                            children: "Values list",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                            type: "button",
                            onClick: () => {
                              const newItems = [...ourValues.values];
                              newItems.push({
                                title: "New Value",
                                description: "Details...",
                              });
                              setOurValues({
                                ...ourValues,
                                values: newItems,
                              });
                            },
                            className:
                              "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
                              " Add Value",
                            ],
                          }),
                        ],
                      }),
                      ourValues.values.map((item, idx) =>
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className:
                              "flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                className: "flex flex-col gap-1.5 justify-center",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                                    type: "button",
                                    disabled: idx === 0,
                                    onClick: () => {
                                      const items = [...ourValues.values];
                                      const temp = items[idx];
                                      items[idx] = items[idx - 1];
                                      items[idx - 1] = temp;
                                      setOurValues({
                                        ...ourValues,
                                        values: items,
                                      });
                                    },
                                    className:
                                      "rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, {
                                      className: "h-3 w-3",
                                    }),
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                                    type: "button",
                                    disabled: idx === ourValues.values.length - 1,
                                    onClick: () => {
                                      const items = [...ourValues.values];
                                      const temp = items[idx];
                                      items[idx] = items[idx + 1];
                                      items[idx + 1] = temp;
                                      setOurValues({
                                        ...ourValues,
                                        values: items,
                                      });
                                    },
                                    className:
                                      "rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, {
                                      className: "h-3 w-3",
                                    }),
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                className: "flex-1 space-y-3",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                                    className: "grid gap-1",
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                        className: "text-[10px] font-bold text-slate-400",
                                        children: "VALUE TITLE",
                                      }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                                        type: "text",
                                        value: item.title,
                                        onChange: (e) => {
                                          const items = [...ourValues.values];
                                          items[idx].title = e.target.value;
                                          setOurValues({
                                            ...ourValues,
                                            values: items,
                                          });
                                        },
                                        className:
                                          "w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]",
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                                    className: "grid gap-1",
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                        className: "text-[10px] font-bold text-slate-400",
                                        children: "VALUE DESCRIPTION",
                                      }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
                                        rows: 2,
                                        value: item.description,
                                        onChange: (e) => {
                                          const items = [...ourValues.values];
                                          items[idx].description = e.target.value;
                                          setOurValues({
                                            ...ourValues,
                                            values: items,
                                          });
                                        },
                                        className:
                                          "w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                                className: "flex items-center",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                                  type: "button",
                                  onClick: () => {
                                    const items = ourValues.values.filter((_, i) => i !== idx);
                                    setOurValues({
                                      ...ourValues,
                                      values: items,
                                    });
                                  },
                                  className:
                                    "rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, {
                                    className: "h-4 w-4",
                                  }),
                                }),
                              }),
                            ],
                          },
                          idx,
                        ),
                      ),
                    ],
                  }),
                ],
              })
            : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-4 space-y-3 text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "font-bold text-[#06133D]",
                        children: "Headline info:",
                      }),
                      " ",
                      ourValues.tagline,
                      " ·",
                      " ",
                      ourValues.title,
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "border-t border-slate-100 pt-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                        className: "font-bold text-[#06133D] block mb-2",
                        children: ["Values list (", ourValues.values.length, "):"],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: ourValues.values.map((item, idx) =>
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                  className: "font-black text-[#06133D] text-xs block",
                                  children: item.title,
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                  className: "text-[11px] text-slate-500 mt-1",
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
      }),
    ],
  });
}
export { AdminAboutCMS as component };
