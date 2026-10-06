import { useLanguage } from "../context/LanguageContext";
import { SectionIndex, Motif } from "./Atoms";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";

export default function Business() {
  const { t } = useLanguage();
  const b = t.business;

  return (
    <section id="business" className="scroll-mt-24 bg-bg px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-4 flex items-center gap-4">
          <SectionIndex>{b.index}</SectionIndex>
          <Motif />
        </Reveal>
        <Reveal as="h2" delay={0.05} className="font-display max-w-2xl text-3xl font-medium leading-tight text-primary sm:text-4xl">
          {b.title}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2">
          {b.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <Reveal
                key={card.title}
                delay={0.1 + i * 0.1}
                y={36}
                className="rounded-[1.75rem] border border-line bg-cream p-9 transition-shadow duration-500 hover:shadow-[0_25px_50px_-30px_rgba(44,95,26,0.4)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-accent-soft">
                  <Icon width={21} height={21} />
                </span>
                <h3 className="font-display mt-6 text-xl font-medium text-primary">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-primary/75">{card.lead}</p>
                <p className="mt-2 text-sm leading-relaxed text-text/65">{card.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
