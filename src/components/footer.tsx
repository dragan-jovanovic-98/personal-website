import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <p className="font-display text-2xl font-extrabold tracking-tight text-ink">
              Put AI where it actually pays off.
            </p>
            <p className="mt-3 text-sm text-muted">
              A straight read on what is worth doing, then I build it. No hype.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline w-fit text-ink-soft hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="link-underline w-fit text-ink-soft hover:text-ink"
            >
              Book a call
            </Link>
            {site.showEmail && (
              <a
                href={`mailto:${site.email}`}
                className="link-underline w-fit text-ink-soft hover:text-ink"
              >
                {site.email}
              </a>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <span className="eyebrow">
            &copy; 2023 {site.name}
          </span>
          <span className="eyebrow">Designed and built by me</span>
        </div>
      </div>
    </footer>
  );
}
