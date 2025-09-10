import type { Character, TeamAverages } from "./character.types";

export interface SquadState {
  selectedCharacters: Character[];
  teamAverages: TeamAverages;
  maxSquadSize: number;
}

export interface FilterState {
  searchQuery: string;
  activeFilters: string[];
  showMyTeam: boolean;
}
