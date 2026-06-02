import { BrowserFrame } from "@/components/browser-frame";
import type { Mockup } from "@/content/mockups";

// An on-brand mini dashboard rendered entirely in code. Represents the kind of
// client portals / monitoring dashboards Dragan builds, with safe fake data.
// `compact` drops the table for use as a card preview.
export function DashboardMock({
  data,
  compact = false,
}: {
  data: Mockup;
  compact?: boolean;
}) {
  return (
    <BrowserFrame url={data.url}>
      <div className="p-5 md:p-6">
        {/* App header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-5 rounded-md bg-accent" />
            <span className="font-display text-sm font-bold text-ink">
              {data.product}
            </span>
          </div>
          <div className="hidden gap-4 sm:flex">
            <span className="font-mono text-[11px] text-muted">Overview</span>
            <span className="font-mono text-[11px] text-muted">Calls</span>
            <span className="font-mono text-[11px] text-muted">Settings</span>
          </div>
        </div>

        {/* KPI tiles */}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {data.kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-md border border-line bg-paper px-3 py-3"
            >
              <div className="font-mono text-lg font-medium tracking-tight text-ink md:text-xl">
                {k.value}
              </div>
              <div className="mt-1 text-[11px] leading-tight text-muted">
                {k.label}
              </div>
            </div>
          ))}
        </div>

        {/* Chart + side panel */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="rounded-md border border-line bg-paper p-4 lg:col-span-3">
            <div className="eyebrow mb-4">Call outcomes</div>
            <div className="space-y-2.5">
              {data.bars.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="w-32 shrink-0 truncate text-[11px] text-ink-soft">
                    {b.label}
                  </span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-paper-raised">
                    <span
                      className="block h-full rounded-full bg-accent"
                      style={{ width: `${b.pct}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-line bg-paper p-4 lg:col-span-2">
            <div className="eyebrow mb-4">Live status</div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] text-ink-soft">
                Agent online · handling calls
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded-full bg-paper-raised" />
              <div className="h-2 w-4/5 rounded-full bg-paper-raised" />
              <div className="h-2 w-2/3 rounded-full bg-paper-raised" />
            </div>
          </div>
        </div>

        {/* Recent calls table */}
        {!compact && (
          <div className="mt-4 rounded-md border border-line bg-paper">
            <div className="eyebrow border-b border-line px-4 py-3">
              Recent calls
            </div>
            <div className="divide-y divide-line">
              {data.rows.map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 items-center gap-2 px-4 py-2.5 text-[11px]"
                >
                  <span className="font-mono text-muted">{r.left}</span>
                  <span className="text-ink-soft">{r.mid}</span>
                  <span className="text-right font-mono text-muted">
                    {r.right}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </BrowserFrame>
  );
}
