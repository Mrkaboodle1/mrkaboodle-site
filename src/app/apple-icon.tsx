import { ImageResponse } from "next/og";

// Apple touch icon shown when users save the site to their iOS home screen.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 90,
          fontWeight: 900,
          letterSpacing: -3,
          fontFamily: "sans-serif",
          borderRadius: 32,
        }}
      >
        MK
      </div>
    ),
    { ...size }
  );
}
