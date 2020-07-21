import React from "react";
import styled from "@emotion/styled";
import { GuessScore, guessScoreFactory } from "../models/GuessScore";
import { COLUMN_SIZE } from "../config/config";

const SQUARE_SIZE = COLUMN_SIZE - 5;

interface GuessResultProps {
  result: GuessScore;
}

const GuessResultSquare = styled.div`
  width: ${SQUARE_SIZE}px;
  height: ${SQUARE_SIZE}px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #ccc;
  box-shadow: inset 0px 0px 8px 1px rgba(112, 112, 112, 0.75);

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  justify-items: center;
  align-items: center;
`;

const ScorePegHole = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
`;

const ScorePeg = styled.div`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25),
    inset 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
`;

const ScorePegHit = styled(ScorePeg)`
  background-color: #c75e26;
`;

const ScorePegBlow = styled(ScorePeg)`
  background-color: #fff;
`;

const GuessResult = ({ result }: GuessResultProps) => {
  const { hits, blows, miss } = result;
  return (
    <GuessResultSquare>
      {Array(hits)
        .fill(null)
        .map((_, i) => (
          <ScorePegHit data-testid="hit-peg" key={i} />
        ))}
      {Array(blows)
        .fill(null)
        .map((_, i) => (
          <ScorePegBlow data-testid="blow-peg" key={i} />
        ))}
      {Array(miss)
        .fill(null)
        .map((_, i) => (
          <ScorePegHole data-testid="hole-peg" key={i} />
        ))}
    </GuessResultSquare>
  );
};

GuessResult.defaultProps = {
  result: guessScoreFactory(2, 2, 0),
};

export default GuessResult;
