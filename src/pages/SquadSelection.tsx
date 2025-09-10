import type React from "react";
import { CharacterTable } from "@/components/Characters/Table/CharacterTable";
import { FilterTags } from "@/components/FilterBar/FilterTags";
import { Header } from "@/components/Layout/Header";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { SquadDisplay } from "@/components/Squad/SquadDisplay";
import { useCharacterFilters, useSquadManagement } from "@/hooks";
import type { Character } from "@/types";
import jsonData from "../data/characters.json";

const characters: Character[] = jsonData as Character[];

export const SquadSelection: React.FC = () => {
  const {
    canSelectCharacter,
    selectedCharacters,
    isCharacterSelected,
    teamAverages,
    squadSize,
    removeCharacter,
    toggleCharacter,
  } = useSquadManagement();

  const {
    setIsShowMyTeam,
    setSearchQuery,
    filteredCharacters,
    clearFilters,
    onTagClick,
    activeTags,
    isShowMyTeam,
    searchQuery,
    isActiveFilters,
  } = useCharacterFilters(characters);

  const displayCharacters = isShowMyTeam
    ? filteredCharacters.filter((char) => isCharacterSelected(char.id))
    : filteredCharacters;

  return (
    <div className="min-h-screen bg-[#F5FDFF]">
      <Header />

      <div className="max-w-7xl mx-auto p-6 mt-12">
        <div className="text-center mb-8">
          <h1 className="text-lg font-semibold mb-4">
            {selectedCharacters.length === 0
              ? "Select your squad to defend earthrealm"
              : "Your champions!"}
          </h1>
        </div>

        <SquadDisplay
          selectedCharacters={selectedCharacters}
          teamAverages={teamAverages}
          onRemoveCharacter={removeCharacter}
        />

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search Characters..."
          className="mb-6 max-w-md mx-auto"
        />

        <FilterTags
          activeTags={activeTags}
          onTagClick={onTagClick}
          isShowMyTeam={isShowMyTeam}
          onMyTeamClick={() => setIsShowMyTeam(!isShowMyTeam)}
          isActiveFilterTags={isActiveFilters}
          onFilterTagsClearAll={clearFilters}
        />

        <CharacterTable
          characters={displayCharacters}
          onToggleCharacter={toggleCharacter}
          canSelectCharacter={canSelectCharacter}
          isCharacterSelected={isCharacterSelected}
        />

        <div className="mt-4 text-center text-sm text-gray-600">
          {squadSize}/6 characters selected
        </div>
      </div>
    </div>
  );
};
