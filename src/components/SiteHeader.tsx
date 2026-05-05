import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book Now" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#3950a1]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt="Mr Kaboodle logo"
              width={120}
              height={80}
              priority
              className="h-14 w-auto"
            />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-base font-bold uppercase tracking-wider">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#343434] hover:text-[#3950a1] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/book"
            className="inline-flex items-center rounded-full bg-[#3950a1] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#2e4189] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
