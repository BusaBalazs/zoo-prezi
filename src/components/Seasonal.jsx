import { useLanguage } from "../context/LanguageContext";
import { Eyebrow, SectionIndex, Motif } from "./Atoms";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";
import gate from "../assets/gate_2.webp";

export default function Seasonal() {
  const { t } = useLanguage();
  const s = t.seasonal;

  return (
    <section id="seasonal" className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal className="mb-5 flex items-center gap-4">
            <SectionIndex>{s.index}</SectionIndex>
            <Motif />
          </Reveal>
          <Reveal delay={0.05} className="mb-6">
            <Eyebrow>{s.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} as="h2" className="font-display max-w-lg text-3xl font-medium leading-tight text-primary sm:text-4xl">
            {s.title}
          </Reveal>
          <Reveal delay={0.15} as="p" className="mt-6 max-w-lg text-[15px] leading-relaxed text-text/70 sm:text-base">
            {s.body}
          </Reveal>

          <Reveal delay={0.2} className="mt-6 flex flex-wrap gap-2.5">
            {s.holidays.map((h) => (
              <span
                key={h}
                className="rounded-full border border-primary/20 bg-bg px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-primary/70"
              >
                {h}
              </span>
            ))}
          </Reveal>

          <div className="mt-10 space-y-7">
            {s.features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <Reveal key={f.title} delay={0.24 + i * 0.08} className="flex gap-4">
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

        <Reveal delay={0.1} y={40} className="relative">
          <div className="overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-25px_rgba(44,95,26,0.35)]">
            <img
              src={gate}
              alt={s.title}
              className="h-[320px] w-full object-cover object-[50%_20%] sm:h-[420px] lg:h-[480px]"
            />
          </div>
          <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[1.75rem] border border-accent/30 sm:-right-5 sm:-top-5" />
        </Reveal>
      </div>
    </section>
  );
}
