import { ChangeEvent, DragEvent, useRef, useState } from "react";
import {
  Check,
  FolderOpen,
  Image as ImageIcon,
  Link as LinkIcon,
  RefreshCw,
  Sparkles,
  Trash2,
  Upload,
  X,
  Eye,
} from "lucide-react";

interface CaseStudyPresetImage {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

const CASE_STUDY_PRESET_IMAGES: CaseStudyPresetImage[] = [
  {
    id: "orra-hero",
    title: "Orra Fine Jewellery",
    subtitle: "Hero Interface Preview",
    url: "/case-studies/orra/orra-hero-preview.png",
  },
  {
    id: "orra-collection",
    title: "Orra Jewellery",
    subtitle: "Product Collection Showcase",
    url: "/case-studies/orra/orra-jewellery-collection.png",
  },
  {
    id: "nivesh-hero",
    title: "Nivesh FinTech",
    subtitle: "Hero Portal Preview",
    url: "/case-studies/nivesh/nivesh-hero-preview.png",
  },
  {
    id: "nivesh-design",
    title: "Nivesh FinTech",
    subtitle: "Homepage & Dashboard Design",
    url: "/case-studies/nivesh/Website-Home-Page-Design-D7JLAhhb.png",
  },
  {
    id: "tarkashastra-hero",
    title: "Tarkashastra Academy",
    subtitle: "Hero Performance Preview",
    url: "/case-studies/tarkashastra/tarkashastra-hero-preview.png",
  },
  {
    id: "tarkashastra-web",
    title: "Tarkashastra Academy",
    subtitle: "Web Platform & Ranking",
    url: "/case-studies/tarkashastra/tarkashastra-web-preview.png",
  },
];

/**
 * Resizes and compresses an image file to ensure fast uploads and clean database storage.
 */
function compressImageFile(file: File, maxDimension = 1920, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        try {
          const webpDataUrl = canvas.toDataURL("image/webp", quality);
          if (webpDataUrl.startsWith("data:image/webp")) {
            resolve(webpDataUrl);
            return;
          }
        } catch {
          // WebP canvas export not supported by browser, fallback to JPEG
        }

        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = () => reject(new Error("Failed to load image file"));
      img.src = readerEvent.target?.result as string;
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

interface CaseStudyFileManagerProps {
  value: string;
  onChange: (value: string) => void;
  screenshotType: string;
  onScreenshotTypeChange: (type: string) => void;
  browserColor: string;
  onBrowserColorChange: (color: string) => void;
  projectTitle: string;
  projectUrl: string;
}

export function CaseStudyFileManager({
  value,
  onChange,
  screenshotType,
  onScreenshotTypeChange,
  browserColor,
  onBrowserColorChange,
  projectTitle,
  projectUrl,
}: CaseStudyFileManagerProps) {
  const [activeTab, setActiveTab] = useState<"upload" | "library" | "url">("upload");
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasCustomImage = Boolean(value && value.trim() !== "");

  async function processFile(file: File | undefined) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setUploadError("Please select a valid image file (PNG, JPG, WebP, SVG).");
      return;
    }

    setUploadError("");
    setIsProcessing(true);
    try {
      const dataUrl = await compressImageFile(file);
      onChange(dataUrl);
    } catch (err) {
      console.error("Image processing error:", err);
      setUploadError("Failed to process image file. Please try another file.");
    } finally {
      setIsProcessing(false);
    }
  }

