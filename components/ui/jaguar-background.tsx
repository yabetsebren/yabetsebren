"use client";

import React from "react";
import { useTheme } from "next-themes";

interface JaguarBackgroundProps {
  className?: string;
  variant?: "primary" | "secondary";
}

const JaguarBackground: React.FC<JaguarBackgroundProps> = ({
  className = "",
  variant = "primary",
}) => {
  const { theme } = useTheme();

  const positions = {
    primary: {
      top: variant === "primary" ? "5%" : "15%",
      right: variant === "primary" ? "2%" : "8%",
      transform: variant === "primary" ? "rotate(15deg)" : "rotate(-10deg)",
      size: variant === "primary" ? "300px" : "250px",
    },
    secondary: {
      bottom: variant === "primary" ? "10%" : "20%",
      left: variant === "primary" ? "3%" : "5%",
      transform: variant === "primary" ? "rotate(-20deg)" : "rotate(25deg)",
      size: variant === "primary" ? "250px" : "200px",
    },
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Primary jaguar skin pattern */}
      <div
        className="absolute opacity-[0.03] dark:opacity-[0.08] transition-opacity duration-500"
        style={{
          top: positions.primary.top,
          right: positions.primary.right,
          transform: positions.primary.transform,
          width: positions.primary.size,
          height: positions.primary.size,
        }}
      >
        <div
          className="w-full h-full bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${
              theme === "dark"
                ? "/white_jaguar_skin.svg"
                : "/black_jaguar_skin.svg"
            })`,
          }}
        />
      </div>

      {/* Secondary jaguar skin pattern */}
      <div
        className="absolute opacity-[0.02] dark:opacity-[0.06] transition-opacity duration-500"
        style={{
          bottom: positions.secondary.bottom,
          left: positions.secondary.left,
          transform: positions.secondary.transform,
          width: positions.secondary.size,
          height: positions.secondary.size,
        }}
      >
        <div
          className="w-full h-full bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${
              theme === "dark"
                ? "/white_jaguar_skin.svg"
                : "/black_jaguar_skin.svg"
            })`,
          }}
        />
      </div>

      {/* Additional subtle pattern for depth */}
      <div
        className="absolute opacity-[0.015] dark:opacity-[0.04] transition-opacity duration-500"
        style={{
          top: "60%",
          right: "15%",
          transform: "rotate(45deg) scale(0.7)",
          width: "180px",
          height: "180px",
        }}
      >
        <div
          className="w-full h-full bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${
              theme === "dark"
                ? "/white_jaguar_skin.svg"
                : "/black_jaguar_skin.svg"
            })`,
          }}
        />
      </div>
    </div>
  );
};

export default JaguarBackground;
