import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Stilt Walking",
  description:
    "Stilt walking entertainment on the Gold Coast. Tall, colourful, eye-catching roving for festivals, shopping centres and big family events. Mr Kaboodle stilt walkers.",
};

export default function StiltWalkingPage() {
  return (
    <ServicePage
      badge="🤹 Stilt Walking"
      title="Eight feet tall and impossible to miss."
      tagline="Roving entertainment that turns every head."
      intro="When you want guests to look up — literally — Mr Kaboodle stilt walkers in full costume bring height, colour and energy that every camera in the room locks onto. Perfect for festivals, big shopping centres and any event where you need spectacle that wanders through the crowd."
      emojis={["🤹", "🎪", "🎉", "✨", "🎭"]}
      heroIllustration={
        <div className="relative aspect-[2/3] w-full max-w-sm mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/rhett/stilt-bubbles.jpg"
            alt="Mr Kaboodle stilt walker in striped costume with balloon hat blowing giant bubbles"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      }
      galleryImages={[
        { src: "/stock/stilt-1.jpg", alt: "Stilt walker entertainer at a festival" },
        { src: "/stock/stilt-2.jpg", alt: "Towering circus performer in costume" },
        { src: "/stock/stilt-3.jpg", alt: "Stilt walker entertaining a crowd" },
        { src: "/brand/mrkaboodle-3.jpg", alt: "Mr Kaboodle in full costume" },
        { src: "/brand/mrkaboodle-4.jpg", alt: "Mr Kaboodle full-length costume" },
        { src: "/images/mrkaboodleshow.jpg", alt: "Mr Kaboodle live performance" },
      ]}
      includes={[
        { icon: "📏", title: "Up to 8 feet tall", text: "Real spectacle — visible across crowded rooms, parks and shopping centres." },
        { icon: "🎨", title: "Vibrant costumes", text: "Eye-catching, multi-coloured stilt costumes designed to photograph beautifully." },
        { icon: "🎈", title: "Balloon add-ons", text: "Pair stilt walking with balloon twisting on the move — the full crowd-magnet combo." },
        { icon: "🌬️", title: "Bubble add-ons", text: "Add giant bubbles into the routine for the ultimate roving entertainment." },
        { icon: "📸", title: "Photo magnet", text: "Every guest pulls out their phone. Free social media content for venues and brands." },
        { icon: "🛡️", title: "Insured + safe", text: "Trained stilt performers, public liability insurance, risk-assessed for your venue." },
      ]}
      perfectFor={[
        "Festivals and street fairs",
        "Shopping centre activations",
        "Corporate family days",
        "School fetes",
        "Brand launches",
        "Holiday parks and resorts",
      ]}
      accentColor="yellow"
    />
  );
}
