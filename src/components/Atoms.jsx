export function Eyebrow({ children, tone = "light" }) {
  const toneClasses =
    tone === "dark"
      ? "border-accent/60 text-accent"
      : "border-primary/25 text-primary";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${toneClasses}`}
    >
      {children}
    </span>
  );
}

export function SectionIndex({ children, tone = "light" }) {
  return (
    <span
      className={`font-display text-xs uppercase tracking-[0.3em] ${
        tone === "dark" ? "text-accent-soft/70" : "text-primary/45"
      }`}
    >
      {children}
    </span>
  );
}

/**
 * Signature element: a thin-line paw print, used as a quiet recurring "seal"
 * between section indexes and headings.
 */
export function Motif({ tone = "light", className = "" }) {
  const stroke = tone === "dark" ? "#f5a81c" : "#2c5f1a";
  const strokeSoft = "#f5a81c";
  return (
    <svg
      viewBox="0 0 64 32"
      className={`h-6 w-12 ${className}`}
      aria-hidden="true"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M32 14c-5 0-9 4.2-9 8 0 2.6 2 4 4.4 4 1.8 0 2.8-.9 4.6-.9s2.8.9 4.6.9c2.4 0 4.4-1.4 4.4-4 0-3.8-4-8-9-8Z" stroke={stroke} />
      <ellipse cx="17" cy="13" rx="2.6" ry="3.6" transform="rotate(-18 17 13)" stroke={strokeSoft} />
      <ellipse cx="25" cy="6.5" rx="2.6" ry="3.8" transform="rotate(-6 25 6.5)" stroke={strokeSoft} />
      <ellipse cx="39" cy="6.5" rx="2.6" ry="3.8" transform="rotate(6 39 6.5)" stroke={strokeSoft} />
      <ellipse cx="47" cy="13" rx="2.6" ry="3.6" transform="rotate(18 47 13)" stroke={strokeSoft} />
    </svg>
  );
}
