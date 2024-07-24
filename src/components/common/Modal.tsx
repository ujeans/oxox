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
  position?: "center" | "bottom";
}

const Modal = ({
  isOpen,
  onClose,
  children,
  height = "400px",
  position = "bottom",
}: ModalProps) => {
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
        <Overlay position={position}>
          <ModalWrap
            ref={modalRef}
            height={height}
            position={position}
            variants={modalAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {position === "bottom" && (
              <IndicatorWrapper>
                <Indicator />
              </IndicatorWrapper>
            )}
            {children}
          </ModalWrap>
        </Overlay>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default Modal;

const Overlay = styled(motion.div)<{ position: "center" | "bottom" }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(18, 18, 18, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: ${props =>
    props.position === "center" ? "center" : "flex-end"};
`;

const ModalWrap = styled(motion.div)<{
  height: string;
  position: "center" | "bottom";
}>`
  width: 550px;
  height: ${props => props.height};
  border-radius: ${props =>
    props.position === "center" ? "15px" : "15px 15px 0 0"};
  background-color: ${props => props.theme.colors.gray500};
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
