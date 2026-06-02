import type { Metadata } from "next";
import { Container } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Book a free 30 minutes for a straight read on where AI fits your business, where it doesn't, and what's worth doing. No pitch.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="eyebrow reveal">Book a call</p>
          <h1
            className="reveal mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold text-ink"
            style={{ animationDelay: "80ms" }}
          >
            Let&apos;s find out where AI actually fits.
          </h1>
          <p
            className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "160ms" }}
          >
            Book a free 30 minutes. Tell me what you&apos;re working on and
            I&apos;ll give you a straight read on where AI fits your business,
            where it doesn&apos;t, and what&apos;s worth doing. No pitch, no
            pressure.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            {/* Booking */}
            <div className="md:col-span-7">
              <p className="eyebrow mb-6">Pick a time</p>
              {site.bookingEmbedUrl ? (
                <div className="rounded-lg border border-line bg-white p-2 sm:p-3">
                  <iframe
                    src={site.bookingEmbedUrl}
                    title="Book a call"
                    style={{ colorScheme: "light", backgroundColor: "#ffffff" }}
                    className="h-[760px] w-full rounded-sm"
                  />
                </div>
              ) : (
                <div className="flex min-h-[320px] flex-col items-start justify-center rounded-sm border border-dashed border-line bg-paper-raised p-10">
                  <span className="eyebrow">Booking calendar</span>
                  <p className="mt-3 max-w-sm text-ink-soft">
                    The Google Appointment Scheduling calendar embeds here once
                    it is connected. Until then, use the form to reach me.
                  </p>
                </div>
              )}
            </div>

            {/* Form */}
            <div className="md:col-span-5">
              <p className="mb-6 max-w-sm text-ink-soft">
                Prefer to send a note first? Tell me a bit about your business
                and what you&apos;re trying to solve.
              </p>
              <ContactForm />
              {site.showEmail && (
                <p className="mt-8 text-sm text-muted">
                  Or email me directly at{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline text-ink hover:text-ink"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
