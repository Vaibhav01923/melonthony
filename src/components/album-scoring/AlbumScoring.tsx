"use client";

import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ScoreNavigation } from "./ScoreNavigation";
import { FilterButtons } from "./FilterButtons";
import { AlbumCard } from "./AlbumCard";
import { cn } from "@/lib/utils";
import type { ScoreType, FilterType, AlbumScoringRootProps } from "@/types/album";
import { ScoreType as ScoreEnum } from "@/types/album";
import { mockQuery, mockRootProps } from "@/data/albumScoringMockData";
import { formatAlbumCount } from "@/utils/formatters";

export function AlbumScoring({ 
  initialScoreGroup = ScoreEnum.CLASSIC,
  initialFilter = null,
  onScoreGroupChange,
  onFilterChange,
  onSearch
}: AlbumScoringRootProps) {
  const [selectedScoreGroup, setSelectedScoreGroup] = useState<ScoreType | null>(initialScoreGroup);
  const [selectedFilter, setSelectedFilter] = useState<FilterType | null>(initialFilter);
  const [searchQuery, setSearchQuery] = useState("");

  const handleScoreGroupChange = (scoreGroup: ScoreType) => {
    setSelectedScoreGroup(scoreGroup);
    onScoreGroupChange?.(scoreGroup);
  };

  const handleFilterChange = (filter: FilterType | null) => {
    setSelectedFilter(filter);
    onFilterChange?.(filter);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query);
  };

  // Get current section title and count
  const getSectionInfo = () => {
    if (selectedScoreGroup) {
      const count = mockQuery.scoreCounts[selectedScoreGroup] || 0;
      return {
        title: selectedScoreGroup === ScoreEnum.CLASSIC ? "CLASSIC" : selectedScoreGroup,
        count: formatAlbumCount(count)
      };
    }
    return { title: "All Albums", count: formatAlbumCount(mockRootProps.totalAlbums) };
  };

  const sectionInfo = getSectionInfo();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Albums scored by Anthony Fantano
          </h1>
          <p className="text-lg text-muted-foreground">
            from The Needle Drop
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Total Albums Count */}
        <div className="text-right mb-6">
          <span className="text-sm text-muted-foreground">
            {formatAlbumCount(mockRootProps.totalAlbums)}
          </span>
        </div>

        {/* Score Navigation */}
        <div className="mb-8">
          <ScoreNavigation
            selectedScore={selectedScoreGroup}
            scoreCounts={mockQuery.scoreCounts}
            onScoreSelect={handleScoreGroupChange}
          />
        </div>

        {/* Filter Buttons */}
        <div className="mb-8">
          <FilterButtons
            selectedFilter={selectedFilter}
            onFilterSelect={handleFilterChange}
          />
        </div>

        {/* Albums Section */}
        <div className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {sectionInfo.title}
            </h2>
            <span className="text-sm text-muted-foreground">
              {sectionInfo.count}
            </span>
          </div>

          {/* Albums List */}
          <div className="space-y-3">
            {mockQuery.albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}