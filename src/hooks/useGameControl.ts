import { useState, useCallback, useEffect } from "react";
import { initTurns } from "../models/Turn";
import { generateSecret } from "../game/secret";
import { useActionBuffer } from "./useActionBuffer";
import { GameContextProps } from "../context/gameContext";
import { CodePeg } from "../models/CodePeg";
import { checkGuessResult } from "../game/guessResult";
import { MAX_TURNS, SECRET_SIZE } from "../config/config";

export enum GameStatus {
  WIN,
  LOSE,
  IN_PROGRESS,
}

export const useGameControl = (initialSecret?: CodePeg[]): GameContextProps => {
  const [turns, setTurns] = useState(initTurns());
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [secret, setSecret] = useState(initialSecret || generateSecret());
  const [gameStatus, setGameStatus] = useState(GameStatus.IN_PROGRESS);

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

  const actionBuffer = useActionBuffer(updateGuess);

  const endTurn = () => {
    const result = checkGuessResult(secret, turns[currentTurn].guess);
    const endGame = result.hits === SECRET_SIZE || currentTurn + 1 >= MAX_TURNS;
    if (endGame) {
      if (result.hits === SECRET_SIZE) setGameStatus(GameStatus.WIN);
      else setGameStatus(GameStatus.LOSE);
    }
    const nextTurn = !endGame ? currentTurn + 1 : currentTurn;
    setCurrentTurn(nextTurn);
    setTurns((currTurns) => {
      const newTurns = currTurns.slice();
      newTurns[currentTurn].isActive = false;
      newTurns[nextTurn].isActive = !endGame && true;
      newTurns[currentTurn].guessScore = result;
      return newTurns;
    });
    actionBuffer.resetActionBuffer();
  };

  const startNewGame = () => {
    setSecret(generateSecret());
    setGameStatus(GameStatus.IN_PROGRESS);
    setTurns(initTurns());
    setIsReady(false);
    setCurrentTurn(0);
    actionBuffer.resetActionBuffer();
  };

  return {
    secret,
    turns,
    isReady,
    currentTurn,
    gameStatus,
    actionBuffer,
    endTurn,
    startNewGame,
  };
};
