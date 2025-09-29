"use client";
import { useTRPC } from "@/trpc/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useDebounce } from "@/hooks/useDebounce";

function HomePage() {
  const trpc = useTRPC();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500); // 500ms delay

  const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery(
      trpc.fetchAlbums.infiniteQueryOptions(
        { limit: 50, search: debouncedSearch || undefined },
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
          staleTime: 30 * 60 * 1000, // 30 minutes
        }
      )
    );

  // Flatten all pages into one array
  const albums = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Albums</h1>
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by artist, album, or genre..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-1"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-1"></div>
                <div className="flex gap-1">
                  <div className="h-3 bg-gray-300 rounded-full w-12"></div>
                  <div className="h-3 bg-gray-300 rounded-full w-16"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={album.cover_url}
                  alt={album.album_clean}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {album.album_clean}
                </h2>
                <p className="text-gray-600 mb-1">{album.artist_clean}</p>
                <p className="text-sm text-gray-500 mb-2">{album.year}</p>
                <p className="text-sm font-medium text-blue-600 mb-2">
                  Score: {String(album.score)}
                </p>
                <div className="mt-2">
                  <p className="text-xs text-gray-500 mb-1">Genres:</p>
                  <div className="flex flex-wrap gap-1">
                    {album.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasNextPage && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => fetchNextPage()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Load More Albums
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
