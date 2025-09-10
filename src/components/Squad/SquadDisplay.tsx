import type React from "react";
import type { Character, TeamAverages } from "@/types";
import { CharacterAvatar } from "../Characters/Avatar/CharacterAvatar";
import { SquadStats } from "./SquadStats";

interface SquadDisplayProps {
  selectedCharacters: Character[];
  teamAverages: TeamAverages;
  onRemoveCharacter?: (characterId: number) => void;
}

export const SquadDisplay: React.FC<SquadDisplayProps> = ({
  selectedCharacters,
  teamAverages,
  onRemoveCharacter,
}) => {
  return (
    <div className="mb-8 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        {selectedCharacters.map((char) => (
          <div
            key={char.id}
            className="relative cursor-pointer group"
            onClick={() => onRemoveCharacter?.(char.id)}
          >
            <CharacterAvatar
              character={char}
              className="w-20 h-20 rounded-full border-1 border-blue-400"
            />
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>

            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Remove
            </div>
          </div>
        ))}
      </div>
      <SquadStats teamAverages={teamAverages} className="mb-4" />
      <p className="text-sm text-gray-500 ">* Totals as average for squad</p>
    </div>
  );
};
