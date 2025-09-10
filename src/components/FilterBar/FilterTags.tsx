import type React from "react";
import { ALL_TAGS } from "@/utils/constants";
import { FilterButton } from "./FilterButton";

interface FilterTagsProps {
  activeTags: string[];
  onTagClick: (tag: string) => void;
  isShowMyTeam: boolean;
  onMyTeamClick: () => void;
  isActiveFilterTags: boolean;
  onFilterTagsClearAll: () => void;
}

export const FilterTags: React.FC<FilterTagsProps> = ({
  activeTags,
  onTagClick,
  isShowMyTeam,
  onMyTeamClick,
  isActiveFilterTags,
  onFilterTagsClearAll,
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {ALL_TAGS.map((tag) => (
          <FilterButton
            key={tag}
            isActive={activeTags.includes(tag)}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </FilterButton>
        ))}
        <FilterButton isActive={isShowMyTeam} onClick={onMyTeamClick}>
          My Team
        </FilterButton>
        {isActiveFilterTags && (
          <div className="text-center">
            <button
              onClick={onFilterTagsClearAll}
              className="text-[#999999] underline text-sm px-4 py-2 cursor-pointer"
              type="button"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
