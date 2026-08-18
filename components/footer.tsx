import { Cat } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Cat className="h-4 w-4 text-primary" />
          <p>&copy; 2025 Yabets Ebren. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
