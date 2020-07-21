export enum CodePeg {
  A,
  B,
  C,
  D,
  E,
  F,
}

export const TOTAL_PEGS = Object.keys(CodePeg).length / 2;

export function getAllPegs(): CodePeg[] {
  return Array(TOTAL_PEGS)
    .fill("")
    .map((_, i) => CodePeg[CodePeg[i] as keyof typeof CodePeg]);
}
