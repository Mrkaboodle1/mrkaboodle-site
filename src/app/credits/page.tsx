import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Photo credits for the Mr Kaboodle website.",
};

const credits = [
  { service: "Face Painting", photographer: "Ekaterina Novitskaya", source: "Unsplash" },
  { service: "Face Painting", photographer: "Gift Habeshaw", source: "Unsplash" },
  { service: "Face Painting", photographer: "Jonas Kakaroto", source: "Unsplash" },
  { service: "Face Painting", photographer: "proudlyswazi", source: "Unsplash" },
  { service: "Balloon Twisting", photographer: "charlesdeluvio", source: "Unsplash" },
  { service: "Balloon Twisting", photographer: "Danilo Batista", source: "Unsplash" },
  { service: "Balloon Twisting", photographer: "David Trinks", source: "Unsplash" },
  { service: "Stilt Walking", photographer: "Sandra GAYAN-VINCENT", source: "Unsplash" },
  { service: "Stilt Walking", photographer: "Wayne Lee-Sing", source: "Unsplash" },
  { service: "Stilt Walking", photographer: "S O C I A L . C U T", source: "Unsplash" },
];

export default function CreditsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm font-bold uppercase tracking-wider text-[#3950a1]">
        Photo Credits
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#3950a1]">
        Thanks to these photographers.
      </h1>
      <p className="mt-4 text-[#343434] text-lg leading-relaxed">
        Most of the photos on this site were taken at real Mr Kaboodle events. Some
        complementary lifestyle photos were sourced from Unsplash under their free
        commercial-use license. Big thanks to the artists below.
      </p>

      <div className="mt-10 rounded-2xl bg-white ring-1 ring-[#3950a1]/15 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#3950a1] text-white text-sm uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Photographer</th>
              <th className="px-4 py-3">Source</th>
            </tr>
          </thead>
          <tbody className="text-[#343434]">
            {credits.map((c, i) => (
              <tr key={i} className="border-t border-[#3950a1]/10">
                <td className="px-4 py-3 font-bold text-[#3950a1]">{c.service}</td>
                <td className="px-4 py-3">{c.photographer}</td>
                <td className="px-4 py-3">
                  <a
                    href="https://unsplash.com/license"
                    target="_blank"
                    rel="noopener"
                    className="text-[#3950a1] underline hover:text-[#ac1f23]"
                  >
                    {c.source}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-sm text-[#343434]/70">
        All other artwork on this site, including illustrations and logos, is original
        artwork owned by Mr Kaboodle Entertainment.
      </p>
    </article>
  );
}
