import type { AbilityName, Character, TeamAverages } from "../types";
import { MAX_ABILITY_POINT } from "./constants";

export const isMaxAbility = (value: number): boolean =>
  value === MAX_ABILITY_POINT;

export const getAbilityScore = (
  character: Character,
  abilityName: AbilityName,
): number => {
  const ability = character.abilities.find(
    (ab) => ab.abilityName === abilityName,
  );
  return ability ? ability.abilityScore : 0;
};

export const calculateAverageScore = (
  characters: Character[],
): TeamAverages => {
  if (characters.length === 0) {
    return {
      Power: 0,
      Mobility: 0,
      Technique: 0,
      Survivability: 0,
      Energy: 0,
    };
  }

  const result = characters.reduce(
    (acc, cur) => {
      cur.abilities.forEach((ability) => {
        acc[ability.abilityName] =
          (acc[ability.abilityName] || 0) + ability.abilityScore;
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  return Object.keys(result).reduce((acc, key) => {
    acc[key as AbilityName] = +(result[key] / characters.length).toFixed(2);
    return acc;
  }, {} as TeamAverages);
};
