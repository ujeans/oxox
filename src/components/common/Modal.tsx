import styled from "@emotion/styled";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
// types
import { ChildrenProps } from "../../types/react";
// hooks
import useOutSideClick from "../../hooks/useOutSideClick";
// animation
import { modalAnimation } from "../../styles/animation";

export interface ModalProps extends ChildrenProps {
  isOpen: boolean;
  onClose?: () => void;
  height?: string;
}

const Modal = ({ isOpen, onClose, children, height = "400px" }: ModalProps) => {
  const modalRef = useRef(null);
  const modalRoot = document.getElementById("modal");

  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);

  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <Overlay>
          <ModalWrap
            ref={modalRef}
            height={height}
            variants={modalAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <IndicatorWrapper>
              <Indicator />
            </IndicatorWrapper>
            {children}
          </ModalWrap>
        </Overlay>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default Modal;

const Overlay = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(2, 6, 24, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-end;
`;

const ModalWrap = styled(motion.div)<{ height: string }>`
  width: 550px;
  height: ${props => props.height};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: ${props => props.theme.colors.blue600};
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
