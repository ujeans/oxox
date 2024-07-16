import styled from "@emotion/styled";
import { useState, KeyboardEvent as ReactKeyboardEvent } from "react";
// containers
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Comment = () => {
  const [comments, setComments] = useState([
    { id: 1, user: "user1", time: "1시간 전", content: "fdjsshfdksashfdhh" },
    // 초기 댓글 목록 추가 가능
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        setComments([
          ...comments,
          {
            id: comments.length + 1,
            user: "currentUser",
            time: "방금",
            content: inputValue,
          },
        ]);
        setInputValue("");
      }
    }
  };

  return (
    <Container>
      <CommentCountWrapper>
        댓글 <Count>20개</Count>
      </CommentCountWrapper>
      <ListWrapper>
        {comments.map(comment => (
          <CommentItem comment={comment} />
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
  color: ${props => props.theme.colors.gray100};
`;

const ListWrapper = styled.div`
  max-height: 465px;
  padding: 0 18px;
  overflow-y: auto;
`;
