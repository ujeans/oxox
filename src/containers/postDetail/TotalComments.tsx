import styled from "@emotion/styled";
import { useState } from "react";
// components
import Modal from "../../components/common/Modal";
import Comment from "../comment/Comment";
// types
import { PostDto } from "../../types/data/post";

interface PostProps {
  post?: PostDto;
}

const TotalComments = ({ post }: PostProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <CommentWrapper onClick={openModal}>
        댓글 {post?.commentCount}개 모두 보기
      </CommentWrapper>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} height="600px">
        <Comment />
      </Modal>
    </>
  );
};

export default TotalComments;

const CommentWrapper = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray50};
  cursor: pointer;
`;
