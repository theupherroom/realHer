"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-29T18:30:00-04:00").getTime();

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
  const [time, setTime] = useState<ReturnType<typeof calcRemaining> | null>(
    null
  );

  useEffect(() => {
    setTime(calcRemaining());
    const id = setInterval(() => setTime(calcRemaining()), 1_000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time?.days ?? 0 },
    { label: "Hours", value: time?.hours ?? 0 },
    { label: "Minutes", value: time?.minutes ?? 0 },
    { label: "Seconds", value: time?.seconds ?? 0 },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl px-3 py-3 sm:px-5 sm:py-4 min-w-[64px] sm:min-w-[84px] border border-white/10"
        >
          <span
            className="text-2xl sm:text-3xl font-bold tabular-nums text-white"
            suppressHydrationWarning
          >
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60 mt-1">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
