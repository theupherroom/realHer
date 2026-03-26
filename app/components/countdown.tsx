"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-18T09:00:00+01:00").getTime();

function calcRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(calcRemaining);

  useEffect(() => {
    const id = setInterval(() => setTime(calcRemaining()), 1_000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex flex-col items-center bg-white/15 backdrop-blur-sm rounded-xl px-3 py-3 sm:px-5 sm:py-4 min-w-[68px] sm:min-w-[88px]"
        >
          <span className="text-2xl sm:text-4xl font-bold tabular-nums text-white">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
