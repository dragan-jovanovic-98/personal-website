import type { Metadata } from "next";
import { Container } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { CaseStudyCard } from "@/components/case-study-card";
import { sortedCaseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Production AI builds across voice, backend, and full operations, for named clients. Voice agents, dashboards, and end-to-end automation that ship.",
};

export default function WorkPage() {
  const studies = sortedCaseStudies();

  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="eyebrow reveal">Selected work</p>
          <h1
            className="reveal mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-ink"
            style={{ animationDelay: "80ms" }}
          >
            Builds that shipped and stayed shipped.
          </h1>
          <p
            className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "160ms" }}
          >
            Three of them, written up in full. Each is a real, named client
            running in production across voice, backend, and full operations.
            Same approach every time: work out what&apos;s worth doing, then
            build it on their own accounts.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-10 md:py-16">
          {studies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} flip={i % 2 === 1} />
          ))}
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="py-20 md:py-28">
          <h2 className="max-w-3xl text-4xl font-extrabold text-paper md:text-5xl">
            Want this kind of result for your business?
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            Book a free call and I&apos;ll give you a straight read on where AI
            fits, where it doesn&apos;t, and what it would take. No pitch.
          </p>
          <div className="mt-10">
            <CTAButton href="/contact" variant="onDark">
              Book a call
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
