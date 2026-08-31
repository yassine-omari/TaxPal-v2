import { ImageResponse } from "next/og";

export const alt = "TaxPal - Accounting made simple for small businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
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
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#22c55e",
              color: "#0a0a0a",
              fontSize: "40px",
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            T
          </div>
          <div style={{ fontSize: "44px", fontWeight: 700 }}>TaxPal</div>
        </div>
        <div style={{ fontSize: "56px", fontWeight: 700, maxWidth: "980px" }}>
          Accounting made simple for small businesses
        </div>
      </div>
    ),
    { ...size }
  );
}
