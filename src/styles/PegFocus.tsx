import { css } from "@emotion/core";
import { PEG_DIAM, FOCUS_COLOR } from "../config/config";

export const PegFocus = css`
  ::after {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    box-sizing: content-box;
    width: ${PEG_DIAM + 4}px;
    height: ${PEG_DIAM + 4}px;
    border: 3px solid transparent;
    border-top: 4px solid ${FOCUS_COLOR};
    border-bottom: 4px solid ${FOCUS_COLOR};

    border-radius: 50%;

    animation: rotate 1.75s infinite linear, start 0.25s 1 ease-out;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes start {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
