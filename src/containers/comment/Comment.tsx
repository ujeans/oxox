import styled from "@emotion/styled";
import { useState, KeyboardEvent as ReactKeyboardEvent } from "react";
// containers
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
// types
import { PostDetailDto } from "../../types/data/post";
import axiosInstance from "../../api/config";

interface CommentsProps {
  post?: PostDetailDto;
}

const Comment = ({ post }: CommentsProps) => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState(post?.comments || []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (inputValue.trim() !== "") {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.log("토큰 없습니다.");
          return;
        }

        const response = await axiosInstance.post(
          `/comments?postId=${post?.id}&content=${encodeURIComponent(
            inputValue
          )}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newComment = response.data;
        setComments([...comments, newComment]);
        setInputValue("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleKeyPress = async (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container>
      <CommentCountWrapper>
        댓글 <Count>{post?.comments.length}개</Count>
      </CommentCountWrapper>
      <ListWrapper>
        {post?.comments?.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ListWrapper>
      <CommentForm
        inputValue={inputValue}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        handleSendClick={handleSubmit}
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
