import styled from "@emotion/styled";
import { useState } from "react";
// components
import Modal from "../../components/common/Modal";
// containers
import Comment from "../comment/Comment";
// types
import { CommentDtoList } from "../../types/data/comment";

interface PostProps {
  postId: number;
  comments: CommentDtoList | undefined;
  checkLogin: () => boolean;
  fetchComments: () => void;
}

const TotalComments = ({
  postId,
  comments,
  checkLogin,
  fetchComments,
}: PostProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (checkLogin()) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <CommentWrapper onClick={openModal}>
        댓글 {comments?.length}개 모두 보기
      </CommentWrapper>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} height="600px">
        <Comment
          postId={postId}
          comments={comments}
          fetchComments={fetchComments}
        />
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
