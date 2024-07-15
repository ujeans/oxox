import styled from "@emotion/styled";
import { useState } from "react";
// components
import Modal from "../../components/common/Modal";
import Comment from "../comment/Comment";

const TotalComments = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <CommentWrapper onClick={openModal}>댓글 20개 모두 보기</CommentWrapper>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} height="600px">
          <Comment />
        </Modal>
      )}
    </>
  );
};

export default TotalComments;

const CommentWrapper = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray100};
  cursor: pointer;
`;
