import type React from "react";

interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  isActive,
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm transition-colors ${
        isActive
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
      } ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};
