"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { services, site } from "@/lib/content";
import { Reveal, cx } from "@/components/ui/primitives";
import { hasBookingUrl } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

const budgets = ["< $2k", "$2k – $5k", "$5k – $10k", "$10k+"];
const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "Flexible"];
const formName = "project_enquiry";
const trackedFields = ["name", "email", "company", "service", "timeline", "budget", "message"] as const;
const requiredFields = ["name", "email", "message"] as const;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const formViewedRef = useRef(false);
  const formStartedRef = useRef(false);
  const formSubmittedRef = useRef(false);
  const abandonmentSentRef = useRef(false);
  const completedFieldsRef = useRef(new Set<string>());
  const requiredFieldsRef = useRef(new Set<string>());
  const lastFieldRef = useRef<string | undefined>(undefined);
  const [service, setService] = useState(services[0].id);
  const [budget, setBudget] = useState(budgets[1]);
  const [timeline, setTimeline] = useState(timelines[2]);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const startForm = useCallback(() => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent("contact_form_start", { form_name: formName });
  }, []);

  const completeField = useCallback((fieldName: string, complete = true) => {
    if (!trackedFields.includes(fieldName as (typeof trackedFields)[number])) return;
    startForm();
    lastFieldRef.current = fieldName;

    if (requiredFields.includes(fieldName as (typeof requiredFields)[number])) {
      if (complete) requiredFieldsRef.current.add(fieldName);
      else requiredFieldsRef.current.delete(fieldName);
    }
    if (!complete || completedFieldsRef.current.has(fieldName)) return;

    completedFieldsRef.current.add(fieldName);
    trackEvent("contact_form_field_complete", {
      form_name: formName,
      field_name: fieldName,
    });
  }, [startForm]);

  const trackTextField = useCallback((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    const value = target.value.trim();
    const complete = target.type === "email"
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      : Boolean(value);
    completeField(target.name, complete);
  }, [completeField]);

  const sendAbandonment = useCallback(() => {
    if (!formStartedRef.current || formSubmittedRef.current || abandonmentSentRef.current) return;
    abandonmentSentRef.current = true;
    const completedFieldCount = completedFieldsRef.current.size;
    trackEvent("contact_form_abandon", {
      form_name: formName,
      completed_field_count: completedFieldCount,
      form_completion_percent: Math.round((completedFieldCount / trackedFields.length) * 100),
      required_fields_complete: requiredFields.every((field) => requiredFieldsRef.current.has(field)),
      last_field_name: lastFieldRef.current,
      transport_type: "beacon",
    });
  }, []);

  useEffect(() => {
    const form = formRef.current;
    if (!form || formViewedRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || formViewedRef.current) return;
      formViewedRef.current = true;
      trackEvent("contact_form_view", { form_name: formName });
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(form);
    return () => observer.disconnect();
  }, [sent]);

  useEffect(() => {
    const onPageHide = () => sendAbandonment();
    window.addEventListener("pagehide", onPageHide);
    return () => {
      window.removeEventListener("pagehide", onPageHide);
      sendAbandonment();
    };
  }, [sendAbandonment]);

  function resetTracking() {
    formViewedRef.current = false;
    formStartedRef.current = false;
    formSubmittedRef.current = false;
    abandonmentSentRef.current = false;
    completedFieldsRef.current.clear();
    requiredFieldsRef.current.clear();
    lastFieldRef.current = undefined;
    setSent(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    completeField("name", Boolean(name));
    completeField("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    completeField("message", Boolean(message));
    trackEvent("contact_form_submit_attempt", {
      form_name: formName,
      completed_field_count: completedFieldsRef.current.size,
      required_fields_complete: Boolean(name && message && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)),
    });
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please tell me a little about your project.";
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      trackEvent("form_validation_error", {
        form_name: formName,
        error_count: Object.keys(nextErrors).length,
      });
      return;
    }
    if (data.get("website")) {
      setSent(true);
      return;
    }
    const serviceLabel = services.find((s) => s.id === service)?.title ?? service;

    try {
      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: String(data.get("company") ?? "").trim(),
          service: serviceLabel,
          budget,
          timeline,
          message,
          website: String(data.get("website") ?? ""),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      formSubmittedRef.current = true;
      trackEvent("generate_lead", {
        form_name: formName,
        service: serviceLabel,
        budget,
        timeline,
      });
      setSent(true);
      form.reset();
    } catch {
      trackEvent("form_submit_error", { form_name: formName });
      setError("The form could not be sent. Please email Conscious Rise directly for a reply within one business day.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 pt-24 sm:pt-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#790e29]/15 bg-[#991b3b] shadow-[0_28px_80px_-36px_rgba(74,13,29,0.5)]">
          <div className="relative grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* ── Pitch ─────────────────────────────────────── */}
            <div className="relative overflow-hidden bg-[#991b3b] p-8 sm:p-12 lg:p-16">
              <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#d2042d]/35 blur-3xl" />
              <div className="relative">
              <Reveal>
                <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#ffd8e1]">Let&apos;s build something</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#ffffff]">
                  Tell Conscious Rise about
                  <br />
                  your <span className="text-[#ffd0da]">project.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-md text-lg leading-8 text-[#ffffff]/80">
                  A short brief is enough to start. Expect a reply within one
                  business day with questions, an approach and a realistic timeline.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <ul className="mt-10 space-y-4 border-t border-[#ffffff]/20 pt-8">
                  {[
                    ["Reply time", "Within 1 business day"],
                    ["Availability", "Taking projects for 2026"],
                    ["Email", site.email],
                  ].map(([label, value]) => (
                    <li key={label} className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#ffffff]/60">
                        {label}
                      </span>
                      {label === "Email" && !site.email.startsWith("{{") ? (
                        <a href={`mailto:${site.email}?subject=Project%20enquiry%20for%20Conscious%20Rise`} className="text-right text-[0.875rem] text-[#ffffff] underline-offset-4 hover:underline">{value}</a>
                      ) : <span className="text-right text-[0.875rem] text-[#ffffff]">{value}</span>}
                    </li>
                  ))}
                </ul>
                {hasBookingUrl ? <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center rounded-full border border-neon-cyan/20 bg-[#ffffff] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-neon-cyan/40">
                  Book a 20 minute call
                </a> : null}
                <p className="mt-5 text-lg leading-8 text-[#ffffff]/65">{site.locationLine}</p>
              </Reveal>
              </div>
            </div>

            {/* ── Form ──────────────────────────────────────── */}
            <div className="bg-[#f8f3f4] p-5 sm:p-8 lg:p-10">
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
                    Thank you, your enquiry is in
                  </h3>
                  <p className="mt-3 max-w-sm text-lg leading-8 text-white/55">
                    Your project details have been received. Expect a reply within one business day. You can also write to{" "}
                    <a
                      href={`mailto:${site.email}?subject=Project%20enquiry%20for%20Conscious%20Rise`}
                      className="font-medium text-neon-cyan underline underline-offset-4"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={resetTracking}
                    className="mt-8 text-[0.8125rem] font-medium text-white/45 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} onInput={startForm} noValidate autoComplete="on" className="space-y-5 rounded-2xl border border-[#760c26]/10 bg-[#ffffff] p-6 shadow-[0_24px_60px_-30px_rgba(74,13,29,0.28)] sm:p-8">
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Cooper" required autoFocus autoComplete="name" error={fieldErrors.name} onBlur={trackTextField} onInput={() => setFieldErrors((current) => ({ ...current, name: "" }))} />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      required
                      error={fieldErrors.email}
                      onBlur={trackTextField}
                      onInput={() => setFieldErrors((current) => ({ ...current, email: "" }))}
                    />
                  </div>

                  <Field label="Company" name="company" placeholder="Optional" autoComplete="organization" onBlur={trackTextField} />

                  <fieldset>
                    <legend className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#760c26]/70">
                      What do you need?
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => { setService(s.id); completeField("service"); }}
                          aria-pressed={service === s.id}
                          className={cx(
                            "rounded-full border px-3.5 py-2 text-[0.8125rem] transition-all duration-300",
                            service === s.id
                              ? "border-[#991b3b] bg-[#991b3b] text-[#ffffff] shadow-sm"
                              : "border-[#760c26]/15 bg-[#ffffff] text-[#760c26]/70 hover:border-[#991b3b]/45 hover:text-[#760c26]",
                          )}
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="timeline" className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#760c26]/70">
                      Target timeline
                    </label>
                    <select id="timeline" name="timeline" value={timeline} onChange={(event) => { setTimeline(event.target.value); completeField("timeline"); }} className="w-full rounded-xl border border-[#760c26]/20 bg-[#ffffff] px-4 py-3.5 text-[0.9375rem] text-[#4a0d1d] transition-all focus:border-[#991b3b] focus:outline-none focus:ring-4 focus:ring-[#991b3b]/10">
                      {timelines.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>

                  <fieldset>
                    <legend className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#760c26]/70">
                      Budget range
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => { setBudget(b); completeField("budget"); }}
                          aria-pressed={budget === b}
                          className={cx(
                            "rounded-full border px-3.5 py-2 font-mono text-[0.75rem] transition-all duration-300",
                            budget === b
                              ? "border-[#991b3b] bg-[#991b3b] text-[#ffffff] shadow-sm"
                              : "border-[#760c26]/15 bg-[#ffffff] text-[#760c26]/70 hover:border-[#991b3b]/45 hover:text-[#760c26]",
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
                      className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#760c26]/70"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      onInput={() => setFieldErrors((current) => ({ ...current, message: "" }))}
                      onBlur={trackTextField}
                      placeholder="What are you building, and what does success look like?"
                      className="w-full resize-none rounded-xl border border-[#760c26]/20 bg-[#ffffff] px-4 py-3.5 text-[0.9375rem] text-[#4a0d1d] placeholder:text-[#760c26]/35 transition-all duration-300 focus:border-[#991b3b] focus:outline-none focus:ring-4 focus:ring-[#991b3b]/10"
                    />
                    {fieldErrors.message ? <p id="message-error" role="alert" className="mt-2 text-sm font-medium text-red-800">{fieldErrors.message}</p> : null}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative w-full overflow-hidden rounded-full bg-[#991b3b] px-7 py-4 text-[0.9375rem] font-semibold text-[#ffffff] shadow-[0_12px_26px_-14px_rgba(74,13,29,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b51f45]"
                  >
                    <span className="relative z-10">{submitting ? "Sending…" : "Send project brief"}</span>
                  </button>

                  {error ? (
                    <p role="alert" className="rounded-xl border border-red-300/30 bg-red-100/50 px-4 py-3 text-center text-sm text-red-900">
                      {error}{" "}
                      <a href={`mailto:${site.email}?subject=Project%20enquiry%20for%20Conscious%20Rise`} className="font-semibold underline underline-offset-2">
                        {site.email}
                      </a>
                    </p>
                  ) : null}

                  <p className="text-center font-mono text-[0.6875rem] leading-relaxed text-[#760c26]/50">
                    Your details are sent securely and used only to respond to your enquiry.
                  </p>
                </form>
              )}
            </Reveal>
            </div>
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
  error,
  onInput,
  onBlur,
  autoFocus,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onInput?: () => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2.5 block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#760c26]/70"
      >
        {label}
        {required ? <span className="text-neon-cyan"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onInput={onInput}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#760c26]/20 bg-[#ffffff] px-4 py-3.5 text-[0.9375rem] text-[#4a0d1d] placeholder:text-[#760c26]/35 transition-all duration-300 focus:border-[#991b3b] focus:outline-none focus:ring-4 focus:ring-[#991b3b]/10"
      />
      {error ? <p id={`${name}-error`} role="alert" className="mt-2 text-sm font-medium text-red-800">{error}</p> : null}
    </div>
  );
}
