import { CodePeg, getAllPegs } from "../models/CodePeg";
import { SECRET_SIZE } from "../config/config";

export function generateSecret(): CodePeg[] {
  // Get size of code peg variations
  const allPegs = getAllPegs();

  const secret = new Array(SECRET_SIZE).fill("").map((_) => {
    const rng = Math.floor(allPegs.length * Math.random());
    const peg = allPegs[rng];
    allPegs.splice(rng, 1);
    return peg;
  });
  return secret;
}
