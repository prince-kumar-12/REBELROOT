import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/layout/MotionProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rebelroot.dev"),
  title: {
    default: "RebelRoot (Rebel Root) | Open-Source & Privacy-First Digital Tools",
    template: "%s · RebelRoot",
  },
  description:
    "RebelRoot is an independent open-source collective building local-first, zero-telemetry, auditable software.",
  openGraph: {
    title: "RebelRoot — Open-Source & Privacy-First Digital Tools",
    description:
      "An independent open-source collective building local-first, zero-telemetry, auditable software.",
    url: "https://RebelRoot.dev",
    siteName: "RebelRoot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RebelRoot — Open-Source & Privacy-First Digital Tools",
    description:
      "An independent open-source collective building local-first, zero-telemetry, auditable software.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-screen overflow-x-hidden bg-base font-body text-ink`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-nova-radial"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-nova-grid bg-size-[64px_64px] opacity-40 mask-fade-b"
        />
        <div className="relative z-10">
          <MotionProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </MotionProvider>
        </div>
      </body>
    </html>
  );
}
