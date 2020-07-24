import React, { useContext } from "react";
import styled from "@emotion/styled";
import { GuessScore, guessScoreFactory } from "../models/GuessScore";
import { GUESS_SCORE_SIZE } from "../config/config";
import { css } from "@emotion/core";
import { GameContext } from "../context/gameContext";

const SCORE_PEG_SIZE = GUESS_SCORE_SIZE * 0.2;

interface GuessResultProps {
  isReady: boolean;
  result: GuessScore;
}

const GuessResultBase = css`
  width: ${GUESS_SCORE_SIZE}px;
  height: ${GUESS_SCORE_SIZE}px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const ReadyButton = styled.button`
  ${GuessResultBase}
  background-color: #00a152;
  color: #fff;
  border: 0;
  cursor: pointer;

  :active {
    background-color: #357a38;
  }
`;

const GuessResultSquare = styled.div`
  ${GuessResultBase}
  padding: ${GUESS_SCORE_SIZE / 5}px;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  justify-items: center;
  align-items: center;
`;

const ScorePegHole = styled.div`
  width: ${Math.ceil(SCORE_PEG_SIZE * 0.5)}px;
  height: ${Math.ceil(SCORE_PEG_SIZE * 0.5)}px;
  border-radius: 50%;
  background-color: #000;
`;

const ScorePeg = styled.div`
  box-sizing: border-box;
  min-width: ${SCORE_PEG_SIZE}px;
  min-height: ${SCORE_PEG_SIZE}px;
  width: ${SCORE_PEG_SIZE}px;
  height: ${SCORE_PEG_SIZE}px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25),
    inset 0px 0px 5px 1px rgba(0, 0, 0, 0.25);

  animation: enter 0.25s 1 ease-out;

  @keyframes enter {
    0% {
      transform: scale(0.75);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ScorePegHit = styled(ScorePeg)`
  background-color: #ff8747;
`;

export const ScorePegBlow = styled(ScorePeg)`
  background-color: #fff;
`;

const GuessResult = ({ result, isReady, ...otherProps }: GuessResultProps) => {
  const { endTurn } = useContext(GameContext);
  const { hits, blows, miss } = result;

  if (isReady) {
    return <ReadyButton onClick={endTurn}>Go!</ReadyButton>;
  }

  return (
    <GuessResultSquare {...otherProps}>
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
  result: guessScoreFactory(0, 0, 4),
};

export default GuessResult;
