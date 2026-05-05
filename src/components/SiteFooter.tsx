import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="bg-[#343434] text-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src={siteConfig.logo}
              alt="Mr Kaboodle logo"
              width={140}
              height={94}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#fff100]">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#fff100]">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#fff100]">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#fff100]">About Rhett</Link></li>
              <li><Link href="/gallery" className="hover:text-[#fff100]">Gallery</Link></li>
              <li><Link href="/book" className="hover:text-[#fff100]">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#fff100]">
              Connect with me
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#fff100]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/70">{siteConfig.region}</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener"
                className="hover:text-[#fff100]"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener"
                className="hover:text-[#fff100]"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.vimeo}
                target="_blank"
                rel="noopener"
                className="hover:text-[#fff100]"
              >
                Vimeo
              </a>
              <a
                href={siteConfig.social.portfolio}
                target="_blank"
                rel="noopener"
                className="hover:text-[#fff100]"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#fff100]">Privacy Policy</Link>
            <Link href="/credits" className="hover:text-[#fff100]">Photo credits</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
