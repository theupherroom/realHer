"use client";

import Image from "next/image";

export default function RegisterPage() {

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
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Application</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
            Apply to <span className="text-primary">Built for More</span>
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

        {/* Tally Form Embed */}
        <div className="bg-white rounded-2xl border border-primary/8 p-6 sm:p-8">
          <iframe
            data-tally-src="https://tally.so/r/VL9kxy?transparentBackground=1&formEventsForwarding=1"
            width="100%"
            height="1400"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Built for More — Application"
            className="rounded-lg"
          />
          <script async src="https://app.tally.so/tally.js" />
        </div>
      </div>
    </div>
  );
}
