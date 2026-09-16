import { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  RotateCw,
  X,
  Eye,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { requestCmsInitialSync } from "@/lib/cms-preview-bridge";

type ViewportMode = "desktop" | "tablet" | "mobile";

type CmsLivePreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  previewPath?: string; // e.g. "/", "/about", "/services", "/contact"
  pageName?: string;
  onSyncAllDrafts?: () => void;
};

export function CmsLivePreviewModal({
  isOpen,
  onClose,
  previewPath = "/",
  pageName = "Page",
  onSyncAllDrafts,
}: CmsLivePreviewModalProps) {
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [scale, setScale] = useState<number>(1);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [key, setKey] = useState(0); // for manual iframe reload
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Request sync when modal opens or iframe reloads
  useEffect(() => {
    if (isOpen) {
      setIsIframeLoading(true);
      const timer = setTimeout(() => {
        requestCmsInitialSync();
        onSyncAllDrafts?.();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, key, onSyncAllDrafts]);

  if (!isOpen) return null;

  const handleIframeLoad = () => {
    setIsIframeLoading(false);
    requestCmsInitialSync();
    onSyncAllDrafts?.();
  };

  const handleReload = () => {
    setIsIframeLoading(true);
    setKey((prev) => prev + 1);
  };

  const handleOpenExternal = () => {
    window.open(previewPath, "_blank", "noopener,noreferrer");
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "w-[390px]";
      case "tablet":
        return "w-[768px]";
      case "desktop":
      default:
        return "w-full";
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Top Controls Bar */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-800 bg-[#06133D] px-4 text-white sm:px-6 shadow-md">
        {/* Left: Info & Live Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
              Live Sync Active
            </span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="hidden text-xs font-bold text-slate-300 sm:inline truncate max-w-[200px]">
            Previewing: {pageName}
          </span>
        </div>

        {/* Center: Device Viewport Switches */}
        <div className="flex items-center gap-1 rounded-lg bg-slate-900/80 p-1 border border-slate-700/50">
          <button
            type="button"
            onClick={() => setViewport("desktop")}
            title="Desktop View (100%)"
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition ${
              viewport === "desktop"
                ? "bg-[#FC9C44] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Desktop</span>
          </button>

          <button
            type="button"
            onClick={() => setViewport("tablet")}
            title="Tablet View (768px)"
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition ${
              viewport === "tablet"
                ? "bg-[#FC9C44] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Tablet className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Tablet</span>
          </button>

          <button
            type="button"
            onClick={() => setViewport("mobile")}
            title="Mobile View (390px)"
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition ${
              viewport === "mobile"
                ? "bg-[#FC9C44] text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Actions (Scale, Reload, Open External, Close) */}
        <div className="flex items-center gap-2">
          {/* Zoom scale */}
          <div className="hidden lg:flex items-center gap-1 text-[11px] font-bold text-slate-400 bg-slate-900/60 px-2 py-1 rounded border border-slate-700/40">
            <span>Zoom:</span>
            <button
              onClick={() => setScale(1)}
              className={`px-1.5 py-0.5 rounded ${scale === 1 ? "text-white bg-slate-700" : "hover:text-white"}`}
            >
              100%
            </button>
            <button
              onClick={() => setScale(0.85)}
              className={`px-1.5 py-0.5 rounded ${scale === 0.85 ? "text-white bg-slate-700" : "hover:text-white"}`}
            >
              85%
            </button>
            <button
              onClick={() => setScale(0.75)}
              className={`px-1.5 py-0.5 rounded ${scale === 0.75 ? "text-white bg-slate-700" : "hover:text-white"}`}
            >
              75%
            </button>
          </div>

          <button
            type="button"
            onClick={handleReload}
            title="Reload Preview Frame"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <RotateCw className={`h-3.5 w-3.5 ${isIframeLoading ? "animate-spin text-[#FC9C44]" : ""}`} />
          </button>

          <button
            type="button"
            onClick={handleOpenExternal}
            title="Open Live Preview in New Window (Multi-Monitor)"
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <ExternalLink className="h-3.5 w-3.5 text-[#FC9C44]" />
            <span className="hidden sm:inline">New Tab</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Close Preview (Esc)"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 transition hover:bg-red-500 hover:text-white ml-2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main Preview Frame Container */}
      <main className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-start justify-center">
        {isIframeLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-slate-950/60 backdrop-blur-xs">
            <RotateCw className="h-8 w-8 animate-spin text-[#FC9C44] mb-3" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Connecting Live Preview Frame...
            </p>
          </div>
        )}

        <div
          className={`transition-all duration-300 ease-out h-full flex flex-col items-center justify-start ${getViewportWidth()}`}
          style={{
            transform: scale !== 1 ? `scale(${scale})` : undefined,
            transformOrigin: "top center",
          }}
        >
          {/* Device Mockup Shell for Tablet/Mobile */}
          <div
            className={`w-full h-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
              viewport !== "desktop"
                ? "rounded-[24px] border-[8px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
                : "rounded-xl border border-slate-800"
            }`}
          >
            {/* Mobile Top Notch bar */}
            {viewport === "mobile" && (
              <div className="h-5 bg-slate-800 flex items-center justify-center">
                <div className="h-2.5 w-24 bg-slate-900 rounded-full" />
              </div>
            )}

            <iframe
              key={key}
              ref={iframeRef}
              src={previewPath}
              title={`Preview: ${pageName}`}
              onLoad={handleIframeLoad}
              className="w-full h-full border-0 bg-white"
            />
          </div>
        </div>
      </main>

      {/* Bottom helper banner */}
      <footer className="h-7 shrink-0 bg-slate-900/90 border-t border-slate-800/80 px-4 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <Eye className="h-3 w-3 text-[#FC9C44]" />
          Any text or setting you type in the CMS immediately updates here without page refresh.
        </span>
        <span className="hidden sm:inline text-slate-500">
          Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">ESC</kbd> to return to editing
        </span>
      </footer>
    </div>
  );
}
