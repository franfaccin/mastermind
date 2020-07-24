import styled from "@emotion/styled";
import { REGULAR_SPACE } from "../config/config";

export const SpaceHorizontal = styled.div<{ scale?: number }>`
  height: 100%;
  width: ${({ scale = 1 }) => REGULAR_SPACE * scale}px;
  display: inline-block;
`;
