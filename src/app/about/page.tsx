import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { Portrait } from "@/components/portrait";

export const metadata: Metadata = {
  title: "About",
  description:
    "I decide what's worth building with AI, then build it myself. Fractional CTO of PrimeSync and a former control systems engineer, with production systems shipped for dozens of companies.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="eyebrow reveal">About</p>
          <h1
            className="reveal mt-6 max-w-4xl text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold text-ink"
            style={{ animationDelay: "80ms" }}
          >
            I decide what&apos;s worth building, then I build it.
          </h1>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Portrait src="/images/dragan-about.png" label="Your portrait" />
              <p className="mt-4 text-sm text-muted">
                Dragan Jovanovic, Fractional CTO &amp; AI builder.
              </p>
            </div>

            <div className="space-y-6 md:col-span-7 md:col-start-6">
              <p className="text-xl leading-relaxed text-ink">
                I&apos;m Dragan Jovanovic. I help tech-friendly business owners
                figure out where AI fits their business, where it doesn&apos;t,
                and what&apos;s actually worth doing. Then I build it myself. But
                I didn&apos;t start in AI.
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                For about three years I worked as an automation and control
                systems engineer, mostly in robotics. I was at Magna
                International, the Canadian manufacturer, in their R&amp;D group,
                and at a startup. I built and programmed robotic arms for
                manufacturing and assembly lines: the hardware, the software, the
                testing, and the safety systems that kept them from hurting
                anyone. These were industrial arms and co-bots, machines that
                could do real damage if the safety mechanisms were insufficient.
                If one of my systems failed, it could shut a line down and cost
                thousands of dollars a day. In the worst case, someone could get
                hurt. Through the guidance of my mentors, I recognized quickly
                that getting something to work is not the same as production
                ready.
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                I moved into AI in 2023. The work was adjacent to what I already
                did, but the real reason I jumped is that I loved where the field
                was going and I wanted to spend the next part of my career
                building on it. I like to learn and this felt like the
                opportunity of my lifetime.
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                What I do now joins the two halves most people keep separate:
                deciding what&apos;s worth building and actually building it. A
                lot of people in this space sell you a strategy and hand the
                build to someone else, or build whatever you ask for without
                telling you it won&apos;t move the needle. I do both, because the
                decision on what to build and the work of building it
                shouldn&apos;t be split apart. So I start by understanding your
                business, not by pitching to you. If AI isn&apos;t the right move
                for part of your business, I&apos;ll tell you why and where to
                focus instead.
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                For the past 18 months I&apos;ve been with PrimeSync, an AI
                voice-receptionist platform for auto repair shops, where I grew
                into the fractional CTO role and built the technical backbone the
                company and its clients run on. I&apos;m named publicly as their
                CTO. That&apos;s one engagement of many. Across my freelance work
                I&apos;ve shipped production systems for dozens of companies in
                very different industries: AI agents, backends, dashboards, and
                end-to-end automated systems. A few of them are written up in{" "}
                <Link
                  href="/work"
                  className="link-underline font-medium text-accent"
                >
                  my work
                </Link>
                .
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                Whether we start with one defined task or a larger build, you get
                clear, regular communication and thorough documentation, so you
                always know what I&apos;m doing and why. I explain things in plain
                terms, technical or not, and I&apos;m not hard to reach. I work on
                your own accounts, so you own everything and you&apos;re never
                locked into me or a tool. I&apos;ll give you a straight read and a
                working outcome.
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                Outside of work I&apos;m a husband and a father, and I&apos;m
                building something I want to be proud of.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-16 md:py-24">
          <h2 className="max-w-3xl text-3xl font-extrabold text-ink md:text-4xl">
            Book a call.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Free 30 minutes, and a straight answer on where AI fits your
            business.
          </p>
          <div className="mt-10">
            <CTAButton href="/contact">Book a call</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
