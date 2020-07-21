import { guessScoreFactory, GuessScore } from "./GuessScore";
import { CodePeg } from "./CodePeg";
import { SECRET_SIZE, MAX_TURNS } from "../config/config";

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
  guess: Array(SECRET_SIZE).fill(null),
  guessScore,
  isActive: num === activeTurn,
});

export const initTurns = () =>
  Array(MAX_TURNS)
    .fill(null)
    .map((_, i): Turn => turnFactory(0, i));
