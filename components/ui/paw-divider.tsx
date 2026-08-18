import { PawPrint } from "lucide-react";

const PawDivider = () => (
  <div className="flex items-center gap-4 my-12 relative z-10" aria-hidden="true">
    <span className="h-px flex-1 bg-border" />
    <PawPrint className="h-4 w-4 text-primary/60 rotate-12" />
    <span className="h-px flex-1 bg-border" />
  </div>
);

export default PawDivider;
