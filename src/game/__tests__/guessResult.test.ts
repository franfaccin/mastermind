import { generateSecret } from "../secret";
import { CodePeg } from "../../models/CodePeg";
import { SECRET_SIZE } from "../../config/config";
import { checkGuessResult } from "../guessResult";

const allDifferent = (secret: CodePeg[]): boolean => {
  return !secret.some((peg, i) =>
    secret.some((otherPeg, j) => peg === otherPeg && i !== j)
  );
};

describe("Guess Result", () => {
  test("Correctly identifies hits, blows and miss", () => {
    const secret = [CodePeg.A, CodePeg.B, CodePeg.C, CodePeg.D];
    const guesses = [CodePeg.B, CodePeg.E, CodePeg.C, CodePeg.F];
    const expectedResult = {
      hits: 1,
      blows: 1,
      miss: 2,
    };

    expect(secret.length).toEqual(SECRET_SIZE);
    expect(guesses.length).toEqual(SECRET_SIZE);
    expect(checkGuessResult(secret, guesses)).toEqual(expectedResult);
  });
  test("Correctly identifies hits, miss when all guesses are the same", () => {
    const secret = [CodePeg.A, CodePeg.B, CodePeg.C, CodePeg.D];
    const guesses = [CodePeg.A, CodePeg.A, CodePeg.A, CodePeg.A];
    const expectedResult = {
      hits: 1,
      blows: 0,
      miss: 3,
    };

    expect(secret.length).toEqual(SECRET_SIZE);
    expect(guesses.length).toEqual(SECRET_SIZE);
    expect(checkGuessResult(secret, guesses)).toEqual(expectedResult);
  });
  test("Correctly identifies correct guess", () => {
    const secret = [CodePeg.A, CodePeg.B, CodePeg.C, CodePeg.D];
    const guesses = [CodePeg.A, CodePeg.B, CodePeg.C, CodePeg.D];
    const expectedResult = {
      hits: 4,
      blows: 0,
      miss: 0,
    };

    expect(secret.length).toEqual(SECRET_SIZE);
    expect(guesses.length).toEqual(SECRET_SIZE);
    expect(checkGuessResult(secret, guesses)).toEqual(expectedResult);
  });
});
