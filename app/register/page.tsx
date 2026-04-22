"use client";

import Image from "next/image";
import { useState } from "react";

const PRIORITY_OPTIONS = [
  "Clarity on direction",
  "Strengthening what I've started",
  "Scaling what's already working",
  "Finding aligned partnerships",
];

const ADMIN_EMAIL = "admin@theupherroom.com";

export default function RegisterPage() {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    organization: "",
    role: "",
    currentPriority: "",
    stretchedLimited: "",
    strengthsPerspective: "",
    connectWith: "",
    shortBio: "",
    whyRelevant: "",
    dietaryRestrictions: "",
    accessibilityNeeds: "",
  });
  const [error, setError] = useState("");

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const buildMailto = () => {
    const lines = [
      `BUILT FOR MORE: THE XxCHANGE — Registration`,
      `May 29–30, 2026 · Indianapolis, Indiana`,
      ``,
      `── Contact ──`,
      `Full Name: ${fields.fullName}`,
      `Email: ${fields.email}`,
      `Organization: ${fields.organization}`,
      `Role: ${fields.role}`,
      ``,
      `── Where You Are Right Now ──`,
      `Current Priority: ${fields.currentPriority}`,
      ``,
      `Stretched / Limited:`,
      fields.stretchedLimited,
      ``,
      `── What You Bring ──`,
      `Strengths & Perspective: ${fields.strengthsPerspective}`,
      `Looking to Connect With: ${fields.connectWith}`,
      ``,
      `── About You ──`,
      `Short Bio:`,
      fields.shortBio,
      ``,
      `Why This Is Relevant:`,
      fields.whyRelevant,
      ``,
      `── Logistics ──`,
      `Dietary Restrictions: ${fields.dietaryRestrictions || "None"}`,
      `Accessibility Needs: ${fields.accessibilityNeeds || "None"}`,
      ``,
      `──────────`,
      `📎 Please attach your headshot (JPG/PNG) to this email before sending.`,
    ];
    const subject = `Built for More: The XxCHANGE — Registration — ${fields.fullName}`;
    const body = lines.join("\n");
    return `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    window.location.href = buildMailto();
    setTimeout(() => {
      window.location.href = "/register/success";
    }, 600);
  };

  const inputCls = "w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition font-source";
  const textareaCls = `${inputCls} resize-none`;
  const labelCls = "block text-sm font-bold text-primary-dk mb-1.5";
  const optionalCls = "ml-1.5 text-xs font-normal text-foreground/40";

  return (
    <div className="min-h-screen bg-primary-bg/20">
      {/* Top bar */}
      <header className="bg-white border-b border-primary/8 sticky top-0 z-40">
        <div className="container-site flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <Image src="/images/uhr-logo.png" alt="The UpHer Room" width={110} height={36} className="object-contain max-h-8 w-auto" />
          </a>
          <a href="/#tickets" className="text-sm text-foreground/50 hover:text-primary transition-colors font-source">
            ← Back
          </a>
        </div>
      </header>

      <div className="container-site max-w-2xl py-12 sm:py-16">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Registration</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
            Built for More: <span className="text-primary">The XxCHANGE</span>
          </h1>
          <p className="text-foreground/60 mt-3 font-source leading-relaxed">
            May 29–30, 2026 &middot; Indianapolis, Indiana &middot; 50 Participants
          </p>

          <div className="inline-flex items-center gap-2.5 mt-5 px-4 py-2.5 rounded-full bg-primary text-white text-sm font-bold">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a1 1 0 01-1 1 1 1 0 000 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a1 1 0 000-2 1 1 0 011-1V6z" />
            </svg>
            Full Experience &nbsp;·&nbsp; Friday May 29 + Saturday May 30
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact */}
          <div className="bg-white rounded-2xl border border-primary/8 p-6 sm:p-8 space-y-5">
            <h2 className="text-base font-bold text-primary-dk border-b border-primary/8 pb-3">Contact Information</h2>

            <div>
              <label className={labelCls}>Full Name <span className="text-secondary-fg">*</span></label>
              <input required value={fields.fullName} onChange={set("fullName")} placeholder="Your full name" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Email Address <span className="text-secondary-fg">*</span></label>
              <input required type="email" value={fields.email} onChange={set("email")} placeholder="your@email.com" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Organization, Business, Platform, or Initiative <span className="text-secondary-fg">*</span></label>
              <input required value={fields.organization} onChange={set("organization")} placeholder="What are you representing?" className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Role / Title <span className="text-secondary-fg">*</span></label>
              <input required value={fields.role} onChange={set("role")} placeholder="Your current role or title" className={inputCls} />
            </div>
          </div>

          {/* Context */}
          <div className="bg-white rounded-2xl border border-primary/8 p-6 sm:p-8 space-y-5">
            <h2 className="text-base font-bold text-primary-dk border-b border-primary/8 pb-3">Where You Are Right Now</h2>

            <div>
              <label className={labelCls}>What is currently most important for you right now? <span className="text-secondary-fg">*</span></label>
              <div className="space-y-2.5 mt-1">
                {PRIORITY_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="currentPriority"
                      value={opt}
                      required
                      checked={fields.currentPriority === opt}
                      onChange={set("currentPriority")}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-sm text-foreground/70 group-hover:text-primary-dk transition-colors font-source">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls}>Where do you feel most stretched or limited right now? <span className="text-secondary-fg">*</span></label>
              <p className={optionalCls + " block mb-2"}>1–2 sentences</p>
              <textarea required rows={3} value={fields.stretchedLimited} onChange={set("stretchedLimited")} placeholder="Describe where you're feeling the most friction or limitation..." className={textareaCls} />
            </div>
          </div>

          {/* What you bring */}
          <div className="bg-white rounded-2xl border border-primary/8 p-6 sm:p-8 space-y-5">
            <h2 className="text-base font-bold text-primary-dk border-b border-primary/8 pb-3">What You Bring & What You&apos;re Looking For</h2>

            <div>
              <label className={labelCls}>What strengths, skills, or perspective do you bring into a collaborative environment? <span className="text-secondary-fg">*</span></label>
              <p className={optionalCls + " block mb-2"}>1 sentence</p>
              <input required value={fields.strengthsPerspective} onChange={set("strengthsPerspective")} placeholder="e.g. Strategic thinking, community organizing, operational clarity..." className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>What kind of women, work, or opportunities are you most interested in connecting with? <span className="text-secondary-fg">*</span></label>
              <input required value={fields.connectWith} onChange={set("connectWith")} placeholder="e.g. Nonprofit leaders, social entrepreneurs, funders..." className={inputCls} />
            </div>
          </div>

          {/* Bio + headshot */}
          <div className="bg-white rounded-2xl border border-primary/8 p-6 sm:p-8 space-y-5">
            <h2 className="text-base font-bold text-primary-dk border-b border-primary/8 pb-3">About You</h2>

            <div>
              <label className={labelCls}>Short Bio <span className="text-secondary-fg">*</span></label>
              <p className={optionalCls + " block mb-2"}>2–3 sentences max</p>
              <textarea required rows={4} value={fields.shortBio} onChange={set("shortBio")} placeholder="Who you are and what you're building..." className={textareaCls} />
            </div>

            {/* Headshot instruction */}
            <div>
              <label className={labelCls}>Headshot <span className="text-secondary-fg">*</span></label>
              <div className="rounded-xl border border-primary/15 bg-primary-bg/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-dk">Attach to the email that opens</p>
                    <p className="text-xs text-foreground/55 font-source mt-1 leading-relaxed">
                      When you submit, your email client will open with your registration details pre-filled.
                      Attach a <strong>professional headshot</strong> (JPG or PNG) before clicking send.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className={labelCls}>Why does this experience feel relevant to you right now? <span className="text-secondary-fg">*</span></label>
              <input required value={fields.whyRelevant} onChange={set("whyRelevant")} placeholder="What drew you to Built for More?" className={inputCls} />
            </div>
          </div>

          {/* Optional */}
          <div className="bg-white rounded-2xl border border-primary/8 p-6 sm:p-8 space-y-5">
            <h2 className="text-base font-bold text-primary-dk border-b border-primary/8 pb-3">Logistics <span className="text-xs font-normal text-foreground/40">(Optional)</span></h2>

            <div>
              <label className={labelCls}>Dietary Restrictions <span className={optionalCls}>Optional</span></label>
              <input value={fields.dietaryRestrictions} onChange={set("dietaryRestrictions")} placeholder="e.g. Vegetarian, gluten-free, nut allergy..." className={inputCls} />
            </div>

            <div>
              <label className={labelCls}>Accessibility Needs or Considerations <span className={optionalCls}>Optional</span></label>
              <input value={fields.accessibilityNeeds} onChange={set("accessibilityNeeds")} placeholder="Let us know how we can best support you" className={inputCls} />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 font-source">{error}</p>
          )}

          <button
            type="submit"
            className="w-full h-14 rounded-full bg-primary text-white font-bold text-base hover:bg-primary-fg transition-colors"
          >
            Submit Registration
          </button>

          <p className="text-center text-xs text-foreground/40 font-source leading-relaxed">
            Submitting opens your email app with the registration pre-filled.
            Attach your headshot and hit send to complete.
          </p>
        </form>
      </div>
    </div>
  );
}
