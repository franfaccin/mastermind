import React from "react";
import DecodingBoard from "./DecodingBoard";
import PegsDisplay from "./PegsDisplay";
import styled from "@emotion/styled";

const SpaceVertical = styled.div`
  width: 100%;
  height: 10px;
`;

const GameBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  border: 5px solid #c8c7cd;
  background-color: #fff;

  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.75);
`;

const GameBoard = () => {
  return (
    <GameBoardDiv>
      <DecodingBoard />
      <SpaceVertical />
      <PegsDisplay />
    </GameBoardDiv>
  );
};

export default GameBoard;
