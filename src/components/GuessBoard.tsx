import React from "react";
import styled from "@emotion/styled";
import { SECRET_SIZE, COLUMN_SIZE, PEG_DIAM } from "../config/config";
import { getPegComponent } from "./Pegs";
import { CodePeg } from "../models/CodePeg";

interface GuessBoardProps {
  guesses: Array<CodePeg | null>;
  isActive?: boolean;
}

const BOARD_HEIGHT = SECRET_SIZE * (PEG_DIAM + PEG_DIAM / 2);
const PEG_HOLE_SIZE = PEG_DIAM * 0.75;

const GuessBoardArea = styled.div<{ isActive?: boolean }>`
  width: ${COLUMN_SIZE}px;
  height: ${BOARD_HEIGHT}px;
  background-color: #ccc;
  border-radius: 15px;
  box-shadow: inset 0px 0px 8px 1px rgba(112, 112, 112, 0.75);

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(${SECRET_SIZE}, ${100 / SECRET_SIZE}%);
  justify-items: center;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    `
      border: 5px solid #1d64cd;
  `}
`;

const PegHole = styled.div`
  width: ${PEG_HOLE_SIZE}px;
  height: ${PEG_HOLE_SIZE}px;
  background-color: #000;
  border-radius: 50%;
`;

const GuessBoard = ({ guesses, ...otherProps }: GuessBoardProps) => {
  return (
    <GuessBoardArea {...otherProps}>
      {guesses.map(
        (guess, i) =>
          getPegComponent(guess, { key: i }) || (
            <PegHole key={i} data-testid="guess-hole-peg" />
          )
      )}
    </GuessBoardArea>
  );
};

GuessBoard.defaultProps = {
  guesses: Array(SECRET_SIZE).fill(null),
};

export default GuessBoard;
