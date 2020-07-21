import React from "react";
import { render, screen } from "@testing-library/react";
import PegsDisplay from "../PegsDisplay";
import { CodePeg, getAllPegs, TOTAL_PEGS } from "../../models/CodePeg";

describe("PegsDisplay", () => {
  test("Display the correct number pegs available pegs", () => {
    render(<PegsDisplay />);
    expect(screen.getAllByTestId(/peg-/i).length).toEqual(TOTAL_PEGS);
  });
  test("Display one of each peg", () => {
    const allPegs = getAllPegs();

    render(<PegsDisplay />);

    allPegs.forEach((peg) => {
      expect(
        screen.getAllByTestId(`peg-${CodePeg[peg].toLowerCase()}`).length
      ).toEqual(1);
    });
  });
});
