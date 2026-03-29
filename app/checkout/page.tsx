"use client";

import Image from "next/image";
import { useState, useTransition } from "react";

const TICKET_TYPES = [
  {
    key: "symposium",
    name: "Symposium Pass",
    subtitle: "Saturday Only · May 30",
    desc: "Full access to the leadership symposium",
    earlyKey: "symposium_early",
    standardKey: "symposium_standard",
    earlyPrice: 95,
    standardPrice: 125,
    highlighted: false,
    features: [
      "All keynote sessions & panels",
      "Table conversations & working sessions",
      "Lunch & refreshments",
      "Legacy Goods gifted item",
      "Certificate of completion",
    ],
  },
  {
    key: "full",
    name: "Full Experience",
    subtitle: "Friday + Saturday · May 29–30",
    desc: "Access to both experiences",
    earlyKey: "full_early",
    standardKey: "full_standard",
    earlyPrice: 145,
    standardPrice: 175,
    highlighted: true,
    features: [
      "Everything in Symposium Pass",
      "Friday Strategy Lab session",
      "Eligibility for Strategy Lab recognition & prize",
      "Extended networking & connection",
      "Priority seating on Saturday",
    ],
  },
  {
    key: "lab",
    name: "Strategy Lab",
    subtitle: "Friday Evening · May 29",
    desc: "Structured pre-symposium experience",
    earlyKey: "lab_early",
    standardKey: "lab_standard",
    earlyPrice: 45,
    standardPrice: 65,
    highlighted: false,
    features: [
      "Strategy Lab working session",
      "Small group problem-solving",
      "Team presentations",
      "Saturday preview & connection",
      "Eligibility for featured recognition",
    ],
  },
];

type PriceType = "early" | "standard";

interface LineItem {
  priceKey: string;
  quantity: number;
}

