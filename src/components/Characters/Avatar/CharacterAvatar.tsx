import type React from "react";
import type { Character } from "@/types";

interface CharacterAvatarProps {
  character: Character;
  className?: string;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  character,
  className = "",
}) => {
  return (
    <img
      src={character.thumbnail}
      alt={character.name}
      className={`${className}`}
    />
  );
};
