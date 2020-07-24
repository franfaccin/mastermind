import React from "react";
import { render, screen } from "@testing-library/react";
import SecretResult from "../SecretResult";
import { generateSecret } from "../../game/secret";
import { GameContext, defaultGameContext } from "../../context/gameContext";
import { CodePeg } from "../../models/CodePeg";
import { GameStatus } from "../../hooks/useGameControl";

describe("SecretResult", () => {
  test("Display the secret result correctly", () => {
    const secret = generateSecret();
    render(
      <GameContext.Provider
        value={{ ...defaultGameContext, secret, gameStatus: GameStatus.WIN }}
      >
        <SecretResult />
      </GameContext.Provider>
    );
    secret.forEach((peg) => {
      expect(
        screen.getAllByTestId(`peg-${CodePeg[peg].toLowerCase()}`).length
      ).toEqual(1);
    });
  });
});
