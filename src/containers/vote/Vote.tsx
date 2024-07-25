import styled from "@emotion/styled";
import { useState } from "react";
// components
import VoteItem from "../../components/vote/VoteItem";
import Button from "../../components/common/Button";
// types
import { PostDto } from "../../types/data/post";

interface PostProps {
  post: PostDto;
}

const Vote = ({ post }: PostProps) => {
  const [selected, setSelected] = useState<{
    agree: boolean;
    disagree: boolean;
  }>({
    agree: false,
    disagree: false,
  });
  const [votes, setVotes] = useState<{
    agree: number;
    disagree: number;
  }>({
    agree: 4,
    disagree: post.disAgreeCount ?? 0,
  });

  const handleCheckboxChange = (type: "agree" | "disagree") => {
    setSelected(prev => {
      if (type === "agree") {
        return {
          agree: !prev.agree,
          disagree: false,
        };
      } else {
        return {
          agree: false,
          disagree: !prev.disagree,
        };
      }
    });

    setVotes(prevVotes => {
      if (type === "agree") {
        return {
          agree: prevVotes.agree + (selected.agree ? -1 : 1),
          disagree: prevVotes.disagree,
        };
      } else {
        return {
          agree: prevVotes.agree,
          disagree: prevVotes.disagree + (selected.disagree ? -1 : 1),
        };
      }
    });
  };

  const handleVoteSubmit = () => {
    console.log("Final Votes:", votes);
  };

  const isAnySelected = selected.agree || selected.disagree;

  return (
    <Container>
      <Wrapper>
        <VoteItem
          id="agree-checkbox"
          label="찬성"
          checked={selected.agree}
          onChange={() => handleCheckboxChange("agree")}
          color="red"
          voteCount={votes.agree}
        />
        <VoteItem
          id="disagree-checkbox"
          label="반대"
          checked={selected.disagree}
          onChange={() => handleCheckboxChange("disagree")}
          color="blue"
          voteCount={votes.disagree}
        />
      </Wrapper>
      <StyledButton
        text="투표하기"
        disabled={!isAnySelected}
        onClick={handleVoteSubmit}
      />
    </Container>
  );
};

export default Vote;

const Container = styled.div`
  height: calc(100% - 10px);
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  margin: 18px 0;
`;
