"use client";

import { useState } from "react";

interface Slot {
  time: string;
  title: string;
  desc?: string;
}

interface DayProps {
  slots: Slot[];
  badge: { label: string; tone: "muted" | "primary" };
  heading: string;
  subheading: string;
}

function DayColumn({ slots, badge, heading, subheading }: DayProps) {
  const [pinned, setPinned] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setPinned((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            badge.tone === "primary"
              ? "bg-primary"
              : "bg-white/10 border border-white/20"
          }`}
        >
          <span className="text-white text-sm font-bold">{badge.label}</span>
        </div>
        <div>
          <h3 className="font-bold text-white">{heading}</h3>
          <p className="text-xs text-white/40 font-source">{subheading}</p>
        </div>
      </div>

      <div className="divide-y divide-white/10">
        {slots.map((slot, i) => {
          const isPinned = pinned.has(i);
          const hasDesc = !!slot.desc;
          return (
            <div
              key={i}
              className={`group ${hasDesc ? "cursor-pointer" : ""}`}
              onClick={() => hasDesc && toggle(i)}
            >
              <div className="flex items-center gap-4 py-3">
                <span className="text-xs sm:text-sm text-white/50 w-[72px] sm:w-[80px] shrink-0 font-source tabular-nums">
                  {slot.time}
                </span>
                <p className="font-bold text-white text-sm sm:text-base leading-snug flex-1">
                  {slot.title}
                </p>
                {hasDesc && (
                  <svg
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isPinned
                        ? "text-secondary rotate-180"
                        : "text-white/30 group-hover:text-white/70 group-hover:rotate-180"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              {hasDesc && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isPinned
                      ? "max-h-40 pb-3"
                      : "max-h-0 group-hover:max-h-40 group-hover:pb-3"
                  }`}
                >
                  <p className="text-white/60 text-xs sm:text-sm font-source leading-relaxed pl-[88px] sm:pl-[96px] pr-2">
                    {slot.desc}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface Props {
  friday: Slot[];
  saturday: Slot[];
}

export default function ScheduleSection({ friday, saturday }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <DayColumn
        slots={friday}
        badge={{ label: "Fri", tone: "muted" }}
        heading="Friday — October 9"
        subheading="The Unveiling · 1:00 – 4:00 PM"
      />
      <DayColumn
        slots={saturday}
        badge={{ label: "Sat", tone: "primary" }}
        heading="Saturday — October 10"
        subheading="The Build Lab · 9:00 AM – 5:00 PM"
      />
    </div>
  );
}
