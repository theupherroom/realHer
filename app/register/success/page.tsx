import Image from "next/image";
import Link from "next/link";

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen bg-primary-bg/20 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg text-center">
        <div className="mb-8">
          <Link href="/">
            <Image src="/images/uhr-logo.png" alt="The UpHer Room" width={120} height={40} className="object-contain max-h-10 w-auto mx-auto" />
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-primary/8 p-10 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-primary-dk mb-3">
            You&apos;re registered.
          </h1>
          <p className="text-foreground/60 leading-relaxed font-source mb-6">
            Your application for <strong className="text-primary-dk">Built for More</strong> has been received. The UpHer Room team will be in touch with payment instructions and event details.
          </p>

          <div className="bg-primary-bg/40 rounded-xl p-5 text-left space-y-2 text-sm font-source mb-8">
            <p className="text-foreground/60"><strong className="text-primary-dk">Event:</strong> Built for More — Leadership Symposium</p>
            <p className="text-foreground/60"><strong className="text-primary-dk">Date:</strong> May 29–30, 2026</p>
            <p className="text-foreground/60"><strong className="text-primary-dk">Location:</strong> Indianapolis, Indiana</p>
            <p className="text-foreground/60"><strong className="text-primary-dk">Questions?</strong> benedicta@theupherroom.com</p>
          </div>

          <p className="text-xs text-foreground/40 font-source mb-6">
            A confirmation has been sent to your email. Please also email your headshot to{" "}
            <strong className="text-primary">benedicta@theupherroom.com</strong>{" "}
            with subject &ldquo;Headshot — [Your Name]&rdquo;.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 h-11 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-fg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
