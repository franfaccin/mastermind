import styled from "@emotion/styled";
import { VERTICAL_SPACE } from "../config/config";

export const SpaceVertical = styled.div<{ scale?: number }>`
  width: 100%;
  height: ${({ scale = 1 }) => VERTICAL_SPACE * scale}px;
`;
