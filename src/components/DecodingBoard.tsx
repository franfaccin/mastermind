/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import styled from "@emotion/styled";
import GuessResult from "./GuessResult";
import GuessBoard from "./GuessBoard";
import { COLUMN_SIZE, REGULAR_SPACE } from "../config/config";
import SecretResult from "./SecretResult";
import { SpaceVertical } from "../styles/SpaceVertical";
import { GameContext } from "../context/gameContext";
import { Turn } from "../models/Turn";
import { breakpoint_md } from "../styles/MediaQueries";

const GuessWrapper = styled.div`
  display: flex;
  ${breakpoint_md} {
    display: inline-block;
  }
`;

const GuessSection = styled.section`
  display: inline-grid;
  width: ${COLUMN_SIZE}px;
  justify-items: center;
  align-items: center;
  ${breakpoint_md} {
    height: ${COLUMN_SIZE}px;
    width: 100%;
    grid-template-columns: repeat(3, auto);
  }
`;

const DecodingBoardArea = styled.div`
  display: flex;
  align-items: center;

  ${breakpoint_md} {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  width: 4px;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin: 5px;

  ${breakpoint_md} {
    height: 4px;
    width: 100%;
  }
`;

interface GuessProps extends Turn {
  isReady: boolean;
}

const Guess = ({ guess, guessScore, isActive, isReady }: GuessProps) => {
  return (
    <GuessWrapper>
      <GuessSection>
        <GuessResult
          result={guessScore}
          isReady={isReady}
          data-testid="guess-result"
        />
        <SpaceVertical
          css={css`
            ${breakpoint_md} {
              width: ${REGULAR_SPACE}px;
            }
          `}
        />
        <GuessBoard
          isActive={isActive}
          guesses={guess}
          data-testid="guess-board"
        />
      </GuessSection>
      <Divider />
    </GuessWrapper>
  );
};

const DecodingBoard = () => {
  const { turns, isReady } = useContext(GameContext);
  return (
    <DecodingBoardArea>
      {turns.map((turn) => (
        <Guess {...turn} key={turn.num} isReady={isReady && turn.isActive} />
      ))}
      <SecretResult />
    </DecodingBoardArea>
  );
};

export default DecodingBoard;
