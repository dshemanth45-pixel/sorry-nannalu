import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
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
          background: "transparent",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="32"
          height="32"
        >
          <path
            d="M50,88.5 C48,86.5 12,56 12,32 C12,18.7 22.7,8 36,8 C43.8,8 50,13.5 50,13.5 C50,13.5 56.2,8 64,8 C77.3,8 88,18.7 88,32 C88,56 52,86.5 50,88.5 Z"
            fill="#713C46"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
