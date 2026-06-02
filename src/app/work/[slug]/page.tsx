import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { DashboardMock } from "@/components/dashboard-mock";
import { ClientLogo } from "@/components/client-logo";
import { mockups } from "@/content/mockups";
import {
  caseStudies,
  getCaseStudy,
  sortedCaseStudies,
} from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    openGraph: {
      title: `${study.metaTitle} · Dragan Jovanovic`,
      description: study.metaDescription,
    },
  };
}

function Block({ label, children }: { label: string; children: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10">
      <p className="eyebrow md:col-span-3">{label}</p>
      <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:col-span-9">
        {children}
      </p>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const mock = mockups[study.slug];
  const all = sortedCaseStudies();
  const idx = all.findIndex((c) => c.slug === study.slug);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-16 pb-14 md:pt-20 md:pb-20">
          <Link
            href="/work"
            className="link-underline inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
          >
            <span aria-hidden>&larr;</span> Selected work
          </Link>

          <div className="mt-12">
            <ClientLogo slug={study.slug} name={study.client} />
          </div>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold text-ink">
            {study.pageTitle}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-soft">
            {study.cardLine}
          </p>

          <div className="mt-12 inline-flex items-baseline gap-4 border-t border-line pt-8">
            <span className="font-mono text-5xl font-medium tracking-tight text-ink">
              {study.stat.value}
            </span>
            <span className="text-sm text-muted">{study.stat.label}</span>
          </div>
        </Container>
      </section>

      {/* Product shot: an in-brand mockup of the kind of system built. */}
      {mock && (
        <section className="border-b border-line bg-paper-raised/60">
          <Container className="py-14 md:py-20">
            <DashboardMock data={mock} />
            <p className="mt-4 font-mono text-[11px] text-muted">
              Representative interface. Built in-house on the client&apos;s own
              accounts; shown with sample data.
            </p>
          </Container>
        </section>
      )}

      <section>
        <Container className="py-8 md:py-12">
          <Block label="The situation">{study.situation}</Block>
          <Block label="What I figured out">{study.figuredOut}</Block>
          <Block label="What I built">{study.built}</Block>
          <Block label="The result">{study.result}</Block>
          <Block label="Stack">{study.stack}</Block>
        </Container>
      </section>

      {/* Next case + CTA */}
      <section className="border-t border-line bg-paper-raised">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Next case study</p>
              <Link href={`/work/${next.slug}`} className="group mt-4 block">
                <span className="font-display text-2xl font-extrabold text-ink transition-colors group-hover:text-accent md:text-3xl">
                  {next.pageTitle}
                </span>
                <span className="mt-2 block text-sm text-muted">
                  {next.client}
                </span>
              </Link>
            </div>
            <CTAButton href="/contact">Book a call</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
