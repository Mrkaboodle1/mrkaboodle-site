import { ImageResponse } from "next/og";

// Browser favicon. Brand-aligned: yellow tile with navy "MK".
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff100",
          color: "#3950a1",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: -1,
          fontFamily: "sans-serif",
          borderRadius: 6,
        }}
      >
        MK
      </div>
    ),
    { ...size }
  );
}
