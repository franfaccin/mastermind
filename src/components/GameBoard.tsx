import React from "react";
import styled from "@emotion/styled";
import { SpaceVertical } from "../styles/SpaceVertical";
import DecodingBoard from "./DecodingBoard";
import PegsDisplay from "./PegsDisplay";
import { breakpoint_md } from "../styles/MediaQueries";

const GameBoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  border: 5px solid #c8c7cd;
  background-color: #fff;
  max-width: 100%;
  overflow: auto;

  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.75);

  ${breakpoint_md} {
    padding: 10px;
  }
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
