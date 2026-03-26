import Image from "next/image";
import Countdown from "./components/countdown";
import FAQ from "./components/faq";

/* ─── data ──────────────────────────────────────────────── */

const NAV = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const AUDIENCE = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Women Entrepreneurs",
    desc: "Building and scaling businesses across Africa and beyond.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Tech Leaders",
    desc: "Driving innovation and digital transformation in their industries.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
    title: "Students & Graduates",
    desc: "Launching careers with mentorship and real-world connections.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Corporate Executives",
    desc: "Championing diversity, equity, and inclusion at scale.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Policy & NGO Leaders",
    desc: "Shaping policies that empower women and communities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 12 18.469a3.374 3.374 0 0 0-1.988-.822l-.548-.547z" />
      </svg>
    ),
    title: "Creatives & Innovators",
    desc: "Using art, design, and storytelling to drive change.",
  },
];

const WHY_ATTEND = [
  {
    stat: "2,500+",
    label: "Attendees",
    desc: "Join a powerful community of women leaders from 30+ countries.",
  },
  {
    stat: "50+",
    label: "Speakers",
    desc: "Learn from trailblazers in business, tech, policy, and the arts.",
  },
  {
    stat: "40+",
    label: "Sessions",
    desc: "Keynotes, panels, workshops, and fireside chats over two days.",
  },
  {
    stat: "100+",
    label: "Companies",
    desc: "Connect with organizations committed to gender equity.",
  },
];

