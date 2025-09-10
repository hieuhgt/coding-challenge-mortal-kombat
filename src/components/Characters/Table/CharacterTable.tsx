import type React from "react";
import type { Character } from "@/types";
import { CharacterTableRow } from "./CharacterTableRow";

interface CharacterTableProps {
  characters: Character[];
  onToggleCharacter: (character: Character) => void;
  canSelectCharacter: (characterId: number) => boolean;
  isCharacterSelected: (characterId: number) => boolean;
}

export const CharacterTable: React.FC<CharacterTableProps> = ({
  characters,
  onToggleCharacter,
  canSelectCharacter,
  isCharacterSelected,
}) => {
  return (
    <div className="rounded-lg shadow overflow-hidden">
      <div className="grid grid-cols-7 gap-4 p-4 font-bold">
        <div>Character</div>
        <div>Tags</div>
        <div>Power</div>
        <div>Mobility</div>
        <div>Technique</div>
        <div>Survivability</div>
        <div>Energy</div>
      </div>
      {characters.map((character) => (
        <CharacterTableRow
          key={character.id}
          character={character}
          isSelected={isCharacterSelected(character.id)}
          canSelect={canSelectCharacter(character.id)}
          onToggle={() => onToggleCharacter(character)}
        />
      ))}
    </div>
  );
};
