"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ContributeButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Contribute Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-[#ef3f4f] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#d93646]"
      >
        CONTRIBUTE
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        >
          {/* Contribution Panel */}
          <div
            className="relative w-full max-w-3xl rounded-xl bg-[#080909] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close contribution panel"
              className="absolute right-6 top-6 text-white transition-opacity hover:opacity-70"
            >
              <X size={30} strokeWidth={2} />
            </button>

            {/* Content */}
            <div className="px-4 py-8 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Contribute to RebelRoot
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400">
                Help us build and maintain open-source, privacy-focused
                software. Every contribution helps RebelRoot grow.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://github.com/prince-kumar-12/REBELROOT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#ef3f4f] px-6 py-3 font-semibold text-white transition hover:bg-[#d93646]"
                >
                  CONTRIBUTE ON GITHUB
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}