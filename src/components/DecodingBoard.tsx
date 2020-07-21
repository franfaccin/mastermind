import React from "react";
import styled from "@emotion/styled";
import GuessResult from "./GuessResult";
import GuessBoard from "./GuessBoard";
import { COLUMN_SIZE, MAX_TRIES } from "../config/config";
import SecretResult from "./SecretResult";

const GuessSection = styled.section`
  display: inline-grid;
  margin-right: 10px;
  width: ${COLUMN_SIZE}px;
  justify-items: center;
  align-items: center;
  & > :first-of-type {
    margin-bottom: 10px;
  }
`;

const DecodingBoardArea = styled.div`
  display: flex;
  align-items: center;
`;

const Guess = () => {
  return (
    <GuessSection>
      <GuessResult data-testid="guess-result" />
      <GuessBoard data-testid="guess-board" />
    </GuessSection>
  );
};

const DecodingBoard = () => {
  return (
    <DecodingBoardArea>
      {Array(MAX_TRIES)
        .fill(null)
        .map((_, i) => (
          <Guess key={i} />
        ))}
      <SecretResult />
    </DecodingBoardArea>
  );
};

export default DecodingBoard;
