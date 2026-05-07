import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-[#fff8b8]/30 to-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff100] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3950a1] ring-2 ring-[#3950a1]/20">
                <span>★★★★★</span>
                <span>Gold Coast&apos;s favourite kids party crew</span>
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#3950a1]">
                The kids&apos; party where{" "}
                <span className="relative inline-block text-[#ac1f23]">
                  the mum gets to relax
                  <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#fff100] -z-10 rounded-full" />
                </span>
                .
              </h1>
              <p className="mt-6 text-lg text-[#343434] leading-relaxed max-w-xl">
                Magic, balloons, circus games, face paint and laughter — run start to
                finish by our team of professional entertainers. You hand over the
                entertainment. We hand back a hall full of happy kids and a story
                you&apos;ll tell for years.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3950a1] px-7 py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#2e4189] hover:scale-105 transition-all"
                >
                  Get my free quote
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center rounded-full bg-[#fff100] px-7 py-4 text-base font-bold uppercase tracking-wider text-[#3950a1] shadow hover:bg-[#ffe600] hover:scale-105 transition-all"
                >
                  See the show
                </Link>
              </div>
              <p className="mt-5 text-sm text-[#343434]/70">
                ✓ Fully insured ✓ Working with Children Check current ✓ Replies same day
              </p>
            </div>

            <div className="order-1 lg:order-2 relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-3 bg-[#fff100] rounded-[2rem] rotate-2 -z-20" />
                <div className="absolute -inset-1 bg-[#3950a1] rounded-[2rem] -rotate-1 -z-10" />
                <div className="relative aspect-[2/3] w-full rounded-[1.6rem] overflow-hidden ring-4 ring-white shadow-2xl">
                  <Image
                    src={siteConfig.hero.image}
                    alt="Mr Kaboodle performing on a unicycle, juggling pins and blowing bubbles"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#3950a1] text-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {siteConfig.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl sm:text-5xl text-[#fff100]">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-bold uppercase tracking-wider text-white/85">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-y border-[#3950a1]/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#3950a1]">
            Trusted by Australia&apos;s biggest brands and venues
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold text-[#343434]">
            {siteConfig.trustedBy.map((b) => (
              <span key={b.name} className="hover:text-[#3950a1] transition-colors">
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Two ways to party */}
      <section className="bg-white py-16 border-t border-[#3950a1]/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-center text-[#3950a1]">
            Two ways to party.
          </h2>
          <p className="mt-3 text-center text-[#343434] max-w-2xl mx-auto">
            We come to your place — or you come to ours.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-[#fff8b8]/40 p-8 ring-1 ring-[#3950a1]/15 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl">🚐</div>
              <h3 className="mt-4 font-display text-2xl text-[#3950a1]">
                We come to you
              </h3>
              <p className="mt-3 text-[#343434] leading-relaxed">
                Backyard, hall, school, shopping centre, festival or corporate venue.
                Anywhere across the Gold Coast, Brisbane, Sunshine Coast and Tweed Heads.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#343434]">
                <li className="flex gap-2">
                  <span className="text-[#3950a1] font-bold">✓</span>
                  Bring the show to your space
                </li>
                <li className="flex gap-2">
                  <span className="text-[#3950a1] font-bold">✓</span>
                  Set up and pack down handled
                </li>
                <li className="flex gap-2">
                  <span className="text-[#3950a1] font-bold">✓</span>
                  Works in any indoor or outdoor space
                </li>
              </ul>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center text-[#3950a1] font-bold hover:text-[#ac1f23]"
              >
                Book a mobile show →
              </Link>
            </div>
            <div className="rounded-2xl bg-[#3950a1] text-white p-8 shadow-md hover:shadow-2xl transition-shadow">
              <div className="text-4xl">🎪</div>
              <h3 className="mt-4 font-display text-2xl text-[#fff100]">
                Come to {siteConfig.venue.name}
              </h3>
              <p className="mt-3 text-white/90 leading-relaxed">
                Our own circus venue on the Gold Coast — fully kitted out with circus
                equipment, party room and a backdrop that turns every photo into a keeper.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li className="flex gap-2">
                  <span className="text-[#fff100] font-bold">✓</span>
                  Birthday parties for up to 30 kids
                </li>
                <li className="flex gap-2">
                  <span className="text-[#fff100] font-bold">✓</span>
                  Holiday programs and circus workshops
                </li>
                <li className="flex gap-2">
                  <span className="text-[#fff100] font-bold">✓</span>
                  Real circus equipment kids can try
                </li>
              </ul>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center text-[#fff100] font-bold hover:text-white"
              >
                Book at our venue →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#3950a1] text-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white">Services</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Pick one, mix several, or have me run the whole show. Tailored to the size,
            age range and vibe of your event.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-2xl bg-white p-8 hover:bg-[#fff100] transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <h3 className="font-display text-2xl uppercase tracking-wider text-[#3950a1]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-[#343434] leading-relaxed">
                  {s.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center text-[#3950a1] font-bold text-sm group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mr Kaboodle */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#ac1f23]">
                Why Mr Kaboodle
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-[#3950a1]">
                Not your average kids&apos; party crew.
              </h2>
              <p className="mt-4 text-[#343434] text-lg leading-relaxed">
                Mr Kaboodle is a Gold Coast entertainment agency. Every performer on our
                roster is hand-picked, trained on our show standards, fully insured, and
                holds a current Working with Children Check. Same Mr Kaboodle quality,
                whichever performer lands at your event.
              </p>
              <ul className="mt-6 space-y-3">
                {siteConfig.founder.credentials.map((c) => (
                  <li key={c} className="flex gap-3 text-[#343434]">
                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#fff100] ring-2 ring-[#3950a1] flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-[#3950a1] font-bold hover:text-[#ac1f23]"
              >
                Meet the Mr Kaboodle team →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#3950a1] p-6 text-center text-white">
                <div className="font-display text-3xl text-[#fff100]">15+</div>
                <div className="mt-2 font-bold text-sm">Years on the Gold Coast</div>
              </div>
              <div className="rounded-2xl bg-[#fff100] p-6 text-center text-[#3950a1]">
                <div className="font-display text-3xl">7</div>
                <div className="mt-2 font-bold text-sm">Show types available</div>
              </div>
              <div className="rounded-2xl bg-[#ac1f23] p-6 text-center text-white">
                <div className="font-display text-3xl">100s</div>
                <div className="mt-2 font-bold text-sm">Events delivered</div>
              </div>
              <div className="rounded-2xl bg-[#3950a1] p-6 text-center text-white">
                <div className="font-display text-3xl text-[#fff100]">100%</div>
                <div className="mt-2 font-bold text-sm">Insured + WWCC team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 border-t border-[#3950a1]/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#3950a1]">
            What clients say
          </h2>
          <div className="mt-3 text-center text-[#fff100] text-2xl">
            <span className="text-[#ac1f23]">★ ★ ★ ★ ★</span>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {siteConfig.testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl bg-white p-8 ring-2 ring-[#3950a1]/20 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <span className="block text-6xl leading-none text-[#fff100] font-display drop-shadow-[0_2px_0_#3950a1]">
                  &ldquo;
                </span>
                <blockquote className="mt-2 italic text-[#343434] text-lg leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <Image
                    src={t.logo}
                    alt={`${t.author} logo`}
                    width={80}
                    height={80}
                    className="h-14 w-auto"
                  />
                  <span className="font-bold text-[#3950a1]">{t.author}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 border-t border-[#3950a1]/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#3950a1]">
            How it works
          </h2>
          <p className="mt-3 text-center text-[#343434]">
            From enquiry to encore in three steps.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Tell us about your event",
                text: "Fill in the booking form (90 seconds) or shoot us an email. Date, headcount, age range, what kind of show.",
                accent: "#3950a1",
              },
              {
                step: "2",
                title: "Get a quote, lock the date",
                text: "We send a tailored quote — usually same day. A small deposit secures your slot in the calendar.",
                accent: "#fff100",
              },
              {
                step: "3",
                title: "Show up. Watch us run it",
                text: "We arrive 30 minutes early, set up, run the show, pack down. You enjoy the day with your guests.",
                accent: "#ac1f23",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl bg-white p-6 ring-1 ring-[#3950a1]/15 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className="absolute -top-5 left-6 inline-flex items-center justify-center w-10 h-10 rounded-full font-display text-xl text-white shadow-md"
                  style={{ backgroundColor: s.accent === "#fff100" ? "#3950a1" : s.accent }}
                >
                  {s.step}
                </div>
                <h3 className="mt-2 font-display text-2xl text-[#3950a1]">{s.title}</h3>
                <p className="mt-3 text-[#343434] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fff8b8]/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#3950a1]">
            Questions every mum asks.
          </h2>
          <p className="mt-3 text-center text-[#343434]">
            (Answered before you have to.)
          </p>
          <div className="mt-10 space-y-3">
            {siteConfig.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-white p-6 ring-1 ring-[#3950a1]/15 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-[#3950a1]">
                  <span>{item.q}</span>
                  <span className="ml-4 text-2xl text-[#fff100] drop-shadow-[0_1px_0_#3950a1] group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#343434] leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas (local SEO) */}
      <section className="bg-white py-16 border-t border-[#3950a1]/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-[#3950a1]">
            Servicing the whole Gold Coast.
          </h2>
          <p className="mt-3 text-[#343434] max-w-2xl mx-auto">
            We come to you. From Coolangatta to Coomera, Surfers to Currumbin, plus
            Brisbane, the Sunshine Coast and Tweed Heads for festivals and corporate
            events. Travel beyond the region is happily quoted on request.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "Surfers Paradise",
              "Broadbeach",
              "Mermaid Beach",
              "Burleigh Heads",
              "Palm Beach",
              "Currumbin",
              "Coolangatta",
              "Robina",
              "Varsity Lakes",
              "Mudgeeraba",
              "Nerang",
              "Helensvale",
              "Hope Island",
              "Coomera",
              "Pimpama",
              "Southport",
              "Main Beach",
              "Tweed Heads",
              "Kingscliff",
              "Brisbane",
            ].map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-full bg-[#fff8b8] px-4 py-1.5 text-sm font-bold text-[#3950a1] ring-1 ring-[#3950a1]/15"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with urgency */}
      <section className="bg-[#3950a1] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-9xl">🎈</div>
          <div className="absolute bottom-10 right-10 text-9xl">🎪</div>
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ac1f23] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            ⏰ Weekend dates fill 6–8 weeks ahead
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">
            Ready for a party the kids talk about for months?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Tell us about your event. We come back with a proper quote — usually the same
            day. No call-centre runaround, no chasing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-[#fff100] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#3950a1] shadow-2xl hover:bg-white hover:scale-105 transition-all"
            >
              Lock in my date
              <span aria-hidden>→</span>
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center rounded-full bg-white/10 px-8 py-4 text-base font-bold uppercase tracking-wider text-white ring-2 ring-white/30 hover:bg-white/20 transition-colors"
            >
              Email Rhett directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
