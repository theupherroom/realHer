"use client";

import { useState } from "react";

const NAV = [
  { label: "Event Details", href: "#event-details" },
  { label: "Overview", href: "#overview" },
  { label: "Who Should Attend", href: "#who" },
  { label: "Why Attend", href: "#why" },
  { label: "Topics Discussed", href: "#topics" },
  { label: "Strategic Contributors", href: "#contributors" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors & Partners", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="xl:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-0.5 bg-primary-dk transition-all duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-primary-dk transition-all duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-primary-dk transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`}
        />
      </button>

      {open && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-primary/10 shadow-lg">
          <nav className="container-site py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-bg/50 rounded-lg transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#tickets"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center px-5 h-10 rounded-full bg-primary text-white text-sm font-semibold"
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
