"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

interface Contributor {
  name: string;
  title: string;
  org: string;
  image: string;
}

const CONTRIBUTORS: Contributor[] = [
  {
    name: "Speaker TBA",
    title: "Nonprofit Founder & Executive Director",
    org: "Community Impact Leader",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    name: "Speaker TBA",
    title: "Serial Entrepreneur & Business Strategist",
    org: "Women-Led Ventures",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  },
  {
    name: "Speaker TBA",
    title: "Corporate Leadership & DEI Executive",
    org: "Fortune 500 Change Agent",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
  },
  {
    name: "Speaker TBA",
    title: "Ecosystem Builder & Policy Advocate",
    org: "Civic Innovation Leader",
    image:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&q=80",
  },
  {
    name: "Speaker TBA",
    title: "Social Impact Strategist",
    org: "Community Development Pioneer",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
  },
  {
    name: "Speaker TBA",
    title: "Emerging Leader & Founder",
    org: "Next-Gen Builder",
    image:
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=600&q=80",
  },
];

export default function ContributorsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -344 : 344;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="mt-14 relative">
      {/* Desktop arrow buttons — positioned on either side of the carousel */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Previous contributor"
        className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-primary/10 items-center justify-center text-primary hover:bg-primary hover:text-white disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 cursor-pointer"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Next contributor"
        className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-primary/10 items-center justify-center text-primary hover:bg-primary hover:text-white disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 cursor-pointer"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Mobile scroll buttons — top right */}
      <div className="flex lg:hidden items-center justify-end gap-2 mb-6">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous contributor"
          className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary hover:bg-primary-bg disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next contributor"
          className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary hover:bg-primary-bg disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {CONTRIBUTORS.map((c, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] group"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-primary-bg/30">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dk/90 via-primary-dk/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg">{c.name}</h3>
                <p className="text-secondary text-sm font-medium mt-1">
                  {c.title}
                </p>
                <p className="text-white/50 text-xs mt-1 font-source">
                  {c.org}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
