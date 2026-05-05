import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <Link
      href="/book"
      className="md:hidden fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-[#3950a1] px-6 py-4 text-base font-bold uppercase tracking-wider text-white shadow-2xl ring-4 ring-[#fff100] anim-pulse-ring hover:bg-[#2e4189] transition-colors"
    >
      📞 Book your party now
    </Link>
  );
}
