import { turnFactory } from "../Turn";
import { guessScoreFactory } from "../GuessScore";
import { SECRET_SIZE } from "../../config/config";

describe("Turn", () => {
  test("Generate a turn object correctly when all arguments are providaded", () => {
    const turn = turnFactory(2, 3, guessScoreFactory(1, 2, 1));
    const expectedTurn = {
      guess: Array(SECRET_SIZE).fill(null),
      guessScore: {
        blows: 2,
        hits: 1,
        miss: 1,
      },
      isActive: false,
      num: 3,
    };
    expect(turn).toEqual(expectedTurn);
  });
  test("Generate a turn and identify current turn correctly", () => {
    const turn = turnFactory(0, 0, guessScoreFactory(1, 2, 1));
    const expectedTurn = {
      guess: Array(SECRET_SIZE).fill(null),
      guessScore: {
        blows: 2,
        hits: 1,
        miss: 1,
      },
      isActive: true,
      num: 0,
    };
    expect(turn).toEqual(expectedTurn);
  });
  test("Generate a turn with default guess score", () => {
    const turn = turnFactory(0, 0);
    const expectedTurn = {
      guess: Array(SECRET_SIZE).fill(null),
      guessScore: {
        blows: 0,
        hits: 0,
        miss: 4,
      },
      isActive: true,
      num: 0,
    };
    expect(turn).toEqual(expectedTurn);
  });
});
