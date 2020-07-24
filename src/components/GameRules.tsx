import React from "react";
import { ScorePegHit, ScorePegBlow } from "./GuessResult";
import styled from "@emotion/styled";
import { REGULAR_SPACE, MAX_TURNS } from "../config/config";

const RuleLi = styled.li`
  display: flex;
  align-items: baseline;
  margin-bottom: ${REGULAR_SPACE}px;
  > span {
    margin-left: ${REGULAR_SPACE}px;
  }
`;

const GameRules = () => {
  return (
    <>
      <h1>Game Rules</h1>
      <p>
        Mastermind is a code-breaking game. The objective of the game is to
        guess the exact colors and positions of the secret.
      </p>
      <p>
        The computer starts by picking a sequence of 4 random non repeated
        colors. It is the secret in the right.
      </p>
      <p>
        The player then chooses colors from the available ones in the bottom of
        the board and place them in the desired positions of the current guess
        board.
      </p>
      <p>
        To place a color, click the desired position and the desired color in
        the bottom section, and vice-versa. To replace a current color of your
        guess, just click it and select another color from the options.
      </p>
      <p>
        When the player wants to try a guess, press "Ok!". You cannot proceed
        without filling all positions. The computer then provides a feedback for
        your guess:
      </p>
      <ul>
        <RuleLi>
          <ScorePegHit />
          <span>
            For each color that is right AND in the right position, a small
            orange dot is placed on top of your guess.
          </span>
        </RuleLi>
        <RuleLi>
          <ScorePegBlow />
          <span>
            For each color that is right BUT NOT in the right position, a white
            dot is placed on top of your guess.
          </span>
        </RuleLi>
        <RuleLi>
          Note: The dots do not match the positions of your guess, they're just
          an indication.
        </RuleLi>
      </ul>
      <p>
        You <strong>win</strong> the game when you guess correctly all colors
        and their respective positions in the secret.
      </p>
      <p>
        You <strong>lose</strong> the game if you use all of your tries (
        {MAX_TURNS}) and fail to guess correctly the secret.
      </p>
      <p>To start a new game, press the "Start New Game" button.</p>
    </>
  );
};

export default GameRules;
