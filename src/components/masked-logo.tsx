import type { LogoAsset } from "@/content/logos";

// Renders a logo as a solid monochrome silhouette by using the (transparent)
// logo image as a CSS mask over a coloured box. Sizing comes from a height
// class plus the intrinsic aspect ratio.
export function MaskedLogo({
  logo,
  tone = "ink",
  decorative = false,
  className = "",
}: {
  logo: LogoAsset;
  tone?: "ink" | "muted";
  decorative?: boolean;
  className?: string;
}) {
  const toneClass = tone === "muted" ? "bg-muted" : "bg-ink";

  const style = {
    aspectRatio: String(logo.ratio),
    WebkitMaskImage: `url("${logo.src}")`,
    maskImage: `url("${logo.src}")`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    maskMode: "alpha",
  } as React.CSSProperties;

  return (
    <span
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : logo.alt}
      aria-hidden={decorative || undefined}
      className={`inline-block ${toneClass} ${className}`}
      style={style}
    />
  );
}
