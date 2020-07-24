import React, { useState } from "react";
import styled from "@emotion/styled";
import { GameContext } from "../context/gameContext";
import { useGameControl, GameStatus } from "../hooks/useGameControl";
import GameBoard from "../components/GameBoard";
import { Button } from "../styles/Button";
import { SpaceVertical } from "../styles/SpaceVertical";
import { SpaceHorizontal } from "../styles/SpaceHorizontal";
import GameRules from "../components/GameRules";
import Scoreboard from "../components/Scoreboard";
import { Modal } from "../components/Modal";

const GameArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const getStatusMessage = (status: GameStatus): string => {
  switch (status) {
    case GameStatus.WIN:
      return "You Win! 🎉";
    case GameStatus.LOSE:
      return "You Lost! 👎";
    default:
      return "Mastermind";
  }
};

const GameScreen = () => {
  const gameContext = useGameControl();
  const [isModalOpen, setModalOpen] = useState(false);
  const { gameStatus, startNewGame } = gameContext;
  return (
    <GameContext.Provider value={gameContext}>
      <GameArea>
        <h1>{getStatusMessage(gameStatus)}</h1>
        <GameBoard />
        <SpaceVertical scale={2} />
        <BottomSection>
          <Button onClick={startNewGame}>Start New Game</Button>
          <SpaceHorizontal />
          <Button onClick={() => setModalOpen(true)}>Rules</Button>
          <SpaceHorizontal scale={2} />
          <Scoreboard wins={0} loses={0} />
        </BottomSection>
      </GameArea>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Game Rules"
      >
        <GameRules />
      </Modal>
    </GameContext.Provider>
  );
};

export default GameScreen;
