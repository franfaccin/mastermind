import { CodePeg } from "../models/CodePeg";
import { GuessScore } from "../models/GuessScore";
import { SECRET_SIZE } from "../config/config";

export const checkGuessResult = (
  secret: CodePeg[],
  guesses: CodePeg[]
): GuessScore => {
  const totals = secret.reduce(
    (total, secretPeg, i) => {
      const guessPeg = guesses[i];
      const isHit = secretPeg === guessPeg;
      if (isHit) return { ...total, hits: total.hits + 1 };

      const isBlow = guesses.some((g) => g === secretPeg);
      if (isBlow) return { ...total, blows: total.blows + 1 };

      return total;
    },
    { hits: 0, blows: 0 }
  );

  return {
    ...totals,
    miss: SECRET_SIZE - totals.hits - totals.blows,
  };
};
