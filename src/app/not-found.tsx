import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="section-pad flex min-h-[80vh] flex-col items-center pt-5 justify-center text-center">
      <Eyebrow>404</Eyebrow>
      <Image
          src="/founder.png"
          alt="Error Page"
          width={40}
          height={40}
          priority
          className="h-full w-full object-cover"
        />
      <h1 className="mt-6 text-4xl font-medium text-ink sm:text-5xl">
        This page doesn&rsquo;t exist locally either.
      </h1>
      <p className="mt-4 max-w-md text-base text-ink-muted">
        The page you&rsquo;re looking for may have moved. Try the homepage or
        browse our products instead.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/" icon={<ArrowRight className="h-4 w-4" />}>
          Back home
        </Button>
        <Button href="/products" variant="secondary">
          View products
        </Button>
      </div>
    
    </section>
  );
}
