import { ImageResponse } from "next/og";
import { COMPANY } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0f3260 0%, #1c4c86 60%, #0292b7 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8ad4e6",
            marginBottom: 24,
            display: "flex",
          }}
        >
          {COMPANY.name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 980,
            display: "flex",
          }}
        >
          Consultoria Paralegal · 25 anos
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#e5edf5",
            marginTop: 28,
            maxWidth: 900,
            display: "flex",
          }}
        >
          {COMPANY.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
