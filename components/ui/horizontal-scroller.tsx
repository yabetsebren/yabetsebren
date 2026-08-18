"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HorizontalScrollerProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  className = "",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex rounded-full hover-lift bg-card"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex rounded-full hover-lift bg-card"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default HorizontalScroller;
