import React, { useContext } from "react";
import styled from "@emotion/styled";
import { TOTAL_PEGS, getAllPegs, CodePeg } from "../models/CodePeg";
import { PEG_DIAM } from "../config/config";
import { Peg } from "./Pegs";
import { GameContext } from "../context/gameContext";

const PegsDisplaySection = styled.section`
  display: inline-grid;
  grid-template-columns: repeat(${TOTAL_PEGS}, ${PEG_DIAM}px);
  grid-template-rows: auto;
  grid-gap: 10px;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: #ccc;
  box-shadow: inset 0px 0px 8px 1px rgba(180, 180, 180, 0.75);
  & > * {
    cursor: pointer;
  }
`;

const PegsDisplay = ({ ...otherProps }) => {
  const {
    actionBuffer: { peg: bufferPeg, updatePeg },
  } = useContext(GameContext);

  return (
    <PegsDisplaySection {...otherProps}>
      {getAllPegs().map((peg, i) => (
        <Peg
          codePeg={peg}
          onClick={() => updatePeg(peg)}
          isActive={peg === bufferPeg}
          key={i}
        />
      ))}
    </PegsDisplaySection>
  );
};

export default PegsDisplay;
