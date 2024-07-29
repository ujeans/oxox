import styled from "@emotion/styled";
import { useEffect, useState } from "react";
// components
import VoteItem from "../../components/vote/VoteItem";
import Button from "../../components/common/Button";
// types
import { PostDto } from "../../types/data/post";
import axiosInstance from "../../api/config";

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

  console.log(post.vote);

  useEffect(() => {
    if (post.vote === true) {
      setSelected({ agree: true, disagree: false });
      setHasVoted(true);
    } else if (post.vote === false) {
      setSelected({ agree: false, disagree: true });
      setHasVoted(true);
    } else {
      setSelected({ agree: false, disagree: false });
      setHasVoted(false);
    }
  }, [post.vote]);

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

  const handleVoteSubmit = async () => {
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
        // console.log("Final Votes:", updatedVotes);
        return updatedVotes;
      });

      try {
        const token = localStorage.getItem("token");

        const response = await axiosInstance.post(
          `/votes?postId=${post.id}&isYes=${selected.agree}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("Vote submitted successfully:", response.data);
      } catch (error) {
        console.error("Error submitting vote:", error);
      }

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
        />
        <VoteItem
          id="disagree-checkbox"
          label="반대"
          checked={selected.disagree}
          onChange={() => handleCheckboxChange("disagree")}
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
