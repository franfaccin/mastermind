import React from "react";
import DecodingBoard from "../components/DecodingBoard";
import PegsDisplay from "../components/PegsDisplay";
import styled from "@emotion/styled";
import { GameContext } from "../context/gameContext";
import { useGameControl, GameStatus } from "../hooks/useGameControl";

const SpaceVertical = styled.div`
  width: 100%;
  height: 10px;
`;

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
  const { gameStatus } = gameContext;
  return (
    <GameContext.Provider value={gameContext}>
      <GameArea>
        <h1>{getStatusMessage(gameStatus)}</h1>
        <DecodingBoard />
        <SpaceVertical />
        <PegsDisplay />
      </GameArea>
    </GameContext.Provider>
  );
};

export default GameScreen;
