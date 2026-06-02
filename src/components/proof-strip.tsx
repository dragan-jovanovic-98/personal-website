import { sortedCaseStudies } from "@/content/case-studies";
import { ClientLogo } from "@/components/client-logo";

// The proof strip: three named, verifiable production stats. The numbers are
// the visual hero, set large in mono, each anchored to a recreated client logo.
export function ProofStrip() {
  const items = sortedCaseStudies();

  return (
    <div className="border-y border-line">
      <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((c, i) => (
          <div
            key={c.slug}
            className="reveal px-0 py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div className="flex h-10 items-center">
              <ClientLogo slug={c.slug} name={c.client} />
            </div>
            <div className="mt-6 font-mono text-4xl font-medium tracking-tight text-ink lg:text-5xl">
              {c.stat.value}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              {c.stat.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
