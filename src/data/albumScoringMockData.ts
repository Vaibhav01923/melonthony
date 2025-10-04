import type { Album, ScoreCounts } from "@/types/album";
import { ScoreType } from "@/types/album";

// Mock data for the album scoring interface
export const mockRootProps = {
  totalAlbums: 3337,
  selectedScoreGroup: ScoreType.CLASSIC as const,
  selectedFilter: null,
  searchQuery: ""
};

export const mockQuery = {
  albums: [
    {
      id: "1",
      title: "The Low End Theory",
      artist: "A Tribe Called Quest", 
      year: 1991,
      coverImage: "https://images.unsplash.com/photo-1711299182795-309593e3e630?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwbXVzaWMlMjBoaXAlMjBob3AlMjB2aW55bCUyMHJlY29yZHxlbnwwfDJ8fHwxNzU5MTczNDA1fDA&ixlib=rb-4.1.0&q=85",
      genres: ["boom bap", "conscious hip hop", "east coast hip hop", "hip hop", "jazz rap"],
      score: ScoreType.CLASSIC as const,
      hasReview: true
    }
  ] as Album[],
  scoreCounts: {
    [ScoreType.CLASSIC]: 56,
    [ScoreType.TEN]: 34,
    [ScoreType.NINE]: 123,
    [ScoreType.EIGHT]: 720,
    [ScoreType.SEVEN]: 806,
    [ScoreType.SIX]: 633,
    [ScoreType.FIVE]: 453,
    [ScoreType.FOUR]: 223,
    [ScoreType.THREE]: 131,
    [ScoreType.TWO]: 51,
    [ScoreType.ONE]: 18,
    [ScoreType.ZERO]: 6,
    [ScoreType.NOT_GOOD]: 43,
    [ScoreType.OTHER_SCORES]: 40
  } as ScoreCounts
};