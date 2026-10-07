import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../context/LanguageContext";
import { Eyebrow, Motif } from "./Atoms";
import gateImage from "../assets/gate.webp";

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.7 },
      )
        .fromTo(
          ".hero-title-line",
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=0.35",
        )
        .fromTo(
          ".hero-body",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ".hero-footer",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          ".hero-image",
          { autoAlpha: 0, scale: 1.08 },
          { autoAlpha: 1, scale: 1, duration: 1.3, ease: "power2.out" },
          0.1,
        )
        .fromTo(
          ".hero-image-frame",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6 },
          "-=0.9",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen  overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="order-2 lg:order-1">
          <div className="hero-eyebrow mb-6">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          </div>
          <h1 className="hero-title-line font-display max-w-xl text-[2.4rem] font-medium leading-[1.12] text-primary sm:text-5xl lg:text-[3.4rem]">
            {t.hero.title}
          </h1>
          <p className="hero-body mt-7 max-w-md text-base leading-relaxed text-text/70 sm:text-lg">
            {t.hero.body}
          </p>

          <div className="hero-footer mt-10 mb-12 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/50">
              {t.hero.footer}
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="hero-image-frame relative rounded-[2rem] border border-accent/30 p-2 sm:p-3">
            <div className="overflow-hidden rounded-[1.6rem]">
              <img
                src={gateImage}
                alt="A Fővárosi Állat- és Növénykert főbejárata az elefántszobrokkal"
                className="hero-image h-[340px] w-full object-cover object-[50%_45%] sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto inset-x-0 hidden justify-start sm:flex pl-10">
        <span className="hero-footer flex items-center  gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-primary/40">
          {t.hero.scroll}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="animate-float"
          >
            <path d="M12 4v15M6 14l6 6 6-6" />
          </svg>
        </span>
      </div>
    </section>
  );
}
