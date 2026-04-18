import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "NexaVoize — Your voice, augmented by Claude";

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
          padding: "80px",
          background:
            "radial-gradient(ellipse at 30% 30%, #2cd4ff22 0%, transparent 55%)," +
            "radial-gradient(ellipse at 70% 80%, #7c5cff33 0%, transparent 55%)," +
            "linear-gradient(135deg, #05050a 0%, #0c0a1a 50%, #12072a 100%)",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2cd4ff",
            opacity: 0.9,
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#2cd4ff",
              boxShadow: "0 0 18px #2cd4ff",
            }}
          />
          Wake-Word On-Device · Claude 4.7
        </div>
        <div
          style={{
            fontSize: "108px",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            marginTop: "36px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>Your voice,&nbsp;</span>
          <span
            style={{
              background:
                "linear-gradient(90deg, #7c5cff 0%, #b06bff 35%, #2cd4ff 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            augmented by Claude
          </span>
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#c9c9d6",
            marginTop: "40px",
            maxWidth: "900px",
            lineHeight: 1.35,
          }}
        >
          Natürlicher Voice-Dialog. Cross-App-Commands. Local-First Privacy auf Android.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "40px",
            color: "#9a9ab0",
            fontSize: "26px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "999px",
                background: "linear-gradient(135deg,#7c5cff,#2cd4ff)",
              }}
            />
            nexavoize.com
          </span>
          <span>Android 10+ · DSGVO</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
