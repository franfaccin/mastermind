import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { PEG_DIAM, FOCUS_COLOR } from "../config/config";
import { CodePeg } from "../models/CodePeg";

const pegFocus = css`
  ::after {
    content: "";

    position: absolute;
    top: 0;
    bottom: 0;
    left: -5px;
    right: 0;
    margin: auto;

    box-sizing: content-box;
    width: ${PEG_DIAM + 4}px;
    height: ${PEG_DIAM + 4}px;
    border: 3px solid ${FOCUS_COLOR};
    border-radius: 50%;
  }
`;

const PegBase = styled.div<{ isActive?: boolean }>`
  position: relative;
  width: ${PEG_DIAM}px;
  height: ${PEG_DIAM}px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25),
    inset 0px 0px 5px 1px rgba(0, 0, 0, 0.25);

  ${({ isActive }) => isActive && pegFocus}
`;

export const PegA = styled(PegBase)`
  background-color: blue;
`;

export const PegB = styled(PegBase)`
  background-color: red;
`;

export const PegC = styled(PegBase)`
  background-color: green;
`;

export const PegD = styled(PegBase)`
  background-color: yellow;
`;

export const PegE = styled(PegBase)`
  background-color: pink;
`;

export const PegF = styled(PegBase)`
  background-color: white;
`;

export function getPegComponent(
  codePeg: CodePeg | null,
  props: any
): ReactElement | null {
  switch (codePeg) {
    case CodePeg.A:
      return <PegA {...props} data-testid="peg-a" />;
    case CodePeg.B:
      return <PegB {...props} data-testid="peg-b" />;
    case CodePeg.C:
      return <PegC {...props} data-testid="peg-c" />;
    case CodePeg.D:
      return <PegD {...props} data-testid="peg-d" />;
    case CodePeg.E:
      return <PegE {...props} data-testid="peg-e" />;
    case CodePeg.F:
      return <PegF {...props} data-testid="peg-f" />;
    default:
      return null;
  }
}
