import React, { useState } from "react";
import styled from "@emotion/styled";
// containers
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
// api
import axiosInstance from "../../api/config";
// types
import { CommentDtoList } from "../../types/data/comment";

interface CommentsProps {
  postId: number;
  comments: CommentDtoList | undefined;
  fetchComments: () => void;
}

const Comment = ({ postId, comments, fetchComments }: CommentsProps) => {
  const [inputValue, setInputValue] = useState("");

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

        await axiosInstance.post(
          `/comments?postId=${postId}&content=${encodeURIComponent(
            inputValue
          )}`,
          {}
        );

        fetchComments();

        setInputValue("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container>
      <CommentCountWrapper>
        댓글 <Count>{comments?.length}개</Count>
      </CommentCountWrapper>
      <ListWrapper>
        {comments
          ?.slice()
          ?.sort(
            (a, b) =>
              new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
          )
          .map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              fetchComments={fetchComments}
            />
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
