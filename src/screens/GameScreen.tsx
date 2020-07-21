import React from "react";
import DecodingBoard from "../components/DecodingBoard";
import PegsDisplay from "../components/PegsDisplay";
import styled from "@emotion/styled";

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
  return (
    <GameArea>
      <h1>Game!</h1>
      <DecodingBoard />
      <SpaceVertical />
      <PegsDisplay />
    </GameArea>
  );
};

export default GameScreen;
