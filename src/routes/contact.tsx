import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageSEO } from "@/components/site/PageSEO";
import { BreadcrumbSchema } from "@/components/site/StructuredData";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Check, ChevronDown, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from "sonner";
import { DEFAULT_CMS_SECTIONS, type ContactFormConfig } from "@/lib/cms-config";
import {
  type ClipboardEvent,
  type KeyboardEvent,
  type WheelEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import ShapeGrid from "@/components/ShapeGrid";
import { motion } from "framer-motion";

import {
  getLeadSourceData,
  getVisitorId,
  trackContactClick,
  trackEvent,
  trackLead,
} from "@/lib/analytics";
import { submitContactInquiry } from "@/lib/contact-inquiries";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Our Growth Consulting Team | Hegxcorp" },
      {
        name: "description",
        content:
          "Get in touch with Hegxcorp's digital transformation consultants. Schedule a strategic consultation to discuss SEO opportunities, paid advertising, and web architecture.",
      },
      { property: "og:title", content: "Contact Our Growth Consulting Team | Hegxcorp" },
      {
        property: "og:description",
        content:
          "Get in touch with Hegxcorp's digital transformation consultants. Schedule a strategic consultation to discuss SEO opportunities, paid advertising, and web architecture.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hegxcorp.com/contact" },
      { property: "og:image", content: "https://hegxcorp.com/cropped-hegxcorp-logo-new-web.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Our Growth Consulting Team | Hegxcorp" },
      {
        name: "twitter:description",
        content:
          "Get in touch with Hegxcorp's digital transformation consultants. Schedule a strategic consultation to discuss SEO opportunities, paid advertising, and web architecture.",
      },
      { name: "twitter:image", content: "https://hegxcorp.com/cropped-hegxcorp-logo-new-web.webp" },
    ],
    links: [{ rel: "canonical", href: "https://hegxcorp.com/contact" }],
  }),
  component: ContactPage,
});

const serviceGroups = [
  {
    title: "Development",
    services: [
      { name: "Web Development", desc: "Scalable, modern websites" },
      { name: "Custom Web Applications", desc: "Tailored platforms" },
      { name: "WordPress Development", desc: "Premium WP builds" },
      { name: "Ecommerce Development", desc: "Stores that convert" },
    ],
  },
  {
    title: "Marketing",
    services: [
      { name: "SEO", desc: "Rank where it matters" },
      { name: "PPC", desc: "Performance ad campaigns" },
      { name: "Social Media Marketing", desc: "Engage and grow" },
      { name: "Content Marketing", desc: "Stories that scale" },
    ],
  },
  {
    title: "Design",
    services: [
      { name: "UI/UX Design", desc: "Human-centered design" },
      { name: "Branding", desc: "Identities with intent" },
      { name: "Graphic Design", desc: "Visual storytelling" },
    ],
  },
];

const fullNamePattern = /^[A-Za-z\s]+$/;
const fullNameCharacterPattern = /^[A-Za-z\s]$/;
const phoneNumberPattern = /^\d+$/;
const phoneNumberCharacterPattern = /^\d$/;
const defaultPhoneCountryCode = "+91";

const fieldBaseClass =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF]";

const selectBaseClass =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all";

const errorMessageClass = "text-xs font-medium text-red-500";

function getFieldClass(hasError: boolean) {
  return `${fieldBaseClass} ${
    hasError ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"
  }`;
}

function getSelectClass(hasError: boolean) {
  return `${selectBaseClass} ${
    hasError ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"
  }`;
}

function getPhoneFieldClass(hasError: boolean) {
  return `flex overflow-hidden rounded-lg border bg-white transition-all focus-within:border-[#FC9C44] ${
    hasError ? "border-red-500 focus-within:border-red-500" : "border-[#EAEAEA]"
  }`;
}

function getServiceButtonClass(hasError: boolean) {
  return `flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-left text-sm outline-none transition-all ${
    hasError ? "border-red-500" : "border-[#EAEAEA] hover:border-[#FC9C44]"
  }`;
}

function blockInvalidNameKey(event: KeyboardEvent<HTMLInputElement>, onInvalidInput: () => void) {
  if (event.key.length === 1 && !fullNameCharacterPattern.test(event.key)) {
    event.preventDefault();
    onInvalidInput();
  }
}

function blockInvalidNamePaste(
  event: ClipboardEvent<HTMLInputElement>,
  onInvalidInput: () => void,
) {
  const pastedText = event.clipboardData.getData("text");

  if (!fullNamePattern.test(pastedText)) {
    event.preventDefault();
    onInvalidInput();
  }
}

function blockInvalidPhoneKey(event: KeyboardEvent<HTMLInputElement>, onInvalidInput: () => void) {
  if (event.key.length === 1 && !phoneNumberCharacterPattern.test(event.key)) {
    event.preventDefault();
    onInvalidInput();
  }
}

