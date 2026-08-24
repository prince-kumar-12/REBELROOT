import { Info, Lightbulb, AlertTriangle, CheckCircle2, AlertOctagon } from "lucide-react";
import type { ReactNode } from "react";

export type CalloutVariant = "info" | "tip" | "warning" | "success" | "danger";

const VARIANT_MAP: Record<CalloutVariant, { className: string; icon: ReactNode }> = {
  info: { className: "callout--note", icon: <Info /> },
  tip: { className: "callout--tip", icon: <Lightbulb /> },
  warning: { className: "callout--warning", icon: <AlertTriangle /> },
  success: { className: "callout--success", icon: <CheckCircle2 /> },
  danger: { className: "callout--danger", icon: <AlertOctagon /> },
};

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
}

/** Reusable callout for new/authored content. The migrated legacy pages
 * render their own `.callout--*` markup directly (see DocsContent), which
 * shares these exact CSS classes so both look identical. */
export function Callout({ variant = "info", title, children }: CalloutProps) {
  const { className, icon } = VARIANT_MAP[variant];
  return (
    <div className={`callout ${className}`}>
      <div className="callout__icon">{icon}</div>
      <div className="callout__body">
        {title && <span className="callout__title">{title}</span>}
        {children}
      </div>
    </div>
  );
}
