import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  BarChart3,
  Target,
  Globe,
  Mail,
  User,
  ShieldCheck,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/free-growth-audit")({
  head: () => ({
    meta: [
      { title: "Get Your Free Custom Growth Audit | Hegxcorp" },
      {
        name: "description",
        content:
          "Request a custom-tailored search optimization, advertising, and conversion rate audit from our consultants. Free of charge, no obligation.",
      },
      { property: "og:title", content: "Free Custom Digital Growth Audit | Hegxcorp" },
      {
        property: "og:description",
        content:
          "Optimize your customer acquisition funnel. Claim your free SEO and PPC growth audit.",
      },
    ],
  }),
  component: FreeGrowthAuditPage,
} as never);

const auditSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid business email address" }),
  website: z
    .string()
    .min(4, { message: "Please enter your company website domain (e.g. brand.com)" }),
  revenueRange: z.string().min(1, { message: "Please select your annual revenue range" }),
  goal: z.string().min(1, { message: "Please select your primary growth target" }),
});

type AuditFormValues = z.infer<typeof auditSchema>;

const revenueOptions = [
  { label: "Under $1M ARR", value: "under-1m" },
  { label: "$1M - $5M ARR", value: "1m-5m" },
  { label: "$5M - $20M ARR", value: "5m-20m" },
  { label: "$20M+ ARR", value: "above-20m" },
];

const goalOptions = [
  { label: "Increase Qualified Organic Leads", value: "organic-leads" },
  { label: "Reduce Customer Acquisition Cost (CAC)", value: "reduce-cac" },
  { label: "Build a Scalable Search Strategy (SEO)", value: "seo" },
  { label: "Increase E-Commerce ROAS / Revenue", value: "ecommerce-roas" },
  { label: "Rebuild Website / Custom Application", value: "engineering" },
];

function FreeGrowthAuditPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      revenueRange: "",
      goal: "",
    },
  });

  const selectedRevenue = watch("revenueRange");
  const selectedGoal = watch("goal");

  const nextStep = async () => {
    // Validate current step fields before proceeding
    const fieldsToValidate = ["name", "email", "website"] as const;
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(2);
    } else {
      toast.error("Please correct the validation errors in Step 1 before continuing.");
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const onSubmit = async (data: AuditFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Growth Audit submitted:", data);
    toast.success("Audit request submitted successfully! We will analyze your site shortly.");
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster position="top-right" richColors />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
            {/* Left Column — Value Props */}
            <div className="space-y-8">
              <SectionHeading
                tagline="Free Growth Audit"
                heading="Claim a custom-engineered roadmap to scale your business"
                description="We don't send generic PDF reports. Our specialists spend 3-4 hours studying your actual traffic channels, core vitals, ad campaigns, and checkout UX before sending you a personalized breakdown."
              />

              <div className="space-y-5">
                <div className="flex gap-3.5 items-start">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h4
                      className="text-sm font-bold text-[#232323]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      100% Confidential
                    </h4>
                    <p
                      className="text-xs text-[#6B7280] leading-relaxed mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      We respect your IP. Your website URLs, statistics, and business data are never
                      shared.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
                    <BarChart3 className="h-5 w-5" />
                  </span>
                  <div>
                    <h4
                      className="text-sm font-bold text-[#232323]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      No Commitment Required
                    </h4>
                    <p
                      className="text-xs text-[#6B7280] leading-relaxed mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      The growth audit is yours to keep, whether you decide to work with our team or
                      execute it internally.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Multi-Step Form */}
            <div className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-5 sm:p-8 lg:p-10 shadow-[0_20px_48px_-20px_rgba(29,39,66,0.08)]">
              {/* Form title / progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs text-[#6B7280] uppercase tracking-wider mb-2.5 font-bold">
                  <span>{isSubmitted ? "Complete" : `Step ${step} of 2`}</span>
                  <span>{isSubmitted ? "100%" : step === 1 ? "50%" : "90%"}</span>
                </div>
                {/* Progress bar line */}
                <div className="h-1.5 w-full bg-[#EAEAEA] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#FC9C44]"
                    initial={{ width: "0%" }}
                    animate={{ width: isSubmitted ? "100%" : step === 1 ? "50%" : "90%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#232323]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Audit Request Logged!
                  </h3>
                  <p
                    className="text-sm text-[#6B7280] leading-relaxed max-w-[380px] mx-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Thanks for claiming your audit. Our analysts are beginning their manual review
                    of your website. We will deliver the audit to your business email in the next
                    3–4 business days.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#FC9C44] hover:underline"
                  >
                    Submit another audit request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {step === 1 ? (
                      /* STEP 1: Profile Details */
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <h3
                          className="text-base font-bold text-[#232323]"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Tell us about your brand
                        </h3>

                        {/* Name field */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                            <User className="h-3.5 w-3.5 text-[#FC9C44]" />
                            Your Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Priya Sharma"
                            {...register("name")}
                            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${
                              errors.name
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#EAEAEA] focus:border-[#FC9C44]"
                            }`}
                          />
                          {errors.name && (
                            <p className="text-xs text-red-500 font-medium">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        {/* Email field */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                            <Mail className="h-3.5 w-3.5 text-[#FC9C44]" />
                            Business Email
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. priya@retailbrand.in"
                            {...register("email")}
                            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${
                              errors.email
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#EAEAEA] focus:border-[#FC9C44]"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-xs text-red-500 font-medium">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        {/* Website field */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                            <Globe className="h-3.5 w-3.5 text-[#FC9C44]" />
                            Company Website
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. retailbrand.in"
                            {...register("website")}
                            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${
                              errors.website
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#EAEAEA] focus:border-[#FC9C44]"
                            }`}
                          />
                          {errors.website && (
                            <p className="text-xs text-red-500 font-medium">
                              {errors.website.message}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={nextStep}
                          className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all cursor-pointer"
                        >
                          <span>Continue to Goals</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </motion.div>
                    ) : (
                      /* STEP 2: Revenue & Goals */
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <h3
                          className="text-base font-bold text-[#232323]"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Choose your revenue scale and primary target
                        </h3>

                        {/* Revenue Range selection */}
                        <div className="space-y-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                            Annual Revenue Range
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {revenueOptions.map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() =>
                                  setValue("revenueRange", opt.value, { shouldValidate: true })
                                }
                                className={`rounded-xl border p-3.5 text-xs font-semibold text-center transition-all ${
                                  selectedRevenue === opt.value
                                    ? "bg-[#1D2742] border-[#1D2742] text-white shadow-sm"
                                    : "bg-white border-[#EAEAEA] text-[#232323] hover:border-[#FC9C44]/40"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                          {errors.revenueRange && (
                            <p className="text-xs text-red-500 font-medium">
                              {errors.revenueRange.message}
                            </p>
                          )}
                        </div>

                        {/* Goals selection */}
                        <div className="space-y-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                            Primary Focus Goal
                          </label>
                          <div className="space-y-2">
                            {goalOptions.map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() =>
                                  setValue("goal", opt.value, { shouldValidate: true })
                                }
                                className={`w-full text-left rounded-xl border p-3.5 text-xs font-semibold flex items-center justify-between transition-all ${
                                  selectedGoal === opt.value
                                    ? "bg-[#1D2742] border-[#1D2742] text-white shadow-sm"
                                    : "bg-white border-[#EAEAEA] text-[#232323] hover:border-[#FC9C44]/40"
                                }`}
                              >
                                <span>{opt.label}</span>
                                <Target
                                  className={`h-3.5 w-3.5 ${selectedGoal === opt.value ? "text-[#EBB771]" : "text-[#9CA3AF]"}`}
                                />
                              </button>
                            ))}
                          </div>
                          {errors.goal && (
                            <p className="text-xs text-red-500 font-medium">
                              {errors.goal.message}
                            </p>
                          )}
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#EAEAEA] bg-white px-4 py-3.5 text-sm font-semibold text-[#6B7280] hover:text-[#232323] hover:bg-[#FAFAF8] transition-all cursor-pointer"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back</span>
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-[2] inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all disabled:opacity-50 cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                <span>Submitting...</span>
                              </>
                            ) : (
                              <>
                                <span>Claim Free Audit</span>
                                <Sparkles className="h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
