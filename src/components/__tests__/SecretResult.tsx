import React from "react";
import { render, screen } from "@testing-library/react";
import SecretResult from "../SecretResult";
import { generateSecret } from "../../game/secret";
import { GameContext } from "../../context/gameContext";
import { CodePeg } from "../../models/CodePeg";

describe("SecretResult", () => {
  test("Display the secret result correctly", () => {
    const secret = generateSecret();
    render(
      <GameContext.Provider value={{ secret }}>
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
