import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Tell us about your event and we will come back with a proper quote, usually within the same day.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm font-bold uppercase tracking-wider text-[#3950a1]">
            Book Now
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#3950a1]">
            Tell us about your event.
          </h1>
          <p className="mt-4 text-[#343434] text-lg">
            We come back with a proper quote, usually within the same day. No call-centre
            runaround, no chasing.
          </p>
        </div>
      </section>

      <section className="bg-[#3950a1] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form
            action="/api/booking"
            method="POST"
            className="grid grid-cols-1 gap-6 rounded-3xl bg-white p-8 shadow-lg"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold uppercase tracking-wider text-[#3950a1]"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-[#343434] shadow-sm focus:border-[#3950a1] focus:ring-[#3950a1]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold uppercase tracking-wider text-[#3950a1]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-[#343434] shadow-sm focus:border-[#3950a1] focus:ring-[#3950a1]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold uppercase tracking-wider text-[#3950a1]"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-[#343434] shadow-sm focus:border-[#3950a1] focus:ring-[#3950a1]"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-bold uppercase tracking-wider text-[#3950a1]"
                >
                  Event date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-[#343434] shadow-sm focus:border-[#3950a1] focus:ring-[#3950a1]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-bold uppercase tracking-wider text-[#3950a1]"
              >
                Type of event
              </label>
              <select
                id="type"
                name="type"
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-[#343434] shadow-sm focus:border-[#3950a1] focus:ring-[#3950a1]"
              >
                <option>Kids birthday party</option>
                <option>School or kindergarten workshop</option>
                <option>OOSH or vacation care</option>
                <option>Corporate family day</option>
                <option>Festival or shopping centre</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="services"
                className="block text-sm font-bold uppercase tracking-wider text-[#3950a1]"
              >
                Which services?
              </label>
              <input
                id="services"
                name="services"
                type="text"
                placeholder="e.g. Circus Show, Balloon Twisting, Stilt Walking"
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-[#343434] shadow-sm focus:border-[#3950a1] focus:ring-[#3950a1]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold uppercase tracking-wider text-[#3950a1]"
              >
                Anything we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Number of kids, age range, location, party theme..."
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-[#343434] shadow-sm focus:border-[#3950a1] focus:ring-[#3950a1]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-full bg-[#3950a1] px-6 py-4 text-base font-bold uppercase tracking-wider text-white shadow hover:bg-[#2e4189] transition-colors"
            >
              Send my enquiry
            </button>
            <p className="text-xs text-[#343434]/70 text-center">
              We reply to {siteConfig.email} &mdash; usually same day.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
