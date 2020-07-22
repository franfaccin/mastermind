import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { PEG_DIAM } from "../config/config";
import { CodePeg } from "../models/CodePeg";
import { PegFocus } from "../styles/PegFocus";
interface PegBaseProps extends React.ComponentProps<"div"> {
  isActive?: boolean;
  "data-testid"?: string;
}

const pegBaseCss = ({ isActive = false }) => css`
  position: relative;
  width: ${PEG_DIAM}px;
  height: ${PEG_DIAM}px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25),
    inset 0px 0px 5px 1px rgba(0, 0, 0, 0.25);

  ${isActive && PegFocus}
`;

export const PegA = styled.div<PegBaseProps>`
  ${({ isActive }) => pegBaseCss({ isActive })}
  background-color: blue;
`;

export const PegB = styled.div<PegBaseProps>`
  ${({ isActive }) => pegBaseCss({ isActive })}
  background-color: red;
`;

export const PegC = styled.div<PegBaseProps>`
  ${({ isActive }) => pegBaseCss({ isActive })}
  background-color: green;
`;

export const PegD = styled.div<PegBaseProps>`
  ${({ isActive }) => pegBaseCss({ isActive })}
  background-color: yellow;
`;

export const PegE = styled.div<PegBaseProps>`
  ${({ isActive }) => pegBaseCss({ isActive })}
  background-color: pink;
`;

export const PegF = styled.div<PegBaseProps>`
  ${({ isActive }) => pegBaseCss({ isActive })}
  background-color: white;
`;

interface PegProps extends React.ComponentProps<"div"> {
  codePeg?: CodePeg | null;
  isActive?: boolean;
}

export const Peg = ({ codePeg, ...otherProps }: PegProps) => {
  switch (codePeg) {
    case CodePeg.A:
      return <PegA {...otherProps} data-testid="peg-a" />;
    case CodePeg.B:
      return <PegB {...otherProps} data-testid="peg-b" />;
    case CodePeg.C:
      return <PegC {...otherProps} data-testid="peg-c" />;
    case CodePeg.D:
      return <PegD {...otherProps} data-testid="peg-d" />;
    case CodePeg.E:
      return <PegE {...otherProps} data-testid="peg-e" />;
    case CodePeg.F:
      return <PegF {...otherProps} data-testid="peg-f" />;
    default:
      return null;
  }
};