export default function CheckoutPage() {
  const [priceType, setPriceType] = useState<PriceType>("early");
  const [quantities, setQuantities] = useState<Record<string, number>>({
    symposium: 0,
    full: 0,
    lab: 0,
  });
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const updateQty = (key: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: Math.max(0, (prev[key] ?? 0) + delta),
    }));
  };

  const total = TICKET_TYPES.reduce((sum, t) => {
    const price = priceType === "early" ? t.earlyPrice : t.standardPrice;
    return sum + price * (quantities[t.key] ?? 0);
  }, 0);

  const totalTickets = Object.values(quantities).reduce((a, b) => a + b, 0);

  const handleCheckout = () => {
    setError("");
    const items: LineItem[] = TICKET_TYPES.flatMap((t) => {
      const qty = quantities[t.key] ?? 0;
      if (qty === 0) return [];
      return [{ priceKey: priceType === "early" ? t.earlyKey : t.standardKey, quantity: qty }];
    });

    if (items.length === 0) {
      setError("Please select at least one ticket.");
      return;
    }

    startTransition(async () => {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-primary-bg/20" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Nav */}
      <header className="bg-white border-b border-primary/8 sticky top-0 z-50">
        <div className="container-site flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <Image src="/images/uhr-logo.png" alt="The UpHer Room" width={110} height={36} className="object-contain max-h-8 w-auto" />
          </a>
          <a href="/#tickets" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
            ← Back
          </a>
        </div>
      </header>

      <main className="container-site py-12 sm:py-16 max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Built for More · May 29–30, 2026
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-dk mt-2">
            Reserve Your Seat
          </h1>
          <p className="text-foreground/60 mt-2 font-source">
            Indianapolis, Indiana · Hosted by The UpHer Room Inc.
          </p>
        </div>

        {/* Early / Standard toggle */}
        <div className="inline-flex items-center bg-white border border-primary/10 rounded-full p-1 mb-10 shadow-sm">
          {(["early", "standard"] as PriceType[]).map((type) => (
            <button
              key={type}
              onClick={() => setPriceType(type)}
              className={`px-5 h-9 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                priceType === type
                  ? "bg-primary text-white shadow"
                  : "text-foreground/50 hover:text-primary"
              }`}
            >
              {type === "early" ? "Early Access" : "Standard"}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr,360px] gap-8 items-start">
          {/* Ticket cards */}
          <div className="space-y-5">
            {TICKET_TYPES.map((t) => {
              const qty = quantities[t.key] ?? 0;
              const price = priceType === "early" ? t.earlyPrice : t.standardPrice;
              return (
                <div
                  key={t.key}
                  className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                    t.highlighted
                      ? "bg-primary-dk border-primary/30 text-white"
                      : "bg-white border-primary/10"
                  } ${qty > 0 ? "ring-2 ring-primary/40" : ""}`}
                >
                  {t.highlighted && (
                    <span className="inline-block px-3 py-0.5 rounded-full bg-secondary text-primary-dk text-xs font-bold uppercase tracking-wider mb-4">
                      Best Value
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <h2 className={`text-lg font-bold ${t.highlighted ? "text-secondary" : "text-primary"}`}>
                        {t.name}
                      </h2>
                      <p className={`text-xs mt-0.5 ${t.highlighted ? "text-white/50" : "text-foreground/40"}`}>
                        {t.subtitle}
                      </p>
                      <p className={`text-sm mt-2 font-source ${t.highlighted ? "text-white/60" : "text-foreground/55"}`}>
                        {t.desc}
                      </p>
                    </div>

                    {/* Price + qty */}
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <div className="text-right">
                        <span className={`text-2xl font-bold ${t.highlighted ? "text-white" : "text-primary-dk"}`}>
                          ${price}
                        </span>
                        <span className={`text-xs ml-1.5 ${t.highlighted ? "text-white/40" : "text-foreground/40"}`}>
                          / ticket
                        </span>
                      </div>

                      {/* Quantity stepper */}
                      <div className={`flex items-center gap-3 rounded-full border px-1 py-1 ${
                        t.highlighted ? "border-white/20 bg-white/10" : "border-primary/15 bg-primary-bg/30"
                      }`}>
                        <button
                          onClick={() => updateQty(t.key, -1)}
                          disabled={qty === 0}
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all cursor-pointer disabled:opacity-30 ${
                            t.highlighted
                              ? "bg-white/10 text-white hover:bg-white/20"
                              : "bg-white text-primary hover:bg-primary hover:text-white border border-primary/10"
                          }`}
                        >
                          −
                        </button>
                        <span className={`w-6 text-center font-bold tabular-nums ${t.highlighted ? "text-white" : "text-primary-dk"}`}>
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQty(t.key, 1)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all cursor-pointer ${
                            t.highlighted
                              ? "bg-white/10 text-white hover:bg-white/20"
                              : "bg-white text-primary hover:bg-primary hover:text-white border border-primary/10"
                          }`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className={`mt-5 grid sm:grid-cols-2 gap-y-2 gap-x-4 text-sm ${t.highlighted ? "text-white/70" : "text-foreground/60"}`}>
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg className={`w-4 h-4 shrink-0 mt-0.5 ${t.highlighted ? "text-secondary" : "text-primary"}`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Order summary */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-primary/10 p-6 shadow-sm">
              <h3 className="font-bold text-primary-dk text-lg mb-5">Order Summary</h3>

              {totalTickets === 0 ? (
                <p className="text-foreground/40 text-sm font-source text-center py-6">
                  No tickets selected yet.
                </p>
              ) : (
                <div className="space-y-3 mb-5">
                  {TICKET_TYPES.filter((t) => (quantities[t.key] ?? 0) > 0).map((t) => {
                    const qty = quantities[t.key];
                    const price = priceType === "early" ? t.earlyPrice : t.standardPrice;
                    return (
                      <div key={t.key} className="flex items-center justify-between text-sm">
                        <span className="text-foreground/70 font-source">
                          {t.name} <span className="text-foreground/40">×{qty}</span>
                        </span>
                        <span className="font-semibold text-primary-dk">${price * qty}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="border-t border-primary/8 pt-4 flex items-center justify-between">
                <span className="font-bold text-primary-dk">Total</span>
                <span className="text-2xl font-bold text-primary-dk">${total}</span>
              </div>

              {error && (
                <p className="mt-3 text-sm text-red-500 font-source">{error}</p>
              )}

              <button
                onClick={handleCheckout}
                disabled={isPending || totalTickets === 0}
                className="mt-5 w-full h-12 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-fg transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Redirecting…
                  </>
                ) : (
                  <>
                    Proceed to Payment
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-foreground/40 font-source flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secured by Stripe
              </p>
            </div>

            <p className="mt-4 text-xs text-foreground/40 font-source text-center leading-relaxed">
              Many attendees can use professional development or ERG budgets to cover attendance.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
