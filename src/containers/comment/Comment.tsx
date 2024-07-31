import React, { useState, useEffect, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
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
  const [visibleComments, setVisibleComments] = useState<CommentDtoList>([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    if (comments) {
      const sortedComments = comments
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
        );
      setVisibleComments(sortedComments.slice(0, limit));
      setOffset(limit);
    }
  }, [comments]);

  const loadMoreItems = useCallback(() => {
    if (comments && offset < comments.length) {
      console.log("Loading more items...");
      const newComments = comments.slice(offset, offset + limit);
      setVisibleComments(prev => [...prev, ...newComments]);
      setOffset(prev => prev + limit);
    }
  }, [comments, offset]);

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
      <List
        height={465}
        itemCount={visibleComments.length}
        itemSize={100}
        width={"100%"}
        onItemsRendered={({ visibleStopIndex }) => {
          if (visibleStopIndex + 1 === visibleComments.length) {
            loadMoreItems();
          }
        }}
      >
        {({ index, style }) => (
          <div style={style}>
            <CommentItem
              key={visibleComments[index].id}
              comment={visibleComments[index]}
              fetchComments={fetchComments}
            />
          </div>
        )}
      </List>
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
