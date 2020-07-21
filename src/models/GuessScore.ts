import { SECRET_SIZE } from "../config/config";

export interface GuessScore {
  hits: number; // Color and Position right
  blows: number; // Color only right
  miss: number;
}

export function guessScoreFactory(
  hits: number,
  blows: number,
  miss: number
): GuessScore {
  const totalScore = hits + blows + miss;
  if (totalScore !== SECRET_SIZE) {
    throw new Error(
      `Total guess score must match secret size. Received total ${totalScore}, should be ${SECRET_SIZE}`
    );
  }
  return {
    hits,
    blows,
    miss,
  };
}
