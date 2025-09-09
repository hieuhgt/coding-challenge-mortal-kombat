import type React from "react";

export const Header: React.FC = () => {
  return (
    <div className="relative bg-black w-full h-[76px] flex items-center justify-center">
      <img
        src="/assets/mk-logo.png"
        alt="Logo"
        className="absolute top-1/2 -translate-y-1/4 transform w-40 h-40 object-contain"
      />
    </div>
  );
};
