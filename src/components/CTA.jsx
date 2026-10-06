import { useLanguage } from "../context/LanguageContext";
import { Eyebrow, Motif } from "./Atoms";
import Reveal from "./Reveal";
import zooLogo from "../assets/zoo_logo.png";
import memqryLogo from "../assets/qrmb.webp";

export default function CTA() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section
      id="cta"
      className="scroll-mt-24 bg-ink px-6 py-28 text-center md:px-10"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <Reveal className="flex items-center gap-5">
          <span className="flex items-center rounded-2xl bg-cream px-4 py-3">
            <img
              src={zooLogo}
              alt="Budapest Zoo — Fővárosi Állat- és Növénykert"
              className="h-20 w-auto"
            />
          </span>
          <Motif tone="dark" />
          <img
            src={memqryLogo}
            alt="MemQRy"
            className="h-16 w-auto brightness-0 invert opacity-90"
          />
        </Reveal>

        {/* <Reveal delay={0.08} className="mt-10">
          <Eyebrow tone="dark">{c.eyebrow}</Eyebrow>
        </Reveal> */}

        <Reveal
          delay={0.14}
          as="h2"
          className="font-display mt-6 text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl"
        >
          {c.title}
        </Reveal>

        <Reveal
          delay={0.2}
          as="p"
          className="mt-6 max-w-160 text-[15px] leading-relaxed text-white/85 sm:text-base"
        >
          {c.body}
        </Reveal>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://qrmb.hu/"
            target="_blank"
            className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-accent/60 hover:bg-white/[0.08]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9Z" />
            </svg>
            {c.web}
          </a>
          <a
            href={`mailto:${c.email}`}
            className="group flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-accent-soft"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="3" y="5" width="18" height="14" rx="2.2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            {c.email}
          </a>
          <a
            href={`tel:${c.phone}`}
            className="group flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-accent-soft"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            {c.phone}
          </a>
        </div>

        <div className="mt-16 text-[11px] uppercase tracking-[0.2em] text-white/30">
          Fővárosi Állat- és Növénykert &nbsp;|&nbsp; QRMB {" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}
