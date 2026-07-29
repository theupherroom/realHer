import Image from "next/image";
import Countdown from "./components/countdown";
import ContactForm from "./components/contact-form";
import MobileNav from "./components/mobile-nav";
// Hidden for now — restore alongside the "Meet Our Community" section below.
// import ContributorsCarousel from "./components/contributors-carousel";
import FAQ from "./components/faq";

/* ─── data ──────────────────────────────────────────────── */

const NAV = [
  { label: "Why", href: "#why" },
  { label: "Who It's For", href: "#who" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const WHO_ITS_FOR = [
  "College women from every major and discipline",
  "First-generation college students",
  "Aspiring entrepreneurs",
  "Future business and community leaders",
  "Women exploring their next career step",
  "Recent graduates beginning their professional journey",
];

const EXPERIENCE = [
  {
    title: "Leadership Keynotes",
    icon: (
      <>
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" />
      </>
    ),
  },
  {
    title: "Learning Labs",
    icon: (
      <>
        <path d="M9 2v6.5L4.5 17A2.5 2.5 0 0 0 6.7 20.7h10.6A2.5 2.5 0 0 0 19.5 17L15 8.5V2" />
        <path d="M8 2h8M7 14h10" />
      </>
    ),
  },
  {
    title: "Mentor Roundtables",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 5.5a3 3 0 0 1 0 5.8M18 20a6 6 0 0 0-3-5.2" />
      </>
    ),
  },
  {
    title: "Student Marketplace",
    icon: (
      <>
        <path d="M3 9h18l-1.5 11.2A2 2 0 0 1 17.5 22h-11a2 2 0 0 1-2-1.8z" />
        <path d="M3 9l2-5h14l2 5M9 13v4M15 13v4" />
      </>
    ),
  },
  {
    title: "Experience Lounge",
    icon: (
      <>
        <path d="M4 13V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
        <path d="M2 16a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3H2zM6 19v2M18 19v2" />
      </>
    ),
  },
  {
    title: "Your Built for More Blueprint",
    icon: (
      <>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
        <path d="M14 2v5h5M9 13h6M9 17h4" />
      </>
    ),
  },
];

const LEAVE_WITH = [
  "New mentors",
  "Professional connections",
  "Career clarity",
  "Leadership confidence",
  "Entrepreneurship resources",
  "Practical skills",
  "Actionable next steps",
  "A supportive community",
];

const HIGHLIGHTS = [
  "Interactive learning",
  "Networking",
  "Professional headshots",
  "Student marketplace",
  "AI experiences",
  "Career conversations",
  "Community partners",
  "Giveaways",
  "Food & refreshments",
];

const STUDENT_REASONS = [
  "Build your network",
  "Meet mentors",
  "Gain practical skills",
  "Discover internships",
  "Explore entrepreneurship",
  "Connect with employers",
  "Leave with an action plan",
];

const PARTNERSHIP_OPTIONS = [
  "Financial Sponsorship",
  "In-Kind Sponsorship",
  "Student Marketplace",
  "Experience Partner",
  "University Partner",
  "Community Partner",
];

const VOLUNTEER_AREAS = [
  "Event operations",
  "Community outreach",
  "Partnerships",
  "Leadership",
  "Marketing",
  "Project management",
];

const SPONSOR_SUPPORTS = [
  "Student scholarships",
  "Meals",
  "Professional headshots",
  "Learning experiences",
  "Career resources",
  "Leadership programming",
  "Marketplace opportunities",
];

/* ─── shared bits ───────────────────────────────────────── */

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ─── page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/8">
        <div className="container-site flex items-center justify-between h-16 gap-4">
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/images/uhr-logo.png"
              alt="The UpHer Room"
              width={120}
              height={40}
              className="object-contain max-h-9 w-auto"
            />
          </a>
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 flex-1 justify-center min-w-0">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] font-medium text-foreground/60 hover:text-primary transition-colors whitespace-nowrap"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="/register"
            className="hidden sm:inline-flex items-center justify-center shrink-0 px-5 h-9 rounded-full bg-primary text-white text-[13px] font-semibold hover:bg-primary-fg transition-colors whitespace-nowrap"
          >
            Register Now
          </a>
          <MobileNav />
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24"
        style={{
          background:
            "linear-gradient(135deg, #21172f 0%, #4a3468 25%, #8052a3 55%, #e6a7b0 100%)",
        }}
      >
        <div className="relative z-10 container-site text-center flex flex-col items-center gap-5 sm:gap-6 py-16 sm:py-20">
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs sm:text-sm font-medium tracking-wide border border-white/10">
            October 9 &ndash; 10, 2026 &middot; Northwest Indiana
          </span>

          <h1 className="px-2">
            <Image
              src="/images/hero-wordmark.png"
              alt="Built for More"
              width={538}
              height={481}
              priority
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto"
            />
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/85 font-semibold max-w-3xl px-2">
            Indiana&apos;s premier leadership and entrepreneurship experience for
            college women.
          </p>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed font-source">
            Discover opportunities. Build meaningful relationships. Leave with the
            confidence and plan to shape what&apos;s next.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-white/50 font-source">
            <span>
              Hosted by{" "}
              <strong className="text-white/70">The UpHer Room Inc.</strong>
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span>
              Powered by <strong className="text-white/70">Truist Foundation</strong>{" "}
              &amp; <strong className="text-white/70">Watson Institute</strong>
            </span>
          </div>

          <Countdown />

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-8 h-12 rounded-full bg-secondary text-primary-dk font-bold hover:bg-secondary/90 transition-colors text-base"
            >
              Register Now
            </a>
            <a
              href="#get-involved"
              className="inline-flex items-center justify-center px-8 h-12 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-base"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY BUILT FOR MORE ── */}
      <section id="why" className="py-20 sm:py-28 bg-white">
        <div className="container-site max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Why Built for More?
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dk leading-tight">
            You&apos;re Built for More
            <br />
            <span className="text-primary">Than Just a Degree.</span>
          </h2>

          <div className="mt-8 space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/75 font-source">
            <p>
              College prepares you for graduation. Built for More prepares you for
              what&apos;s next.
            </p>
            <p>
              Whether your goal is to launch a business, secure an internship, lead
              on campus, or build a meaningful career, you&apos;ll gain practical
              skills, meaningful connections, and direct access to people and
              opportunities that can accelerate your journey.
            </p>
          </div>
        </div>
      </section>

      {/* ── WOMEN MOSAIC ── */}
      <div className="h-[400px] sm:h-[460px] overflow-hidden grid grid-cols-2 lg:grid-cols-5">
        {[
          { src: "photo-1573497491765-dccce02b29df", role: "First-Gen Student", pos: "object-top" },
          { src: "photo-1534751516642-a1af1ef26a56", role: "Aspiring Entrepreneur", pos: "object-top" },
          { src: "photo-1563132337-f159f484226c", role: "Campus Leader", pos: "object-center" },
          { src: "photo-1611432579402-7037e3e2c1e4", role: "Career Explorer", pos: "object-center" },
          { src: "photo-1580489944761-15a19d654956", role: "Recent Graduate", pos: "object-top" },
        ].map((w, i) => (
          <div key={i} className={`relative overflow-hidden ${i === 4 ? "hidden lg:block" : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://images.unsplash.com/${w.src}?w=800&q=85&auto=format&fit=crop`}
              alt={w.role}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover ${w.pos}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dk/85 via-primary-dk/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-secondary mb-1">
                {w.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── WHO IT'S FOR ── */}
      <section id="who" className="py-20 sm:py-28 bg-primary-bg/30">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Who It&apos;s For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
              Designed for Women
              <br />
              Ready to Build What&apos;s Next
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_ITS_FOR.map((a) => (
              <div
                key={a}
                className="group flex items-start gap-4 rounded-2xl border border-primary/8 bg-white p-7 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <span className="shrink-0 w-10 h-10 rounded-lg bg-primary-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Check className="w-5 h-5" />
                </span>
                <p className="text-base font-semibold text-primary-dk leading-snug pt-2">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL EXPERIENCE ── */}
      <section id="experience" className="py-20 sm:py-28 bg-white">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              What You&apos;ll Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              Two Days. Built Around You.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {EXPERIENCE.map((e, i) => (
              <div
                key={e.title}
                className="group relative rounded-2xl border border-primary/10 bg-primary-bg/25 p-8 hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <span className="absolute top-6 right-7 text-4xl font-bold text-primary/10 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    {e.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary-dk leading-snug pr-10">
                  {e.title}
                </h3>
              </div>
            ))}
          </div>

          {/* What you'll leave with */}
          <div className="mt-20 max-w-5xl mx-auto rounded-3xl bg-primary-dk p-8 sm:p-12">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                What You&apos;ll Leave With
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                More Than a Weekend
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {LEAVE_WITH.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-4"
                >
                  <Check className="w-5 h-5 shrink-0 text-secondary" />
                  <span className="text-white/85 font-source text-sm leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section id="why-it-matters" className="py-20 sm:py-28 bg-primary-bg/30">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start max-w-6xl mx-auto">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Why It Matters
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
                The Right Opportunity
                <br />
                <span className="text-primary">Can Change Everything.</span>
              </h2>
              <p className="mt-7 text-lg text-foreground/75 leading-relaxed font-source">
                Too many students graduate without discovering the people,
                programs, internships, funding, or communities that could have
                changed their journey. Built for More bridges that gap by
                connecting college women with the resources, relationships, and
                opportunities already available to them.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Event Highlights
              </span>
              <div className="mt-6 flex flex-wrap gap-3">
                {HIGHLIGHTS.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/10 px-5 py-2.5 text-sm font-medium text-primary-dk"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-fg" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET OUR COMMUNITY (hidden for now) ──
        Restore by uncommenting this block, the ContributorsCarousel import at the
        top of this file, and the "Community" / "Meet Our Community" nav entries in
        NAV above and in mobile-nav.tsx.

      <section id="community" className="py-20 sm:py-28 bg-white">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Meet Our Community
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              Conversations, Not Presentations
            </h2>
            <p className="text-foreground/60 mt-5 leading-relaxed font-source max-w-xl mx-auto">
              Learn from entrepreneurs, executives, founders, community leaders,
              researchers, creatives, and innovators through meaningful
              conversations, not just presentations.
            </p>
          </div>

          <ContributorsCarousel />
        </div>
      </section>
      ── end hidden section ── */}

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 sm:py-28 bg-primary-dk">
        <div className="container-site max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">
            About
          </span>
          <p className="mt-6 text-xl sm:text-2xl text-white leading-relaxed font-source">
            Built for More is The UpHer Room&apos;s signature leadership and
            entrepreneurship experience designed to help college women discover
            opportunities, build meaningful relationships, and prepare for life
            beyond graduation.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                Mission
              </h3>
              <p className="text-white/75 leading-relaxed font-source">
                Equip college women with the relationships, resources, skills, and
                confidence needed to thrive as leaders, entrepreneurs, and
                professionals.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                Vision
              </h3>
              <p className="text-white/75 leading-relaxed font-source">
                A future where every college woman has access to the opportunities,
                networks, and support needed to build a meaningful career and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section id="get-involved" className="py-20 sm:py-28 bg-primary-bg/20">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Get Involved
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              There&apos;s a Way In for Everyone
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {/* Students — feature card */}
            <div className="rounded-3xl bg-white border border-primary/10 p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    For Students
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary-dk mt-3 leading-tight">
                    Why Attend?
                  </h3>
                  <a
                    href="/register"
                    className="mt-7 inline-flex items-center justify-center px-7 h-12 rounded-full bg-primary text-white font-bold hover:bg-primary-fg transition-colors"
                  >
                    Register Now
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {STUDENT_REASONS.map((r) => (
                    <div
                      key={r}
                      className="flex items-center gap-3 rounded-xl bg-primary-bg/40 px-5 py-3.5"
                    >
                      <Check className="w-4 h-4 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-primary-dk">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Partner + Sponsor */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white border border-primary/10 p-8 sm:p-10 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  For Partners
                </span>
                <h3 className="text-2xl font-bold text-primary-dk mt-3 leading-tight">
                  Why Partner With Built for More?
                </h3>
                <p className="mt-4 text-foreground/65 leading-relaxed font-source">
                  Invest in the next generation of women leaders while connecting
                  directly with ambitious college students across Indiana.
                </p>

                <h4 className="mt-8 text-xs font-bold uppercase tracking-widest text-foreground/40">
                  Partnership Opportunities
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {PARTNERSHIP_OPTIONS.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-primary-bg/50 border border-primary/10 px-4 py-2 text-sm font-medium text-primary-dk"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Start a partnership conversation
                  <Arrow />
                </a>
              </div>

              <div className="rounded-3xl bg-white border border-primary/10 p-8 sm:p-10 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  For Sponsors
                </span>
                <h3 className="text-2xl font-bold text-primary-dk mt-3 leading-tight">
                  Invest in Indiana&apos;s Next Generation of Women Leaders.
                </h3>
                <p className="mt-4 text-foreground/65 leading-relaxed font-source">
                  Sponsorship directly supports:
                </p>

                <ul className="mt-5 space-y-2.5">
                  {SPONSOR_SUPPORTS.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 shrink-0 text-secondary-fg mt-0.5" />
                      <span className="text-foreground/70 font-source">{s}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto pt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Become a sponsor
                  <Arrow />
                </a>
              </div>
            </div>

            {/* Universities + Volunteers */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl bg-primary-bg/40 border border-primary/10 p-8 sm:p-10 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  For Universities
                </span>
                <h3 className="text-2xl font-bold text-primary-dk mt-3 leading-tight">
                  Extend the Impact of Your Investment
                </h3>
                <p className="mt-4 text-foreground/65 leading-relaxed font-source">
                  Built for More helps universities extend the impact of their
                  investments in entrepreneurship, leadership development, career
                  readiness, and student success by connecting students with
                  opportunities that continue long after the event.
                </p>
                <a
                  href="#contact"
                  className="mt-auto pt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Talk to us about your campus
                  <Arrow />
                </a>
              </div>

              <div className="rounded-3xl bg-primary-bg/40 border border-primary/10 p-8 sm:p-10 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  For Volunteers
                </span>
                <h3 className="text-2xl font-bold text-primary-dk mt-3 leading-tight">
                  Join the Dream Team.
                </h3>
                <p className="mt-4 text-foreground/65 leading-relaxed font-source">
                  Gain experience in:
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {VOLUNTEER_AREAS.map((v) => (
                    <span
                      key={v}
                      className="rounded-full bg-white border border-primary/10 px-4 py-2 text-sm font-medium text-primary-dk"
                    >
                      {v}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-auto pt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Volunteer with us
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <section
        id="sponsors"
        className="py-20 sm:py-28 bg-white border-y border-primary/8 overflow-hidden"
      >
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Sponsors &amp; Partners
            </span>
            <p className="mt-5 text-foreground/65 font-source leading-relaxed text-base sm:text-lg">
              Built for More is powered by{" "}
              <strong className="text-primary-dk">Truist Foundation</strong> and{" "}
              <strong className="text-primary-dk">Watson Institute</strong>, and is
              built alongside universities, employers, and community organizations
              across Indiana.
            </p>
          </div>

          {/* Flowing logo marquee */}
          <div className="relative mb-16">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="flex overflow-hidden">
              {[0, 1].map((pass) => (
                <div
                  key={pass}
                  aria-hidden={pass === 1}
                  className="flex shrink-0 items-center gap-14 animate-marquee"
                >
                  {Array.from({ length: 4 })
                    .flatMap(() => [
                      { src: "/images/truist.png", alt: "Truist Foundation", w: 140 },
                      { src: "/images/watson.png", alt: "Watson Institute", w: 140 },
                      { src: "/images/uhr-logo.png", alt: "The UpHer Room", w: 120 },
                    ])
                    .map((logo, i) => (
                    <div
                      key={i}
                      className="shrink-0 h-14 flex items-center justify-center px-4 py-2 rounded-xl shadow-sm border bg-white border-primary/8"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.w}
                        height={48}
                        className="object-contain max-h-10 w-auto"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Sponsor cards */}
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-primary-bg/25 rounded-2xl p-8 border border-primary/8 flex flex-col gap-5 w-full md:w-[calc(50%-1rem)]">
                <div className="h-12 flex items-center">
                  <Image
                    src="/images/uhr-logo.png"
                    alt="The UpHer Room"
                    width={160}
                    height={48}
                    className="object-contain max-h-10 w-auto"
                  />
                </div>
                <p className="text-xs text-foreground/40 font-source uppercase tracking-wide -mt-2">
                  Host Organization
                </p>
                <p className="text-foreground/65 font-source leading-relaxed text-sm">
                  The UpHer Room Inc. is a leadership development organization
                  dedicated to equipping and convening women who are building
                  meaningful work in their communities. Built for More is a
                  signature initiative of The UpHer Room.
                </p>
                <a
                  href="https://www.theupherroom.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Visit The UpHer Room
                  <Arrow />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-bg/25 rounded-2xl p-8 border border-primary/8 flex flex-col gap-5">
                <div className="h-12 flex items-center">
                  <Image
                    src="/images/truist.png"
                    alt="Truist Foundation"
                    width={160}
                    height={48}
                    className="object-contain max-h-10 w-auto"
                  />
                </div>
                <p className="text-xs text-foreground/40 font-source uppercase tracking-wide -mt-2">
                  Lead Sponsor
                </p>
                <p className="text-foreground/65 font-source leading-relaxed text-sm">
                  Truist Foundation is committed to building thriving communities by
                  investing in people and programs that create economic mobility and
                  opportunity. Their support of Built for More reflects a deep belief
                  in the power of women-led leadership to transform organizations,
                  communities, and systems.
                </p>
                <a
                  href="https://www.truistfoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <Arrow />
                </a>
              </div>

              <div className="bg-primary-bg/25 rounded-2xl p-8 border border-primary/8 flex flex-col gap-5">
                <div className="h-12 flex items-center">
                  <Image
                    src="/images/watson.png"
                    alt="Watson Institute"
                    width={160}
                    height={48}
                    className="object-contain max-h-10 w-auto"
                  />
                </div>
                <p className="text-xs text-foreground/40 font-source uppercase tracking-wide -mt-2">
                  Strategic Partner
                </p>
                <p className="text-foreground/65 font-source leading-relaxed text-sm">
                  Watson Institute develops the next generation of leaders through
                  experiential education and purpose-driven programming. As a
                  strategic partner for Built for More, Watson Institute brings a
                  framework of applied leadership development that deepens the impact
                  of every conversation in the room.
                </p>
                <a
                  href="https://www.watson.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <Arrow />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 sm:py-28 bg-primary-bg/20">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              Good Questions to Ask First
            </h2>
          </div>

          <FAQ />
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1920&q=80"
          alt="College women at a leadership event"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-dk/85" />
        <div className="relative z-10 container-site max-w-3xl text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Your Future
            <br />
            <span className="text-secondary">Won&apos;t Build Itself.</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed font-source max-w-2xl mx-auto">
            Take the next step toward the future you&apos;re building.
          </p>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 h-12 rounded-full bg-secondary text-primary-dk font-bold hover:bg-secondary/90 transition-colors mt-8 text-base"
          >
            Register Today
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 sm:py-28 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
                Let&apos;s Connect
              </h2>
              <p className="text-foreground/60 mt-4 leading-relaxed font-source">
                Whether you have a question about registration, want to bring your
                campus, are exploring a partnership, or want to volunteer, we&apos;d
                love to hear from you.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-bg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-dk">
                      General &amp; Student Questions
                    </p>
                    <p className="text-sm text-foreground/50 font-source mt-0.5">
                      admin@theupherroom.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-bg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-dk">
                      Partnership, Sponsorship &amp; Universities
                    </p>
                    <p className="text-sm text-foreground/50 font-source mt-0.5">
                      whitney@theupherroom.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-bg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-dk">Phone</p>
                    <p className="text-sm text-foreground/50 font-source mt-0.5">
                      (317) 721-8460
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary-dk text-white py-16">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <h3 className="font-bold text-2xl">Built for More</h3>
              <p className="text-white/50 text-sm mt-3 leading-relaxed font-source max-w-md">
                Indiana&apos;s premier leadership and entrepreneurship experience
                for college women.
              </p>
              <div className="mt-4 space-y-1 text-sm text-white/40 font-source">
                <p>October 9 &ndash; 10, 2026</p>
                <p>Northwest Indiana</p>
              </div>
              <div className="mt-4 space-y-1 text-sm text-white/40 font-source">
                <p>
                  Hosted by <span className="text-white/60">The UpHer Room Inc.</span>
                </p>
                <p>
                  Powered by <span className="text-white/60">Truist Foundation</span>{" "}
                  &amp; <span className="text-white/60">Watson Institute</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Register", href: "/register" },
                  { label: "Who It's For", href: "#who" },
                  { label: "Get Involved", href: "#get-involved" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                ].map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="text-white/40 hover:text-secondary transition-colors"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">
                Connect
              </h4>
              <div className="flex gap-4">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/theupherroom",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/theupherroom",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    label: "TikTok",
                    href: "https://www.tiktok.com/@theupherroom",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white/40 hover:text-secondary hover:bg-white/15 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>&copy; 2026 The UpHer Room Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
