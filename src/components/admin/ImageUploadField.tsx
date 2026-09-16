import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { Image as ImageIcon, Link as LinkIcon, Upload, X, RefreshCw, Check } from "lucide-react";

type ImageUploadFieldProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
  helpText?: string;
  placeholder?: string;
};

/**
 * Resizes an image file to maxDimension and compresses it as JPEG/WebP data URL
 * to ensure fast uploads, snappy database storage, and quick page load times.
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
        // Export as WebP if supported, otherwise JPEG
        try {
          const webpDataUrl = canvas.toDataURL("image/webp", quality);
          if (webpDataUrl.startsWith("data:image/webp")) {
            resolve(webpDataUrl);
            return;
          }
        } catch {}

        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = () => reject(new Error("Failed to load image file"));
      img.src = readerEvent.target?.result as string;
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export function ImageUploadField({
  label,
  value,
  onChange,
  helperText,
  helpText,
  placeholder = "https://... or upload a file from your computer",
}: ImageUploadFieldProps) {
  const displayHelpText = helperText || helpText;
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function processFile(file: File | undefined) {
    if (!file || !file.type.startsWith("image/")) {
      return;
    }

    setIsProcessing(true);
    try {
      const dataUrl = await compressImageFile(file);
      onChange(dataUrl);
    } catch (err) {
      console.error("Image processing error:", err);
      alert("Failed to process image file. Please try another image.");
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
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        {label ? (
          <label className="text-xs font-bold uppercase tracking-wider text-slate-600">{label}</label>
        ) : (
          <div />
        )}

        {/* Tab switch */}
        <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-0.5 text-[11px] font-bold">
          <button
            type="button"
            onClick={() => setActiveTab("upload")}
            className={`flex items-center gap-1 rounded-md px-2.5 py-1 transition ${
              activeTab === "upload" ? "bg-white text-[#FC9C44] shadow-xs" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <Upload className="h-3 w-3" />
            Upload File
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("url")}
            className={`flex items-center gap-1 rounded-md px-2.5 py-1 transition ${
              activeTab === "url" ? "bg-white text-[#FC9C44] shadow-xs" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <LinkIcon className="h-3 w-3" />
            Image URL
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Tab: Direct Upload */}
      {activeTab === "upload" && (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !value && fileInputRef.current?.click()}
          className={`relative rounded-xl border-2 border-dashed p-4 text-center transition ${
            isDragging
              ? "border-[#FC9C44] bg-[#FFF4E8]/50"
              : value
                ? "border-slate-200 bg-slate-50/50"
                : "border-slate-200 bg-white hover:border-[#FC9C44]/50 hover:bg-slate-50 cursor-pointer"
          }`}
        >
          {isProcessing ? (
            <div className="flex flex-col items-center justify-center py-4 text-xs font-bold text-slate-500">
              <RefreshCw className="h-6 w-6 animate-spin text-[#FC9C44] mb-2" />
              Processing & optimizing image...
            </div>
          ) : value ? (
            <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
              <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xs">
                <img
                  src={value}
                  alt="Uploaded media preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <Check className="h-4 w-4" />
                  Image ready & attached
                </div>
                <p className="text-[11px] text-slate-500 truncate max-w-sm">
                  {value.startsWith("data:") ? "Optimized local file" : value}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-[#FC9C44] hover:text-[#FC9C44] transition shadow-xs"
                  >
                    Replace Image
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange("");
                    }}
                    className="rounded-md border border-red-200 bg-red-50/50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-50 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-4">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44] mb-2">
                <Upload className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold text-[#06133D]">
                Click to browse or drag and drop an image
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                PNG, JPG, WebP, SVG up to 10MB (automatically optimized)
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab: Image URL */}
      {activeTab === "url" && (
        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
            />
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {value && (
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-2">
              <img
                src={value}
                alt="URL preview"
                className="h-16 w-24 object-cover rounded-md border border-slate-200"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-[11px] text-slate-500 font-medium">
                URL Preview loaded
              </span>
            </div>
          )}
        </div>
      )}

      {displayHelpText && <p className="text-[11px] text-slate-400">{displayHelpText}</p>}
    </div>
  );
}
