import { useLanguage } from "../context/LanguageContext";
import { Eyebrow, SectionIndex, Motif } from "./Atoms";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";
import giraffes from "../assets/giraffes.webp";
//-----------------------------------------------------------
//-----------------------------------------------------------
export default function Concept() {
  const { t } = useLanguage();
  const c = t.concept;

  return (
    <section
      id="concept"
      className="scroll-mt-24 bg-bg px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal className="mb-5 flex items-center gap-4">
            <SectionIndex>{c.index}</SectionIndex>
            <Motif />
          </Reveal>
          <Reveal delay={0.05} className="mb-6">
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal
            delay={0.1}
            as="h2"
            className="font-display max-w-lg text-3xl font-medium leading-tight text-primary sm:text-4xl"
          >
            {c.title}
          </Reveal>

          {c.body.map((line, i) => {
            return (
              <Reveal
                key={i}
                delay={0.15}
                as="p"
                className="mt-6 max-w-lg text-[15px] leading-relaxed text-text/70 sm:text-base"
              >
                {line}
              </Reveal>
            );
          })}

          <div className="mt-10 space-y-7">
            {c.features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <Reveal
                  key={f.title}
                  delay={0.18 + i * 0.08}
                  className="flex gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/50 text-primary">
                    <Icon width={19} height={19} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text/65">
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1} y={40} className="relative">
          <div className="overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-25px_rgba(44,95,26,0.35)]">
            <img
              src={giraffes}
              alt={c.title}
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />
          </div>
          <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[1.75rem] border border-accent/30 sm:-right-5 sm:-top-5" />
        </Reveal>
      </div>
    </section>
  );
}
