"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ScoreType, ScoreCounts } from "@/types/album";
import { ScoreType as ScoreEnum } from "@/types/album";

interface ScoreNavigationProps {
  selectedScore: ScoreType | null;
  scoreCounts: ScoreCounts;
  onScoreSelect: (score: ScoreType) => void;
  className?: string;
}

const scoreButtons = [
  { score: ScoreEnum.CLASSIC, label: "CLASSIC" },
  { score: ScoreEnum.TEN, label: "10/10" },
  { score: ScoreEnum.NINE, label: "9/10" },
  { score: ScoreEnum.EIGHT, label: "8/10" },
  { score: ScoreEnum.SEVEN, label: "7/10" },
  { score: ScoreEnum.SIX, label: "6/10" },
  { score: ScoreEnum.FIVE, label: "5/10" },
  { score: ScoreEnum.FOUR, label: "4/10" },
  { score: ScoreEnum.THREE, label: "3/10" },
  { score: ScoreEnum.TWO, label: "2/10" },
  { score: ScoreEnum.ONE, label: "1/10" },
  { score: ScoreEnum.ZERO, label: "0/10" },
];

const specialButtons = [
  { score: ScoreEnum.NOT_GOOD, label: "NOT GOOD" },
  { score: ScoreEnum.OTHER_SCORES, label: "OTHER SCORES" },
];

export function ScoreNavigation({ selectedScore, scoreCounts, onScoreSelect, className }: ScoreNavigationProps) {
  const renderScoreButton = (score: ScoreType, label: string) => {
    const count = scoreCounts[score] || 0;
    const isSelected = selectedScore === score;

    return (
      <Button
        key={score}
        variant={isSelected ? "default" : "outline"}
        onClick={() => onScoreSelect(score)}
        className={cn(
          "h-auto py-3 px-4 flex flex-col items-center gap-1 text-sm font-medium transition-all",
          "hover:bg-accent hover:text-accent-foreground",
          isSelected && "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        <span className="font-semibold">{label}</span>
        <span className="text-xs opacity-75">({count})</span>
      </Button>
    );
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="text-left">
        <h3 className="text-lg font-medium text-foreground mb-4">Jump to score group:</h3>
      </div>
      
      {/* Main score grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {scoreButtons.map(({ score, label }) => renderScoreButton(score, label))}
      </div>

      {/* Special buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
        {specialButtons.map(({ score, label }) => renderScoreButton(score, label))}
      </div>
    </div>
  );
}