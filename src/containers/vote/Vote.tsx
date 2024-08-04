import styled from "@emotion/styled";
import {useEffect, useState} from "react";
// components
import VoteItem from "../../components/vote/VoteItem";
import Button from "../../components/common/Button";
// types
import {PostDto} from "../../types/data/post";
import axiosInstance from "../../api/config";

interface PostProps {
  post: PostDto;
  onClose: () => void;
  fetchPostDetail: () => void;
}

const Vote = ({post,onClose,fetchPostDetail}: PostProps) => {
  const [selected, setSelected] = useState<{
    agree: boolean;
    disagree: boolean;
  }>({
    agree: false,
    disagree: false,
  });
  const [text, setText] = useState<string>("");
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    if (post.myVote === true) {
      setSelected({agree: true, disagree: false});
      setHasVoted(true);
    } else if (post.myVote === false) {
      setSelected({agree: false, disagree: true});
      setHasVoted(true);
    } else {
      setSelected({agree: false, disagree: false});
      setHasVoted(false);
    }
  }, [post.myVote]);

  useEffect(() => {
    if (hasVoted === false) {
      setText("투표하기");
    }else if (selected.agree || selected.disagree) {
      setText("다시 투표");
    } else {
      setText("투표 취소");
    }
  }, [selected,hasVoted]);

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
    try {
      const token = localStorage.getItem("token");

      await axiosInstance.post(
        `/votes?postId=${post.id}&isYes=${selected.agree}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error submitting vote:", error);
    }

    setHasVoted(true);
    onClose();
    fetchPostDetail()
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
        text={text}
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
