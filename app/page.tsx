import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-svh flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1591115765373-5f9cf1da241d?w=1920&q=80"
        alt="Women at a leadership conference"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dk/90 via-primary/85 to-secondary-fg/75" />

      <div className="relative z-10 container-site text-center flex flex-col items-center gap-6 py-20">
        <a href="#" className="font-bold text-2xl tracking-tight text-white">
          Real<span className="text-secondary">HER</span>
        </a>

        <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase">
          September 18 &ndash; 19, 2026 &middot; Lagos, Nigeria
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] max-w-2xl">
          Thank You for an Incredible RealHER 2026
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed font-source">
          The conference has concluded and registration is now closed. We&apos;re
          grateful to everyone who joined us to learn, connect, and lead. Stay
          tuned for details on what&apos;s next.
        </p>

        <a
          href="mailto:hello@realherconference.com"
          className="inline-flex items-center justify-center px-8 h-12 rounded-full bg-secondary text-primary-dk font-bold hover:bg-secondary/90 transition-colors text-base mt-2"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}
