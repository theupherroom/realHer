import { ImageResponse } from "next/og";

export const alt = "Built for More — May 29-30, 2026 · Indianapolis, Indiana";
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
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "linear-gradient(135deg, #21172f 0%, #4a3468 25%, #8052a3 55%, #e6a7b0 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e6a7b0",
            fontWeight: 700,
          }}
        >
          The UpHer Room Presents
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 130,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -3,
            }}
          >
            Built for More
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 950,
              lineHeight: 1.3,
            }}
          >
            A Leadership Experience for Women Who Build
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 30,
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "white",
            }}
          >
            May 29–30, 2026
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Indianapolis, Indiana
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
