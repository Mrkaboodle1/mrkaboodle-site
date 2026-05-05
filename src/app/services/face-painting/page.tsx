import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Face Painting",
  description:
    "Professional face painting on the Gold Coast. Detailed and speedy designs for kids parties, school events and corporate family days. Mr Kaboodle face painters.",
};

export default function FacePaintingPage() {
  return (
    <ServicePage
      badge="🎨 Face Painting"
      title="Face paint that turns kids into superheroes."
      tagline="Detailed designs. Speedy queues. Zero stress."
      intro="Whether you've got 12 kids or 200, our face painters scale to the room. Detailed designs for the kids who want full Spider-Man wings, fast bright designs for the ones who want to get back to running around."
      emojis={["🎨", "🦋", "✨", "🌈", "💫"]}
      heroIllustration={
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/rhett/face-paint-spiderman.jpg"
            alt="Detailed Spider-Man face paint design on a smiling boy"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      }
      galleryImages={[
        { src: "/stock/face-paint-1.jpg", alt: "Detailed face painting design" },
        { src: "/stock/face-paint-2.jpg", alt: "Vibrant face painting design" },
        { src: "/stock/face-paint-3.jpg", alt: "Kid showing off face paint design" },
        { src: "/stock/face-paint-4.jpg", alt: "Bright colourful face paint at an event" },
        { src: "/images/circus-playshop3.jpg", alt: "Kids playing at a Mr Kaboodle event" },
        { src: "/images/workshop1.jpg", alt: "Children at a Mr Kaboodle workshop" },
      ]}
      includes={[
        { icon: "🎨", title: "Pro-grade paints", text: "Hypoallergenic, water-based, dermatologist-tested. Safe on every kid's skin." },
        { icon: "🦸", title: "Detailed superhero designs", text: "Full Spider-Man, butterflies, tigers, princesses — the works. For the kids who want the showpiece." },
        { icon: "⚡", title: "Speedy queue option", text: "Bright cheek designs in under 2 minutes for fast queues at big events." },
        { icon: "✨", title: "Glitter add-ons", text: "Cosmetic-grade glitter, gems and sparkle for that extra wow." },
        { icon: "🧼", title: "Easy clean-up", text: "Washes off with warm soapy water. No staining, no panic." },
        { icon: "🛡️", title: "Insured + WWCC", text: "Every face painter is fully insured and Blue Card current." },
      ]}
      perfectFor={[
        "Kids birthday parties",
        "School fetes and fairs",
        "Shopping centre activations",
        "Corporate family days",
        "Festivals and markets",
        "OOSH and vacation care",
      ]}
      accentColor="navy"
    />
  );
}
