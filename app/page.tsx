import Image from "next/image";
import Countdown from "./components/countdown";
import ContactForm from "./components/contact-form";
import MobileNav from "./components/mobile-nav";
import ContributorsCarousel from "./components/contributors-carousel";
import ScheduleSection from "./components/schedule-section";

/* ─── data ──────────────────────────────────────────────── */

const NAV = [
  { label: "Details", href: "#event-details" },
  { label: "Overview", href: "#overview" },
  { label: "Who Attends", href: "#who" },
  { label: "Why Attend", href: "#why" },
  { label: "Topics", href: "#topics" },
  { label: "Contributors", href: "#contributors" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

const AUDIENCE = [
  {
    title: "Nonprofit Founders & Executive Directors",
    desc: "Leading organizations that expand access and opportunity for women and communities.",
  },
  {
    title: "Women Entrepreneurs & Business Owners",
    desc: "Building businesses that create economic pathways and redefine industry norms.",
  },
  {
    title: "Corporate Leaders & Managers",
    desc: "Driving change within organizations and championing inclusive leadership.",
  },
  {
    title: "Heads of People, Culture & Engagement",
    desc: "Women shaping workplace culture and employee development strategies.",
  },
  {
    title: "Community Leaders & Advocates",
    desc: "Mobilizing communities and building grassroots infrastructure for change.",
  },
  {
    title: "High-Capacity Emerging Women Leaders",
    desc: "Rising women ready to step into greater influence and responsibility.",
  },
];

const WHY_POINTS = [
  "You're doing strong work, but something in the way it's structured isn't working.",
  "You've experienced collaboration that sounded right but didn't produce real outcomes.",
  "You want to support other women without diluting your standards or your work.",
  "You've felt the tension between building your vision and participating in someone else's.",
  "You know there's overlap across what women are building, but no real coordination.",
  "You're thinking more seriously about alignment, not just access.",
  "You're starting to question where your time, energy, and resources are actually going.",
  "You want to build in a way that allows more women to rise without lowering the level of what's being built.",
];

const UNPACKING = [
  "Where trust breaks down",
  "Why impact becomes fragmented",
  "What real collaboration actually requires",
  "How power shows up in partnership",
  "How to build without losing your standards",
];

const LEAVE_WITH = [
  "A sharper understanding of where your work is being limited and where alignment actually exists",
  "Language and perspective to approach collaboration, partnership, and growth differently",
  "Clarity on where your work connects within a broader ecosystem",
  "Relationships built through context, not surface-level connection",
  "Participation in the Build Lab, where one team will be selected for recognition and a featured moment during the experience",
];

const INCLUDES = [
  "Full access to both days of the experience",
  "All keynote and facilitated sessions",
  "Collaborative Build Lab participation",
  "Curated table conversations and working sessions",
  "Meals and refreshments (Friday + Saturday)",
  "Legacy Goods experience",
  "Opportunity for Strategy Lab recognition",
  "Certificate of completion",
  "Continued connection with women in the room",
];

const FRIDAY_SCHEDULE = [
  { time: "1:00 PM", title: "Check-In" },
  { time: "1:15 PM", title: "Opening Welcome" },
  { time: "1:30 PM", title: "Activation 1: Identity Without Titles" },
  { time: "1:50 PM", title: "Activation 2: The Moment of Truth" },
  { time: "2:15 PM", title: "Keynote" },
  { time: "2:20 PM", title: "Lunch Served" },
  { time: "2:35 PM", title: "Creative Arts Performance" },
  { time: "2:55 PM", title: "Activation 3: The 1st Exchange" },
  { time: "3:25 PM", title: "Activation 4: “I See You”" },
  { time: "3:45 PM", title: "Close" },
];

const SATURDAY_SCHEDULE = [
  { time: "9:00 AM", title: "Arrival + Morning Fuel" },
  { time: "9:15 AM", title: "Activation 1: Formal Introductions" },
  { time: "9:35 AM", title: "Opening Keynote" },
  { time: "10:00 AM", title: "Activation 2: The Open Window" },
  { time: "10:45 AM", title: "Activation 3: The 2nd Exchange" },
  { time: "1:15 PM", title: "Lunch + Informal Dialogue" },
  { time: "2:00 PM", title: "Group Share + Reflection" },
  { time: "3:00 PM", title: "Signature Conversation" },
  { time: "4:40 PM", title: "Activation 4: “Leaving Different”" },
  { time: "5:00 PM", title: "Close" },
];

/* ─── page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── POSTPONEMENT BANNER ── */}
      <div className="fixed top-0 inset-x-0 z-[60] bg-secondary text-white overflow-hidden border-b border-secondary-fg/20">
        <div className="flex">
          {[0, 1].map((pass) => (
            <div
              key={pass}
              aria-hidden={pass === 1}
              className="flex shrink-0 items-center gap-10 animate-marquee py-4 whitespace-nowrap"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="text-base font-semibold flex items-center gap-3 px-2">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v3a1 1 0 11-2 0V9zm1-5a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                  Event Postponed &mdash; New Dates: October 9 &ndash; 10, 2026
                  <span className="text-white/50">&bull;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <header className="fixed top-14 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/8">
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
            Apply Now
          </a>
          <MobileNav />
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        id="event-details"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-[120px]"
        style={{ background: "linear-gradient(135deg, #21172f 0%, #4a3468 25%, #8052a3 55%, #e6a7b0 100%)" }}
      >
        <div className="relative z-10 container-site text-center flex flex-col items-center gap-5 sm:gap-6 py-16 sm:py-20">
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs sm:text-sm font-medium tracking-wide border border-white/10">
            October 9 &ndash; 10, 2026 &middot; Indianapolis, Indiana
          </span>

          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-5xl px-2">
            Built for More
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/85 font-semibold max-w-2xl px-2">
            A Leadership Experience for Women Who Build
          </p>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed font-source">
            A two-day diagnostic and strategic experience for women building
            inside ecosystems that need redesign.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-white/50 font-source">
            <span>Hosted by <strong className="text-white/70">The UpHer Room Inc.</strong></span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Powered by <strong className="text-white/70">Truist Foundation</strong> &amp; <strong className="text-white/70">Watson Institute</strong></span>
          </div>

          <Countdown />

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-8 h-12 rounded-full bg-secondary text-primary-dk font-bold hover:bg-secondary/90 transition-colors text-base"
            >
              Apply Now
            </a>
            <a
              href="#overview"
              className="inline-flex items-center justify-center px-8 h-12 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section id="overview" className="py-20 sm:py-28 bg-white">
        <div className="container-site max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Event Overview
          </span>

          <div className="mt-8 space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/80 font-source">
            <p className="text-2xl sm:text-3xl font-bold text-primary-dk leading-snug font-sans">
              You don&apos;t need more motivation.
              <br />
              <span className="text-primary">What you&apos;ve been searching for is a clearer diagnosis.</span>
            </p>

            <p>
              It&apos;s not about talent.
              <br />
              It&apos;s not about capacity.
              <br />
              It&apos;s not about vision.
            </p>

            <p>
              You&apos;ve already been building.
              <br />
              You&apos;ve already been showing up.
              <br />
              You&apos;ve already been carrying more than most people see.
            </p>

            <p>
              Sometimes the issue is broken trust, fragmented impact,
              surface-level collaboration, and partnerships that look aligned on
              paper but quietly cost you clarity, capacity, and voice.
            </p>

            <p>
              <strong className="text-primary-dk">Built for More</strong> is a
              two-day leadership experience for women navigating misalignment,
              fragmentation, and the realities of building inside systems that
              need redesign.
            </p>

            <p>
              This is a room for women who are no longer interested in misnaming
              structural problems as personal limitations, and who are ready to
              build with greater clarity, alignment, and strength.
            </p>
          </div>
        </div>
      </section>

      {/* ── WOMEN MOSAIC ── */}
      <div className="h-[400px] sm:h-[460px] overflow-hidden grid grid-cols-2 lg:grid-cols-5">
        {[
          { src: "photo-1563132337-f159f484226c", role: "Corporate Leader",     pos: "object-center" },
          { src: "photo-1573497491765-dccce02b29df", role: "Nonprofit Founder", pos: "object-top" },
          { src: "photo-1534751516642-a1af1ef26a56", role: "Entrepreneur",      pos: "object-top" },
          { src: "photo-1611432579402-7037e3e2c1e4", role: "Community Advocate", pos: "object-center" },
          { src: "photo-1580489944761-15a19d654956", role: "Emerging Leader",   pos: "object-top" },
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

      {/* ── WHO SHOULD ATTEND ── */}
      <section id="who" className="py-20 sm:py-28 bg-primary-bg/30">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Who Should Attend
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
              This Room Is Curated
              <br />
              for Women Who Build
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUDIENCE.map((a) => (
              <div
                key={a.title}
                className="group rounded-2xl border border-primary/8 bg-white p-7 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-bg flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-primary-dk mb-2">{a.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed font-source">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ATTEND ── */}
      <section id="why" className="py-20 sm:py-28 bg-white">
        <div className="container-site max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Why You Should Attend
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
            The Problem Isn&apos;t You.
            <br />
            <span className="text-primary">
              It&apos;s the System You&apos;re Building In.
            </span>
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {WHY_POINTS.map((point, i) => (
              <div key={i} className="flex gap-3 items-start bg-primary-bg/20 rounded-xl p-5 border border-primary/8">
                <span className="shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-secondary-fg" />
                </span>
                <p className="text-foreground/70 leading-relaxed font-source text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO-DAY EXPERIENCE ── */}
      <section className="py-20 sm:py-28 bg-primary-bg/20">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              The Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              Two Days. Two Formats.
              <br />
              One Transformative Experience.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-primary-bg/30 border border-primary/10 p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Friday &mdash; October 9
              </span>
              <h3 className="text-2xl font-bold text-primary-dk mt-3 mb-4">The Unveiling</h3>
              <p className="text-foreground/60 leading-relaxed font-source">
                An afternoon of identity, truth, and connection. Participants move
                beyond titles to meet one another as women — recognizing shared
                experience and the tensions of building inside systems that need
                redesign.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-foreground/40">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>1:00 PM &ndash; 4:00 PM</span>
              </div>
            </div>

            <div className="rounded-2xl bg-primary-bg/30 border border-primary/10 p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Saturday &mdash; October 10
              </span>
              <h3 className="text-2xl font-bold text-primary-dk mt-3 mb-4">The Build Lab</h3>
              <p className="text-foreground/60 leading-relaxed font-source">
                A full day of alignment, collaboration, and collective building.
                Structured dialogue and a collaborative Build Lab move participants
                from recognition into the real work of building something together.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-foreground/40">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>9:00 AM &ndash; 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC CONTRIBUTORS ── */}
      <section id="contributors" className="py-20 sm:py-28 bg-white">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Strategic Contributors
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              A Curated Room of Leaders
            </h2>
            <p className="text-foreground/60 mt-5 leading-relaxed font-source max-w-xl mx-auto">
              Women leaders across nonprofit, corporate, and entrepreneurial
              sectors — brought together to exchange insight, challenge
              assumptions, and build what&apos;s next.
            </p>
          </div>

          <ContributorsCarousel />
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section id="schedule" className="py-20 sm:py-28 bg-primary-dk">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              The Flow of the Experience
            </h2>
          </div>

          <ScheduleSection friday={FRIDAY_SCHEDULE} saturday={SATURDAY_SCHEDULE} />
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section id="topics" className="py-20 sm:py-28 bg-primary-bg/30">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* What We're Unpacking */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                What We&apos;ll Discuss
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-dk mt-3 mb-8 leading-tight">
                The Conversations That Matter
              </h2>
              <div className="space-y-4">
                {UNPACKING.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white rounded-xl p-5 border border-primary/8">
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground/70 font-source leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Leave With */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                What You&apos;ll Leave With
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-dk mt-3 mb-8 leading-tight">
                More Than Inspiration
              </h2>
              <div className="space-y-4 mb-8">
                {LEAVE_WITH.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <svg className="w-5 h-5 shrink-0 text-secondary-fg mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-foreground/70 font-source leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Hero deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-4 items-start rounded-2xl bg-primary-bg/50 border border-primary/10 p-5">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" /><path d="M8 14v7M16 14v7M4 21h16" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-primary-dk text-sm leading-snug">Certificate in Strategic Leadership &amp; Ecosystem Building</p>
                    <p className="text-foreground/55 text-xs mt-1 font-source">Awarded after the convening</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start rounded-2xl bg-secondary/10 border border-secondary/20 p-5">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary-fg flex items-center justify-center text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 12v10H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-primary-dk text-sm leading-snug">Gifted Item from Legacy Goods</p>
                    <p className="text-foreground/55 text-xs mt-1 font-source">The UpHer Room&apos;s premier goods &amp; gifting collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAVE YOUR SEAT ── */}
      <section id="tickets" className="py-20 sm:py-28 bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Apply to Attend
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
              Built for <span className="text-primary">More</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto mt-5 font-source leading-relaxed">
              A two-day experience for women building at capacity and ready for
              alignment, collaboration, and real expansion.
            </p>
          </div>

          <div className="max-w-2xl mx-auto rounded-2xl bg-primary-bg/30 border border-primary/10 p-8 sm:p-10">
            <div className="text-center space-y-2 font-source mb-8">
              <p className="text-primary-dk font-bold text-base">
                Space is intentionally limited to 50 women.
              </p>
              <p className="text-foreground/65 text-sm leading-relaxed">
                This is a full experience. Friday and Saturday are designed to work together.
              </p>
            </div>

            <div className="border-t border-primary/10 pt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-5">
                Your Experience Includes
              </h3>
              <ul className="space-y-3">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 shrink-0 text-primary mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-foreground/75 font-source leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/register"
              className="mt-10 flex items-center justify-center h-14 rounded-full bg-primary text-white font-bold text-base hover:bg-primary-fg transition-colors"
            >
              Apply Now
            </a>

            <p className="mt-5 text-center text-xs text-foreground/50 font-source leading-relaxed">
              Once you register, you&apos;ll receive next steps and preparation details
              for the experience — including exact address.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <section id="sponsors" className="py-20 sm:py-28 bg-primary-bg/20 border-y border-primary/8 overflow-hidden">
        <div className="container-site">
          {/* Intro copy */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Sponsors &amp; Partners
            </span>
            <p className="mt-5 text-foreground/65 font-source leading-relaxed text-base sm:text-lg">
              Built for More is powered by{" "}
              <strong className="text-primary-dk">Truist Foundation</strong> and{" "}
              <strong className="text-primary-dk">Watson Institute</strong> and is
              designed to convene women leaders, founders, and ecosystem builders
              for meaningful dialogue and strategic collaboration.
            </p>
          </div>

          {/* Flowing logo marquee */}
          <div className="relative mb-16">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-primary-bg/20 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-primary-bg/20 to-transparent" />
            <div className="flex overflow-hidden">
              {[0, 1].map((pass) => (
                <div
                  key={pass}
                  aria-hidden={pass === 1}
                  className="flex shrink-0 items-center gap-14 animate-marquee"
                >
                  {[
                    { src: "/images/truist.png", alt: "Truist Foundation", w: 140 },
                    { src: "/images/watson.png", alt: "Watson Institute", w: 140 },
                    { src: "/images/uhr-logo.png", alt: "The UpHer Room", w: 120 },
                    { src: "/images/10-east-arts.png", alt: "10 East Arts", w: 140 },
                    { src: "/images/bella-tech.png", alt: "Bella Tech", w: 140 },
                    { src: "/images/truist.png", alt: "Truist Foundation", w: 140 },
                    { src: "/images/watson.png", alt: "Watson Institute", w: 140 },
                    { src: "/images/uhr-logo.png", alt: "The UpHer Room", w: 120 },
                    { src: "/images/10-east-arts.png", alt: "10 East Arts", w: 140 },
                    { src: "/images/bella-tech.png", alt: "Bella Tech", w: 140 },
                  ].map((logo, i) => (
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

          {/* Sponsor cards — UpHer Room on top, Truist + Watson below */}
          <div className="max-w-5xl mx-auto">
            {/* Top: UpHer Room centered */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl p-8 border border-primary/8 flex flex-col gap-5 w-full md:w-[calc(50%-1rem)]">
                <div className="h-12 flex items-center">
                  <Image src="/images/uhr-logo.png" alt="The UpHer Room" width={160} height={48} className="object-contain max-h-10 w-auto" />
                </div>
                <p className="text-xs text-foreground/40 font-source uppercase tracking-wide -mt-2">Host Organization</p>
                <p className="text-foreground/65 font-source leading-relaxed text-sm">
                  The UpHer Room Inc. is a leadership development organization dedicated to equipping and convening women who are building meaningful work in their communities. Built for More is a signature initiative of The UpHer Room.
                </p>
                <a
                  href="https://www.theupherroom.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Visit The UpHer Room
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom row: Truist + Watson + 10 East Arts + Bella Tech */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-primary/8 flex flex-col gap-5">
                <div className="h-12 flex items-center">
                  <Image src="/images/truist.png" alt="Truist Foundation" width={160} height={48} className="object-contain max-h-10 w-auto" />
                </div>
                <p className="text-xs text-foreground/40 font-source uppercase tracking-wide -mt-2">Lead Sponsor</p>
                <p className="text-foreground/65 font-source leading-relaxed text-sm">
                  Truist Foundation is committed to building thriving communities by investing in people and programs that create economic mobility and opportunity. Their support of Built for More reflects a deep belief in the power of women-led leadership to transform organizations, communities, and systems.
                </p>
                <a
                  href="https://www.truistfoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/8 flex flex-col gap-5">
                <div className="h-12 flex items-center">
                  <Image src="/images/watson.png" alt="Watson Institute" width={160} height={48} className="object-contain max-h-10 w-auto" />
                </div>
                <p className="text-xs text-foreground/40 font-source uppercase tracking-wide -mt-2">Strategic Partner</p>
                <p className="text-foreground/65 font-source leading-relaxed text-sm">
                  Watson Institute develops the next generation of leaders through experiential education and purpose-driven programming. As a strategic partner for Built for More, Watson Institute brings a framework of applied leadership development that deepens the impact of every conversation in the room.
                </p>
                <a
                  href="https://www.watson.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/8 flex flex-col gap-5">
                <div className="h-12 flex items-center">
                  <Image src="/images/10-east-arts.png" alt="10 East Arts" width={160} height={48} className="object-contain max-h-10 w-auto" />
                </div>
                <p className="text-xs text-foreground/40 font-source uppercase tracking-wide -mt-2">Venue Partner</p>
                <p className="text-foreground/65 font-source leading-relaxed text-sm">
                  10 East Arts is an initiative by the John Boner Neighborhood Centers whose goal is creating a vibrant, thriving, equitable neighborhood district in which creativity, arts and culture enrich the quality of life for existing eastside residents and visitors.
                </p>
                <a
                  href="https://www.10eastarts.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/8 flex flex-col gap-5">
                <div className="h-12 flex items-center">
                  <Image src="/images/bella-tech.png" alt="Bella Tech" width={160} height={48} className="object-contain max-h-10 w-auto" />
                </div>
                <p className="text-xs text-foreground/40 font-source uppercase tracking-wide -mt-2">Technology Partner</p>
                <p className="text-foreground/65 font-source leading-relaxed text-sm">
                  Bella Tech is a software development and AI company. We design, build, and deploy custom software for businesses that refuse to settle for off-the-shelf solutions — from intelligent AI-powered platforms to scalable web and mobile applications.
                </p>
                <a
                  href="https://www.linkedin.com/in/hephzibah-a-9b09a760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1563132337-f159f484226c?w=1920&q=80"
          alt="Women at a leadership event"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-dk/85" />
        <div className="relative z-10 container-site max-w-3xl text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            This is not about doing more.
            <br />
            <span className="text-secondary">
              It&apos;s about building in a way that actually works.
            </span>
          </h2>
          <p className="mt-6 text-white/65 text-lg leading-relaxed font-source max-w-2xl mx-auto">
            If you&apos;ve been carrying more than you should, questioning
            what&apos;s not working, or sensing that something deeper needs to
            shift &mdash; this room was built with that in mind.
          </p>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-8 h-12 rounded-full bg-secondary text-primary-dk font-bold hover:bg-secondary/90 transition-colors mt-8 text-base"
          >
            Apply Now
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
                Whether you have a question about registration, want to explore
                a partnership, or are interested in sponsoring — we&apos;d love
                to hear from you.
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
                    <p className="text-sm font-semibold text-primary-dk">General Contact</p>
                    <p className="text-sm text-foreground/50 font-source mt-0.5">admin@theupherroom.com</p>
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
                    <p className="text-sm font-semibold text-primary-dk">Partnership &amp; Sponsorship</p>
                    <p className="text-sm text-foreground/50 font-source mt-0.5">whitney@theupherroom.com</p>
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
                    <p className="text-sm text-foreground/50 font-source mt-0.5">(317) 721-8460</p>
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
                A Leadership Experience for Women Who Build
              </p>
              <div className="mt-4 space-y-1 text-sm text-white/40 font-source">
                <p>October 9 &ndash; 10, 2026</p>
                <p>Indianapolis, Indiana</p>
              </div>
              <div className="mt-4 space-y-1 text-sm text-white/40 font-source">
                <p>Hosted by <span className="text-white/60">The UpHer Room Inc.</span></p>
                <p>
                  Powered by <span className="text-white/60">Truist Foundation</span> &amp;{" "}
                  <span className="text-white/60">Watson Institute</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Register", href: "#tickets" },
                  { label: "Schedule", href: "#schedule" },
                  { label: "Overview", href: "#overview" },
                  { label: "Contact", href: "#contact" },
                ].map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-white/40 hover:text-secondary transition-colors">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Connect</h4>
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
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
