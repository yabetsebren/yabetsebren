"use client";

import React from "react";
import { useTheme } from "next-themes";

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 64 }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: size, height: size }} className={className} />;
  }

  // A black cat reads as a crisp silhouette in daylight, and fades into
  // the dark at night — leaving only its glowing eyes visible.
  const bodyFill = theme === "dark" ? "hsl(240 8% 13%)" : "hsl(240 10% 6%)";
  const outline = theme === "dark" ? "hsl(48 100% 95% / 0.35)" : "none";
  const faceLineColor =
    theme === "dark" ? "hsl(45 15% 60% / 0.4)" : "hsl(240 10% 30% / 0.5)";

  return (
    <div className={`flex-shrink-0 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        role="img"
        aria-label="Black cat logo"
      >
        {/* Ears */}
        <path
          d="M32 44 L20 12 L52 38 Z"
          fill={bodyFill}
          stroke={outline}
          strokeWidth={1}
        />
        <path
          d="M88 44 L100 12 L68 38 Z"
          fill={bodyFill}
          stroke={outline}
          strokeWidth={1}
        />

        {/* Head */}
        <ellipse
          cx="60"
          cy="66"
          rx="42"
          ry="37"
          fill={bodyFill}
          stroke={outline}
          strokeWidth={1}
        />

        {/* Whiskers */}
        <g
          stroke={faceLineColor}
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 68 L38 66" />
          <path d="M16 78 L38 74" />
          <path d="M104 68 L82 66" />
          <path d="M104 78 L82 74" />

          {/* Nose */}
          <path d="M56 77 L64 77 L60 83 Z" fill={faceLineColor} stroke="none" />

          {/* Mouth */}
          <path d="M60 83 L60 87" fill="none" />
          <path d="M60 87 Q 52 92 45 85" fill="none" />
          <path d="M60 87 Q 68 92 75 85" fill="none" />
        </g>

        {/* Glowing eyes */}
        <ellipse
          className="animate-cat-blink"
          cx="43"
          cy="63"
          rx="7.5"
          ry="10.5"
          transform="rotate(-8 43 63)"
          style={{
            fill: "#FFE600",
            filter: "drop-shadow(0 0 3px #FFE600)",
          }}
        />
        <ellipse
          className="animate-cat-blink"
          cx="77"
          cy="63"
          rx="7.5"
          ry="10.5"
          transform="rotate(8 77 63)"
          style={{
            fill: "#FFE600",
            filter: "drop-shadow(0 0 3px #FFE600)",
          }}
        />
      </svg>
    </div>
  );
};

export default Logo;
