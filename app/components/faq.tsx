"use client";

import { useState } from "react";

const items = [
  {
    q: "Who can attend the RealHER Conference?",
    a: "The conference is open to all women — entrepreneurs, executives, professionals, students, and anyone passionate about women's leadership and empowerment across Africa and beyond.",
  },
  {
    q: "Where is the conference held?",
    a: "The conference takes place at the Eko Convention Centre, Victoria Island, Lagos, Nigeria. We also offer a virtual attendance option for those who cannot travel.",
  },
  {
    q: "What is included in the ticket price?",
    a: "All tickets include access to keynotes, panels, breakout sessions, and networking lounges. VIP and Premium tiers include additional perks like exclusive workshops, a gala dinner, and 1-on-1 speaker sessions.",
  },
  {
    q: "Is there a group discount available?",
    a: "Yes! Groups of 5 or more receive 15% off. Corporate packages for 10+ attendees are also available — contact us for a custom quote.",
  },
  {
    q: "Can I get a refund if I can't attend?",
    a: "Full refunds are available up to 30 days before the event. After that, tickets can be transferred to another attendee at no extra cost.",
  },
  {
    q: "Will sessions be recorded?",
    a: "Yes, all main-stage sessions will be recorded and available to Premium and VIP ticket holders for 90 days after the event.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-primary/15">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
          >
            <span className="text-base sm:text-lg font-semibold text-primary-dk">
              {item.q}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v12M1 7h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: open === i ? "200px" : "0",
              opacity: open === i ? 1 : 0,
            }}
          >
            <p className="pb-5 text-foreground/70 leading-relaxed">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
