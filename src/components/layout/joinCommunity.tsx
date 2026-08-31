import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

function JoinCommunity() {
  return (
    <section className="section-pad border-t border-base-border py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]">
          Join the RebelRoot community. Let&apos;s build better software together.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Open issues, open roadmaps, no gatekeeping. Star the repos you care about
          or come talk to us before you write a line of code.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="https://github.com/REBEL-ROOT"
            target="_blank"
            size="lg"
            icon={<ArrowUpRight className="h-4 w-4" />}
          >
            Get involved on GitHub
          </Button>

          <Button
            href="/products"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Explore our products
          </Button>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;