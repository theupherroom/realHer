"use client";

import Image from "next/image";
import { useState, useTransition, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";

const TICKET_META: Record<string, { label: string; color: string; days: string; price: string }> = {
  symposium: { label: "Symposium Pass", color: "bg-primary", days: "Saturday, May 30", price: "$95 early · $125 standard" },
  full: { label: "Full Experience", color: "bg-primary-dk", days: "Friday May 29 + Saturday May 30", price: "$145 early · $175 standard" },
  lab: { label: "Strategy Lab", color: "bg-secondary-fg", days: "Friday, May 29", price: "$45 early · $65 standard" },
};

const PRIORITY_OPTIONS = [
  "Clarity on direction",
  "Strengthening what I've started",
  "Scaling what's already working",
  "Finding aligned partnerships",
];

const MAX_FILE_BYTES = 4 * 1024 * 1024; // 4 MB

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function RegisterForm() {
  const params = useSearchParams();
  const ticket = params.get("ticket") ?? "full";
  const meta = TICKET_META[ticket] ?? TICKET_META.full;

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
  const [headshotFile, setHeadshotFile] = useState<File | null>(null);
  const [headshotError, setHeadshotError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setHeadshotError("");
    if (!file) { setHeadshotFile(null); return; }
    if (!file.type.startsWith("image/")) {
      setHeadshotError("Please upload an image file (JPG, PNG, WEBP).");
      setHeadshotFile(null);
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setHeadshotError("File must be under 4 MB. Please resize and try again.");
      setHeadshotFile(null);
      return;
    }
    setHeadshotFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!headshotFile) {
      setHeadshotError("Please upload your headshot.");
      return;
    }
    setError("");
    startTransition(async () => {
      try {
        const headshotBase64 = await readFileAsBase64(headshotFile);
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ticket,
            ...fields,
            headshot: { filename: headshotFile.name, content: headshotBase64 },
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Submission failed");
        window.location.href = data.checkoutUrl;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      }
    });
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
            ← Back to tickets
          </a>
        </div>
      </header>

      <div className="container-site max-w-2xl py-12 sm:py-16">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Built for More · Registration</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
            Reserve Your Seat
          </h1>
          <p className="text-foreground/60 mt-3 font-source leading-relaxed">
            May 29–30, 2026 &middot; Indianapolis, Indiana &middot; 50 Participants
          </p>

          {/* Ticket badge */}
          <div className={`inline-flex items-center gap-2.5 mt-5 px-4 py-2.5 rounded-full text-white text-sm font-bold ${meta.color}`}>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a1 1 0 01-1 1 1 1 0 000 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a1 1 0 000-2 1 1 0 011-1V6z" />
            </svg>
            {meta.label} &nbsp;·&nbsp; {meta.days} &nbsp;·&nbsp; {meta.price}
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

            {/* Headshot upload */}
            <div>
              <label className={labelCls}>
                Upload Your Headshot <span className="text-secondary-fg">*</span>
              </label>
              <p className={optionalCls + " block mb-3"}>JPG, PNG, or WEBP · max 4 MB · professional photo preferred</p>

              <div
                onClick={() => fileInputRef.current?.click()}
                className={`flex flex-col items-center justify-center w-full h-32 rounded-xl border-2 border-dashed cursor-pointer transition-colors ${
                  headshotFile
                    ? "border-primary/40 bg-primary-bg/20"
                    : "border-primary/20 bg-primary-bg/10 hover:border-primary/40"
                }`}
              >
                {headshotFile ? (
                  <div className="text-center px-4">
                    <svg className="w-6 h-6 text-primary mx-auto mb-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-bold text-primary">{headshotFile.name}</p>
                    <p className="text-xs text-foreground/40 font-source mt-0.5">
                      {(headshotFile.size / 1024).toFixed(0)} KB · Click to change
                    </p>
                  </div>
                ) : (
                  <div className="text-center px-4">
                    <svg className="w-6 h-6 text-primary/40 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className="text-sm font-bold text-foreground/50">Click to upload headshot</p>
                    <p className="text-xs text-foreground/35 font-source mt-0.5">JPG, PNG, WEBP up to 4 MB</p>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleFile}
              />
              {headshotError && (
                <p className="text-xs text-red-600 mt-2 font-source">{headshotError}</p>
              )}
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
            disabled={isPending}
            className="w-full h-14 rounded-full bg-primary text-white font-bold text-base hover:bg-primary-fg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? "Submitting…" : "Submit & Proceed to Payment"}
          </button>

          <p className="text-center text-xs text-foreground/40 font-source leading-relaxed">
            By submitting, your information will be shared with The UpHer Room Inc. for event planning purposes.
            You will be redirected to our secure payment page to complete your registration.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  );
}
