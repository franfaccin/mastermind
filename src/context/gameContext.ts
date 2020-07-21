import React from "react";
import { CodePeg } from "../models/CodePeg";

interface GameContextProps {
  secret: CodePeg[];
}

export const GameContext = React.createContext<GameContextProps>({
  secret: [],
});
