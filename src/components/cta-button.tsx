import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
};

const base =
  "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

const variants = {
  // Ochre is a light accent, so the label is dark (paper), not white.
  primary: "bg-accent text-paper hover:bg-accent-hover",
  secondary:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  // Used on the inverted light "breather" band (bg-ink). A dark pill with
  // light label that warms to the ochre accent (dark label) on hover.
  onDark: "bg-paper text-ink hover:bg-accent hover:text-paper",
} as const;

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}
