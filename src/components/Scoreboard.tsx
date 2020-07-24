import React from "react";
import styled from "@emotion/styled";

const Title = styled.span`
  display: inline-block;
  min-width: 50px;
`;

const Result = styled.span`
  display: inline-block;
  min-width: 30px;
`;

interface ScoreboardProps {
  wins: number;
  loses: number;
}

const Scoreboard = ({ wins, loses }: ScoreboardProps) => {
  return (
    <>
      <p>
        <Title>Wins:</Title> <Result>{wins}</Result>
      </p>
      <p>
        <Title>Loses:</Title> <Result>{loses}</Result>
      </p>
    </>
  );
};

export default Scoreboard;
