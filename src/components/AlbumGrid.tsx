import { ScoreType } from "@/types/album";
import Image from "next/image";

interface Album {
  id: string;
  cover_url: string;
  album_clean: string;
  artist_clean: string;
  year: string;
  score: any; // JsonValue
  genres: string[];
}

interface AlbumGridProps {
  albums: Album[];
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  filter?: ScoreType | null;
}

export default function AlbumGrid({
  albums,
  isLoading,
  hasNextPage,
  fetchNextPage,
  filter,
}: AlbumGridProps) {
  return (
    <>
      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-sm animate-pulse flex items-center space-x-4"
            >
              <div className="w-16 h-16 bg-gray-600 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                <div className="h-3 bg-gray-600 rounded w-1/4"></div>
                <div className="flex gap-1">
                  <div className="h-3 bg-gray-600 rounded-full w-12"></div>
                  <div className="h-3 bg-gray-600 rounded-full w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4"
            >
              <Image
                src={album.cover_url}
                alt={album.album_clean}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-100 mb-1">
                  {album.album_clean}
                </h2>
                <p className="text-gray-300 mb-1">{album.artist_clean}</p>
                <p className="text-sm text-gray-400 mb-1">{album.year}</p>
                <p className="text-sm font-medium text-blue-400 mb-1">
                  Score: {String(album.score)}
                </p>
                <div className="flex flex-wrap gap-1">
                  {album.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="bg-blue-900 text-blue-200 px-2 py-1 rounded-full text-xs"
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
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
          >
            Load More Albums
          </button>
        </div>
      )}
    </>
  );
}
