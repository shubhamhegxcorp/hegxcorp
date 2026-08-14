import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useEffect, useMemo, useState, useRef } from "react";
import { Trash2 } from "lucide-react";

/**
 * Category tree shape.
 * `id` must be unique across the whole tree (parents + children).
 */
export type CategoryNode = {
  id: string;
  label: string;
  children?: CategoryNode[];
};

const DEFAULT_CATEGORIES: CategoryNode[] = [
  {
    id: "digital-strategy",
    label: "Digital Strategy",
    children: [{ id: "ai-automation", label: "AI Automation" }],
  },
  { id: "email-marketing", label: "Email Marketing" },
  { id: "seo", label: "SEO" },
  { id: "spins", label: "Spins" },
  { id: "trading", label: "Trading" },
  { id: "uncategorized", label: "Uncategorized" },
  { id: "web-development", label: "Web Development" },
];

type CategorySidebarProps = {
  categories?: CategoryNode[];
  storageKey?: string;
  onChange?: (selectedIds: string[]) => void;
  onAddCategory?: () => void;
  onDeleteCategory?: (id: string) => void; // NEW
};

function flattenIds(nodes: CategoryNode[]): string[] {
  return nodes.flatMap((node) => [node.id, ...(node.children ? flattenIds(node.children) : [])]);
}

