import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import zooLogo from "../assets/zoo_logo.png";

const sections = [
  { id: "concept", key: "concept" },
  { id: "locations", key: "locations" },
  { id: "seasonal", key: "seasonal" },
  { id: "business", key: "business" },
  { id: "demo", key: "demo" },
  { id: "cta", key: "cta" },
];

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,95,26,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3"
          aria-label="Fővárosi Állat- és Növénykert — vissza a kezdőlapra"
        >
          <img src={zooLogo} alt="Budapest Zoo — Fővárosi Állat- és Növénykert" className="h-12 w-auto md:h-[4.5rem]" />
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-[13px] font-medium uppercase tracking-[0.12em] text-primary/70 transition-colors hover:text-primary"
            >
              {t.nav[s.key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
         
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 rounded-full border-2 border-primary px-4 py-1.5 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white "
            aria-label="Nyelv váltása / Switch language"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9Z" />
            </svg>
            <span>{lang === "hu" ? "EN" : "HU"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
