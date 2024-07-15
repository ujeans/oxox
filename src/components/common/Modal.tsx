import styled from "@emotion/styled";
import { useRef } from "react";
import { createPortal } from "react-dom";
// types
import { ChildrenProps } from "../../types/react";
// hooks
import useOutSideClick from "../../hooks/useOutSideClick";

export interface ModalProps extends ChildrenProps {
  onClose?: () => void;
}

const Modal = ({ onClose, children }: ModalProps) => {
  const modalRef = useRef(null);
  const modalRoot = document.getElementById("modal");

  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);

  if (!modalRoot) return null;

  return createPortal(
    <Overlay>
      <ModalWrap ref={modalRef}>
        <IndicatorWrapper>
          <Indicator />
        </IndicatorWrapper>
        {children}
      </ModalWrap>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(2, 6, 24, 0.7);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 550px;
  height: 400px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: ${props => props.theme.colors.blue600};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Indicator = styled.div`
  width: 90px;
  height: 5px;
  margin-top: 5px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};
`;
