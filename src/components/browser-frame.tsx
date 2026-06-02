// A lightweight browser/app window chrome used to frame the dashboard mockups
// so they read as real product shots.
export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-line bg-paper-raised shadow-[0_30px_70px_-30px_rgba(0,0,0,0.75)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-paper px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <div className="ml-2 flex-1">
          <span className="inline-block rounded-md bg-paper-raised px-3 py-1 font-mono text-[11px] text-muted">
            {url}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}
