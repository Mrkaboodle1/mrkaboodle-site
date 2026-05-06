import { ImageResponse } from "next/og";

// Default Open Graph image for social shares.
// Rendered server-side at request time so it always reflects current brand.
export const alt = "Mr Kaboodle - Gold Coast Kids Party Entertainment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fff8b8 0%, #ffffff 50%, #fff8b8 100%)",
          fontFamily: "sans-serif",
          padding: 60,
          position: "relative",
        }}
      >
        {/* Decorative confetti dots */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 40,
            right: 80,
            width: 18,
            height: 18,
            background: "#ac1f23",
            borderRadius: 9,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 90,
            right: 130,
            width: 14,
            height: 14,
            background: "#3950a1",
            borderRadius: 7,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 70,
            right: 200,
            width: 12,
            height: 12,
            background: "#fff100",
            border: "2px solid #3950a1",
            borderRadius: 6,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 60,
            right: 80,
            width: 22,
            height: 22,
            background: "#ac1f23",
            borderRadius: 11,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 110,
            right: 160,
            width: 16,
            height: 16,
            background: "#3950a1",
            borderRadius: 8,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 80,
            left: 70,
            width: 14,
            height: 14,
            background: "#fff100",
            border: "2px solid #3950a1",
            borderRadius: 7,
          }}
        />

        {/* Pre-headline */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#ac1f23",
            marginBottom: 16,
          }}
        >
          Gold Coast Kids Party Entertainment
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 86,
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#3950a1",
            marginBottom: 28,
          }}
        >
          The kids&apos; party where the
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 86,
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#3950a1",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              display: "flex",
              color: "#ac1f23",
              background: "#fff100",
              padding: "0 16px",
              borderRadius: 12,
            }}
          >
            mum gets to relax
          </span>
        </div>

        {/* Sub */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#343434",
            maxWidth: 950,
            lineHeight: 1.3,
            marginBottom: 36,
          }}
        >
          Magic, balloons, circus, face paint, stilts &amp; DJs by a hand-picked team of insured pros.
        </div>

        {/* URL pill + insured strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#3950a1",
              color: "white",
              padding: "16px 28px",
              borderRadius: 999,
            }}
          >
            mrkaboodle.com.au
          </div>
          <div
            style={{
              display: "flex",
              color: "#343434",
            }}
          >
            Insured | WWCC | Same-day reply
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
