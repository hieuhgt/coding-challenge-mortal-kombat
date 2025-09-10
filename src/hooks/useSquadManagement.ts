import { useMemo, useState } from "react";
import type { Character } from "../types";
import { calculateAverageScore } from "../utils";
import { MAX_SQUAD_SIZE } from "../utils/constants";

export const useSquadManagement = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const teamAverages = useMemo(
    () => calculateAverageScore(selectedCharacters),
    [selectedCharacters],
  );

  const isSquadFull = selectedCharacters.length === MAX_SQUAD_SIZE;
  const squadSize = selectedCharacters.length;

  const clearSquad = () => setSelectedCharacters([]);

  const isCharacterSelected = (characterId: number): boolean => {
    return selectedCharacters.some((char) => char.id === characterId);
  };

  const canSelectCharacter = (characterId: number): boolean => {
    return (
      selectedCharacters.length < MAX_SQUAD_SIZE ||
      isCharacterSelected(characterId)
    );
  };

  const removeCharacter = (characterId: number) => {
    setSelectedCharacters((prev) =>
      prev.filter((char) => char.id !== characterId),
    );
  };

  const toggleCharacter = (character: Character) => {
    const isCharacterSelected = selectedCharacters.some(
      (char) => char.id === character.id,
    );
    if (isCharacterSelected) { return removeCharacter(character.id); }
    if (selectedCharacters.length >= MAX_SQUAD_SIZE) return;
    setSelectedCharacters((prev) => [...prev, character]);
  };

  return {
    canSelectCharacter,
    isCharacterSelected,
    selectedCharacters,
    teamAverages,
    isSquadFull,
    squadSize,
    clearSquad,
    removeCharacter,
    toggleCharacter,
  };
};
