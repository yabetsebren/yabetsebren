import React from "react";

interface SectionTitleProps {
  as?: "h1" | "h2";
  className?: string;
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  as = "h2",
  className = "",
  children,
}) => {
  const Tag = as;
  return (
    <div>
      <Tag className={`font-bold text-foreground ${className}`}>
        {children}
      </Tag>
      <span className="block h-1 w-10 rounded-full bg-primary mt-2 mb-6" />
    </div>
  );
};

export default SectionTitle;
