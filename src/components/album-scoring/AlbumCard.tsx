"use client";

import { ClipboardCopy, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Album } from "@/types/album";
import { formatGenreList, formatScoreDisplay } from "@/utils/formatters";

interface AlbumCardProps {
  album: Album;
  className?: string;
}

export function AlbumCard({ album, className }: AlbumCardProps) {
  const handleCopyTitle = () => {
    navigator.clipboard.writeText(`${album.artist} - ${album.title}`);
  };

  return (
    <Card className={cn("bg-card border-border hover:bg-accent/50 transition-colors", className)}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Album Cover */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
              <img
                src={album.coverImage}
                alt={`${album.title} by ${album.artist} - Album cover by Sándor Bányai on Unsplash`}
                className="w-full h-full object-cover"
                width={64}
                height={64}
              />
            </div>
          </div>

          {/* Album Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground text-base leading-tight truncate">
                    {album.artist} – {album.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopyTitle}
                    className="h-6 w-6 text-muted-foreground hover:text-foreground flex-shrink-0"
                  >
                    <ClipboardCopy size={14} />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {formatGenreList(album.genres)}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-sm font-medium text-foreground">
                  {formatScoreDisplay(album.score)}
                </span>
                <span className="text-sm text-muted-foreground">
                  {album.year}
                </span>
              </div>
            </div>

            {/* Review Button */}
            {album.hasReview && (
              <div className="flex justify-end mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 px-3 text-xs"
                >
                  <Youtube size={12} className="mr-1" />
                  Review
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}