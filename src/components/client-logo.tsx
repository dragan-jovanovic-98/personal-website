import { caseStudyLogos } from "@/content/logos";
import { MaskedLogo } from "@/components/masked-logo";

// Client lockup. Renders the logo as a monochrome ink silhouette so it is
// always legible on the paper background, regardless of the source logo's
// colour. Falls back to a text wordmark if no logo is mapped.
export function ClientLogo({
  slug,
  name,
  className = "",
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const logo = caseStudyLogos[slug];

  if (logo) {
    return <MaskedLogo logo={logo} tone="ink" className={`h-7 md:h-8 ${className}`} />;
  }

  return (
    <span
      className={`font-display text-sm font-bold tracking-tight text-ink ${className}`}
    >
      {name}
    </span>
  );
}
