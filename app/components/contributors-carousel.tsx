import Image from "next/image";

interface Contributor {
  name: string;
  title: string;
  org: string;
  bio: string;
  image: string;
}

const CONTRIBUTORS: Contributor[] = [
  {
    name: "Dr. Benedicta Ajah",
    title: "CEO",
    org: "The UpHer Room Inc.",
    bio: "Global Ecosystem Builder | Change Architect | Speaker | Women's Advocate",
    image: "/images/benedicta.png",
  },
  {
    name: "Andie Hines-Lagemann",
    title: "Director of Engagement",
    org: "Elevate Ventures",
    bio: "Emotional Intelligence Practitioner, Entrepreneur Resource Connector, Advocate for Women & People with Disabilities",
    image: "/images/andie.png",
  },
  {
    name: "Kristle Brooks",
    title: "Founder",
    org: "Kristle Brooks Investments LLC",
    bio: "Award-winning Financial Wellness Consultant | Speaker | Life Insurance Advisor | Certified Financial Education Instructor",
    image: "/images/kristle-brooks.png",
  },
  {
    name: "Dr. Hephzibah Igwe",
    title: "Founder",
    org: "Hanalyzer.ai & Bella Tech",
    bio: "Technology Executive & Enterprise Architect | AI, Cloud & Intelligent Systems | Digital Transformation Specialist",
    image: "/images/hephzibah.png",
  },
];

export default function ContributorsCarousel() {
  return (
    <div
      className="mt-14 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 -mx-5 sm:mx-auto px-5 sm:px-0 hide-scrollbar"
    >
      {CONTRIBUTORS.map((c, i) => (
        <div
          key={i}
          className="group snap-start shrink-0 sm:shrink w-[280px] sm:w-auto"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-primary-bg/30">
            <Image
              src={c.image}
              alt={c.name}
              fill
              unoptimized
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dk/95 via-primary-dk/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white font-bold text-lg leading-snug">{c.name}</h3>
              <p className="text-secondary text-sm font-semibold mt-1.5">
                {c.title} <span className="text-white/60 font-normal">| {c.org}</span>
              </p>
              <p className="text-white/70 text-xs mt-2 font-source leading-relaxed">
                {c.bio}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
