"use client";

import { useState } from "react";

const items = [
  {
    q: "Who should attend?",
    a: "Any college woman thinking about what comes after graduation. Every major, every year, every background. First-generation students, aspiring entrepreneurs, campus leaders, and women who have no idea what they want to do yet but know they want more than a diploma. Recent graduates are welcome too.",
  },
  {
    q: "Is the event free?",
    a: "Yes. Registration is free. Our sponsors cover the cost so that money is never the reason a student misses out. You do still need to register in advance so we can plan seating and meals.",
  },
  {
    q: "What should I wear?",
    a: "Business casual is the safe answer. Complimentary professional headshots are part of the day, so wear something you'd be happy to have on your LinkedIn profile. Also: comfortable shoes. You'll be moving between sessions and standing in the marketplace more than you think.",
  },
  {
    q: "Do I need a business?",
    a: "No. Most attendees don't have one. Some arrive with an idea they've never said out loud, some are curious what entrepreneurship actually looks like day to day, and some are focused on a corporate career instead. All of that belongs in the room.",
  },
  {
    q: "Will meals be provided?",
    a: "Yes. Meals and refreshments are included across both days. Tell us about dietary needs when you register and we'll plan for them.",
  },
  {
    q: "Can I attend alone?",
    a: "Most people do. The format runs on roundtables and small-group conversation, so you'll be introduced to people within the first hour whether you planned to be or not. Coming alone is honestly the easier way to meet everyone.",
  },
  {
    q: "Will there be networking?",
    a: "Yes, and not the awkward name-tag kind. Mentor roundtables put you at a table with someone who has already done the thing you're trying to do. The Experience Lounge and Student Marketplace are where the looser conversations happen. Community partners and employers are in the room both days.",
  },
  {
    q: "Can I volunteer?",
    a: "Yes. The Dream Team runs event operations, community outreach, partnerships, marketing, and project management, which is real experience you can put on a resume. Email admin@theupherroom.com and tell us what you want to learn.",
  },
  {
    q: "How do I become a campus ambassador?",
    a: "Email admin@theupherroom.com with your campus and a few lines about why you want the role. Ambassadors bring Built for More to their own school: spreading the word, organizing a group to attend, and connecting us with student organizations already doing this work.",
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
            aria-expanded={open === i}
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
            className={`grid transition-all duration-300 ease-out ${
              open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-foreground/70 leading-relaxed font-source">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
