import { CodePeg } from "../models/CodePeg";

export const SECRET_SIZE = 4;

export function generateSecret(): CodePeg[] {
  // Get size of code peg variations
  const numOptions = Object.keys(CodePeg).length / 2;
  const options: CodePeg[] = new Array(numOptions)
    .fill("")
    .map((_, i) => CodePeg[CodePeg[i] as keyof typeof CodePeg]);

  const secret = new Array(SECRET_SIZE).fill("").map((_) => {
    const rng = Math.floor(options.length * Math.random());
    const peg = options[rng];
    options.splice(rng, 1);
    return peg;
  });
  return secret;
}