  function handleFileInputChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    void processFile(file);
    e.target.value = "";
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: DragEvent) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    void processFile(file);
  }

  return (
    <div className="rounded-xl border border-[#E4E7EC] bg-[#FAFAFB] p-4">
      {/* Top Header & Mode Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] pb-3">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-[#FC9C44]" />
          <span className="text-xs font-black uppercase tracking-wider text-[#06133D]">
            Case Study Visual Asset (File Manager)
          </span>
        </div>

        {/* Status pill indicating what appears on frontend */}
        <div>
          {hasCustomImage ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold text-emerald-700 border border-emerald-200">
              <Check className="h-3 w-3" />
              Uploaded Image Active (Shown on frontend)
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-extrabold text-amber-700 border border-amber-200">
              <Sparkles className="h-3 w-3" />
              Code Mockup Active ({screenshotType || "ecommerce"})
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 grid gap-4 lg:grid-cols-12">
        {/* Left Column: File Manager Controls */}
        <div className="space-y-3 lg:col-span-7">
          {/* Tab Selector */}
          <div className="flex items-center gap-1 rounded-lg border border-[#E4E7EC] bg-white p-1 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab("upload")}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 transition ${
                activeTab === "upload"
                  ? "bg-[#06133D] text-white shadow-xs"
                  : "text-[#475467] hover:text-[#06133D] hover:bg-[#F9FAFB]"
              }`}
            >
              <Upload className="h-3.5 w-3.5" />
              Upload Image
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("library")}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 transition ${
                activeTab === "library"
                  ? "bg-[#06133D] text-white shadow-xs"
                  : "text-[#475467] hover:text-[#06133D] hover:bg-[#F9FAFB]"
              }`}
            >
              <FolderOpen className="h-3.5 w-3.5" />
              Media Library
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("url")}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 transition ${
                activeTab === "url"
                  ? "bg-[#06133D] text-white shadow-xs"
                  : "text-[#475467] hover:text-[#06133D] hover:bg-[#F9FAFB]"
              }`}
            >
              <LinkIcon className="h-3.5 w-3.5" />
              Image URL
            </button>
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
          />

          {uploadError && (
            <div className="rounded-lg bg-red-50 p-2.5 text-xs font-semibold text-red-600 border border-red-200">
              {uploadError}
            </div>
          )}

          {/* Tab 1: Direct File Upload */}
          {activeTab === "upload" && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition ${
                isDragging
                  ? "border-[#FC9C44] bg-[#FFF4E8]"
                  : "border-[#D0D5DD] bg-white hover:border-[#FC9C44] hover:bg-[#FFFDFB]"
              }`}
            >
              {isProcessing ? (
                <div className="flex flex-col items-center justify-center py-3 text-xs font-bold text-[#475467]">
                  <RefreshCw className="h-7 w-7 animate-spin text-[#FC9C44] mb-2" />
                  Optimizing & attaching image...
                </div>
              ) : (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44] transition group-hover:scale-110">
                    <Upload className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-xs font-bold text-[#06133D]">
                    Click to browse or drag & drop image
                  </p>
                  <p className="mt-1 text-[11px] text-[#667085]">
                    PNG, JPG, WebP, SVG up to 10MB (automatically optimized for fast load)
                  </p>
                </>
              )}
            </div>
          )}

          {/* Tab 2: Preset Media Library */}
          {activeTab === "library" && (
            <div className="space-y-2 rounded-xl border border-[#E4E7EC] bg-white p-3">
              <p className="text-[11px] font-bold text-[#667085]">
                Select a case study hero visual from the repository:
              </p>
              <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                {CASE_STUDY_PRESET_IMAGES.map((preset) => {
                  const isSelected = value === preset.url;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => onChange(preset.url)}
                      className={`group relative flex flex-col items-start overflow-hidden rounded-lg border text-left p-2 transition ${
                        isSelected
                          ? "border-[#FC9C44] bg-[#FFF4E8]/60 ring-2 ring-[#FC9C44]/30"
                          : "border-[#E4E7EC] bg-white hover:border-[#D0D5DD] hover:bg-[#F9FAFB]"
                      }`}
                    >
                      <div className="relative aspect-video w-full overflow-hidden rounded border border-[#E4E7EC] bg-slate-50">
                        <img
                          src={preset.url}
                          alt={preset.title}
                          className="h-full w-full object-cover object-top transition group-hover:scale-105"
                          loading="lazy"
                        />
                        {isSelected && (
                          <div className="absolute right-1 top-1 rounded-full bg-[#FC9C44] p-0.5 text-white shadow-xs">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                      <div className="mt-1.5 w-full">
                        <p className="truncate text-xs font-bold text-[#06133D]">{preset.title}</p>
                        <p className="truncate text-[10px] font-medium text-[#667085]">
                          {preset.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 3: Direct URL */}
          {activeTab === "url" && (
            <div className="space-y-2 rounded-xl border border-[#E4E7EC] bg-white p-3">
              <label className="grid gap-1">
                <span className="text-[11px] font-bold text-[#667085]">Direct Image URL:</span>
                <div className="relative">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="https://... or /case-studies/..."
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 pr-8 text-xs font-medium text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
                  />
                  {value && (
                    <button
                      type="button"
                      onClick={() => onChange("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </label>
              <p className="text-[10px] text-[#667085]">
                Paste a public URL from your CDN, cloud bucket, or website assets folder.
              </p>
            </div>
          )}

          {/* Fallback Mockup Theme & Background Options */}
          <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#E4E7EC]">
            <label className="grid gap-1">
              <span className="text-[11px] font-bold text-[#667085]">Fallback Mockup Theme</span>
              <select
                value={screenshotType || "ecommerce"}
                onChange={(e) => onScreenshotTypeChange(e.target.value)}
                className="rounded-lg border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#344054] outline-none focus:border-[#FC9C44]"
              >
                <option value="ecommerce">E-Commerce Shop Grid</option>
                <option value="saas">B2B SaaS Dashboard Chart</option>
                <option value="healthcare">Healthcare Booking UI</option>
                <option value="fintech">Fintech Portal Metrics</option>
              </select>
            </label>

            <label className="grid gap-1">
              <span className="text-[11px] font-bold text-[#667085]">Frame Background</span>
              <div className="flex items-center gap-1.5">
                <input
                  type="color"
                  value={browserColor?.startsWith("#") ? browserColor : "#FFF4E8"}
                  onChange={(e) => onBrowserColorChange(e.target.value)}
                  className="h-8 w-8 cursor-pointer rounded border border-[#D0D5DD] p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={browserColor || ""}
                  onChange={(e) => onBrowserColorChange(e.target.value)}
                  placeholder="#FFF4E8"
                  className="w-full rounded-lg border border-[#D0D5DD] bg-white px-2 py-1.5 text-xs font-mono outline-none focus:border-[#FC9C44]"
                />
              </div>
            </label>
          </div>
        </div>

        {/* Right Column: Live Mock Browser Frame Preview */}
        <div className="space-y-2 lg:col-span-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085] flex items-center gap-1">
              <Eye className="h-3.5 w-3.5 text-[#FC9C44]" />
              Live Frontend Preview
            </span>

            {hasCustomImage && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 hover:text-red-700 hover:underline"
                title="Remove image to use mockup"
              >
                <Trash2 className="h-3 w-3" />
                Remove (Use Mockup)
              </button>
            )}
          </div>

          {/* Mini Browser Window Card Container */}
          <div className="overflow-hidden rounded-xl border border-[#D0D5DD] bg-white shadow-sm">
            {/* Browser Header Bar */}
            <div className="flex items-center gap-2 border-b border-[#E4E7EC] bg-[#F9FAFB] px-3 py-1.5">
              <div className="flex gap-1 shrink-0">
                <div className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                <div className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                <div className="h-2 w-2 rounded-full bg-[#27C93F]" />
              </div>
              <div className="mx-auto max-w-[160px] flex-1 truncate rounded border border-[#E4E7EC] bg-white px-2 py-0.5 text-center font-mono text-[9px] text-[#667085]">
                <span className="text-emerald-600 font-bold">https://</span>
                <span>{projectUrl || "client.com"}</span>
              </div>
            </div>

            {/* Screen Content Area */}
            <div
              className="relative aspect-video w-full overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: browserColor || "#FAF7F2" }}
            >
              {hasCustomImage ? (
                <img
                  src={value}
                  alt={projectTitle}
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/case-studies/orra/orra-hero-preview.png";
                  }}
                />
              ) : (
                <div className="p-4 text-center">
                  <Sparkles className="mx-auto h-6 w-6 text-[#FC9C44] opacity-80" />
                  <p className="mt-1 text-[11px] font-bold text-[#06133D]">
                    {screenshotType?.toUpperCase() || "MOCKUP"} Preview
                  </p>
                  <p className="text-[10px] text-[#667085]">
                    Interactive code mockup will render on frontend
                  </p>
                </div>
              )}
            </div>

            {/* Preview Card Caption */}
            <div className="border-t border-[#E4E7EC] bg-white p-2.5 text-left">
              <p className="truncate text-xs font-black text-[#06133D]">{projectTitle}</p>
              <p className="text-[10px] text-[#667085] truncate">
                {hasCustomImage ? (
                  <span className="text-emerald-600 font-semibold">
                    ✓ Custom image will appear instead of mockup
                  </span>
                ) : (
                  <span className="text-amber-600 font-semibold">
                    ⚡ Code mockup is active (Upload image above to replace)
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
