import { useMemo, useState } from "react";
import type { Character } from "@/types";

export const useCharacterFilters = (characters: Character[]) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [isShowMyTeam, setIsShowMyTeam] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCharacters = useMemo(() => {
    let result = characters;
    if (searchQuery.trim()) {
      result = result.filter((char) =>
        char.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    if (activeTags.length > 0) {
      result = result.filter((char) => {
        return char?.tags?.some((tag) =>
          activeTags.some(
            (activeTag) =>
              activeTag.toLowerCase() === tag.tag_name.toLowerCase(),
          ),
        );
      });
    }
    return result;
  }, [characters, activeTags, searchQuery]);

  const clearFilters = () => {
    setActiveTags([]);
    setIsShowMyTeam(false);
    setSearchQuery("");
  };

  const onTagClick = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((f) => f !== tag) : [...prev, tag],
    );
  };

  const onMyTeamClick = () => {
    setIsShowMyTeam((prev) => !prev);
  };

  const onFilterTagsClearAll = () => {
    setActiveTags([]);
    setIsShowMyTeam(false);
    setSearchQuery("");
  };

  const isActiveFilters =
    activeTags.length > 0 || isShowMyTeam || searchQuery.trim() !== "";

  return {
    setIsShowMyTeam,
    setSearchQuery,
    filteredCharacters,
    clearFilters,
    onTagClick,
    onMyTeamClick,
    onFilterTagsClearAll,
    activeTags,
    isShowMyTeam,
    searchQuery,
    isActiveFilters,
  };
};
