import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Locations from "./components/Locations";
import Turnkey from "./components/Turnkey";
import Seasonal from "./components/Seasonal";

import Demo from "./components/Demo";
import CTA from "./components/CTA";

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Locations />
        <Seasonal />
        <Turnkey />
        <Demo />
        <CTA />
      </main>
    </LanguageProvider>
  );
}
