// Client logos as transparent shapes, rendered as monochrome ink silhouettes
// via CSS masking (see MaskedLogo). Using the shape + a fill colour means the
// original logo colour (white-on-dark vs dark-on-light) no longer matters, so
// every logo is uniform and always visible on the paper background.
// `ratio` is intrinsic width / height, used to size the masked element.

// `color: true` renders the real coloured logo (for detailed/emblem logos that
// would turn into an unreadable blob in monochrome). Otherwise the logo is a
// monochrome ink silhouette.
export type LogoAsset = {
  src: string;
  alt: string;
  ratio: number;
  color?: boolean;
};

export const caseStudyLogos: Record<string, LogoAsset> = {
  "primesync-torqi": {
    src: "/images/Primesync_logo.png",
    alt: "PrimeSync",
    ratio: 3.0,
  },
  "auto-lead-kings": {
    src: "/images/alk-logo-t.png",
    alt: "Auto Lead Kings",
    ratio: 5.073,
  },
  "kingscourt-markham": {
    src: "/images/kc-markham-logo-t.png",
    alt: "Kingscourt Markham",
    ratio: 2.493,
  },
};

// Broader social-proof wall, including clients beyond the three case studies.
export const wallLogos: LogoAsset[] = [
  // Order is a deliberate mix (not the order they were added): it avoids
  // leading with the three case-study logos in a row, weaves in the newer
  // clients, and keeps the wide marks (Auto Lead Kings, Courtside, National
  // Debt Relief) from bunching next to each other.
  { src: "/images/Primesync_logo.png", alt: "PrimeSync", ratio: 3.0 },
  {
    // On the dark ground the full-colour (navy) emblem disappears, so it now
    // renders as a light monochrome silhouette like the rest for visibility and
    // uniformity. Revisit if the shield reads as a blob: either source a white
    // knockout version or drop it from the wall.
    src: "/images/national-debt-relief-logo-t.png",
    alt: "National Debt Relief",
    ratio: 4.455,
  },
  {
    src: "/images/kc-markham-logo-t.png",
    alt: "Kingscourt Markham",
    ratio: 2.493,
  },
  // Cropped from the source export, which had the mark floating in a large
  // empty 500x500 canvas. courtside-logo-t.png is the tight content crop.
  { src: "/images/courtside-logo-t.png", alt: "Courtside AI", ratio: 4.716 },
  { src: "/images/torqi-logo-t.png", alt: "TorQi", ratio: 2.902 },
  { src: "/images/alk-logo-t.png", alt: "Auto Lead Kings", ratio: 5.073 },
  { src: "/images/calljune-logo.png", alt: "Call June", ratio: 3.512 },
  {
    src: "/images/the-zadegan-group-logo-t.png",
    alt: "The Zadegan Group",
    ratio: 3.721,
  },
];
