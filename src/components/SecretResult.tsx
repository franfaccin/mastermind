import React, { useContext } from "react";
import styled from "@emotion/styled";
import { COLUMN_SIZE, SECRET_SIZE, PEG_DIAM } from "../config/config";
import { GameContext } from "../context/gameContext";
import { Peg } from "./Pegs";

const BOARD_HEIGHT = SECRET_SIZE * (PEG_DIAM + PEG_DIAM / 2);

const SecretResultSection = styled.section`
  width: ${COLUMN_SIZE}px;
  height: ${BOARD_HEIGHT}px;
  background-color: #ccc;
  border-radius: 15px;
  box-shadow: inset 0px 0px 8px 1px rgba(112, 112, 112, 0.75);

  display: inline-grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(${SECRET_SIZE}, ${100 / SECRET_SIZE}%);
  justify-items: center;
  align-items: center;
`;

const SecretResult = () => {
  const { secret } = useContext(GameContext);
  return (
    <SecretResultSection>
      {secret.map((peg, i) => (
        <Peg key={i} codePeg={peg} />
      ))}
    </SecretResultSection>
  );
};

export default SecretResult;