const SPEAKERS = [
  {
    name: "Dr. Amina Osei",
    role: "CEO, AfriHealth Ventures",
    img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ngozi Adeyemi",
    role: "Founder, TechSisters Africa",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Fatima El-Amin",
    role: "VP Engineering, Nova Systems",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Zara Mensah",
    role: "Director, UN Women West Africa",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Blessing Okoro",
    role: "Managing Partner, Bloom Capital",
    img: "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Chioma Nwogu",
    role: "Creative Director, Ubuntu Studios",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
];

const SCHEDULE = [
  {
    day: "Day 1 — September 18",
    slots: [
      { time: "8:00 AM", title: "Registration & Networking Breakfast", type: "break" },
      { time: "9:00 AM", title: "Opening Keynote: The Future is HER", type: "keynote" },
      { time: "10:30 AM", title: "Panel: Breaking Barriers in African Tech", type: "panel" },
      { time: "12:00 PM", title: "Lunch & Exhibition Hall", type: "break" },
      { time: "1:30 PM", title: "Workshop: Fundraising Masterclass", type: "workshop" },
      { time: "3:00 PM", title: "Fireside Chat: From Startup to Scale-up", type: "keynote" },
      { time: "4:30 PM", title: "Breakout Sessions (3 tracks)", type: "workshop" },
      { time: "7:00 PM", title: "VIP Gala Dinner & Awards", type: "break" },
    ],
  },
  {
    day: "Day 2 — September 19",
    slots: [
      { time: "8:30 AM", title: "Morning Wellness Session", type: "break" },
      { time: "9:30 AM", title: "Keynote: Policy & Power — Women in Governance", type: "keynote" },
      { time: "11:00 AM", title: "Panel: Building Inclusive Workplaces", type: "panel" },
      { time: "12:30 PM", title: "Lunch & Mentorship Speed-Dating", type: "break" },
      { time: "2:00 PM", title: "Workshop: Personal Branding & Storytelling", type: "workshop" },
      { time: "3:30 PM", title: "Panel: Creative Industries & Social Impact", type: "panel" },
      { time: "5:00 PM", title: "Closing Keynote & Call to Action", type: "keynote" },
    ],
  },
];

const PRICING = [
  {
    name: "Standard",
    price: "₦75,000",
    usd: "~$95",
    features: [
      "Access to all keynotes & panels",
      "Networking lounge access",
      "Conference materials & swag bag",
      "Lunch & refreshments (2 days)",
      "Digital certificate of attendance",
    ],
    cta: "Get Standard Ticket",
    highlighted: false,
  },
  {
    name: "VIP",
    price: "₦150,000",
    usd: "~$190",
    features: [
      "Everything in Standard",
      "Priority front-row seating",
      "Exclusive VIP workshops",
      "Gala dinner invitation",
      "90-day session recordings access",
      "VIP networking mixer",
    ],
    cta: "Get VIP Ticket",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₦300,000",
    usd: "~$380",
    features: [
      "Everything in VIP",
      "1-on-1 speaker sessions (15 min)",
      "Private lounge & concierge",
      "Complimentary hotel stay (2 nights)",
      "Lifetime community membership",
      "Exclusive post-event mastermind",
    ],
    cta: "Get Premium Ticket",
    highlighted: false,
  },
];

const PARTNERS = [
  "Google Women Techmakers",
  "UN Women",
  "Mastercard Foundation",
  "Africa Development Bank",
  "Flutterwave",
  "Microsoft for Africa",
  "Dangote Foundation",
  "Tony Elumelu Foundation",
];

/* ─── page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
        <div className="container-site flex items-center justify-between h-16">
          <a href="#" className="font-bold text-xl tracking-tight text-primary-dk">
            Real<span className="text-primary">HER</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center px-5 h-10 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-fg transition-colors"
          >
            Get Tickets
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1591115765373-5f9cf1da241d?w=1920&q=80"
          alt="Women at a leadership conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dk/85 via-primary/70 to-secondary-fg/60" />

        <div className="relative z-10 container-site text-center flex flex-col items-center gap-6 py-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase">
            September 18 – 19, 2026 &middot; Lagos, Nigeria
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] max-w-4xl">
            Empowering Women
            <br />
            <span className="text-secondary">to Lead &amp; Thrive</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed font-source">
            Africa&apos;s premier conference for women leaders, entrepreneurs,
            and changemakers. Two days of powerful keynotes, hands-on workshops,
            and connections that last a lifetime.
          </p>

          <Countdown />

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 h-12 rounded-full bg-secondary text-primary-dk font-bold hover:bg-secondary/90 transition-colors text-base"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 h-12 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── MARQUEE PARTNERS ── */}
      <div className="bg-primary-dk py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span
              key={i}
              className="mx-8 text-white/50 text-sm font-medium uppercase tracking-widest"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* ── WHO SHOULD ATTEND ── */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Who Should Attend
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              This Conference Is Built for You
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto mt-4 font-source">
              Whether you&apos;re launching a startup, climbing the corporate
              ladder, or shaping policy — RealHER is your space to grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUDIENCE.map((a) => (
              <div
                key={a.title}
                className="group rounded-2xl border border-primary/10 p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-bg flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {a.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dk mb-2">
                  {a.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-source">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ATTEND ── */}
      <section className="py-20 sm:py-28 bg-primary-bg/40">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Why Attend
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3 leading-tight">
                Two Days That Will
                <br />
                Transform Your Journey
              </h2>
              <p className="text-foreground/60 mt-5 leading-relaxed font-source max-w-lg">
                RealHER isn&apos;t just another conference. It&apos;s a
                movement — a curated experience designed to unlock potential,
                forge powerful alliances, and spark the leadership Africa
                needs.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                {WHY_ATTEND.map((w) => (
                  <div key={w.label}>
                    <div className="text-3xl sm:text-4xl font-bold text-primary">
                      {w.stat}
                    </div>
                    <div className="text-sm font-bold text-primary-dk mt-1">
                      {w.label}
                    </div>
                    <p className="text-foreground/60 text-xs mt-1 leading-relaxed font-source">
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Women collaborating at a workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dk/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SPEAKERS ── */}
      <section id="speakers" className="py-20 sm:py-28 bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Featured Speakers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              Learn from Trailblazers
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto mt-4 font-source">
              Industry leaders, innovators, and changemakers sharing their
              stories and strategies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPEAKERS.map((s) => (
              <div
                key={s.name}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-5 ring-4 ring-primary-bg group-hover:ring-primary/30 transition-all duration-300">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary-dk">{s.name}</h3>
                <p className="text-foreground/60 text-sm mt-1 font-source">
                  {s.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section id="schedule" className="py-20 sm:py-28 bg-primary-dk text-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Event Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Two Power-Packed Days
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {SCHEDULE.map((day) => (
              <div key={day.day}>
                <h3 className="text-xl font-bold text-secondary mb-6">
                  {day.day}
                </h3>
                <div className="space-y-0">
                  {day.slots.map((slot, i) => (
                    <div
                      key={i}
                      className="flex gap-4 py-4 border-b border-white/10 last:border-0"
                    >
                      <span className="text-sm text-white/50 w-20 shrink-0 pt-0.5 font-source">
                        {slot.time}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold">{slot.title}</p>
                        <span
                          className={`inline-block mt-1.5 text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${
                            slot.type === "keynote"
                              ? "bg-secondary/20 text-secondary"
                              : slot.type === "panel"
                              ? "bg-primary/30 text-primary-bg"
                              : slot.type === "workshop"
                              ? "bg-white/10 text-white/70"
                              : "bg-white/5 text-white/40"
                          }`}
                        >
                          {slot.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=1920&q=80"
          alt="Conference audience"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container-site text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Join the Movement?
          </h2>
          <p className="mt-4 text-white/80 max-w-lg mx-auto font-source">
            Secure your spot at the most anticipated women&apos;s leadership
            event in Africa. Early-bird pricing ends soon.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 h-12 rounded-full bg-secondary text-primary-dk font-bold hover:bg-secondary/90 transition-colors mt-8"
          >
            Get Your Ticket
          </a>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 sm:py-28 bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              Choose Your Experience
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto mt-4 font-source">
              Every ticket grants you access to an unforgettable experience.
              Choose the tier that fits your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? "bg-primary-dk text-white ring-4 ring-primary/30 scale-[1.03]"
                    : "bg-primary-bg/30 border border-primary/10"
                }`}
              >
                <h3
                  className={`text-lg font-bold ${
                    tier.highlighted ? "text-secondary" : "text-primary"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mt-4">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlighted ? "text-white" : "text-primary-dk"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      tier.highlighted ? "text-white/60" : "text-foreground/50"
                    }`}
                  >
                    {tier.usd}
                  </span>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-secondary" : "text-primary"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={
                          tier.highlighted
                            ? "text-white/80"
                            : "text-foreground/70"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 flex items-center justify-center h-12 rounded-full font-bold text-sm transition-colors ${
                    tier.highlighted
                      ? "bg-secondary text-primary-dk hover:bg-secondary/90"
                      : "bg-primary text-white hover:bg-primary-fg"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 sm:py-28 bg-primary-bg/30">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQ />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary-dk text-white py-16">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <a href="#" className="font-bold text-2xl tracking-tight">
                Real<span className="text-secondary">HER</span>
              </a>
              <p className="mt-4 text-white/50 text-sm leading-relaxed font-source">
                Empowering African women to lead, innovate, and transform
                their communities — one conference at a time.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/70 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="text-white/50 hover:text-secondary transition-colors"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/70 mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>hello@realherconference.com</li>
                <li>+234 800 REAL HER</li>
                <li>
                  Eko Convention Centre
                  <br />
                  Victoria Island, Lagos
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/70 mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {["X (Twitter)", "Instagram", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-white/50 hover:text-secondary transition-colors text-sm"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>&copy; 2026 RealHER Conference. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
