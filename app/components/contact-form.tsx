"use client";

import Script from "next/script";

const TALLY_CONTACT_ID = "obYPl5";

const EMBED_SRC =
  `https://tally.so/embed/${TALLY_CONTACT_ID}` +
  "?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function ContactForm() {
  return (
    <div className="rounded-2xl bg-primary-bg/25 border border-primary/10 p-6 sm:p-8">
      <iframe
        data-tally-src={EMBED_SRC}
        loading="lazy"
        title="Contact Built for More"
        className="w-full block border-0"
        style={{ height: 560 }}
      />
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
    </div>
  );
}
