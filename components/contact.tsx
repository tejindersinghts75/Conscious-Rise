"use client";

import { useState } from "react";
import { services, site } from "@/lib/content";
import { Reveal, cx } from "@/components/ui/primitives";

const budgets = ["< $2k", "$2k – $5k", "$5k – $10k", "$10k+"];

/**
 * No backend is wired up, so submitting opens the visitor's mail client with
 * everything pre-filled. To use a real endpoint instead, replace the body of
 * `handleSubmit` with a fetch to your form service or a Next.js route handler.
 */
export function Contact() {
  const [service, setService] = useState(services[0].id);
  const [budget, setBudget] = useState(budgets[1]);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const serviceLabel = services.find((s) => s.id === service)?.title ?? service;

    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "—"}`,
      `Service: ${serviceLabel}`,
      `Budget: ${budget}`,
      "",
      "Project details:",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New project enquiry — ${serviceLabel}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-neon-cyan/20 bg-[#ffffff] shadow-[0_18px_50px_-34px_rgba(119,12,38,0.32)] backdrop-blur-xl">
          <div className="relative grid gap-14 p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-16">
            {/* ── Pitch ─────────────────────────────────────── */}
            <div>
              <Reveal>
                <span className="eyebrow">Let&apos;s build something</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                  Tell me about
                  <br />
                  your <span className="text-gradient">project.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-white/55">
                  A short brief is enough to start. I&apos;ll reply within one
                  business day with questions, an approach and a realistic
                  timeline.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <ul className="mt-10 space-y-4 border-t border-white/[0.07] pt-8">
                  {[
                    ["Reply time", "Within 1 business day"],
                    ["Availability", "Taking projects for 2026"],
                    ["Email", site.email],
                  ].map(([label, value]) => (
                    <li key={label} className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/35">
                        {label}
                      </span>
                      <span className="text-right text-[0.875rem] text-white/75">{value}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* ── Form ──────────────────────────────────────── */}
            <Reveal delay={160}>
              {sent ? (
                <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl border border-neon-cyan/25 bg-neon-cyan/[0.06] p-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-neon-cyan">
                      <path
                        d="M5 12.5 10 17.5 19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                    Your email is ready to send
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-white/55">
                    Your mail app should have opened with the brief pre-filled.
                    If it didn&apos;t, write to{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-neon-cyan underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 text-[0.8125rem] font-medium text-white/45 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    Edit the brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Cooper" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>

                  <Field label="Company" name="company" placeholder="Optional" />

                  <fieldset>
                    <legend className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/40">
                      What do you need?
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setService(s.id)}
                          aria-pressed={service === s.id}
                          className={cx(
                            "rounded-full border px-3.5 py-2 text-[0.8125rem] transition-all duration-300",
                            service === s.id
                              ? "border-neon-cyan/50 bg-neon-cyan/12 text-neon-cyan"
                              : "border-white/10 bg-[#ffffff] text-white/55 hover:border-white/25 hover:text-white",
                          )}
                        >
                          {s.title.replace(/ (Web Applications|Website Development|Design & Development|Websites & WooCommerce)$/, "")}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/40">
                      Budget range
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          aria-pressed={budget === b}
                          className={cx(
                            "rounded-full border px-3.5 py-2 font-mono text-[0.75rem] transition-all duration-300",
                            budget === b
                              ? "border-neon-violet/50 bg-neon-violet/12 text-neon-violet"
                              : "border-white/10 bg-[#ffffff] text-white/55 hover:border-white/25 hover:text-white",
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/40"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What are you building, and what does success look like?"
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#ffffff] px-4 py-3.5 text-[0.9375rem] text-white placeholder:text-white/25 transition-colors duration-300 focus:border-neon-cyan/50 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-full bg-white px-7 py-4 text-[0.9375rem] font-semibold text-void transition-transform duration-300 hover:scale-[1.01]"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-neon-cyan to-neon-violet transition-transform duration-500 ease-out group-hover:translate-x-0"
                    />
                    <span className="relative z-10">Send project brief</span>
                  </button>

                  <p className="text-center font-mono text-[0.6875rem] leading-relaxed text-white/30">
                    Opens your mail app with the brief pre-filled — nothing is
                    sent without your say-so.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/40"
      >
        {label}
        {required ? <span className="text-neon-cyan"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-[#ffffff] px-4 py-3.5 text-[0.9375rem] text-white placeholder:text-white/25 transition-colors duration-300 focus:border-neon-cyan/50 focus:outline-none"
      />
    </div>
  );
}
