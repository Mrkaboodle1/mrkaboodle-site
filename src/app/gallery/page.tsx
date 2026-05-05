import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Mr Kaboodle's kids parties, circus workshops, festivals and corporate events on the Gold Coast and beyond.",
};

const photos = [
  { src: "/rhett/skypoint-show.jpg", alt: "Mr Kaboodle performing with a yellow balloon at a packed venue" },
  { src: "/rhett/big-balloon-stage.jpg", alt: "Mr Kaboodle Big Balloon Show with giant balloons" },
  { src: "/rhett/jv-pro-shot.jpg", alt: "Mr Kaboodle Magic and Circus Show on stage" },
  { src: "/rhett/dj-disco-2.jpg", alt: "Christmas kids DJ disco party" },
  { src: "/rhett/dj-christmas.jpg", alt: "Christmas DJ event" },
  { src: "/rhett/dj-3.jpg", alt: "Kids DJ event" },
  { src: "/rhett/workshop-dec-2024.jpg", alt: "School holiday workshop" },
  { src: "/rhett/workshop-adults-1.jpg", alt: "Workshop with adults" },
  { src: "/images/workshop1.jpg", alt: "Children at a Mr Kaboodle workshop" },
  { src: "/images/circus-playshop3.jpg", alt: "Kids playing at a circus playshop" },
  { src: "/images/balloon-twisting-workshops-for-children-2.jpg", alt: "Balloon twisting workshop" },
  { src: "/images/mrkaboodleshow.jpg", alt: "Mr Kaboodle performing a circus show" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm font-bold uppercase tracking-wider text-[#3950a1]">
            Gallery
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#3950a1]">
            From every kind of event.
          </h1>
          <p className="mt-4 text-[#343434] text-lg max-w-2xl">
            Birthday parties, school workshops, festivals and corporate family days. Here
            is what an actual Mr Kaboodle event looks like.
          </p>
        </div>
      </section>

      <section className="bg-[#3950a1] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((p) => (
              <div
                key={p.src}
                className="relative aspect-square rounded-2xl overflow-hidden ring-2 ring-white/30 bg-white"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff100] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-[#3950a1]">
            Want photos like this from your event?
          </h2>
          <p className="mt-4 text-[#343434] text-lg">
            Book Mr Kaboodle and create the day the kids talk about for months.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center rounded-full bg-[#3950a1] px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow hover:bg-[#2e4189] transition-colors"
            >
              Book your event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