export function CategorySidebar({
  categories = DEFAULT_CATEGORIES,
  storageKey = "admin.categorySidebar",
  onChange,
  onAddCategory,
  onDeleteCategory,
}: CategorySidebarProps) {
  const allIds = useMemo(() => flattenIds(categories), [categories]);

  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  // Load persisted state on mount (and whenever the storage key changes).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as { selected?: string[]; isOpen?: boolean };
        if (Array.isArray(parsed.selected)) {
          setSelected(new Set(parsed.selected.filter((id) => allIds.includes(id))));
        }
        if (typeof parsed.isOpen === "boolean") {
          setIsOpen(parsed.isOpen);
        }
      }
    } catch {
      // Ignore malformed/unavailable storage - fall back to defaults.
    } finally {
      setHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  // Persist on every change, once the initial load has happened.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ selected: Array.from(selected), isOpen }),
      );
    } catch {
      // Storage may be unavailable (private mode, quota, etc.) - fail silently.
    }
  }, [selected, isOpen, hydrated, storageKey]);

  useEffect(() => {
    onChange?.(Array.from(selected));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  function toggleCategory(id: string) {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function matchesSearch(node: CategoryNode): boolean {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    if (node.label.toLowerCase().includes(query)) return true;
    return (node.children ?? []).some((child) => matchesSearch(child));
  }

  const visibleCategories = categories.filter(matchesSearch);

  return (
    <aside className="w-full max-w-[260px] border border-[#E4E7EC] bg-white">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between bg-[#F9FAFB] px-4 py-3 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-black text-[#06133D]">Categories</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-[#344054]" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#344054]" />
        )}
      </button>

      {isOpen && (
        <div className="px-4 py-3">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search Categories"
              className="w-full rounded-md border border-[#D0D5DD] bg-white py-2 pl-9 pr-3 text-sm text-[#344054] outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
            />
          </label>

          {/* FIX: was "overflow-y:auto" (invalid Tailwind class, colon instead of
                hyphen) — that typo meant no overflow rule was ever applied, so the
                box never clipped or scrolled its content no matter how tall the
                list got. Also capped the height to ~4 rows so scrolling only
                kicks in once a 5th category is added. */}
          <div
            ref={(el) => {
              if (!el) return;

              const handleWheel = (e: WheelEvent) => {
                const { scrollTop, scrollHeight, clientHeight } = el;

                const isScrollingDown = e.deltaY > 0;
                const isScrollingUp = e.deltaY < 0;

                const canScrollDown = scrollTop + clientHeight < scrollHeight;
                const canScrollUp = scrollTop > 0;

                if (
                  (isScrollingDown && canScrollDown) ||
                  (isScrollingUp && canScrollUp)
                ) {
                  e.preventDefault();
                  e.stopPropagation();
                  el.scrollTop += e.deltaY;
                }
              };

              el.addEventListener("wheel", handleWheel, { passive: false });

              return () => {
                el.removeEventListener("wheel", handleWheel);
              };
            }}
            tabIndex={0}
            className="max-h-[9.5rem] overflow-y-auto overscroll-contain pr-1 mb-3 space-y-2 focus:outline-none"
          >
            <ul className="space-y-2">
              {visibleCategories.map((node) => (
                <li key={node.id}>
                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-[#344054]">
                      <input
                        type="checkbox"
                        checked={selected.has(node.id)}
                        onChange={() => toggleCategory(node.id)}
                        className="h-4 w-4 accent-[#FC9C44]"
                      />
                      {node.label}
                    </label>

                    <button
                      type="button"
                      onClick={() => onDeleteCategory?.(node.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {node.children && node.children.length > 0 && (
                    <ul className="mt-2 ml-6 space-y-2">
                      {node.children.map((child) => (
                        <li key={child.id}>
                          <div className="flex items-center justify-between">
                            <label className="flex cursor-pointer items-center gap-2 text-sm text-[#344054]">
                              <input
                                type="checkbox"
                                checked={selected.has(child.id)}
                                onChange={() => toggleCategory(child.id)}
                                className="h-4 w-4 accent-[#FC9C44]"
                              />
                              {child.label}
                            </label>

                            <button
                              type="button"
                              onClick={() => onDeleteCategory?.(child.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {visibleCategories.length === 0 && (
                <li className="py-2 text-sm text-[#98A2B3]">No categories found.</li>
              )}
            </ul>
          </div>

          <button
            type="button"
            onClick={onAddCategory}
            className="mt-3 text-sm font-semibold text-[#3B82F6] underline underline-offset-2 hover:text-[#2563EB]"
          >
            Add Category
          </button>
        </div>
      )}
    </aside>
  );
}

export type PostCategoryPickerProps = {
  categories: string[];
  selected: string[];
  onSelect: (categories: string[]) => void;
  onAddCategory?: (name: string) => void;
  onDeleteCategory?: (name: string) => void; // <-- ADD THIS
  onCategoriesRestored?: (names: string[]) => void;
  storageKey?: string;
};

export function PostCategoryPicker({
  categories,
  selected,
  onSelect,
  onAddCategory,
  onDeleteCategory,
  onCategoriesRestored,
  storageKey = "admin.addBlog.categories",
}: PostCategoryPickerProps) {
  const [search, setSearch] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Own persistence directly, so added categories survive a refresh no
  // matter what the parent component does with the `categories` prop.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as string[];
        if (Array.isArray(saved)) {
          const missing = saved.filter((name) => !categories.includes(name));
          if (missing.length > 0) {
            onCategoriesRestored?.(missing);
          }
        }
      }
    } catch {
      // Ignore malformed/unavailable storage.
    }
    // Runs once on mount only - intentionally not reacting to prop changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase()),
  );

  function persistCategory(name: string) {
    try {
      const raw = window.localStorage.getItem(storageKey);
      const saved: string[] = raw ? JSON.parse(raw) : [];
      if (!saved.includes(name)) {
        window.localStorage.setItem(storageKey, JSON.stringify([...saved, name]));
      }
    } catch {
      // Storage may be unavailable (private mode, quota, etc.) - fail silently.
    }
  }

  function removeCategory(name: string) {
    try {
      const raw = window.localStorage.getItem(storageKey);
      const saved: string[] = raw ? JSON.parse(raw) : [];

      window.localStorage.setItem(
        storageKey,
        JSON.stringify(saved.filter((c) => c !== name))
      );
    } catch { }
  }

  const handleAdd = () => {
    const trimmed = newCategoryName.trim();
    if (trimmed) {
      onAddCategory?.(trimmed);
      persistCategory(trimmed);
      setNewCategoryName("");
      setIsAdding(false);
    }
  };


  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;

      const canScrollUp = scrollTop > -1;
      const canScrollDown =
        scrollTop + clientHeight < scrollHeight;

      if (
        (e.deltaY < 0 && canScrollUp) ||
        (e.deltaY > 0 && canScrollDown)
      ) {
        e.preventDefault();
        e.stopPropagation();

        el.scrollTop += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="rounded-xl border border-[#E4E7EC] p-5 bg-white">
      <h3 className="mb-4 text-sm font-black text-[#06133D]">Categories</h3>

      <label className="relative block mb-3">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Categories"
          className="w-full rounded-md border border-[#D0D5DD] bg-white py-1.5 pl-9 pr-3 text-xs text-[#344054] outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
        />
      </label>

      {/* Same fix here: capped to ~4 rows (9.5rem) instead of max-h-48 (12rem,
            which comfortably fit 5-6 rows and delayed the scrollbar). */}
      <div
        ref={scrollRef}
        tabIndex={0}
        className="max-h-[9.5rem] overflow-y-auto overscroll-contain pr-1 mb-3 space-y-2 focus:outline-none"
      >
        {filteredCategories.map((cat) => {
          const isChecked = selected.includes(cat);
          return (
            <div
              key={cat}
              className="flex items-center justify-between"
            >
              <label className="flex cursor-pointer items-center gap-2 text-xs font-bold text-[#344054] hover:text-[#06133D]">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    if (isChecked) {
                      onSelect(selected.filter((c) => c !== cat));
                    } else {
                      onSelect([...selected, cat]);
                    }
                  }}
                  className="h-4 w-4 rounded border-[#D0D5DD] text-[#FC9C44] accent-[#FC9C44] focus:ring-[#FC9C44]"
                />
                {cat}
              </label>

              <button
                type="button"
                onClick={() => {
                  removeCategory(cat);
                  onDeleteCategory?.(cat);
                }}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          );
        })}
        {filteredCategories.length === 0 && (
          <p className="text-xs text-[#98A2B3]">No categories found.</p>
        )}
      </div>

      {isAdding ? (
        <div className="mt-3 space-y-2">
          <input
            autoFocus
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd();
              if (e.key === "Escape") setIsAdding(false);
            }}
            placeholder="New category name"
            className="w-full rounded-md border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs text-[#344054] outline-none focus:border-[#FC9C44]"
          />
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="rounded px-2.5 py-1 text-xs font-bold text-[#667085] hover:bg-[#F2F4F7]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className="rounded bg-[#FC9C44] px-2.5 py-1 text-xs font-black text-white hover:bg-[#E88933]"
            >
              Add
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsAdding(true)}
          className="text-xs font-black text-[#FC9C44] hover:text-[#E88933] flex items-center gap-1"
        >
          + Add Category
        </button>
      )}
    </div>
  );
}