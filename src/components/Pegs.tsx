import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { PEG_DIAM } from "../config/config";
import { CodePeg } from "../models/CodePeg";

const PegBase = styled.div`
  width: ${PEG_DIAM}px;
  height: ${PEG_DIAM}px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25),
    inset 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
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
      return <PegA {...props} data-testid="peg-c" />;
    case CodePeg.D:
      return <PegA {...props} data-testid="peg-d" />;
    case CodePeg.E:
      return <PegA {...props} data-testid="peg-e" />;
    case CodePeg.F:
      return <PegA {...props} data-testid="peg-f" />;
    default:
      return null;
  }
}
