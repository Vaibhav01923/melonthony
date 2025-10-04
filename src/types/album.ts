// Score types for album ratings
export enum ScoreType {
  CLASSIC = "CLASSIC",
  TEN = "10/10",
  NINE = "9/10",
  EIGHT = "8/10",
  SEVEN = "7/10",
  SIX = "6/10",
  FIVE = "5/10",
  FOUR = "4/10",
  THREE = "3/10",
  TWO = "2/10",
  ONE = "1/10",
  ZERO = "0/10",
  NOT_GOOD = "NOT_GOOD",
  OTHER_SCORES = "OTHER_SCORES",
}

export enum FilterType {
  FANTANO_HIGH_RYM_LOW = "FANTANO_HIGH_RYM_LOW",
  FANTANO_LOW_RYM_HIGH = "FANTANO_LOW_RYM_HIGH",
  ALL_SCORES = "ALL_SCORES",
}

// Types for album scoring interface
export interface Album {
  id: string;
  title: string;
  artist: string;
  year: number;
  coverImage: string;
  genres: string[];
  score: ScoreType;
  hasReview: boolean;
}

export interface ScoreCounts {
  [key: string]: number;
}

// Props types
export interface AlbumScoringProps {
  totalAlbums: number;
  selectedScoreGroup: ScoreType | null;
  selectedFilter: FilterType | null;
  searchQuery: string;
}

// Query types
export interface AlbumQueryData {
  albums: Album[];
  scoreCounts: ScoreCounts;
}

// Props for the root AlbumScoring component
export interface AlbumScoringRootProps {
  initialScoreGroup?: ScoreType;
  initialFilter?: FilterType;
  onScoreGroupChange?: (scoreGroup: ScoreType) => void;
  onFilterChange?: (filter: FilterType) => void;
  onSearch?: (query: string) => void;
}
