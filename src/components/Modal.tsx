/** @jsx jsx */
import { css, jsx, ClassNames } from "@emotion/core";
import ReactModal from "react-modal";
import { REGULAR_SPACE } from "../config/config";
import { breakpoint_md } from "../styles/MediaQueries";
import { Button } from "../styles/Button";
import CrossSVG from "../icons/cross";

const modalStyle = css`
  background-color: #fff;
  position: absolute;
  width: 70vw;
  max-height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: ${2 * REGULAR_SPACE}px;
  outline: none;
  overflow: auto;

  ${breakpoint_md} {
    width: 95vw;
    margin: ${REGULAR_SPACE}px auto;
    top: auto;
    left: auto;
    transform: none;
    position: relative;
  }
`;

const overlayStyle = css`
  background-color: rgba(50, 50, 50, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  body {
    overflow: none;
  }
`;

interface ModalProps extends ReactModal.Props {
  isOpen: boolean;
  children: Element | React.ReactNode;
  showCloseBtn?: boolean;
  onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

export const Modal = ({
  isOpen,
  showCloseBtn,
  onRequestClose,
  children,
  ...otherProps
}: ModalProps) => {
  return (
    <ClassNames>
      {({ css }) => (
        <ReactModal
          isOpen={isOpen}
          className={css(modalStyle)}
          overlayClassName={css(overlayStyle)}
          onRequestClose={onRequestClose}
          {...otherProps}
        >
          {showCloseBtn && (
            <Button
              onClick={onRequestClose}
              css={css`
                float: right;
                & > svg {
                  vertical-align: middle;
                  height: 16px;
                  width: 16px;
                }
              `}
            >
              <CrossSVG />
            </Button>
          )}
          {children}
        </ReactModal>
      )}
    </ClassNames>
  );
};

Modal.defaultProps = {
  onRequestClose: () => {},
};
