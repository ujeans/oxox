import styled from "@emotion/styled";
import { useState, KeyboardEvent as ReactKeyboardEvent } from "react";
// containers
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { CommentDto } from "../../types/data/comment";

interface CommentsProps {
  comments: CommentDto[];
}

const Comment = ({ comments }: CommentsProps) => {
  const [inputValue, setInputValue] = useState("");

  console.log("comments", comments);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        // 여기서 실제로 댓글을 추가하는 로직을 추가할 수 있습니다.
        setInputValue("");
      }
    }
  };

  return (
    <Container>
      <CommentCountWrapper>
        댓글 <Count>{comments.length}개</Count>
      </CommentCountWrapper>
      <ListWrapper>
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ListWrapper>
      <CommentForm
        inputValue={inputValue}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
      />
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CommentCountWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 18px;
  font-size: ${props => props.theme.typography.headers.h3};
`;

const Count = styled.div`
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.gray50};
`;

const ListWrapper = styled.div`
  max-height: 465px;
  padding: 0 18px;
  overflow-y: auto;
`;
