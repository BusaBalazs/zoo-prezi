const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconDevice(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.4" />
      <path d="M10.5 18.2h3" />
    </svg>
  );
}

export function IconCrown(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 8.5 7 12l5-7.5 5 7.5 3.5-3.5-1.6 9.5H5.1L3.5 8.5Z" />
      <path d="M5.6 20h12.8" />
    </svg>
  );
}

export function IconPen(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 4.3 19.7 9.3 8 21H3v-5L14.7 4.3Z" />
      <path d="M12.5 6.5 17.5 11.5" />
    </svg>
  );
}

export function IconCloud(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 18.5a4.3 4.3 0 0 1-1-8.47 5.3 5.3 0 0 1 10.3-1.7 4.1 4.1 0 0 1 3.7 4.07 4.1 4.1 0 0 1-4.1 4.1H7Z" />
    </svg>
  );
}

export function IconReset(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12a8 8 0 1 1 2.6 5.9" />
      <path d="M4 18v-5h5" />
    </svg>
  );
}

export function IconGlobe(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9Z" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.8 9.4 17.5 19.5 6.5" />
    </svg>
  );
}

export function IconCocktail(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h16l-7 9v6.5" />
      <path d="M8.6 22h6.8" />
      <path d="M5.7 7.4h12.6" />
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 14.6 9l6.4.5-4.9 4.2 1.5 6.2L12 16.8 6.4 19.9l1.5-6.2-4.9-4.2L9.4 9 12 3.2Z" />
    </svg>
  );
}

export const iconMap = {
  device: IconDevice,
  crown: IconCrown,
  pen: IconPen,
  cloud: IconCloud,
  reset: IconReset,
  globe: IconGlobe,
  check: IconCheck,
  cocktail: IconCocktail,
  star: IconStar,
};
