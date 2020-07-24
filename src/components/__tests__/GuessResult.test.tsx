import React from "react";
import { render, screen } from "@testing-library/react";
import GuessResult from "../GuessResult";
import { guessScoreFactory } from "../../models/GuessScore";
import { GameContext } from "../../context/gameContext";
import { useGameControl } from "../../hooks/useGameControl";

describe("GuessResult", () => {
  test("Display the correct number pegs, equal hit and blow", () => {
    const totalHit = 1;
    const totalBlow = 1;
    const totalMiss = 2;
    render(
      <GuessResult
        isReady={false}
        result={guessScoreFactory(totalHit, totalBlow, totalMiss)}
      />
    );
    expect(screen.getAllByTestId("hit-peg").length).toEqual(totalHit);
    expect(screen.getAllByTestId("blow-peg").length).toEqual(totalBlow);
    expect(screen.getAllByTestId("hole-peg").length).toEqual(totalMiss);
  });
  test("Display the correct number pegs, more hits", () => {
    const totalHit = 2;
    const totalBlow = 1;
    const totalMiss = 1;
    render(
      <GuessResult
        isReady={false}
        result={guessScoreFactory(totalHit, totalBlow, totalMiss)}
      />
    );
    expect(screen.getAllByTestId("hit-peg").length).toEqual(totalHit);
    expect(screen.getAllByTestId("blow-peg").length).toEqual(totalBlow);
    expect(screen.getAllByTestId("hole-peg").length).toEqual(totalMiss);
  });
  test("Display the correct number pegs, more blows", () => {
    const totalHit = 1;
    const totalBlow = 2;
    const totalMiss = 1;
    render(
      <GuessResult
        isReady={false}
        result={guessScoreFactory(totalHit, totalBlow, totalMiss)}
      />
    );
    expect(screen.getAllByTestId("hit-peg").length).toEqual(totalHit);
    expect(screen.getAllByTestId("blow-peg").length).toEqual(totalBlow);
    expect(screen.getAllByTestId("hole-peg").length).toEqual(totalMiss);
  });
  test("Display no pegs", () => {
    const totalHit = 0;
    const totalBlow = 0;
    const totalMiss = 4;
    render(
      <GuessResult
        isReady={false}
        result={guessScoreFactory(totalHit, totalBlow, totalMiss)}
      />
    );
    expect(screen.queryAllByTestId("hit-peg").length).toEqual(totalHit);
    expect(screen.queryAllByTestId("blow-peg").length).toEqual(totalBlow);
    expect(screen.getAllByTestId("hole-peg").length).toEqual(totalMiss);
  });
  test("Display no holes", () => {
    const totalHit = 2;
    const totalBlow = 2;
    const totalMiss = 0;
    render(
      <GuessResult
        isReady={false}
        result={guessScoreFactory(totalHit, totalBlow, totalMiss)}
      />
    );
    expect(screen.getAllByTestId("hit-peg").length).toEqual(totalHit);
    expect(screen.getAllByTestId("blow-peg").length).toEqual(totalBlow);
    expect(screen.queryAllByTestId("hole-peg").length).toEqual(totalMiss);
  });
  test("Display end turn button when ready", () => {
    const totalHit = 0;
    const totalBlow = 0;
    const totalMiss = 4;
    render(
      <GuessResult
        isReady={true}
        result={guessScoreFactory(totalHit, totalBlow, totalMiss)}
      />
    );
    expect(screen.queryByTestId("hit-peg")).not.toBeInTheDocument();
    expect(screen.queryByTestId("blow-peg")).not.toBeInTheDocument();
    expect(screen.queryByTestId("hole-peg")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Go!/i })).toBeInTheDocument();
  });
});
