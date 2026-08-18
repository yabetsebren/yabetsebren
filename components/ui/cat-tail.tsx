interface CatTailProps {
  className?: string;
}

// A curled tail flicking lazily from a corner — purely decorative.
const CatTail: React.FC<CatTailProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 60 100"
    aria-hidden="true"
    className={`pointer-events-none text-foreground/10 dark:text-primary/20 animate-tail-sway ${className}`}
  >
    <path
      d="M50 95 C 10 90, 5 50, 35 30 C 55 15, 45 -5, 20 5"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default CatTail;
