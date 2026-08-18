import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

/**
 * Draws the browser-phone chrome (frame, notch, status bar, url bar) with
 * pure Tailwind/CSS so the design has no dependency on missing screenshot
 * assets. `children` renders inside the screen area — callers are
 * responsible for stacking multiple screens with absolute positioning
 * when building the story section's cross-fade.
 */
export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[9/19] w-full max-w-[300px] rounded-phone border border-white/10 bg-carbon-900 phone-frame ${className}`}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-carbon-950" />

      {/* Screen */}
      <div className="absolute inset-[10px] overflow-hidden rounded-[2.25rem] bg-carbon-850">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-4 text-[11px] font-medium text-ink-300">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-sm border border-ink-300" />
            <span className="h-2 w-2 rounded-full border border-ink-300" />
          </div>
        </div>

        {/* Omni URL bar */}
        <div className="mx-4 mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-carbon-800 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[10px] text-ink-500">omni://browser</span>
        </div>

        {/* Screen content */}
        <div className="relative h-[calc(100%-4.5rem)] w-full">{children}</div>
      </div>
    </div>
  );
}
