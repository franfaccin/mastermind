import { useState, useCallback, useEffect } from "react";
import { initTurns } from "../models/Turn";
import { generateSecret } from "../game/secret";
import { useActionBuffer } from "./useActionBuffer";
import { GameContextProps } from "../context/gameContext";
import { CodePeg } from "../models/CodePeg";

export const useGameControl = (initialSecret?: CodePeg[]): GameContextProps => {
  const [turns, setTurns] = useState(initTurns());
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [secret, setSecret] = useState(initialSecret || generateSecret());

  useEffect(() => {
    setIsReady(turns[currentTurn].guess.every((g) => g !== null));
  }, [turns, currentTurn]);

  const updateGuess = useCallback(
    (position: number, peg: CodePeg) => {
      setTurns((currTurns) => {
        const newTurns = currTurns.slice();
        newTurns[currentTurn].guess[position] = peg;
        return newTurns;
      });
    },
    [currentTurn]
  );

  const endTurn = () => {};

  return {
    secret,
    turns,
    isReady,
    currentTurn,
    actionBuffer: useActionBuffer(updateGuess),
    endTurn,
  };
};
