import { guessScoreFactory } from "../GuessScore";
import { SECRET_SIZE } from "../../config/config";

describe("GuessScore", () => {
  test("Generates a GuessScore with the right values", () => {
    const totalHit = 2;
    const totalBlow = 1;
    const totalMiss = 1;
    const guessScore = guessScoreFactory(totalHit, totalBlow, totalMiss);
    expect(guessScore.hits).toEqual(totalHit);
    expect(guessScore.blows).toEqual(totalBlow);
    expect(guessScore.miss).toEqual(totalMiss);
  });
  test("Throws error when total score in greater than secret size", () => {
    expect(() => guessScoreFactory(SECRET_SIZE + 1, 0, 0)).toThrowError();
  });
});
