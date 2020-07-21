import React, { useContext } from "react";
import styled from "@emotion/styled";
import GuessResult from "./GuessResult";
import GuessBoard from "./GuessBoard";
import { COLUMN_SIZE } from "../config/config";
import SecretResult from "./SecretResult";
import { GameContext } from "../context/gameContext";
import { Turn } from "../models/Turn";

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

interface GuessProps extends Turn {}

const Guess = ({ guess, guessScore, isActive }: GuessProps) => {
  return (
    <GuessSection>
      <GuessResult result={guessScore} data-testid="guess-result" />
      <GuessBoard
        isActive={isActive}
        guesses={guess}
        data-testid="guess-board"
      />
    </GuessSection>
  );
};

const DecodingBoard = () => {
  const { turns } = useContext(GameContext);
  return (
    <DecodingBoardArea>
      {turns.map((turn) => (
        <Guess {...turn} key={turn.num} />
      ))}
      <SecretResult />
    </DecodingBoardArea>
  );
};

export default DecodingBoard;
