import { useLanguage } from "../context/LanguageContext";
import { Eyebrow, SectionIndex, Motif } from "./Atoms";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";
import polarBears from "../assets/panda.webp";

export default function Turnkey() {
  const { t } = useLanguage();
  const k = t.turnkey;

  return (
    <section id="business" className="scroll-mt-24 bg-bg px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal y={40} className="order-2 lg:order-1 relative">
          <div className="overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-25px_rgba(44,95,26,0.35)]">
            <img
              src={polarBears}
              alt={k.title}
              className="h-[320px] w-full object-cover object-[35%_50%] sm:h-[420px] lg:h-[480px]"
            />
          </div>
          <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-[1.75rem] border border-accent/30 sm:-bottom-5 sm:-left-5" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal className="mb-5 flex items-center gap-4">
            <SectionIndex>{k.index}</SectionIndex>
            <Motif />
          </Reveal>
          <Reveal delay={0.05} className="mb-6">
            <Eyebrow>{k.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} as="h2" className="font-display max-w-lg text-3xl font-medium leading-tight text-primary sm:text-4xl">
            {k.title}
          </Reveal>
          <Reveal delay={0.15} as="p" className="mt-6 max-w-lg text-[15px] font-medium leading-relaxed text-primary/80 sm:text-base">
            {k.lead}
          </Reveal>
          <Reveal delay={0.18} as="p" className="mt-3 max-w-lg text-[15px] leading-relaxed text-text/70 sm:text-base">
            {k.body}
          </Reveal>

          <div className="mt-10 space-y-4">
            {k.features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <Reveal
                  key={f.title}
                  delay={0.23 + i * 0.08}
                  className="flex gap-4 rounded-2xl bg-cream p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-accent-soft">
                    <Icon width={17} height={17} />
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
      </div>
    </section>
  );
}
