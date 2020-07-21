import React from "react";
import { MAX_TURNS } from "../config/config";
import { CodePeg } from "../models/CodePeg";
import { generateSecret } from "../game/secret";
import { Turn, turnFactory } from "../models/Turn";

interface GameContextProps {
  secret: CodePeg[];
  currentTurn: number;
  turns: Turn[];
}

export const defaultGameContext: GameContextProps = {
  secret: generateSecret(),
  currentTurn: 0,
  turns: Array(MAX_TURNS)
    .fill(null)
    .map((_, i): Turn => turnFactory(0, i)),
};

export const GameContext = React.createContext<GameContextProps>(
  defaultGameContext
);
