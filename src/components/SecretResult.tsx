/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import styled from "@emotion/styled";
import {
  COLUMN_SIZE,
  SECRET_SIZE,
  PEG_DIAM,
  GUESS_SCORE_SIZE,
  REGULAR_SPACE,
} from "../config/config";
import { GameContext } from "../context/gameContext";
import { GameStatus } from "../hooks/useGameControl";
import { SpaceVertical } from "../styles/SpaceVertical";
import { Peg } from "./Pegs";
import { breakpoint_md } from "../styles/MediaQueries";

const BOARD_HEIGHT = SECRET_SIZE * (PEG_DIAM + PEG_DIAM / 2);
const COLOR_WIN = "#009688";
const COLOR_LOSE = "#ff6333";

const SecretResultBase = css`
  width: ${COLUMN_SIZE}px;
  height: ${BOARD_HEIGHT}px;
  border-radius: ${COLUMN_SIZE / 2}px;

  ${breakpoint_md} {
    width: ${BOARD_HEIGHT}px;
    height: ${COLUMN_SIZE}px;
  }
`;

const secretCover = (hideSecret: boolean) => css`
  ::before {
    ${SecretResultBase}
    content: "";
    position: absolute;
    background-color: #666;
    ${!hideSecret &&
    css`
      animation: hide 0.5s 1 ease-out forwards;
    `}
  }

  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const winnerStyle = css`
  border: 3px solid ${COLOR_WIN};
`;

const loserStyle = css`
  border: 3px solid ${COLOR_LOSE};
`;

const SecretResultSection = styled.section<{
  hideSecret: boolean;
  isWin: boolean;
}>`
  ${SecretResultBase}
  position: relative;
  display: inline-grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(${SECRET_SIZE}, ${100 / SECRET_SIZE}%);
  justify-items: center;
  align-items: center;

  ${({ hideSecret }) => secretCover(hideSecret)}
  ${({ hideSecret, isWin }) =>
    !hideSecret && (isWin ? winnerStyle : loserStyle)}

  ${breakpoint_md} {
    grid-template-columns: repeat(${SECRET_SIZE}, ${100 / SECRET_SIZE}%);
    grid-template-rows: 100%;
  }
`;

const SecretResult = () => {
  const { secret, gameStatus } = useContext(GameContext);
  const finishedGame = gameStatus !== GameStatus.IN_PROGRESS;
  const isWin = finishedGame && gameStatus === GameStatus.WIN;
  return (
    <div>
      <SpaceVertical
        css={css`
          height: ${GUESS_SCORE_SIZE + REGULAR_SPACE}px;
          ${breakpoint_md} {
            height: ${REGULAR_SPACE}px;
          }
        `}
      />
      <SecretResultSection hideSecret={!finishedGame} isWin={isWin}>
        {finishedGame && secret.map((peg, i) => <Peg key={i} codePeg={peg} />)}
      </SecretResultSection>
    </div>
  );
};

export default SecretResult;
