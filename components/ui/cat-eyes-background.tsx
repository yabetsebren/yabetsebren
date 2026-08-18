import { PawPrint } from "lucide-react";

// Fixed (not random) so server/client markup always matches.
const EYE_PAIRS = [
  { top: "8%", left: "12%", size: 6, gap: 12, delay: "0s", duration: "6.5s" },
  { top: "16%", left: "84%", size: 5, gap: 10, delay: "1.2s", duration: "7s" },
  { top: "38%", left: "5%", size: 7, gap: 14, delay: "2.4s", duration: "5.8s" },
  { top: "54%", left: "93%", size: 5, gap: 10, delay: "0.6s", duration: "6.2s" },
  { top: "70%", left: "16%", size: 6, gap: 12, delay: "3.1s", duration: "7.4s" },
  { top: "80%", left: "72%", size: 7, gap: 14, delay: "1.8s", duration: "6s" },
  { top: "94%", left: "42%", size: 5, gap: 10, delay: "2.9s", duration: "6.8s" },
];

// A wandering trail of paw prints, as if the cat just walked across the page.
const PAW_TRAIL = [
  { top: "24%", left: "22%", size: 16, rotate: -18 },
  { top: "30%", left: "28%", size: 13, rotate: 12 },
  { top: "60%", left: "62%", size: 14, rotate: -24 },
  { top: "66%", left: "68%", size: 11, rotate: 20 },
  { top: "88%", left: "30%", size: 13, rotate: -10 },
];

const CatEyesBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-[0.1] dark:opacity-90 transition-opacity duration-700">
      {/* Moonlit glow */}
      <div className="absolute -top-24 -right-16 w-[420px] h-[420px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-24 -left-16 w-[380px] h-[380px] bg-gradient-to-br from-violet-600/10 to-transparent rounded-full blur-3xl animate-float-delayed" />

      {/* Paw prints wandering across the page */}
      {PAW_TRAIL.map((paw, i) => (
        <PawPrint
          key={i}
          className="absolute text-primary/40"
          style={{
            top: paw.top,
            left: paw.left,
            width: paw.size,
            height: paw.size,
            transform: `rotate(${paw.rotate}deg)`,
          }}
        />
      ))}

      {/* Eyes watching from the dark */}
      {EYE_PAIRS.map((eye, i) => (
        <div
          key={i}
          className="absolute flex items-center"
          style={{ top: eye.top, left: eye.left, gap: `${eye.gap}px` }}
        >
          {[0, 1].map((side) => (
            <span
              key={side}
              className="block rounded-full animate-cat-blink"
              style={{
                width: eye.size,
                height: eye.size * 1.6,
                backgroundColor: "hsl(var(--primary))",
                boxShadow:
                  "0 0 8px hsl(var(--primary) / 1), 0 0 18px hsl(var(--primary) / 0.55)",
                animationDelay: eye.delay,
                animationDuration: eye.duration,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CatEyesBackground;
