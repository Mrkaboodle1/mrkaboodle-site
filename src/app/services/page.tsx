import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mr Kaboodle services include circus shows, big balloon shows, circus workshops, face painting, balloon twisting, stilt walking and kids DJ for Gold Coast events.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm font-bold uppercase tracking-wider text-[#3950a1]">
            Services
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#3950a1]">
            Everything Mr Kaboodle brings to your event.
          </h1>
          <p className="mt-4 text-[#343434] text-lg max-w-2xl">
            Pick one, mix several, or have me run the whole show. Tailored to the size,
            age range and vibe of your event.
          </p>
        </div>
      </section>

      <section className="bg-[#3950a1] text-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((s) => {
              const hasOwnPage = ["face-painting", "balloon-twisting", "stilt-walking", "circus-workshops"].includes(s.slug);
              const cardClasses =
                "group block rounded-2xl bg-white p-8 ring-1 ring-white/20 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all";
              const inner = (
                <>
                  <h2 className="font-display text-2xl uppercase tracking-wider text-[#3950a1] group-hover:text-[#ac1f23]">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[#343434] leading-relaxed">
                    {s.shortDescription}
                  </p>
                  {hasOwnPage && (
                    <span className="mt-4 inline-flex items-center text-[#3950a1] font-bold text-sm group-hover:underline">
                      See full details →
                    </span>
                  )}
                </>
              );
              return hasOwnPage ? (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={cardClasses}
                >
                  {inner}
                </Link>
              ) : (
                <article key={s.slug} id={s.slug} className={cardClasses}>
                  {inner}
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/book"
              className="inline-flex items-center rounded-full bg-[#fff100] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#3950a1] shadow hover:bg-[#ffe600] transition-colors"
            >
              Get a quote for your event
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-[#3950a1]">
            Not sure what suits your event?
          </h2>
          <p className="mt-4 text-[#343434] text-lg">
            Tell me about your event and I&apos;ll recommend the right mix. Birthday
            parties, school events, corporate days, festivals — I&apos;ve done them all.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center rounded-full bg-[#3950a1] px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow hover:bg-[#2e4189] transition-colors"
            >
              Book Mr Kaboodle
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