function blockInvalidPhonePaste(
  event: ClipboardEvent<HTMLInputElement>,
  onInvalidInput: () => void,
) {
  const pastedText = event.clipboardData.getData("text");

  if (!phoneNumberPattern.test(pastedText)) {
    event.preventDefault();
    onInvalidInput();
  }
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your name" })
    .min(2, { message: "Name must be at least 2 characters" })
    .regex(fullNamePattern, { message: "Please enter alphabets only" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Please enter your number" })
    .regex(phoneNumberPattern, { message: "Please enter digits only" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  budget: z.string().min(1, { message: "Please select a budget" }),
  timeline: z.string().min(1, { message: "Please select a timeline" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const { data: heroData } = useWebsiteSection("contact.hero");
  const { data: detailsData } = useWebsiteSection("contact.details");
  const { data: serviceGroupsData } = useWebsiteSection("contact.serviceGroups");
  const { data: rawFormData } = useWebsiteSection<ContactFormConfig>("contact.form");

  const defaultFormData = DEFAULT_CMS_SECTIONS["contact.form"] as ContactFormConfig;
  const formData: ContactFormConfig = {
    ...defaultFormData,
    ...(rawFormData || {}),
    budgetOptions: rawFormData?.budgetOptions ?? defaultFormData.budgetOptions,
    timelineOptions: rawFormData?.timelineOptions ?? defaultFormData.timelineOptions,
    customFields: rawFormData?.customFields ?? defaultFormData.customFields,
  };

  const [customFieldValues, setCustomFieldValues] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const hasTrackedFormStartRef = useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      services: [],
      budget: "",
      timeline: "",
    },
  });

  const selectedServices = watch("services") || [];

  useEffect(() => {
    if (!isServiceOpen) return;

    function closeServiceDropdown(event: MouseEvent | TouchEvent) {
      if (!serviceDropdownRef.current?.contains(event.target as Node)) {
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

  function handleServiceDropdownWheel(event: WheelEvent<HTMLDivElement>) {
    const dropdown = event.currentTarget;

    if (dropdown.scrollHeight <= dropdown.clientHeight) return;

    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    dropdown.scrollTop += event.deltaY;
  }

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const activePhoneCountryCode = formData.phoneCountryCode || defaultPhoneCountryCode;
      let finalMessage = data.message;
      const customEntries = Object.entries(customFieldValues).filter(([_, v]) =>
        Boolean(v && v.trim()),
      );
      if (customEntries.length > 0) {
        finalMessage +=
          "\n\n--- Additional Information ---\n" +
          customEntries
            .map(([fId, val]) => {
              const def = (formData.customFields || []).find((f) => f.id === fId);
              return `${def?.label || fId}: ${val}`;
            })
            .join("\n");
      }

      await submitContactInquiry({
        data: {
          ...data,
          message: finalMessage,
          phone: `${activePhoneCountryCode} ${data.phone}`,
          visitorId: getVisitorId(),
          leadSourceData: getLeadSourceData(),
          source: "Contact page",
        },
      });
      trackLead(
        {
          form_name: "contact_form",
          lead_source: "Contact page",
          services: data.services.join(", "),
          budget: data.budget,
          timeline: data.timeline,
        },
        {
          email: data.email,
          phone: `${activePhoneCountryCode} ${data.phone}`,
        },
      );
      toast.success(
        "Message saved successfully! Our growth strategists will contact you shortly.",
      );
      setIsSubmitted(true);
      setIsServiceOpen(false);
      reset();
      setCustomFieldValues({});
    } catch (error) {
      console.error("Contact form failed:", error);
      toast.error("We could not save your message. Please try again.");
    }
  };

  function trackFormStart() {
    if (hasTrackedFormStartRef.current) return;

    hasTrackedFormStartRef.current = true;
    trackEvent("form_start", {
      form_name: "contact_form",
    });
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <PageSEO
        sectionKey="contact.seo"
        fallbackTitle="Contact Our Growth Consulting Team | Hegxcorp"
        fallbackDescription="Get in touch with Hegxcorp's digital transformation consultants. Schedule a strategic consultation to discuss SEO opportunities, paid advertising, and web architecture."
      />
      <BreadcrumbSchema items={[{ name: "Contact", item: "https://hegxcorp.com/contact" }]} />
      <div>
        <Header />
        <Toaster position="top-right" richColors />

        <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none"
            style={{ opacity: 0.2 }}
          >
            <ShapeGrid
              shape="hexagon"
              squareSize={38}
              borderColor="rgba(29,39,66,0.3)"
              hoverFillColor="transparent"
              hoverTrailAmount={0}
              staticMode={false}
              speed={0.2}
              className="w-full h-full"
            />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8 sm:space-y-10"
              >
                <div className="space-y-6">
                  <SectionHeading
                    as="h1"
                    tagline={heroData.tagline}
                    heading={heroData.title}
                    description={heroData.description}
                  />

                  <div
                    className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-[#4A5568] border-b border-[#EAEAEA]/80 pb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">
                        Response within 24 hours
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">
                        Free strategy consultation
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Check className="h-4 w-4 text-[#FC9C44] shrink-0" />
                      <span className="text-xs font-semibold tracking-wide uppercase">
                        No-obligation growth assessment
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <a
                    href={`tel:${detailsData.phone.replace(/\s+/g, "")}`}
                    onClick={() => trackContactClick("phone", "contact_page_hotline")}
                    className="group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Direct Hotline
                      </span>
                      <span
                        className="text-sm font-semibold text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {detailsData.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${detailsData.email}`}
                    onClick={() => trackContactClick("email", "contact_page_email")}
                    className="group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Inquiries
                      </span>
                      <span
                        className="text-sm font-semibold text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {detailsData.email}
                      </span>
                    </div>
                  </a>

                  <div className="group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        ADDRESS
                      </span>
                      <p
                        className="text-sm text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300 leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {detailsData.address}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-5 sm:p-8 shadow-[0_16px_36px_rgba(29,39,66,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] lg:p-10"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3
                    className="text-lg font-bold text-[#232323]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {formData.title || "Send a secure message"}
                  </h3>
                  <span className="rounded-full border border-[#F5D5B6] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]">
                    {formData.badge || "Fast reply"}
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h4
                      className="text-base font-bold text-[#232323]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {formData.successTitle || "Thank you! Message Received"}
                    </h4>
                    <p
                      className="text-sm text-[#6B7280] leading-relaxed max-w-[340px] mx-auto"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {formData.successMessage ||
                        "We've logged your request. One of our growth advisors will reach out to you via email within the next business day."}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-[#FC9C44] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    onFocusCapture={trackFormStart}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {formData.nameLabel || "Full Name"}
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder={formData.namePlaceholder || "e.g. Priya Sharma"}
                          {...register("name", { onChange: () => clearErrors("name") })}
                          onKeyDown={(event) =>
                            blockInvalidNameKey(event, () =>
                              setError("name", {
                                type: "manual",
                                message: "Please enter alphabets only",
                              }),
                            )
                          }
                          onPaste={(event) =>
                            blockInvalidNamePaste(event, () =>
                              setError("name", {
                                type: "manual",
                                message: "Please enter alphabets only",
                              }),
                            )
                          }
                          className={getFieldClass(Boolean(errors.name))}
                        />
                        {errors.name && (
                          <p
                            className={errorMessageClass}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {formData.phoneLabel || "Phone Number"}
                        </label>
                        <div className={getPhoneFieldClass(Boolean(errors.phone))}>
                          <span className="inline-flex items-center border-r border-[#EAEAEA] bg-[#F9FAFB] px-4 text-sm font-bold text-[#06133D]">
                            {formData.phoneCountryCode || defaultPhoneCountryCode}
                          </span>
                          <input
                            type="tel"
                            id="phone"
                            inputMode="numeric"
                            placeholder={formData.phonePlaceholder || "8369207836"}
                            {...register("phone", { onChange: () => clearErrors("phone") })}
                            onKeyDown={(event) =>
                              blockInvalidPhoneKey(event, () =>
                                setError("phone", {
                                  type: "manual",
                                  message: "Please enter digits only",
                                }),
                              )
                            }
                            onPaste={(event) =>
                              blockInvalidPhonePaste(event, () =>
                                setError("phone", {
                                  type: "manual",
                                  message: "Please enter digits only",
                                }),
                              )
                            }
                            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#232323] outline-none placeholder:text-[#9CA3AF] placeholder:opacity-50"
                          />
                        </div>
                        {errors.phone && (
                          <p
                            className={errorMessageClass}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {formData.emailLabel || "Business Email"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder={formData.emailPlaceholder || "e.g. priya@retailbrand.in"}
                        {...register("email")}
                        className={getFieldClass(Boolean(errors.email))}
                      />
                      {errors.email && (
                        <p
                          className={errorMessageClass}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {formData.servicesLabel || "Services Required"}
                      </label>
                      <div ref={serviceDropdownRef} className="relative">
                        <button
                          type="button"
                          onClick={() => setIsServiceOpen((value) => !value)}
                          className={getServiceButtonClass(Boolean(errors.services))}
                        >
                          <span
                            className={
                              selectedServices.length
                                ? "font-semibold text-[#232323]"
                                : "text-[#9CA3AF]"
                            }
                          >
                            {selectedServices.length
                              ? `${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""} selected`
                              : (formData.servicesPlaceholder || "Choose one or more services")}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 text-[#FC9C44] transition-transform ${isServiceOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {isServiceOpen && (
                          <div
                            onWheel={handleServiceDropdownWheel}
                            className="absolute left-0 right-0 z-30 mt-2 max-h-[190px] overflow-y-scroll overscroll-contain rounded-xl border border-[#EAEAEA] bg-white p-4 pr-2 shadow-[0_22px_60px_rgba(29,39,66,0.14)] [scrollbar-gutter:stable] sm:max-h-[210px]"
                          >
                            <div className="grid gap-4 pr-2 md:grid-cols-3">
                              {(serviceGroupsData.groups || []).map((group: any) => (
                                <div key={group.title} className="space-y-2">
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]">
                                    {group.title}
                                  </p>
                                  {(group.services || []).map((service: any) => (
                                    <label
                                      key={service.name}
                                      className="flex cursor-pointer gap-3 rounded-lg p-2 transition-colors hover:bg-[#FFF4E8]"
                                    >
                                      <input
                                        type="checkbox"
                                        value={service.name}
                                        {...register("services")}
                                        className="mt-1 h-4 w-4 accent-[#FC9C44]"
                                      />
                                      <span>
                                        <span className="block text-sm font-bold text-[#232323]">
                                          {service.name}
                                        </span>
                                        <span className="block text-xs text-[#6B7280]">
                                          {service.desc}
                                        </span>
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {selectedServices.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {selectedServices.map((service) => (
                            <span
                              key={service}
                              className="rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#FC9C44]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                      {errors.services && (
                        <p
                          className={errorMessageClass}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {errors.services.message}
                        </p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="budget"
                          className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {formData.budgetLabel || "Budget"}
                        </label>
                        <select
                          id="budget"
                          {...register("budget")}
                          className={getSelectClass(Boolean(errors.budget))}
                        >
                          <option value="">{formData.budgetPlaceholder || "Select budget"}</option>
                          {(formData.budgetOptions || []).map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p
                            className={errorMessageClass}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {errors.budget.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="timeline"
                          className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {formData.timelineLabel || "Timeline"}
                        </label>
                        <select
                          id="timeline"
                          {...register("timeline")}
                          className={getSelectClass(Boolean(errors.timeline))}
                        >
                          <option value="">
                            {formData.timelinePlaceholder || "Select timeline"}
                          </option>
                          {(formData.timelineOptions || []).map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        {errors.timeline && (
                          <p
                            className={errorMessageClass}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {errors.timeline.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Dynamic Custom Form Fields (Managed via CMS) */}
                    {(formData.customFields || []).length > 0 && (
                      <div className="space-y-4 pt-1">
                        {(formData.customFields || []).map((cf) => (
                          <div key={cf.id} className="space-y-1.5">
                            <label
                              htmlFor={cf.id}
                              className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {cf.label} {cf.required && <span className="text-red-500">*</span>}
                            </label>
                            {cf.type === "textarea" ? (
                              <textarea
                                id={cf.id}
                                rows={3}
                                placeholder={cf.placeholder}
                                value={customFieldValues[cf.id] || ""}
                                onChange={(e) =>
                                  setCustomFieldValues((prev) => ({
                                    ...prev,
                                    [cf.id]: e.target.value,
                                  }))
                                }
                                required={cf.required}
                                className={`${fieldBaseClass} resize-none`}
                              />
                            ) : cf.type === "select" ? (
                              <select
                                id={cf.id}
                                value={customFieldValues[cf.id] || ""}
                                onChange={(e) =>
                                  setCustomFieldValues((prev) => ({
                                    ...prev,
                                    [cf.id]: e.target.value,
                                  }))
                                }
                                required={cf.required}
                                className={selectBaseClass}
                              >
                                <option value="">{cf.placeholder || "Select option"}</option>
                                {(cf.options || []).map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type={cf.type}
                                id={cf.id}
                                placeholder={cf.placeholder}
                                value={customFieldValues[cf.id] || ""}
                                onChange={(e) =>
                                  setCustomFieldValues((prev) => ({
                                    ...prev,
                                    [cf.id]: e.target.value,
                                  }))
                                }
                                required={cf.required}
                                className={fieldBaseClass}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {formData.messageLabel || "How can we help?"}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder={
                          formData.messagePlaceholder ||
                          "Tell us about your digital platforms, your timeline, and your specific growth targets..."
                        }
                        {...register("message")}
                        className={`${getFieldClass(Boolean(errors.message))} resize-none`}
                      />
                      {errors.message && (
                        <p
                          className={errorMessageClass}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>{formData.submitButtonText || "Submit Message"}</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
