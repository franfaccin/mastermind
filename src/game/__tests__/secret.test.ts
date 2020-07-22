import { generateSecret } from "../secret";
import { CodePeg } from "../../models/CodePeg";
import { SECRET_SIZE } from "../../config/config";

const allDifferent = (secret: CodePeg[]): boolean => {
  return !secret.some((peg, i) =>
    secret.some((otherPeg, j) => peg === otherPeg && i !== j)
  );
};

describe("Secret", () => {
  test("Generates a secret correctly and with no repeated pegs", () => {
    const secret = generateSecret();

    expect(secret).not.toBeNull();
    expect(secret.length).toEqual(SECRET_SIZE);
    expect(allDifferent(secret)).toBeTruthy();

    // Because secret in randomly generated, we generate the secret
    // multiple times to have a better probability that the secret
    // does not repeat values
    for (let i = 0; i < 10; i++) {
      const newSecret = generateSecret();
      expect(allDifferent(newSecret)).toBeTruthy();
    }
  });
});
