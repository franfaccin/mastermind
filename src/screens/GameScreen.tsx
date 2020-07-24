import React, { useState, useEffect } from "react";
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
import { useScoreboard } from "../hooks/useScoreboard";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const { wins, loses, addWin, addLose } = useScoreboard();
  const gameContext = useGameControl();
  const { gameStatus, startNewGame } = gameContext;
  const [message, setMessage] = useState(getStatusMessage(gameStatus));

  useEffect(() => {
    if (gameStatus === GameStatus.WIN) {
      addWin();
    } else if (gameStatus === GameStatus.LOSE) {
      addLose();
    }
    setMessage(getStatusMessage(gameStatus));
    // eslint-disable-next-line
  }, [gameStatus]);

  return (
    <GameContext.Provider value={gameContext}>
      <GameArea>
        <h1>{message}</h1>
        <GameBoard />
        <SpaceVertical scale={2} />
        <BottomSection>
          <Button onClick={startNewGame}>Start New Game</Button>
          <SpaceHorizontal />
          <Button onClick={() => setModalOpen(true)}>Rules</Button>
          <SpaceHorizontal scale={2} />
          <Scoreboard wins={wins} loses={loses} />
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
