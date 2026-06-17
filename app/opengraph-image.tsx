import { ImageResponse } from "next/og"

export const alt = "DriveDock: Native macOS Google Drive Upload Client"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B0F1A 0%, #141823 100%)",
          color: "#FAFBFC",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 28,
            background: "linear-gradient(135deg, #4285F4 0%, #10B981 100%)",
            marginBottom: 40,
            boxShadow: "0 24px 64px rgba(66, 133, 244, 0.35)",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
            <path d="M3 15L12 3L21 15H3Z" fill="white" fillOpacity="0.95" />
            <path d="M3 15H21L18 21H6L3 15Z" fill="white" fillOpacity="0.65" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: 24,
            background: "linear-gradient(135deg, #FFFFFF 0%, #7BAEFF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          DriveDock
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#94A3B8",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          The cleanest way to upload files to Google Drive on macOS
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            fontSize: 20,
            color: "#64748B",
          }}
        >
          <span>Native Swift</span>
          <span>·</span>
          <span>Zero Telemetry</span>
          <span>·</span>
          <span>Open Source</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
