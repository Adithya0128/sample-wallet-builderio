import React from "react";
import { FilterType } from "./types";

interface TransactionFiltersProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  const filters: FilterType[] = ["Today", "Weekly", "Monthly"];

  return (
    <div className="flex gap-2 items-center w-[358px]">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className="gap-2 px-4 py-3 h-9 text-xs font-bold tracking-wide leading-5 rounded-lg border shadow-sm transition-all cursor-pointer duration-[0.2s] ease-[ease-in-out] text-neutral-950"
          style={{
            borderColor: selectedFilter === filter ? "#1561FF" : "#EEE",
            backgroundColor: selectedFilter === filter ? "#EFF4FF" : "#FFF",
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
