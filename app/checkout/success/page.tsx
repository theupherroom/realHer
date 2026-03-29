import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-primary-bg/20 flex flex-col" style={{ fontFamily: "var(--font-sans)" }}>
      <header className="bg-white border-b border-primary/8">
        <div className="container-site flex items-center h-16">
          <a href="/">
            <Image src="/images/uhr-logo.png" alt="The UpHer Room" width={110} height={36} className="object-contain max-h-8 w-auto" />
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-2xl border border-primary/10 p-10 sm:p-14 max-w-lg w-full text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-primary-dk">
            You&apos;re registered!
          </h1>
          <p className="text-foreground/60 mt-3 font-source leading-relaxed">
            Your seat is reserved for <strong className="text-primary-dk">Built for More</strong> — May 29–30, 2026 in Indianapolis, Indiana. Check your email for a confirmation receipt.
          </p>

          <div className="mt-8 p-5 bg-primary-bg/30 rounded-xl border border-primary/8 text-left space-y-2 text-sm font-source text-foreground/60">
            <p><strong className="text-primary-dk">Event:</strong> Built for More</p>
            <p><strong className="text-primary-dk">Date:</strong> May 29–30, 2026</p>
            <p><strong className="text-primary-dk">Location:</strong> Indianapolis, Indiana</p>
            <p><strong className="text-primary-dk">Host:</strong> The UpHer Room Inc.</p>
          </div>

          <p className="mt-6 text-sm text-foreground/50 font-source">
            Questions? Email{" "}
            <a href="mailto:admin@theupherroom.com" className="text-primary hover:underline">
              admin@theupherroom.com
            </a>
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center px-8 h-11 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-fg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
