import type React from "react";

interface TagBadgeProps {
  tag: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
}

export const TagBadge: React.FC<TagBadgeProps> = ({
  tag,
  variant = "primary",
  size = "sm",
  className = "",
}) => {
  const variantClasses = {
    primary: "border border-blue-500 text-blue-500 bg-transparent",
    secondary: "border border-gray-400 text-gray-600 bg-transparent",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap capitalize h-10 w-18 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {tag}
    </span>
  );
};
