import React from "react";
import styled from "@emotion/styled";
import { REGULAR_SPACE } from "../config/config";

const Title = styled.span`
  display: inline-block;
  min-width: 50px;
  text-align: right;
`;

const Result = styled.span`
  display: inline-block;
  min-width: 15px;
  text-align: right;
`;

const ScoreSection = styled.p`
  margin-right: ${REGULAR_SPACE}px;
`;

interface ScoreboardProps {
  wins: number;
  loses: number;
}

const Scoreboard = ({ wins, loses }: ScoreboardProps) => {
  return (
    <>
      <ScoreSection>
        <Title>Wins:</Title> <Result>{wins}</Result>
      </ScoreSection>
      <ScoreSection>
        <Title>Loses:</Title> <Result>{loses}</Result>
      </ScoreSection>
    </>
  );
};

export default Scoreboard;
