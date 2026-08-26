import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Redo2,
  Strikethrough,
  Undo2,
} from "lucide-react";
import { useEffect, useRef } from "react";
import type { ChangeEvent, ReactNode } from "react";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import type { Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type RichTextEditorProps = {
  /** Current HTML value of the editor (controlled). */
  value: string;
  /** Called with the serialized HTML whenever the document changes. */
  onChange: (html: string) => void;
  placeholder?: string;
};

/**
 * Rich text editor built on Tiptap. Replaces the old visual-only toolbar +
 * <textarea>; every toolbar button is now wired to a real editor command.
 */
export function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing your post…",
}: RichTextEditorProps) {
  const editor = useEditor({
    // TanStack Start renders on the server first; letting Tiptap render
    // immediately there causes an SSR/hydration mismatch. Defer the first
    // render to the client.
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        // StarterKit v3 already bundles the Link extension. Turn its default
        // off here so we can register our own configured Link below without
        // tripping Tiptap's "duplicate extension" conflict.
        link: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-[#C96A13] underline",
          rel: "noopener noreferrer nofollow",
        },
      }),
      Image.configure({
        HTMLAttributes: { class: "rounded-lg" },
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: "prose-editor min-h-[320px] w-full px-4 py-3 text-sm text-[#101828] outline-none",
      },
    },
    onUpdate: ({ editor: current }) => {
      onChange(current.getHTML());
    },
  });

  // Keep the editor in sync when the value is reset externally (e.g. after a
  // successful submit clears the form). Avoids clobbering the cursor while typing.
  useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="rounded-lg border border-[#D0D5DD] focus-within:border-[#FC9C44]">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  function addLink() {
    const previous = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL", previous ?? "https://");
    if (url === null) return; // cancelled
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  const imageInputRef = useRef<HTMLInputElement>(null);

  function readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleImageFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    // Allow picking the same file twice in a row.
    event.target.value = "";
    if (!file || !file.type.startsWith("image/")) return;

    // No upload backend yet, so embed the picture as a base64 data URL. This
    // survives serialization into form.content (an object URL would not).
    // TODO: when a storage/upload API exists, POST the file and use the
    // returned URL here instead of the data URL.
    const src = await readFileAsDataUrl(file);
    editor.chain().focus().setImage({ src, alt: file.name }).run();
  }

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-t-lg border-b border-[#D0D5DD] bg-[#F9FAFB] px-2 py-2">
      <ToolbarButton
        label="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
      >
        <Bold size={16} />
      </ToolbarButton>
      <ToolbarButton
        label="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
      >
        <Italic size={16} />
      </ToolbarButton>
      <ToolbarButton
        label="Strikethrough"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        active={editor.isActive("strike")}
      >
        <Strikethrough size={16} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton
        label="Heading 1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        active={editor.isActive("heading", { level: 1 })}
      >
        <Heading1 size={16} />
      </ToolbarButton>
      <ToolbarButton
        label="Heading 2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive("heading", { level: 2 })}
      >
        <Heading2 size={16} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton
        label="Bullet list"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
      >
        <List size={16} />
      </ToolbarButton>
      <ToolbarButton
        label="Ordered list"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
      >
        <ListOrdered size={16} />
      </ToolbarButton>
      <ToolbarButton
        label="Blockquote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive("blockquote")}
      >
        <Quote size={16} />
      </ToolbarButton>
      <ToolbarButton
        label="Code block"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        active={editor.isActive("codeBlock")}
      >
        <Code size={16} />
      </ToolbarButton>

      <Divider />

      <ToolbarButton label="Link" onClick={addLink} active={editor.isActive("link")}>
        <LinkIcon size={16} />
      </ToolbarButton>
      <ToolbarButton label="Upload image" onClick={() => imageInputRef.current?.click()}>
        <ImageIcon size={16} />
      </ToolbarButton>
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageFile}
      />

      <Divider />

      <ToolbarButton
        label="Undo"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <Undo2 size={16} />
      </ToolbarButton>
      <ToolbarButton
        label="Redo"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
      >
        <Redo2 size={16} />
      </ToolbarButton>
    </div>
  );
}

function ToolbarButton({
  label,
  onClick,
  active = false,
  disabled = false,
  children,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      // Prevent the button from stealing focus/selection from the editor on
      // mousedown; otherwise selection-based marks (bold/italic/strike) would
      // toggle against an empty selection and appear to "not work".
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={disabled}
      className={`grid h-8 w-8 place-items-center rounded-md transition disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "bg-[#FFF4E8] text-[#C96A13]"
          : "text-[#667085] hover:bg-[#F2F4F7] hover:text-[#344054]"
      }`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <span className="mx-1 h-5 w-px bg-[#E4E7EC]" aria-hidden="true" />;
}
