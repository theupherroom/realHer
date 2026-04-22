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
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-secondary-fg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-primary-dk mb-3">
            Almost there.
          </h1>
          <p className="text-foreground/60 leading-relaxed font-source mb-6">
            Your email app should now be open with your <strong className="text-primary-dk">Built for More</strong> registration pre-filled.
          </p>

          <div className="bg-primary-bg/40 rounded-xl p-5 text-left space-y-3 text-sm font-source mb-6">
            <p className="font-bold text-primary-dk text-[13px] uppercase tracking-wider">To complete your registration:</p>
            <div className="flex gap-3 items-start">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">1</span>
              <p className="text-foreground/70">Attach your <strong className="text-primary-dk">professional headshot</strong> (JPG or PNG).</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">2</span>
              <p className="text-foreground/70">Review the pre-filled details.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">3</span>
              <p className="text-foreground/70">Click <strong className="text-primary-dk">Send</strong>. The UpHer Room team will be in touch.</p>
            </div>
          </div>

          <p className="text-xs text-foreground/50 font-source mb-6 leading-relaxed">
            Didn&apos;t see an email window open? Send your details manually to{" "}
            <a href="mailto:admin@theupherroom.com" className="text-primary font-bold hover:underline">admin@theupherroom.com</a>.
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
