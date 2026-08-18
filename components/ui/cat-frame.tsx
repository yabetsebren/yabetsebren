import React from "react";

interface CatFrameProps {
  size: number;
  className?: string;
  children: React.ReactNode;
}

// Wraps a photo/avatar with a black cat's ears and whiskers, echoing the logo.
const CatFrame: React.FC<CatFrameProps> = ({ size, className = "", children }) => {
  const earSize = size * 0.34;
  const earOffsetTop = -earSize * 0.42;
  const whiskerWidth = size * 0.3;
  const whiskerOffset = -whiskerWidth * 0.75;
  const whiskerAngles = [-8, 0, 8];

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ears */}
      <span
        className="absolute bg-foreground dark:bg-muted [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
        style={{
          width: earSize,
          height: earSize,
          top: earOffsetTop,
          left: size * 0.06,
          transform: "rotate(-18deg)",
        }}
      />
      <span
        className="absolute bg-foreground dark:bg-muted [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
        style={{
          width: earSize,
          height: earSize,
          top: earOffsetTop,
          right: size * 0.06,
          transform: "rotate(18deg)",
        }}
      />

      {/* Whiskers */}
      {whiskerAngles.map((angle, i) => (
        <span
          key={`whisker-left-${i}`}
          className="absolute h-[1.5px] rounded-full bg-muted-foreground/50 dark:bg-primary/40"
          style={{
            width: whiskerWidth,
            top: `${50 + (i - 1) * 7}%`,
            left: whiskerOffset,
            transform: `rotate(${angle}deg)`,
          }}
        />
      ))}
      {whiskerAngles.map((angle, i) => (
        <span
          key={`whisker-right-${i}`}
          className="absolute h-[1.5px] rounded-full bg-muted-foreground/50 dark:bg-primary/40"
          style={{
            width: whiskerWidth,
            top: `${50 + (i - 1) * 7}%`,
            right: whiskerOffset,
            transform: `rotate(${-angle}deg)`,
          }}
        />
      ))}

      {/* Photo sits above the ears so the overlap is hidden behind it */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default CatFrame;
