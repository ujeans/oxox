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
    agree: post.agreeCount ?? 0,
    disagree: post.disAgreeCount ?? 0,
  });

  const [hasVoted, setHasVoted] = useState(false);

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
  };

  const handleVoteSubmit = () => {
    if (hasVoted) {
      setSelected({ agree: false, disagree: false });
      setVotes({
        agree: post.agreeCount ?? 0,
        disagree: post.disAgreeCount ?? 0,
      });
      setHasVoted(false);
    } else {
      setVotes(prevVotes => {
        const updatedVotes = {
          agree: selected.agree ? prevVotes.agree + 1 : prevVotes.agree,
          disagree: selected.disagree
            ? prevVotes.disagree + 1
            : prevVotes.disagree,
        };
        console.log("Final Votes:", updatedVotes);
        return updatedVotes;
      });
      setHasVoted(true);
    }
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
          showCheckbox={!hasVoted}
        />
        <VoteItem
          id="disagree-checkbox"
          label="반대"
          checked={selected.disagree}
          onChange={() => handleCheckboxChange("disagree")}
          color="blue"
          voteCount={votes.disagree}
          showCheckbox={!hasVoted}
        />
      </Wrapper>
      <StyledButton
        text={hasVoted ? "다시 투표" : "투표하기"}
        disabled={!isAnySelected && !hasVoted}
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
