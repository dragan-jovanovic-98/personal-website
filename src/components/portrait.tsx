// Framed portrait. Uses a CSS background image so the layout degrades
// gracefully to a labelled placeholder until the real headshot file is added
// to /public/images. Swap to next/image once the asset is in.
export function Portrait({
  src,
  label = "Portrait",
  className = "",
}: {
  src: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-paper-raised ${className}`}
    >
      <div className="absolute inset-0 grid place-items-center">
        <span className="eyebrow text-center">{label}</span>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label="Dragan Jovanovic"
      />
      <span
        aria-hidden
        className="absolute -bottom-px -right-px h-12 w-12 bg-accent"
      />
    </div>
  );
}
