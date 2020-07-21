import React from "react";
import { render, screen } from "@testing-library/react";
import { CodePeg } from "../../models/CodePeg";
import GuessBoard from "../GuessBoard";
import { SECRET_SIZE } from "../../config/config";

describe("GuessBoard", () => {
  test("Display no pegs, only peg holes", () => {
    const guesses = Array(SECRET_SIZE).fill(null);
    render(<GuessBoard guesses={guesses} />);
    expect(screen.queryAllByTestId("peg-a").length).toEqual(0);
    expect(screen.getAllByTestId("guess-hole-peg").length).toEqual(SECRET_SIZE);
  });
  test("Display the correct number guessed pegs, only 1 peg", () => {
    const guesses = Array(SECRET_SIZE).fill(null);
    guesses[0] = CodePeg.A;
    render(<GuessBoard guesses={guesses} />);
    expect(screen.getAllByTestId("peg-a").length).toEqual(1);
    expect(screen.getAllByTestId("guess-hole-peg").length).toEqual(
      SECRET_SIZE - 1
    );
  });
  test("Display full guesses", () => {
    const guesses = Array(SECRET_SIZE).fill(CodePeg.A);
    render(<GuessBoard guesses={guesses} />);
    expect(screen.getAllByTestId("peg-a").length).toEqual(SECRET_SIZE);
    expect(screen.queryAllByTestId("guess-hole-peg").length).toEqual(0);
  });
});
