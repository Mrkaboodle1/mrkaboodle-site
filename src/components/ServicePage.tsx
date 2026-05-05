import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

interface ServicePageProps {
  badge: string;
  title: string;
  tagline: string;
  intro: string;
  emojis: string[];
  heroIllustration: ReactNode;
  galleryImages: { src: string; alt: string }[];
  includes: { icon: string; title: string; text: string }[];
  perfectFor: string[];
  accentColor: "navy" | "yellow" | "red";
}

const accentMap = {
  navy: { bg: "#3950a1", text: "white", contrast: "#fff100" },
  yellow: { bg: "#fff100", text: "#3950a1", contrast: "#3950a1" },
  red: { bg: "#ac1f23", text: "white", contrast: "#fff100" },
};

export default function ServicePage(p: ServicePageProps) {
  const accent = accentMap[p.accentColor];

  return (
    <>
      {/* Hero with confetti backdrop */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle confetti accent (one per emoji, low opacity) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          {p.emojis.map((e, i) => {
            const top = ((i * 27) % 80) + 8;
            const left = ((i * 53) % 85) + 8;
            const rotate = (i * 47) % 360;
            return (
              <span
                key={e}
                className="absolute select-none"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  transform: `rotate(${rotate}deg)`,
                  fontSize: "56px",
                }}
              >
                {e}
              </span>
            );
          })}
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#fff100] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3950a1] ring-2 ring-[#3950a1]/20">
                {p.badge}
              </p>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#3950a1]">
                {p.title}
              </h1>
              <p className="mt-4 font-display text-2xl text-[#ac1f23]">{p.tagline}</p>
              <p className="mt-6 text-lg text-[#343434] leading-relaxed">{p.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3950a1] px-7 py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#2e4189] hover:scale-105 transition-all"
                >
                  Book this for my event
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full bg-[#fff100] px-7 py-4 text-base font-bold uppercase tracking-wider text-[#3950a1] shadow hover:bg-[#ffe600] hover:scale-105 transition-all"
                >
                  All services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-[3rem] -rotate-3 -z-10"
                style={{ backgroundColor: accent.bg }}
              />
              <div className="rounded-[2rem] overflow-hidden ring-8 ring-white bg-white p-6">
                {p.heroIllustration}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ backgroundColor: accent.bg, color: accent.text }} className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-center">
            What&apos;s included
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.includes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 text-[#3950a1] hover:-translate-y-1 transition-transform"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-3 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-[#343434] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      {p.galleryImages.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl text-center text-[#3950a1]">
              From real Mr Kaboodle events
            </h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {p.galleryImages.map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-square rounded-2xl overflow-hidden ring-2 ring-[#3950a1]/15 hover:ring-[#fff100] transition-all"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Perfect for */}
      <section className="bg-[#fff8b8]/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-[#3950a1]">
            Perfect for
          </h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {p.perfectFor.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-[#3950a1]/15 shadow-sm"
              >
                <span className="text-2xl">{p.emojis[0]}</span>
                <span className="font-bold text-[#3950a1]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#3950a1] text-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Ready to book this for your event?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Tell us your date and we&apos;ll match the right Mr Kaboodle performer to your
            event. Same-day reply, every time.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-[#fff100] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#3950a1] shadow-2xl hover:bg-white hover:scale-105 transition-all"
            >
              Lock in my date →
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Or email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline hover:text-[#fff100]"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
