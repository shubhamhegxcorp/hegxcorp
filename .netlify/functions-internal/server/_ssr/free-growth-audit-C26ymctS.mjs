import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, S as SectionHeading, F as Footer, t as trackEvent, s as submitGrowthAuditInquiry, g as getLeadSourceData, a as getVisitorId, b as trackLead } from "./router-aQpsgqE2.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { _ as ShieldCheck, c as ChartColumn, aB as User, i as Mail, j as Globe, A as ArrowRight, T as Target, a3 as ArrowLeft, r as Sparkles } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
import "./contact-inquiries-Y3QmyFha.mjs";
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
const auditSchema = objectType({
  name: stringType().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: stringType().email({
    message: "Please enter a valid business email address"
  }),
  website: stringType().min(4, {
    message: "Please enter your company website domain (e.g. brand.com)"
  }),
  revenueRange: stringType().min(1, {
    message: "Please select your annual revenue range"
  }),
  goal: stringType().min(1, {
    message: "Please select your primary growth target"
  })
});
const revenueOptions = [{
  label: "Under $1M ARR",
  value: "under-1m"
}, {
  label: "$1M - $5M ARR",
  value: "1m-5m"
}, {
  label: "$5M - $20M ARR",
  value: "5m-20m"
}, {
  label: "$20M+ ARR",
  value: "above-20m"
}];
const goalOptions = [{
  label: "Increase Qualified Organic Leads",
  value: "organic-leads"
}, {
  label: "Reduce Customer Acquisition Cost (CAC)",
  value: "reduce-cac"
}, {
  label: "Build a Scalable Search Strategy (SEO)",
  value: "seo"
}, {
  label: "Increase E-Commerce ROAS / Revenue",
  value: "ecommerce-roas"
}, {
  label: "Rebuild Website / Custom Application",
  value: "engineering"
}];
function FreeGrowthAuditPage() {
  const [step, setStep] = reactExports.useState(1);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const hasTrackedFormStartRef = reactExports.useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    trigger,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: u(auditSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      revenueRange: "",
      goal: ""
    }
  });
  const selectedRevenue = watch("revenueRange");
  const selectedGoal = watch("goal");
  const nextStep = async () => {
    const fieldsToValidate = ["name", "email", "website"];
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(2);
    } else {
      toast.error("Please Fill  all value in fields .");
    }
  };
  const prevStep = () => {
    setStep(1);
  };
  const onSubmit = async (data) => {
    try {
      await submitGrowthAuditInquiry({
        data: {
          ...data,
          visitorId: getVisitorId(),
          leadSourceData: getLeadSourceData()
        }
      });
      trackLead({
        form_name: "growth_audit_form",
        lead_source: "Free growth audit page",
        revenue_range: data.revenueRange,
        goal: data.goal
      }, {
        email: data.email
      });
      toast.success("Audit request submitted successfully! We will analyze your site shortly.");
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Growth audit form failed:", error);
      toast.error("We could not save your audit request. Please try again.");
    }
  };
  function trackFormStart() {
    if (hasTrackedFormStartRef.current) return;
    hasTrackedFormStartRef.current = true;
    trackEvent("form_start", {
      form_name: "growth_audit_form"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { tagline: "Free Growth Audit", heading: "Claim a custom-engineered roadmap to scale your business", description: "We don't send generic PDF reports. Our specialists spend 3-4 hours studying your actual traffic channels, core vitals, ad campaigns, and checkout UX before sending you a personalized breakdown." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3.5 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-[#232323]", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: "100% Confidential" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B7280] leading-relaxed mt-0.5", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: "We respect your IP. Your website URLs, statistics, and business data are never shared." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3.5 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-[#232323]", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: "No Commitment Required" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B7280] leading-relaxed mt-0.5", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: "The growth audit is yours to keep, whether you decide to work with our team or execute it internally." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-5 sm:p-8 lg:p-10 shadow-[0_20px_48px_-20px_rgba(29,39,66,0.08)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs text-[#6B7280] uppercase tracking-wider mb-2.5 font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitted ? "Complete" : `Step ${step} of 2` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitted ? "100%" : step === 1 ? "50%" : "90%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-[#EAEAEA] rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full bg-[#FC9C44]", initial: {
            width: "0%"
          }, animate: {
            width: isSubmitted ? "100%" : step === 1 ? "50%" : "90%"
          }, transition: {
            duration: 0.3
          } }) })
        ] }),
        isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-7 w-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[#232323]", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: "Audit Request Logged!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#6B7280] leading-relaxed max-w-[380px] mx-auto", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Thanks for claiming your audit. Our analysts are beginning their manual review of your website. We will deliver the audit to your business email in the next 3–4 business days." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setIsSubmitted(false);
            setStep(1);
          }, className: "mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#FC9C44] hover:underline", children: "Submit another audit request" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(onSubmit), onFocusCapture: trackFormStart, className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: step === 1 ? (
          /* STEP 1: Profile Details */
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: -10
          }, animate: {
            opacity: 1,
            x: 0
          }, exit: {
            opacity: 0,
            x: 10
          }, transition: {
            duration: 0.2
          }, className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-[#232323]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: "Tell us about your brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
                "Your Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "e.g. Priya Sharma", ...register("name"), className: `w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.name ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}` }),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.name.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
                "Business Email"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "e.g. priya@retailbrand.in", ...register("email"), className: `w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.email ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}` }),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.email.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
                "Company Website"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "e.g. retailbrand.in", ...register("website"), className: `w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.website ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}` }),
              errors.website && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.website.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: nextStep, className: "w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continue to Goals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          ] }, "step-1")
        ) : (
          /* STEP 2: Revenue & Goals */
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: -10
          }, animate: {
            opacity: 1,
            x: 0
          }, exit: {
            opacity: 0,
            x: 10
          }, transition: {
            duration: 0.2
          }, className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-[#232323]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: "Choose your revenue scale and primary target" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: "Annual Revenue Range" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: revenueOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setValue("revenueRange", opt.value, {
                shouldValidate: true
              }), className: `rounded-xl border p-3.5 text-xs font-semibold text-center transition-all ${selectedRevenue === opt.value ? "bg-[#1D2742] border-[#1D2742] text-white shadow-sm" : "bg-white border-[#EAEAEA] text-[#232323] hover:border-[#FC9C44]/40"}`, children: opt.label }, opt.value)) }),
              errors.revenueRange && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.revenueRange.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: "Primary Focus Goal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: goalOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setValue("goal", opt.value, {
                shouldValidate: true
              }), className: `w-full text-left rounded-xl border p-3.5 text-xs font-semibold flex items-center justify-between transition-all ${selectedGoal === opt.value ? "bg-[#1D2742] border-[#1D2742] text-white shadow-sm" : "bg-white border-[#EAEAEA] text-[#232323] hover:border-[#FC9C44]/40"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: `h-3.5 w-3.5 ${selectedGoal === opt.value ? "text-[#EBB771]" : "text-[#9CA3AF]"}` })
              ] }, opt.value)) }),
              errors.goal && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.goal.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: prevStep, className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#EAEAEA] bg-white px-4 py-3.5 text-sm font-semibold text-[#6B7280] hover:text-[#232323] hover:bg-[#FAFAF8] transition-all cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSubmitting, className: "flex-[2] inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all disabled:opacity-50 cursor-pointer", children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Submitting..." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Claim Free Audit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" })
              ] }) })
            ] })
          ] }, "step-2")
        ) }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  FreeGrowthAuditPage as component
};
