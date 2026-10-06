import { useLanguage } from "../context/LanguageContext";
import { SectionIndex, Motif } from "./Atoms";
import Reveal from "./Reveal";
import elephant from "../assets/elephant.webp";
import polarBears from "../assets/polar-bears.webp";

//-----------------------------------------------------------
//-----------------------------------------------------------
export default function Locations() {
  const { t } = useLanguage();
  const l = t.locations;
  const images = [elephant, polarBears];

  return (
    <section
      id="locations"
      className="scroll-mt-24 bg-cream px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-4 flex items-center gap-4">
          <SectionIndex>{l.index}</SectionIndex>
          <Motif />
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="font-display max-w-2xl text-3xl font-medium leading-tight text-primary sm:text-4xl"
        >
          {l.title}
        </Reveal>

        <Reveal
          delay={0.15}
          as="p"
          className="mt-6 max-w-lg text-[15px] leading-relaxed text-text/70 sm:text-base"
        >
          {l.body}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {l.cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={0.1 + i * 0.1}
              y={36}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={images[i]}
                  alt={card.title}
                  className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5 border-t border-line pt-5">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-accent">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-2 text-xl font-medium text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text/65">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
