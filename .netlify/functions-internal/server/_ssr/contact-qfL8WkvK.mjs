import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useWebsiteSection, H as Header, S as SectionHeading, c as trackContactClick, F as Footer, t as trackEvent, g as getLeadSourceData, a as getVisitorId, b as trackLead } from "./router-aQpsgqE2.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import { S as ShapeGrid } from "./ShapeGrid-DOQi3hzo.mjs";
import { s as submitContactInquiry } from "./contact-inquiries-Y3QmyFha.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { s as Check, k as Phone, i as Mail, J as MapPin, r as Sparkles, l as ChevronDown, aC as Send } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, c as arrayType } from "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "./createSsrRpc-ET3YHIm-.mjs";
import "./server-DDc6VQK7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./lead-source-C0KU7OxF.mjs";
import "../_libs/lenis.mjs";
import "./blog-drafts-DUyaO1gc.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./cms-config-CJ9tlu-0.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const fullNamePattern = /^[A-Za-z\s]+$/;
const fullNameCharacterPattern = /^[A-Za-z\s]$/;
const phoneNumberPattern = /^\d+$/;
const phoneNumberCharacterPattern = /^\d$/;
const defaultPhoneCountryCode = "+91";
const fieldBaseClass = "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF]";
const selectBaseClass = "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all";
const errorMessageClass = "text-xs font-medium text-red-500";
function getFieldClass(hasError) {
  return `${fieldBaseClass} ${hasError ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}`;
}
function getSelectClass(hasError) {
  return `${selectBaseClass} ${hasError ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}`;
}
function getPhoneFieldClass(hasError) {
  return `flex overflow-hidden rounded-lg border bg-white transition-all focus-within:border-[#FC9C44] ${hasError ? "border-red-500 focus-within:border-red-500" : "border-[#EAEAEA]"}`;
}
function getServiceButtonClass(hasError) {
  return `flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-left text-sm outline-none transition-all ${hasError ? "border-red-500" : "border-[#EAEAEA] hover:border-[#FC9C44]"}`;
}
function blockInvalidNameKey(event, onInvalidInput) {
  if (event.key.length === 1 && !fullNameCharacterPattern.test(event.key)) {
    event.preventDefault();
    onInvalidInput();
  }
}
function blockInvalidNamePaste(event, onInvalidInput) {
  const pastedText = event.clipboardData.getData("text");
  if (!fullNamePattern.test(pastedText)) {
    event.preventDefault();
    onInvalidInput();
  }
}
function blockInvalidPhoneKey(event, onInvalidInput) {
  if (event.key.length === 1 && !phoneNumberCharacterPattern.test(event.key)) {
    event.preventDefault();
    onInvalidInput();
  }
}
function blockInvalidPhonePaste(event, onInvalidInput) {
  const pastedText = event.clipboardData.getData("text");
  if (!phoneNumberPattern.test(pastedText)) {
    event.preventDefault();
    onInvalidInput();
  }
}
const contactSchema = objectType({
  name: stringType().trim().min(1, {
    message: "Please enter your name"
  }).min(2, {
    message: "Name must be at least 2 characters"
  }).regex(fullNamePattern, {
    message: "Please enter alphabets only"
  }),
  email: stringType().email({
    message: "Please enter a valid email address"
  }),
  phone: stringType().trim().min(1, {
    message: "Please enter your number"
  }).regex(phoneNumberPattern, {
    message: "Please enter digits only"
  }),
  services: arrayType(stringType()).min(1, {
    message: "Please select at least one service"
  }),
  budget: stringType().min(1, {
    message: "Please select a budget"
  }),
  timeline: stringType().min(1, {
    message: "Please select a timeline"
  }),
  message: stringType().min(10, {
    message: "Message must be at least 10 characters long"
  })
});
function ContactPage() {
  const {
    data: heroData
  } = useWebsiteSection("contact.hero");
  const {
    data: detailsData
  } = useWebsiteSection("contact.details");
  const {
    data: serviceGroupsData
  } = useWebsiteSection("contact.serviceGroups");
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [isServiceOpen, setIsServiceOpen] = reactExports.useState(false);
  const serviceDropdownRef = reactExports.useRef(null);
  const hasTrackedFormStartRef = reactExports.useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: u(contactSchema),
    mode: "onChange",
    defaultValues: {
      services: [],
      budget: "",
      timeline: ""
    }
  });
  const selectedServices = watch("services") || [];
  reactExports.useEffect(() => {
    if (!isServiceOpen) return;
    function closeServiceDropdown(event) {
      if (!serviceDropdownRef.current?.contains(event.target)) {
        setIsServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", closeServiceDropdown);
    document.addEventListener("touchstart", closeServiceDropdown);
    return () => {
      document.removeEventListener("mousedown", closeServiceDropdown);
      document.removeEventListener("touchstart", closeServiceDropdown);
    };
  }, [isServiceOpen]);
  function handleServiceDropdownWheel(event) {
    const dropdown = event.currentTarget;
    if (dropdown.scrollHeight <= dropdown.clientHeight) return;
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    dropdown.scrollTop += event.deltaY;
  }
  const onSubmit = async (data) => {
    try {
      await submitContactInquiry({
        data: {
          ...data,
          phone: `${defaultPhoneCountryCode} ${data.phone}`,
          visitorId: getVisitorId(),
          leadSourceData: getLeadSourceData(),
          source: "Contact page"
        }
      });
      trackLead({
        form_name: "contact_form",
        lead_source: "Contact page",
        services: data.services.join(", "),
        budget: data.budget,
        timeline: data.timeline
      }, {
        email: data.email,
        phone: `${defaultPhoneCountryCode} ${data.phone}`
      });
      toast.success("Message saved successfully! Our growth strategists will contact you shortly.");
      setIsSubmitted(true);
      setIsServiceOpen(false);
      reset();
    } catch (error) {
      console.error("Contact form failed:", error);
      toast.error("We could not save your message. Please try again.");
    }
  };
  function trackFormStart() {
    if (hasTrackedFormStartRef.current) return;
    hasTrackedFormStartRef.current = true;
    trackEvent("form_start", {
      form_name: "contact_form"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 select-none", style: {
        opacity: 0.2
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShapeGrid, { shape: "hexagon", squareSize: 38, borderColor: "rgba(29,39,66,0.3)", hoverFillColor: "transparent", hoverTrailAmount: 0, staticMode: false, speed: 0.2, className: "w-full h-full" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          duration: 0.6,
          ease: "easeOut"
        }, className: "space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { tagline: heroData.tagline, heading: heroData.title, description: heroData.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-6 gap-y-3 pt-2 text-[#4A5568] border-b border-[#EAEAEA]/80 pb-6", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-[#FC9C44] shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-wide uppercase", children: "Response within 24 hours" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-[#FC9C44] shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-wide uppercase", children: "Free strategy consultation" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-[#FC9C44] shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-wide uppercase", children: "No-obligation growth assessment" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${detailsData.phone.replace(/\s+/g, "")}`, onClick: () => trackContactClick("phone", "contact_page_hotline"), className: "group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: "Direct Hotline" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300", style: {
                  fontFamily: "'Space Grotesk', sans-serif"
                }, children: detailsData.phone })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${detailsData.email}`, onClick: () => trackContactClick("email", "contact_page_email"), className: "group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: "Inquiries" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300", style: {
                  fontFamily: "'Space Grotesk', sans-serif"
                }, children: detailsData.email })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: "ADDRESS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300 leading-relaxed", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: detailsData.address })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1
        }, className: "rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-8 shadow-[0_16px_36px_rgba(29,39,66,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] lg:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-[#232323]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: "Send a secure message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-[#F5D5B6] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]", children: "Fast reply" })
          ] }),
          isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-[#232323]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: "Thank you! Message Received" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#6B7280] leading-relaxed max-w-[340px] mx-auto", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: "We've logged your request. One of our growth advisors will reach out to you via email within the next business day." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsSubmitted(false), className: "mt-4 text-xs font-semibold text-[#FC9C44] hover:underline", children: "Send another message" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), onFocusCapture: trackFormStart, className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", id: "name", placeholder: "e.g. Priya Sharma", ...register("name", {
                  onChange: () => clearErrors("name")
                }), onKeyDown: (event) => blockInvalidNameKey(event, () => setError("name", {
                  type: "manual",
                  message: "Please enter alphabets only"
                })), onPaste: (event) => blockInvalidNamePaste(event, () => setError("name", {
                  type: "manual",
                  message: "Please enter alphabets only"
                })), className: getFieldClass(Boolean(errors.name)) }),
                errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorMessageClass, style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: errors.name.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getPhoneFieldClass(Boolean(errors.phone)), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center border-r border-[#EAEAEA] bg-[#F9FAFB] px-4 text-sm font-bold text-[#06133D]", children: defaultPhoneCountryCode }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", id: "phone", inputMode: "numeric", placeholder: "9876543210", ...register("phone", {
                    onChange: () => clearErrors("phone")
                  }), onKeyDown: (event) => blockInvalidPhoneKey(event, () => setError("phone", {
                    type: "manual",
                    message: "Please enter digits only"
                  })), onPaste: (event) => blockInvalidPhonePaste(event, () => setError("phone", {
                    type: "manual",
                    message: "Please enter digits only"
                  })), className: "min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#232323] outline-none placeholder:text-[#9CA3AF] placeholder:opacity-50" })
                ] }),
                errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorMessageClass, style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: errors.phone.message })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: "Business Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", id: "email", placeholder: "e.g. priya@retailbrand.in", ...register("email"), className: getFieldClass(Boolean(errors.email)) }),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorMessageClass, style: {
                fontFamily: "'Inter', sans-serif"
              }, children: errors.email.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: "Services Required" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: serviceDropdownRef, className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setIsServiceOpen((value) => !value), className: getServiceButtonClass(Boolean(errors.services)), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: selectedServices.length ? "font-semibold text-[#232323]" : "text-[#9CA3AF]", children: selectedServices.length ? `${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""} selected` : "Choose one or more services" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 text-[#FC9C44] transition-transform ${isServiceOpen ? "rotate-180" : ""}` })
                ] }),
                isServiceOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onWheel: handleServiceDropdownWheel, className: "absolute left-0 right-0 z-30 mt-2 max-h-[190px] overflow-y-scroll overscroll-contain rounded-xl border border-[#EAEAEA] bg-white p-4 pr-2 shadow-[0_22px_60px_rgba(29,39,66,0.14)] [scrollbar-gutter:stable] sm:max-h-[210px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 pr-2 md:grid-cols-3", children: (serviceGroupsData.groups || []).map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]", children: group.title }),
                  (group.services || []).map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer gap-3 rounded-lg p-2 transition-colors hover:bg-[#FFF4E8]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", value: service.name, ...register("services"), className: "mt-1 h-4 w-4 accent-[#FC9C44]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-bold text-[#232323]", children: service.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-[#6B7280]", children: service.desc })
                    ] })
                  ] }, service.name))
                ] }, group.title)) }) })
              ] }),
              selectedServices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: selectedServices.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#FC9C44]", children: service }, service)) }),
              errors.services && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorMessageClass, style: {
                fontFamily: "'Inter', sans-serif"
              }, children: errors.services.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "budget", className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: "Budget" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "budget", ...register("budget"), className: getSelectClass(Boolean(errors.budget)), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select budget" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Under Rs. 25,000", children: "Under Rs. 25,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Rs. 25,000 - Rs. 50,000", children: "Rs. 25,000 - Rs. 50,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Rs. 50,000 - Rs. 1,00,000", children: "Rs. 50,000 - Rs. 1,00,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Above Rs. 1,00,000", children: "Above Rs. 1,00,000" })
                ] }),
                errors.budget && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorMessageClass, style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: errors.budget.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "timeline", className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: "Timeline" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "timeline", ...register("timeline"), className: getSelectClass(Boolean(errors.timeline)), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select timeline" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Urgent", children: "Urgent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1-2 weeks", children: "1-2 weeks" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1 month", children: "1 month" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Flexible", children: "Flexible" })
                ] }),
                errors.timeline && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorMessageClass, style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: errors.timeline.message })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: "How can we help?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", rows: 5, placeholder: "Tell us about your digital platforms, your timeline, and your specific growth targets...", ...register("message"), className: `${getFieldClass(Boolean(errors.message))} resize-none` }),
              errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorMessageClass, style: {
                fontFamily: "'Inter', sans-serif"
              }, children: errors.message.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer", children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sending inquiry..." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Submit Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
            ] }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
export {
  ContactPage as component
};
