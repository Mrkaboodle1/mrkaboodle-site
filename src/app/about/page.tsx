import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mr Kaboodle is a Gold Coast entertainment agency — a hand-picked team of professional performers, balloon artists, face painters, stilt walkers and DJs delivering kids parties and family events.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#3950a1]">
                About Mr Kaboodle
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#3950a1]">
                A team of pros under one Kaboodle.
              </h1>

              <div className="mt-8 space-y-5 text-[#343434] text-lg leading-relaxed">
                {siteConfig.founder.bio.map((para) => (
                  <p key={para.slice(0, 30)}>{para}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src={siteConfig.founder.portrait}
                alt="Mr Kaboodle entertainer"
                width={400}
                height={691}
                className="w-full max-w-sm h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our team standards */}
      <section className="bg-[#fff8b8]/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-[#3950a1]">
            What every Mr Kaboodle performer brings.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🎓", title: "Trained", text: "Every performer trained on our show standards before working a Mr Kaboodle event." },
              { icon: "🛡️", title: "Insured", text: "Public liability insurance covering every show, every venue, every audience size." },
              { icon: "✅", title: "WWCC", text: "Current Queensland Blue Card on file before any performer steps in front of kids." },
              { icon: "💛", title: "On-brand", text: "Costume, music, structure and energy that match the Mr Kaboodle promise — every time." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 text-center ring-1 ring-[#3950a1]/15 shadow-sm">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-3 font-display text-xl text-[#3950a1]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#343434] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3950a1] text-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-center">
            Some of our amazing clients
          </h2>
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {siteConfig.trustedBy.map((b) => (
              <li
                key={b.name}
                className="rounded-xl bg-white px-4 py-5 text-center text-[#3950a1] font-bold ring-1 ring-white/20 shadow-sm"
              >
                {b.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#fff100] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-[#3950a1]">
            Want a Mr Kaboodle performer at your event?
          </h2>
          <p className="mt-4 text-[#343434] text-lg">
            Tell us your date and we&apos;ll match the right performer to your event.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center rounded-full bg-[#3950a1] px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow hover:bg-[#2e4189] transition-colors"
            >
              Book the Mr Kaboodle team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
