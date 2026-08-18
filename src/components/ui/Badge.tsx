import { cn } from "@/lib/utils";
import { ProductStatus } from "@/types";

const statusStyles: Record<ProductStatus, string> = {
  Live: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
  Beta: "bg-electric/10 text-electric-soft ring-electric/25",
  "In Development":
    "bg-violet/10 text-violet-soft ring-violet/25",
};

export function StatusBadge({
  status,
}: {
  status: ProductStatus;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1",
        statusStyles[status]
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "Live" && "bg-emerald-400",
          status === "Beta" && "bg-electric",
          status === "In Development" && "bg-violet"
        )}
      />

      {status}
    </span>
  );
}

export function Eyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-electric to-violet glow-dot" />
      {children}
    </span>
  );
}