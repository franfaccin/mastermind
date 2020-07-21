import { getAllPegs, CodePeg } from "../CodePeg";

describe("CodePeg", () => {
  test("Generate array with all available code pegs", () => {
    const allPegs = getAllPegs();
    const expectedPegs = [
      CodePeg.A,
      CodePeg.B,
      CodePeg.C,
      CodePeg.D,
      CodePeg.E,
      CodePeg.F,
    ];
    expect(allPegs.length).toEqual(expectedPegs.length);
    expect(allPegs).toEqual(expect.arrayContaining(expectedPegs));
  });
});
