import React, { useState } from "react";
import DecodingBoard from "../components/DecodingBoard";
import PegsDisplay from "../components/PegsDisplay";
import styled from "@emotion/styled";
import { generateSecret } from "../game/secret";
import { GameContext } from "../context/gameContext";

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

const GameScreen = () => {
  const [secret] = useState(generateSecret());
  return (
    <GameContext.Provider value={{ secret }}>
      <GameArea>
        <h1>Game!</h1>
        <DecodingBoard />
        <SpaceVertical />
        <PegsDisplay />
      </GameArea>
    </GameContext.Provider>
  );
};

export default GameScreen;
