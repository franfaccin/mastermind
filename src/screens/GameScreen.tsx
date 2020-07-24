import React from "react";
import styled from "@emotion/styled";
import { GameContext } from "../context/gameContext";
import { useGameControl, GameStatus } from "../hooks/useGameControl";
import GameBoard from "../components/GameBoard";
import { Button } from "../styles/Button";
import { SpaceVertical } from "../styles/SpaceVertical";

const GameArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const getStatusMessage = (status: GameStatus): string => {
  switch (status) {
    case GameStatus.WIN:
      return "WINNER!";
    case GameStatus.LOSE:
      return "LOSER!";
    default:
      return "Game!";
  }
};

const GameScreen = () => {
  const gameContext = useGameControl();
  const { gameStatus, startNewGame } = gameContext;
  return (
    <GameContext.Provider value={gameContext}>
      <GameArea>
        <h1>{getStatusMessage(gameStatus)}</h1>
        <GameBoard />
        <SpaceVertical scale={2} />
        <Button onClick={startNewGame}>Start New Game</Button>
      </GameArea>
    </GameContext.Provider>
  );
};

export default GameScreen;
