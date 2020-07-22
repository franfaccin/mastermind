import React, { useContext } from "react";
import styled from "@emotion/styled";
import { SECRET_SIZE, COLUMN_SIZE, PEG_DIAM } from "../config/config";
import { Peg, pegFocus } from "./Pegs";
import { CodePeg } from "../models/CodePeg";
import { css } from "@emotion/core";
import { GameContext } from "../context/gameContext";

interface GuessBoardProps {
  guesses: Array<CodePeg | null>;
  isActive?: boolean;
}

const BOARD_HEIGHT = SECRET_SIZE * (PEG_DIAM + PEG_DIAM / 2);
const PEG_HOLE_SIZE = PEG_DIAM * 0.75;

const BoardActive = css`
  border: 5px solid #1d64cd;
  & > * {
    cursor: pointer;
  }
`;

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

  ${({ isActive }) => isActive && BoardActive}
`;

const PegHole = styled.div<{ isActive?: boolean }>`
  position: relative;
  width: ${PEG_HOLE_SIZE}px;
  height: ${PEG_HOLE_SIZE}px;
  background-color: #000;
  border-radius: 50%;

  ${({ isActive }) => isActive && pegFocus}
`;

const GuessBoard = ({ guesses, isActive, ...otherProps }: GuessBoardProps) => {
  const {
    actionBuffer: { position: bufferPosition, updatePosition },
  } = useContext(GameContext);

  const handleClick = (newPosition: number) => () =>
    isActive && updatePosition(newPosition);

  const getPegProps = (pos: number) => ({
    onClick: handleClick(pos),
    isActive: isActive && pos === bufferPosition,
    key: pos,
  });

  return (
    <GuessBoardArea isActive={isActive} {...otherProps}>
      {guesses.map((guess, i) =>
        guess !== null ? (
          <Peg codePeg={guess} {...getPegProps(i)} />
        ) : (
          <PegHole data-testid="guess-hole-peg" {...getPegProps(i)} />
        )
      )}
    </GuessBoardArea>
  );
};

GuessBoard.defaultProps = {
  guesses: Array(SECRET_SIZE).fill(null),
};

export default GuessBoard;
