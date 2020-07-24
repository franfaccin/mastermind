/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useContext } from "react";
import styled from "@emotion/styled";
import {
  SECRET_SIZE,
  COLUMN_SIZE,
  PEG_DIAM,
  FOCUS_COLOR,
} from "../config/config";
import { CodePeg } from "../models/CodePeg";
import { GameContext } from "../context/gameContext";
import { Peg } from "./Pegs";
import { PegFocus } from "../styles/PegFocus";

interface GuessBoardProps {
  guesses: Array<CodePeg | null>;
  isActive?: boolean;
}

const BOARD_HEIGHT = SECRET_SIZE * (PEG_DIAM + PEG_DIAM / 2);
const PEG_HOLE_SIZE = PEG_DIAM * 0.25;

const BoardActive = css`
  border: 2px solid ${FOCUS_COLOR};
  & > * {
    cursor: pointer;
  }
`;

const GuessBoardArea = styled.div<{ isActive?: boolean }>`
  width: ${COLUMN_SIZE}px;
  height: ${BOARD_HEIGHT}px;
  border-radius: ${COLUMN_SIZE / 2}px;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(${SECRET_SIZE}, ${100 / SECRET_SIZE}%);
  justify-items: center;
  align-items: center;

  ${({ isActive }) => isActive && BoardActive}
`;

interface PegHoleProps {
  isActive?: boolean;
  isActiveBoard?: boolean;
}

const PegHole = ({ isActive, isActiveBoard, ...otherProps }: PegHoleProps) => (
  <div
    css={css`
      position: relative;
      width: ${PEG_DIAM}px;
      height: ${PEG_DIAM}px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      ${isActive && PegFocus}
    `}
    {...otherProps}
  >
    <div
      css={css`
        vertical-align: center;
        width: ${PEG_HOLE_SIZE}px;
        height: ${PEG_HOLE_SIZE}px;
        background-color: ${isActiveBoard ? "#000" : "#aaa"};
        border-radius: 50%;
      `}
    />
  </div>
);

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
          <PegHole
            data-testid="guess-hole-peg"
            {...getPegProps(i)}
            isActiveBoard={isActive}
          />
        )
      )}
    </GuessBoardArea>
  );
};

GuessBoard.defaultProps = {
  guesses: Array(SECRET_SIZE).fill(null),
};

export default GuessBoard;
