/**
 * Real-time communication bridge between Admin CMS editors and the Live Preview frames/windows.
 * Uses BroadcastChannel (for multi-tab / new window preview) and postMessage (for iframe preview).
 */

const CHANNEL_NAME = "hegxcorp_cms_live_preview";

export type CmsPreviewMessage =
  | { type: "CMS_PREVIEW_UPDATE"; key: string; data: any }
  | { type: "CMS_PREVIEW_SYNC_ALL"; drafts: Record<string, any> }
  | { type: "CMS_PREVIEW_REQUEST_SYNC" };

let broadcastChannel: BroadcastChannel | null = null;

function getBroadcastChannel(): BroadcastChannel | null {
  if (typeof window === "undefined" || typeof BroadcastChannel === "undefined") {
    return null;
  }
  if (!broadcastChannel) {
    try {
      broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
    } catch (e) {
      console.warn("BroadcastChannel not supported or restricted:", e);
    }
  }
  return broadcastChannel;
}

/**
 * Broadcasts a draft update for a CMS section in real time.
 * Called immediately inside onChange handlers in the CMS.
 */
export function broadcastCmsDraft(key: string, data: any) {
  if (typeof window === "undefined") return;

  const message: CmsPreviewMessage = {
    type: "CMS_PREVIEW_UPDATE",
    key,
    data,
  };

  // 1. Send via BroadcastChannel (for separate browser tabs/windows)
  const channel = getBroadcastChannel();
  if (channel) {
    try {
      channel.postMessage(message);
    } catch (e) {
      console.warn("Failed to broadcast draft via BroadcastChannel:", e);
    }
  }

  // 2. Post to any embedded preview iframes in the current document
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    try {
      iframe.contentWindow?.postMessage(message, "*");
    } catch {}
  });

  // 3. If running inside an iframe, also notify the parent window
  if (window.parent && window.parent !== window) {
    try {
      window.parent.postMessage(message, "*");
    } catch {}
  }
}

/**
 * Subscribes to live draft updates.
 * Used inside useWebsiteSection hook and preview pages.
 */
export function subscribeToCmsDraft(
  onUpdate: (key: string, data: any) => void,
  onSyncAll?: (drafts: Record<string, any>) => void,
): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleMessageEvent = (msg: CmsPreviewMessage) => {
    if (msg.type === "CMS_PREVIEW_UPDATE") {
      onUpdate(msg.key, msg.data);
    } else if (msg.type === "CMS_PREVIEW_SYNC_ALL" && onSyncAll) {
      onSyncAll(msg.drafts);
    }
  };

  // 1. BroadcastChannel listener
  const channel = getBroadcastChannel();
  const channelHandler = (event: MessageEvent) => {
    if (event.data && typeof event.data === "object" && "type" in event.data) {
      handleMessageEvent(event.data as CmsPreviewMessage);
    }
  };

  if (channel) {
    channel.addEventListener("message", channelHandler);
  }

  // 2. Window postMessage listener (for iframes)
  const windowHandler = (event: MessageEvent) => {
    if (event.data && typeof event.data === "object" && "type" in event.data) {
      handleMessageEvent(event.data as CmsPreviewMessage);
    }
  };

  window.addEventListener("message", windowHandler);

  return () => {
    if (channel) {
      channel.removeEventListener("message", channelHandler);
    }
    window.removeEventListener("message", windowHandler);
  };
}

/**
 * Called by the preview window/iframe on mount to ask any active CMS editor
 * for its current draft values immediately.
 */
export function requestCmsInitialSync() {
  if (typeof window === "undefined") return;

  const message: CmsPreviewMessage = { type: "CMS_PREVIEW_REQUEST_SYNC" };

  const channel = getBroadcastChannel();
  if (channel) {
    try {
      channel.postMessage(message);
    } catch {}
  }

  if (window.parent && window.parent !== window) {
    try {
      window.parent.postMessage(message, "*");
    } catch {}
  }
}

/**
 * Called by CMS editor pages to listen for sync requests from newly opened preview frames,
 * and reply with all current active uncommitted draft states.
 */
export function registerCmsSyncResponder(getCurrentDrafts: () => Record<string, any>): () => void {
  if (typeof window === "undefined") return () => {};

  const handleSyncRequest = (eventData: any) => {
    if (eventData?.type === "CMS_PREVIEW_REQUEST_SYNC") {
      const drafts = getCurrentDrafts();
      const reply: CmsPreviewMessage = {
        type: "CMS_PREVIEW_SYNC_ALL",
        drafts,
      };

      const channel = getBroadcastChannel();
      if (channel) {
        try {
          channel.postMessage(reply);
        } catch {}
      }

      const iframes = document.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage(reply, "*");
        } catch {}
      });
    }
  };

  const channel = getBroadcastChannel();
  const channelHandler = (e: MessageEvent) => handleSyncRequest(e.data);
  if (channel) {
    channel.addEventListener("message", channelHandler);
  }

  const windowHandler = (e: MessageEvent) => handleSyncRequest(e.data);
  window.addEventListener("message", windowHandler);

  return () => {
    if (channel) {
      channel.removeEventListener("message", channelHandler);
    }
    window.removeEventListener("message", windowHandler);
  };
}
