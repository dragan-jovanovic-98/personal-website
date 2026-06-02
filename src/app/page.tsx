import Link from "next/link";
import { Container } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { ProofStrip } from "@/components/proof-strip";
import { CaseStudyCard } from "@/components/case-study-card";
import { Portrait } from "@/components/portrait";
import { LogoMarquee } from "@/components/logo-marquee";
import { sortedCaseStudies } from "@/content/case-studies";

export default function Home() {
  const studies = sortedCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container className="pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="eyebrow reveal">Fractional CTO &middot; AI builder</p>

              <h1
                className="reveal mt-6 text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold text-ink"
                style={{ animationDelay: "80ms" }}
              >
                Put AI where it actually pays off.
              </h1>

              <p
                className="reveal mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
                style={{ animationDelay: "160ms" }}
              >
                I&apos;m Dragan Jovanovic. I help tech-friendly business owners
                work out what&apos;s worth doing with AI and what isn&apos;t,
                then build it myself. No hype.
              </p>

              <div
                className="reveal mt-10 flex flex-wrap items-center gap-4"
                style={{ animationDelay: "240ms" }}
              >
                <CTAButton href="/contact">Book a call</CTAButton>
                <Link
                  href="/work"
                  className="link-underline text-sm font-medium text-ink hover:text-ink"
                >
                  See the work
                </Link>
              </div>

              <p
                className="reveal mt-10 flex items-center gap-3 text-sm text-muted"
                style={{ animationDelay: "320ms" }}
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                />
                Fractional CTO at PrimeSync. 18 months and counting.
              </p>
            </div>

            <div
              className="reveal md:col-span-5"
              style={{ animationDelay: "200ms" }}
            >
              <Portrait src="/images/dragan.png" label="Your portrait" />
            </div>
          </div>
        </Container>
      </section>

      {/* Worked with */}
      <section className="border-b border-line">
        <Container className="py-10 md:py-12">
          <p className="eyebrow mb-7">Worked with</p>
          <LogoMarquee />
        </Container>
      </section>

      {/* Proof strip */}
      <section>
        <Container className="py-16 md:py-20">
          <p className="eyebrow mb-10">
            Shipped, in production, for named clients.
          </p>
          <ProofStrip />
        </Container>
      </section>

      {/* Selected work */}
      <section className="border-t border-line">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-ink md:text-5xl">
              Selected work
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Three builds across voice agents, backend, and full operations. Different
              problems, same approach: figure out what&apos;s worth doing, then
              build it on your own accounts.
            </p>
          </div>

          <div className="mt-14">
            {studies.map((study, i) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                flip={i % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* How to work with me — two productized modes */}
      <section className="border-t border-line">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">How to work with me</p>
            <h2 className="mt-6 text-4xl font-extrabold text-ink md:text-5xl">
              Two ways in.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Most engagements are one of these. Both start the same way: a
              straight read on what&apos;s worth doing before anything gets
              built.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
            <div className="bg-paper p-8 md:p-10">
              <span className="font-mono text-sm text-muted">01</span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">
                Build with me
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                You have something that needs building. I work out what&apos;s
                worth doing with AI, then build and ship it myself on your own
                accounts: voice agents, backends, client dashboards, the full
                stack. Some of this is an ongoing fractional CTO role, some is a
                single defined build.
              </p>
            </div>

            <div className="bg-paper p-8 md:p-10">
              <span className="font-mono text-sm text-muted">02</span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">
                Streamline with me
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                You have an operation that runs on manual work. I map it, find
                what&apos;s eating your team&apos;s time, and replace it with
                automation that runs on your own data. It often starts with one
                painful task and grows from there.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base text-muted">
            Not sure which fits? Start with a call and I&apos;ll tell you which
            one your situation actually needs.
          </p>
        </Container>
      </section>

      {/* About teaser */}
      <section className="border-t border-line">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
                Who you&apos;d be working with
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg leading-relaxed text-ink-soft">
                I started out as an automation engineer, writing control systems
                for industrial processes where a bad deployment didn&apos;t just
                fail quietly. That background shaped how I think about production
                readiness: something either runs reliably under real conditions
                or it doesn&apos;t ship. Over 18 months with PrimeSync, an AI
                voice-receptionist company, I grew into the fractional CTO role
                and still run their core infrastructure. Beyond that,
                I&apos;ve shipped for dozens of companies in very different
                industries. What I build can be trusted to run a real business,
                not just pass a demo.
              </p>
              <Link
                href="/about"
                className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent"
              >
                More about me
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA band — dark, so the page ends cohesively into the footer */}
      <section className="border-t border-line bg-paper-raised">
        <Container className="py-20 md:py-28">
          <h2 className="max-w-3xl text-4xl font-extrabold text-ink md:text-6xl">
            Thinking about where AI fits your business?
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Whether you&apos;ve got a specific build in mind or you&apos;re just
            weighing whether it&apos;s worth it at all, book a free call.
            You&apos;ll get a straight read on what&apos;s worth doing, what
            isn&apos;t, and what it would take. No pitch.
          </p>
          <div className="mt-10">
            <CTAButton href="/contact">Book a call</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
