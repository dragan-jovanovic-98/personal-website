import { wallLogos } from "@/content/logos";
import { MaskedLogo } from "@/components/masked-logo";

// Auto-scrolling "worked with" marquee. The list is doubled so the track loops
// seamlessly at translateX(-50%). Most logos render as monochrome ink
// silhouettes for uniformity; detailed emblem logos (color: true) keep their
// real colour so they stay legible. Edges fade via .marquee-mask.
export function LogoMarquee() {
  const loop = [...wallLogos, ...wallLogos];

  return (
    <div className="marquee marquee-mask relative overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-14 md:gap-20">
        {loop.map((logo, i) => {
          const decorative = i >= wallLogos.length;
          return logo.color ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={decorative ? "" : logo.alt}
              aria-hidden={decorative || undefined}
              className="h-7 w-auto shrink-0 object-contain md:h-8"
            />
          ) : (
            <MaskedLogo
              key={`${logo.src}-${i}`}
              logo={logo}
              tone="ink"
              decorative={decorative}
              className="h-7 shrink-0 md:h-8"
            />
          );
        })}
      </div>
    </div>
  );
}
