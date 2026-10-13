import { Cat } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t-4 border-black bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-2 text-center font-mono text-xs font-bold uppercase tracking-widest">
          <Cat className="h-4 w-4 text-[#FFE600]" />
          <p>&copy; 2026 Yabets Ebren</p>
        </div>
      </div>
    </footer>
  );
};
