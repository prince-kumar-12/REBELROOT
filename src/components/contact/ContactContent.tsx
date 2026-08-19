"use client";

import { useState, FormEvent } from "react";
import { color, motion } from "framer-motion";
import { Mail, Clock, ShieldCheck, ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";
import Community from "@/components/layout/joinCommunity"
const details = [
  {
    icon: Mail,
    title: "General inquiries",
    value: " rebelroot.ltd@gmail.com",
  },
  {
    icon: ShieldCheck,
    title: "Security disclosures",
    value: " rebelroot.ltd@gmail.com",
  },
];

export function ContactContent() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section className="section-pad pb-24 pt-40 lg:pt-48">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div variants={slideInLeft} initial="hidden" animate="visible">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-6 text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
            Let&rsquo;s start a conversation
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
           Connect with the RebelRoot team for technical support, collaboration opportunities, security concerns, and open-source contributions.
          </p>

          <div className="mt-10 space-y-5">
            {details.map((detail) => (
              <div key={detail.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/4 text-electric-soft">
                  <detail.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{detail.title}</p>
                  <p className="text-sm text-ink-muted">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-xl2 border border-base-border bg-base-card/60 p-5">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-violet-soft" />
            <p className="text-sm leading-relaxed text-ink-muted">
              We typically respond within <span className="text-ink">2 business days</span>.
              Security reports are prioritized and acknowledged within 24 hours.
            </p>
          </div>

          <p id="security" className="mt-6 text-sm text-ink-muted">
            Found a vulnerability?{" "}
            <Link href="/docs#security" className="text-electric-soft underline underline-offset-2">
              Read our disclosure process
            </Link>
            .
          </p>
        </motion.div>

        <motion.div
          id="support"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="rounded-xl2 border border-base-border bg-base-card/60 p-8 sm:p-10"
        >
          {status === "sent" ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex h-full flex-col items-center justify-center py-16 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-electric/10 text-electric-soft">
                <Send className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-xl font-medium text-ink">Message sent</h2>
              <p className="mt-2 max-w-xs text-sm text-ink-muted">
                Thanks for reaching out — we&rsquo;ll get back to you within two
                business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" id="name" type="text" required />
                <Field label="Email" id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="topic" className="mb-2 block text-sm font-medium text-ink">
                  Topic
                </label>
                <select
                  id="topic"
                  className="w-full rounded-xl border border-base-border bg-base/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric/50"
                  defaultValue="General"
                >
                  <option>General</option>
                  <option>Support a project</option>
                  <option>Security disclosure</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border  border-base-border bg-base/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric/50"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto text-ink " icon={<ArrowRight className="h-4 w-4" />}>
                Send message
              </Button>
            </form>
          )}
        </motion.div>
      </div>
      <Community/>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-base-border bg-base/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric/50"
        placeholder={label}
      />
    </div>
  );
}
