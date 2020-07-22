import React, { useContext } from "react";
import styled from "@emotion/styled";
import { COLUMN_SIZE, SECRET_SIZE, PEG_DIAM } from "../config/config";
import { GameContext } from "../context/gameContext";
import { Peg } from "./Pegs";
import { GameStatus } from "../hooks/useGameControl";
import { css } from "@emotion/core";

const BOARD_HEIGHT = SECRET_SIZE * (PEG_DIAM + PEG_DIAM / 2);

const SecretResultBase = css`
  width: ${COLUMN_SIZE}px;
  height: ${BOARD_HEIGHT}px;
  border-radius: 15px;
`;

const SecretCover = css`
  ::before {
    ${SecretResultBase}
    content: "";
    position: absolute;
    background-color: #666;
    z-index: 1;
  }
`;

const SecretResultSection = styled.section<{ hideSecret: boolean }>`
  ${SecretResultBase}
  background-color: #ccc;
  box-shadow: inset 0px 0px 8px 1px rgba(112, 112, 112, 0.75);

  position: relative;
  display: inline-grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(${SECRET_SIZE}, ${100 / SECRET_SIZE}%);
  justify-items: center;
  align-items: center;

  ${({ hideSecret }) => hideSecret && SecretCover}
`;

const SecretResult = () => {
  const { secret, gameStatus } = useContext(GameContext);
  return (
    <SecretResultSection hideSecret={gameStatus === GameStatus.IN_PROGRESS}>
      {secret.map((peg, i) => (
        <Peg key={i} codePeg={peg} />
      ))}
    </SecretResultSection>
  );
};

export default SecretResult;
