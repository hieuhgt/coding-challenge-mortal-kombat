import type React from "react";
import type { AbilityName, TeamAverages } from "@/types";
import { ABILITY_NAMES } from "@/utils/constants";

interface SquadStatsProps {
  teamAverages: TeamAverages;
  className?: string;
}

export const SquadStats: React.FC<SquadStatsProps> = ({
  teamAverages,
  className = "",
}) => {
  return (
    <div className={`flex justify-center items-center space-x-8 ${className}`}>
      {ABILITY_NAMES.map((ability: AbilityName) => (
        <div key={ability} className="text-center">
          <div className="text-base font-semibold">{ability}</div>
          <div className="text-xl font-bold">
            {teamAverages[ability] || "-"}
          </div>
        </div>
      ))}
    </div>
  );
};
