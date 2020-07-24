import React from "react";
import ReactModal from "react-modal";
import { css, ClassNames } from "@emotion/core";
import { REGULAR_SPACE } from "../config/config";

const modalStyle = css`
  background-color: #fff;
  position: absolute;
  width: 70vw;
  max-height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: ${2 * REGULAR_SPACE}px;
  outline: none;
  overflow: auto;
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
}

export const Modal = ({ isOpen, children, ...otherProps }: ModalProps) => {
  return (
    <ClassNames>
      {({ css }) => (
        <ReactModal
          isOpen={isOpen}
          className={css(modalStyle)}
          overlayClassName={css(overlayStyle)}
          {...otherProps}
        >
          {children}
        </ReactModal>
      )}
    </ClassNames>
  );
};
