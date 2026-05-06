import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "We couldn't find that page. Try the homepage, services, or send a booking enquiry.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-gradient-to-br from-white via-[#fff8b8]/30 to-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-7xl sm:text-8xl mb-2">🤹</div>
        <p className="font-display text-7xl sm:text-8xl text-[#3950a1] leading-none">
          4<span className="text-[#ac1f23]">0</span>4
        </p>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl text-[#3950a1]">
          Looks like we juggled this one too far.
        </h1>
        <p className="mt-4 text-lg text-[#343434] leading-relaxed">
          The page you're after doesn't exist (or moved when we rebuilt the site).
          Don&apos;t worry, the show goes on.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <Link
            href="/"
            className="rounded-2xl bg-[#3950a1] p-5 text-white hover:bg-[#2e4189] transition-colors text-left"
          >
            <div className="font-display text-xl">🏠 Home</div>
            <p className="mt-1 text-sm text-white/85">
              Back to the start.
            </p>
          </Link>
          <Link
            href="/services"
            className="rounded-2xl bg-[#fff100] p-5 text-[#3950a1] hover:bg-[#ffe600] transition-colors text-left"
          >
            <div className="font-display text-xl">🎪 Services</div>
            <p className="mt-1 text-sm">
              All 8 show types we run.
            </p>
          </Link>
          <Link
            href="/gallery"
            className="rounded-2xl bg-white p-5 text-[#3950a1] ring-1 ring-[#3950a1]/20 hover:ring-[#3950a1] transition-all text-left"
          >
            <div className="font-display text-xl">📸 Gallery</div>
            <p className="mt-1 text-sm text-[#343434]">
              Photos from real Mr Kaboodle events.
            </p>
          </Link>
          <Link
            href="/book"
            className="rounded-2xl bg-[#ac1f23] p-5 text-white hover:bg-[#8e1a1d] transition-colors text-left"
          >
            <div className="font-display text-xl">🎈 Book Now</div>
            <p className="mt-1 text-sm text-white/85">
              Tell us about your event.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
