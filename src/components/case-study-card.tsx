import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
import { mockups } from "@/content/mockups";
import { DashboardMock } from "@/components/dashboard-mock";
import { ClientLogo } from "@/components/client-logo";

// Editorial work row: text on one side, an in-brand product mockup on the
// other. The whole row is the link, with arrow and color shift on hover.
// Alternating sides give the list rhythm.
export function CaseStudyCard({
  study,
  flip = false,
}: {
  study: CaseStudy;
  flip?: boolean;
}) {
  const mock = mockups[study.slug];

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block border-t border-line py-12 first:border-t-0 md:py-16"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        {/* Text */}
        <div
          className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted">
              {String(study.order).padStart(2, "0")}
            </span>
            <ClientLogo slug={study.slug} name={study.client} />
          </div>
          <h3 className="mt-5 font-display text-2xl font-extrabold text-ink transition-colors group-hover:text-accent md:text-3xl">
            {study.pageTitle}
          </h3>
          <p className="mt-4 leading-relaxed text-ink-soft">{study.cardLine}</p>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-mono text-2xl font-medium tracking-tight text-ink">
              {study.stat.value}
            </span>
            <span className="text-sm text-muted">{study.stat.label}</span>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Read the case study
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </span>
        </div>

        {/* Mockup */}
        <div className={`md:col-span-7 ${flip ? "md:order-1" : ""}`}>
          <div className="transition-transform duration-500 group-hover:-translate-y-1">
            <DashboardMock data={mock} compact />
          </div>
        </div>
      </div>
    </Link>
  );
}
