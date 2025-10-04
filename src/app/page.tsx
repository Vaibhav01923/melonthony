"use client";
import { useTRPC } from "@/trpc/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import HeroSection from "@/components/HeroSection";
import AlbumGrid from "@/components/AlbumGrid";
import { FilterButtons } from "@/components/album-scoring/FilterButtons";

function HomePage() {
  const trpc = useTRPC();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500); // 500ms delay
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery(
      trpc.fetchAlbums.infiniteQueryOptions(
        {
          limit: 50,
          search: debouncedSearch || undefined,
          filter: selectedFilter || undefined,
        },
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
          staleTime: 30 * 60 * 1000, // 30 minutes
        }
      )
    );

  // Flatten all pages into one array
  const albums = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <div className="min-h-screen bg-gray-950/95 p-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by artist, album, or genre..."
            className="w-full max-w-md px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div>
          <FilterButtons
            onFilterSelect={setSelectedFilter}
            selectedFilter={selectedFilter}
          />
        </div>
        <AlbumGrid
          albums={albums}
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </div>
    </div>
  );
}

export default HomePage;
