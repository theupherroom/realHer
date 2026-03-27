"use client";

import { useState } from "react";

const INQUIRY_TYPES = [
  "General Inquiry",
  "Partnership Inquiry",
  "Sponsorship Inquiry",
  "Registration Support",
  "Media / Press",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl bg-primary-bg/50 border border-primary/10 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-7 h-7 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary-dk">Message Received</h3>
        <p className="text-foreground/60 mt-2 font-source">
          Thank you for reaching out. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-primary-dk mb-1.5">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full h-11 px-4 rounded-lg border border-primary/15 bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary-dk mb-1.5">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full h-11 px-4 rounded-lg border border-primary/15 bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-dk mb-1.5">
          Organization
        </label>
        <input
          type="text"
          className="w-full h-11 px-4 rounded-lg border border-primary/15 bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
          placeholder="Your organization or company"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-dk mb-1.5">
          Inquiry Type
        </label>
        <select
          required
          className="w-full h-11 px-4 rounded-lg border border-primary/15 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm appearance-none"
        >
          <option value="">Select an inquiry type</option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-primary-dk mb-1.5">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-primary/15 bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm resize-none"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-12 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-fg transition-colors cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
