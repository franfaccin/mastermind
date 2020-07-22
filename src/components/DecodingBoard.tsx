import React, { useContext } from "react";
import styled from "@emotion/styled";
import GuessResult from "./GuessResult";
import GuessBoard from "./GuessBoard";
import { COLUMN_SIZE } from "../config/config";
import SecretResult from "./SecretResult";
import { GameContext } from "../context/gameContext";
import { Turn } from "../models/Turn";

const GuessWrapper = styled.div`
  display: flex;
`;

const GuessSection = styled.section`
  display: inline-grid;
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

const Divider = styled.div`
  width: 4px;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin: 5px;
`;

interface GuessProps extends Turn {
  isReady: boolean;
}

const Guess = ({ guess, guessScore, isActive, isReady }: GuessProps) => {
  return (
    <GuessWrapper>
      <GuessSection>
        <GuessResult
          result={guessScore}
          isReady={isReady}
          data-testid="guess-result"
        />
        <GuessBoard
          isActive={isActive}
          guesses={guess}
          data-testid="guess-board"
        />
      </GuessSection>
      <Divider />
    </GuessWrapper>
  );
};

const DecodingBoard = () => {
  const { turns, isReady } = useContext(GameContext);
  return (
    <DecodingBoardArea>
      {turns.map((turn) => (
        <Guess {...turn} key={turn.num} isReady={isReady && turn.isActive} />
      ))}
      <SecretResult />
    </DecodingBoardArea>
  );
};

export default DecodingBoard;
