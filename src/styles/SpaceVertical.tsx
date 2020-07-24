import styled from "@emotion/styled";
import { REGULAR_SPACE } from "../config/config";

export const SpaceVertical = styled.div<{ scale?: number }>`
  width: 100%;
  height: ${({ scale = 1 }) => REGULAR_SPACE * scale}px;
`;
