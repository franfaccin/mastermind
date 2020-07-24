import React from "react";
import styled from "@emotion/styled";
import { REGULAR_SPACE } from "../config/config";
import { breakpoint_md } from "../styles/MediaQueries";

const Title = styled.span`
  display: inline-block;
  min-width: 50px;
  text-align: right;
  ${breakpoint_md} {
    text-align: center;
    width: 100%;
  }
`;

const Result = styled.span`
  display: inline-block;
  min-width: 15px;
  text-align: right;
  ${breakpoint_md} {
    text-align: center;
    width: 100%;
  }
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
