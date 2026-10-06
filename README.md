# Zoo Journal × QRMB — Interaktív Prezentáció

Egyoldalas webes prezentáció a Fővárosi Állat- és Növénykert (Budapest Zoo) számára,
a Zoo Journal demó bemutatására. Demó: https://busabalazs.github.io/zoo-journal/

## Tech stack
React 19 + Vite · Tailwind CSS v4 · GSAP (`@gsap/react`, ScrollTrigger) · `qrcode.react`

## Indítás
```bash
npm install
npm run dev
npm run build
npm run deploy   # gh-pages -d dist  (base: /zoo-prezi/ — vite.config.js)
```

## Tartalom módosítása
Minden szöveg (HU/EN) az `src/i18n/translations.js` fájlban van.
Képek: `src/assets/` (gate, giraffes, elephant, polar-bears, zoo_logo).
