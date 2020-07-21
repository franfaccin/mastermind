import { guessScoreFactory, GuessScore } from "./GuessScore";
import { CodePeg } from "./CodePeg";

export interface Turn {
  num: number;
  guess: CodePeg[];
  guessScore: GuessScore;
  isActive: boolean;
}

export const turnFactory = (
  activeTurn: number,
  num: number,
  guessScore = guessScoreFactory(0, 0, 4)
) => ({
  num,
  guess: [],
  guessScore,
  isActive: num === activeTurn,
});
