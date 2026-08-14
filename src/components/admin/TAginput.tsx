import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { KeyboardEvent } from "react";

type TagInputProps = {
  /** Controlled tags list. If omitted, the component manages its own state. */
  value?: string[];
  /** Called whenever the tag list changes (add or remove). */
  onChange?: (tags: string[]) => void;
  /** localStorage key used to persist tags across refreshes when uncontrolled. */
  storageKey?: string;
  placeholder?: string;
};

export function TagInput({
  value,
  onChange,
  storageKey = "admin.tagInput",
  placeholder = "Type a tag and press Enter",
}: TagInputProps) {
  const isControlled = value !== undefined;
  const [internalTags, setInternalTags] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const [hydrated, setHydrated] = useState(false);

  const tags = isControlled ? (value as string[]) : internalTags;

  // Load persisted tags on mount (only relevant in uncontrolled mode).
  useEffect(() => {
    if (isControlled) return;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as string[];
        if (Array.isArray(parsed)) setInternalTags(parsed);
      }
    } catch {
      // Ignore malformed/unavailable storage.
    } finally {
      setHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  // Persist on every change (only relevant in uncontrolled mode).
  useEffect(() => {
    if (isControlled || !hydrated) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(internalTags));
    } catch {
      // Storage may be unavailable - fail silently.
    }
  }, [internalTags, isControlled, hydrated, storageKey]);

  function commitTags(next: string[]) {
    if (isControlled) {
      onChange?.(next);
    } else {
      setInternalTags(next);
      onChange?.(next);
    }
  }

  function addTag(raw: string) {
    const label = raw.trim();
    if (!label) return;
    if (tags.some((tag) => tag.toLowerCase() === label.toLowerCase())) {
      setDraft("");
      return;
    }
    commitTags([...tags, label]);
    setDraft("");
  }

  function removeTag(label: string) {
    commitTags(tags.filter((tag) => tag !== label));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag(draft);
      return;
    }
    if (event.key === "Backspace" && draft === "" && tags.length > 0) {
      // Backspace on an empty input removes the last tag.
      removeTag(tags[tags.length - 1]);
    }
  }

  return (
    <div className="w-full max-w-[420px]">
      <div className="flex min-h-10 flex-wrap items-center gap-2 rounded-md border border-[#D0D5DD] bg-white px-2 py-2 focus-within:border-[#FC9C44] focus-within:ring-4 focus-within:ring-[#FC9C44]/10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#C96A13]"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              aria-label={`Remove tag ${tag}`}
              className="rounded-full p-0.5 text-[#C96A13] transition hover:bg-[#FC9C44] hover:text-white"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}

        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => addTag(draft)}
          placeholder={tags.length === 0 ? placeholder : ""}
          className="min-w-[120px] flex-1 border-none bg-transparent text-sm text-[#344054] outline-none"
        />
      </div>
    </div>
  );
}
