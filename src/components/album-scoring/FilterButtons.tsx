"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ScoreType } from "@/types/album";
import { ScoreType as ScoreEnum } from "@/types/album";

interface FilterButtonsProps {
  selectedFilter: string | null;
  onFilterSelect: (filter: string | null) => void;
}

const filterButtons = [
  { filter: "10", label: "10/10" },
  { filter: "9", label: "9/10" },
  { filter: "8", label: "8/10" },
  { filter: "7", label: "7/10" },
  { filter: "6", label: "6/10" },
  { filter: "5", label: "5/10" },
  { filter: "4", label: "4/10" },
  { filter: "3", label: "3/10" },
  { filter: "2", label: "2/10" },
  { filter: "1", label: "1/10" },
  { filter: "0", label: "0/10" },
  { filter: "NOT GOOD", label: "NOT GOOD" },
  { filter: "OTHER", label: "OTHER SCORES" },
];

export function FilterButtons({
  selectedFilter,
  onFilterSelect,
}: FilterButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <Button
        variant="outline"
        className="bg-gray-800 text-gray-300 hover:bg-gray-700 justify-between border border-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
        <ChevronDownIcon
          className={cn(
            "size-4 transition-transform",
            isOpen ? "rotate-180" : ""
          )}
        />
      </Button>
      {isOpen && (
        <div className="flex flex-wrap gap-2 mt-2">
          {filterButtons.map(({ filter, label }) => (
            <Button
              key={filter}
              variant="outline"
              className={cn(
                "text-sm",
                selectedFilter === filter
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              )}
              onClick={() =>
                onFilterSelect(filter === selectedFilter ? null : filter)
              }
            >
              {label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
