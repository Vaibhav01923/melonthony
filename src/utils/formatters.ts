import { ScoreType } from "@/types/album";

export const formatAlbumCount = (count: number): string => {
  return `${count} albums`;
};

export const formatScoreDisplay = (score: ScoreType): string => {
  if (score === ScoreType.CLASSIC) return "CLASSIC/10";
  return score;
};

export const formatGenreList = (genres: string[]): string => {
  return genres.join(", ");
};
