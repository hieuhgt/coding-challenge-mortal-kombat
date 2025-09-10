import type React from "react";
import type { Character } from "@/types";
import { CharacterAvatar } from "../Avatar/CharacterAvatar";
import { TagBadge } from "./TagBadge";
import { getAbilityScore } from "@/utils/calculations";

interface CharacterTableRowProps {
  character: Character;
  isSelected: boolean;
  canSelect: boolean;
  onToggle: () => void;
}

export const CharacterTableRow: React.FC<CharacterTableRowProps> = ({
  character,
  isSelected,
  canSelect,
  onToggle,
}) => {
  const handleClick = () => {
    if (canSelect) {
      onToggle();
    }
  };
  return (
    <div
      className={`grid grid-cols-7 gap-4 p-4 border-t cursor-pointer transition-colors ${
        isSelected ? "bg-[#EDF5FF] border-blue-200" : "bg-white"
      } ${!canSelect && !isSelected ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {}}
          className="w-4 h-4 text-blue-600"
          disabled={!canSelect && !isSelected}
        />
        <CharacterAvatar
          character={character}
          className="w-10 h-10 rounded-full border-1 border-blue-400"
        />
        <span className="font-bold">{character.name}</span>
      </div>

      <div className="flex flex-wrap gap-1">
        {character?.tags?.map((tag) => (
          <TagBadge key={tag.slot} tag={tag.tag_name} />
        ))}
      </div>

      <div
        className={`font-bold ${
          getAbilityScore(character, "Power") === 10 ? "text-red-500" : ""
        }`}
      >
        {getAbilityScore(character, "Power")}
      </div>
      <div
        className={`font-bold ${
          getAbilityScore(character, "Mobility") === 10 ? "text-red-500" : ""
        }`}
      >
        {getAbilityScore(character, "Mobility")}
      </div>
      <div
        className={`font-bold ${
          getAbilityScore(character, "Technique") === 10 ? "text-red-500" : ""
        }`}
      >
        {getAbilityScore(character, "Technique")}
      </div>
      <div
        className={`font-bold ${
          getAbilityScore(character, "Survivability") === 10
            ? "text-red-500"
            : ""
        }`}
      >
        {getAbilityScore(character, "Survivability")}
      </div>
      <div
        className={`font-bold ${
          getAbilityScore(character, "Energy") === 10 ? "text-red-500" : ""
        }`}
      >
        {getAbilityScore(character, "Energy")}
      </div>
    </div>
  );
};
