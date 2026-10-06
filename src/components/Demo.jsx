import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "../context/LanguageContext";
import { Eyebrow, SectionIndex, Motif } from "./Atoms";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";

const DEMO_URL = "https://busabalazs.github.io/zoo-journal/";

export default function Demo() {
  const { t } = useLanguage();
  const d = t.demo;
  const glowRef = useRef(null);

  useGSAP(() => {
    gsap.to(glowRef.current, {
      opacity: 0.55,
      scale: 1.08,
      duration: 2.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, { scope: glowRef });

  return (
    <section id="demo" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal className="mb-5 flex items-center gap-4">
            <SectionIndex>{d.index}</SectionIndex>
            <Motif />
          </Reveal>
          <Reveal delay={0.05} className="mb-6">
            <Eyebrow>{d.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} as="h2" className="font-display max-w-lg text-3xl font-medium leading-tight text-primary sm:text-4xl">
            {d.title}
          </Reveal>
          <Reveal delay={0.15} as="p" className="mt-6 max-w-lg text-[15px] leading-relaxed text-text/70 sm:text-base">
            {d.body}
          </Reveal>

          <div className="mt-10 space-y-7">
            {d.features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <Reveal key={f.title} delay={0.2 + i * 0.08} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/50 text-primary">
                    <Icon width={19} height={19} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text/65">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.15} y={40} className="flex justify-center lg:justify-end">
          <div className="relative flex flex-col items-center gap-5 rounded-[2rem] border border-accent/30 bg-bg px-10 py-12 shadow-[0_30px_60px_-25px_rgba(44,95,26,0.3)]">
            <div ref={glowRef} className="pointer-events-none absolute inset-6 -z-10 rounded-[1.6rem] bg-accent/20 opacity-30 blur-2xl" />
            
            <div className="rounded-2xl bg-white p-5">
              <QRCodeSVG
                value={DEMO_URL}
                size={192}
                fgColor="#2c5f1a"
                bgColor="#ffffff"
                level="M"
                imageSettings={undefined}
              />
            </div>
            <p className="flex items-center gap-2 text-sm font-medium text-primary/75">
              <span className="flex h-6 w-6 items-center justify-center rounded-md border border-primary/30">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <path d="M14 14h3v3h-3zM19 14v7M14 19h7" />
                </svg>
              </span>
              {d.qrCaption}
            </p>
            <p className="max-w-[16rem] text-center text-xs text-text/60">
              {d.qrDescription}
            </p>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary/75 hover:text-primary bg-accent/25 px-5 py-3 rounded-full transition-colors hover:bg-accent/40"
            >
              {d.qrLink}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
