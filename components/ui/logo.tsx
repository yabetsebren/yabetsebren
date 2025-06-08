"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 64 }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex-shrink-0 ${className}`}>
      <Image
        src={theme === "dark" ? "/white_logo.svg" : "/black_logo.svg"}
        alt="Logo"
        width={size}
        height={size}
        className="transition-colors duration-200"
        priority
      />
    </div>
  );
};

export default Logo;
