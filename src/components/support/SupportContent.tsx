"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Community from "@/components/layout/joinCommunity"
import { fadeUp } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Badge";

export function SupportContent() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const feedbackData = {
      name: formData.get("name"),
      email: formData.get("email"),
      product: formData.get("product"),
      rating: Number(formData.get("rating")),
      message: formData.get("message"),
    };

    console.log("Feedback submission:", feedbackData);

    alert("Thank you for your feedback!");

    event.currentTarget.reset();
    setRating(0);
    setHoverRating(0);
  };

  return (
    <>
      

      <section className="section-pad pb-16 pt-40 lg:pt-48">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Eyebrow>Support RebelRoot</Eyebrow>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
          >
            Support & Feedback | RebelRoot
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Support the RebelRoot open-source collective via UPI or PayPal,
            or submit direct product feedback to help keep our applications
            free and ad-free.
          </motion.p>
        </div>
      </section>

      
      <section className="section-pad pb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-5xl text-center"
        >
          <Eyebrow>Support the rebellion</Eyebrow>

          <h2 className="mt-6 text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Keep RebelRoot Independent
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
            We build ad-free, telemetry-free, local-first tools. We accept
            zero corporate funding. Help us stay fully sovereign through
            direct donations or by submitting feedback.
          </p>
        </motion.div>
      </section>
 

      <section className="section-pad pb-28">
        <div className="mx-auto max-w-7xl">
 
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
 
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="payment-shadow rounded-2xl border border-base-border bg-base-card/70 p-6 sm:p-7 lg:h-full"
            >
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                Send Us Feedback
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Encountered a bug? Have a feature request? Let us know how
                we can make our products better.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >
              

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Name"
                    className="h-14 w-full rounded-lg border border-base-border bg-transparent px-5 text-sm text-ink outline-none transition-all duration-200 placeholder:text-ink-muted focus:border-electric focus:ring-2 focus:ring-electric/20"
                  />
                </div>

                

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email Address"
                    className="h-14 w-full rounded-lg border border-base-border bg-transparent px-5 text-sm text-ink outline-none transition-all duration-200 placeholder:text-ink-muted focus:border-electric focus:ring-2 focus:ring-electric/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Select Product
                  </label>

                  <select
                    id="product"
                    name="product"
                    defaultValue="general"
                    required
                    className="h-14 w-full appearance-none rounded-lg border border-base-border bg-base-card px-5 text-sm text-ink outline-none transition-all duration-200 focus:border-electric focus:ring-2 focus:ring-electric/20"
                  >
                    <option value="general">
                      General / Platform
                    </option>

                    <option value="omni-browser">
                      Omni Browser
                    </option>

                    <option value="mocnovel">
                      MOCNovel
                    </option>

                    <option value="campcart">
                      CampCart
                    </option>

                    <option value="moc-office">
                      MOC Office
                    </option>
                  </select>
                </div>

                {/* RATING */}

                <div>
                  <span
                    id="rating-label"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Rate Your Experience
                  </span>
 
                  <input
                    type="hidden"
                    name="rating"
                    value={rating}
                  />

                  <div
                    role="group"
                    aria-labelledby="rating-label"
                    className="flex items-center gap-1"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {[1, 2, 3, 4, 5].map((star) => {
                      const activeRating =
                        hoverRating || rating;

                      const isActive =
                        star <= activeRating;

                      return (
                        <button
                          key={star}
                          type="button"
                          aria-label={`Rate ${star} out of 5`}
                          onMouseEnter={() =>
                            setHoverRating(star)
                          }
                          onFocus={() =>
                            setHoverRating(star)
                          }
                          onBlur={() =>
                            setHoverRating(0)
                          }
                          onClick={() =>
                            setRating(star)
                          }
                          className="group flex h-10 w-10 items-center justify-center rounded-lg outline-none"
                        >
                          <Star
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className={`
                              h-7 w-7
                              transition-all
                              duration-200
                              ease-out
                              ${
                                isActive
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-transparent text-ink-muted"
                              }
                              group-hover:scale-125
                              group-focus-visible:scale-125
                              group-focus-visible:ring-2
                              group-focus-visible:ring-electric
                              group-focus-visible:ring-offset-2
                            `}
                          />
                        </button>
                      );
                    })}
                  </div>

                  <p
                    aria-live="polite"
                    className="mt-1 min-h-5 text-xs text-ink-muted"
                  >
                    {rating
                      ? `${rating} out of 5`
                      : "Select a rating"}
                  </p>
                </div> 

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your experience, report a bug, or suggest a new feature..."
                    className="w-full resize-y rounded-lg border border-base-border bg-transparent px-5 py-4 text-sm text-ink outline-none transition-all duration-200 placeholder:text-ink-muted focus:border-electric focus:ring-2 focus:ring-electric/20"
                  />
                </div>
 
                <button
                  type="submit"
                  aria-label="Submit feedback"
                  className="group flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-green-400 px-6 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5   hover:shadow-lg hover:shadow-green-500/20 active:translate-y-0"
                >
                  SUBMIT FEEDBACK

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </motion.div>
 
            <div className="flex flex-col gap-8">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.1 }}
                className="payment-shadow rounded-2xl border border-base-border bg-base-card/70 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                      UPI Direct Donation
                    </h2>

                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted">
                      Scan the QR code with any UPI app such as GPay,
                      PhonePe, Paytm, or BHIM to support local deployment
                      nodes.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-red-500/10 px-3 py-1.5 text-[10px] font-semibold text-red-400">
                    INDIA PAYMENTS
                  </span>
                </div>

                <div className="mt-5 flex justify-center">
                  <div className="h-44 w-44 overflow-hidden rounded-xl bg-white p-3 shadow-md">
                    <Image
                      src="/upiQR.png"
                      alt="UPI donation QR code"
                      width={50}
                      height={50}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-base-border bg-black/10 px-4 py-3 text-center">
                  <span className="text-sm text-ink-muted">
                    UPI/VPA ID:
                  </span>

                  <span className="ml-2 font-mono text-sm font-semibold text-green-400">
                   warrior4root@ptyes
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2 }}
                className="payment-shadow rounded-2xl border border-base-border bg-base-card/70 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                      Global Creator Support
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      Help cover domain maintenance, hosting,
                      infrastructure, and development costs through
                      international support.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-red-500/10 px-3 py-1.5 text-[10px] font-semibold text-red-400">
                    INTERNATIONAL
                  </span>
                </div>
 
                <div className="mt-5 flex justify-center">
                  <div className="h-44 w-44 overflow-hidden rounded-xl bg-white p-3 shadow-md">
                    <Image
                      src="/paypal-qr.png"
                      alt="PayPal donation QR code"
                      width={60}
                      height={60}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <a
                  href="https://www.paypal.com/ncp/payment/A867TKRQ8EKRE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Support RebelRoot through PayPal"
                  className="group mt-5 flex h-13 w-full items-center justify-center gap-2 rounded-lg border border-base-border text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-electric hover:text-electric"
                >
                  SUPPORT VIA PAYPAL

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            </div>
          </div>
 

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
            className="payment-shadow mt-8 rounded-2xl border border-base-border bg-base-card/70 p-6 sm:p-8"
          >
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-electric-soft">
                  Open Source
                </span>

                <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                  Support Development
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                  Every contribution helps us maintain our infrastructure,
                  improve existing projects, and build new independent
                  tools for the community.
                </p>
              </div>

              <a
                href="https://github.com/REBEL-ROOT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Support RebelRoot development on GitHub"
                className="group flex h-14 shrink-0 items-center justify-center gap-2 rounded-lg bg-green-400 px-7 text-sm font-semibold text-black transition-all duration-300  hover:shadow-lg hover:shadow-green-500/20 active:translate-y-0"
                
              >
                SUPPORT ON GITHUB

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Community/>
    </>
  );
}