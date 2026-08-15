import { ImageResponse } from "next/og"

export const alt = "DriveDock: Google Drive Uploader for macOS"
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
          background: "linear-gradient(135deg, #F4F8FF 0%, #DCEBFF 100%)",
          color: "#08090B",
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
            borderRadius: 48,
            background: "#FFFFFF",
            marginBottom: 40,
            boxShadow: "0 24px 64px rgba(62, 101, 155, 0.18)",
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
            color: "#08090B",
          }}
        >
          DriveDock
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#4F5864",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          Native macOS uploads to Google Drive
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            fontSize: 20,
            color: "#617087",
          }}
        >
          <span>Resumable uploads</span>
          <span>·</span>
          <span>Zero telemetry</span>
          <span>·</span>
          <span>Open source</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
