import ScrollReveal from "@/components/omnibrowser/animations/ScrollReveal";

interface BenchmarkRow {
  label: string;
  omni: number;
  competitor: number;
  unit: string;
}

const ROWS: BenchmarkRow[] = [
  { label: "Cold start", omni: 0.4, competitor: 1.1, unit: "s" },
  { label: "Page load (median)", omni: 0.9, competitor: 1.6, unit: "s" },
  { label: "Memory per tab", omni: 68, competitor: 140, unit: "MB" },
  { label: "Battery drain / hr", omni: 4, competitor: 9, unit: "%" },
];

function Bar({ value, max, colorClass }: { value: number; max: number; colorClass: string }) {
  const width = Math.max(6, Math.round((value / max) * 100));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
      <div
        className={`h-full rounded-full ${colorClass}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function Benchmark() {
  const maxValues = ROWS.map((row) => Math.max(row.omni, row.competitor));

  return (
    <section id="benchmark" className="relative mx-auto max-w-5xl px-6 py-28 lg:px-8">
      <ScrollReveal className="text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Benchmark
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
          Faster, on paper and in hand
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-lg leading-relaxed text-ink-500">
          Measured across 500 page loads on the same hardware, against the
          leading mainstream browser.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-14 rounded-card border border-white/8 bg-carbon-900 p-8 shadow-card sm:p-10">
          <div className="mb-8 flex items-center gap-6 text-xs text-ink-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" /> Omni
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/25" /> Industry average
            </span>
          </div>

          <div className="space-y-8">
            {ROWS.map((row, i) => (
              <div key={row.label}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-sm text-ink-300">{row.label}</span>
                  <span className="text-xs text-ink-700">
                    {row.omni}
                    {row.unit} vs {row.competitor}
                    {row.unit}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <Bar value={row.omni} max={maxValues[i]} colorClass="bg-accent" />
                  <Bar value={row.competitor} max={maxValues[i]} colorClass="bg-white/25" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
