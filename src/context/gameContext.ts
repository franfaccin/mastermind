import React from "react";
import { CodePeg } from "../models/CodePeg";
import { Turn, initTurns } from "../models/Turn";
import { useActionBufferType } from "../hooks/useActionBuffer";
import { generateSecret } from "../game/secret";

export interface GameContextProps {
  secret: CodePeg[];
  currentTurn: number;
  turns: Turn[];
  actionBuffer: useActionBufferType;
}

export const defaultGameContext = {
  secret: generateSecret(),
  currentTurn: 0,
  turns: initTurns(),
  actionBuffer: {
    position: null,
    peg: null,
    updatePosition: (newPosition: number) => {},
    updatePeg: (newPeg: CodePeg) => {},
    resetActionBuffer: () => {},
  },
};

export const GameContext = React.createContext<GameContextProps>(
  defaultGameContext
);
