import styled from "@emotion/styled";
import { useState } from "react";
// components
import VoteItem from "../../components/vote/VoteItem";
import Button from "../../components/common/Button";

const Vote = () => {
  const [selected, setSelected] = useState<{
    agree: boolean;
    disagree: boolean;
  }>({
    agree: false,
    disagree: false,
  });

  const handleCheckboxChange = (type: "agree" | "disagree") => {
    setSelected(prev => ({ ...prev, [type]: !prev[type] }));
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
        />
        <VoteItem
          id="disagree-checkbox"
          label="반대"
          checked={selected.disagree}
          onChange={() => handleCheckboxChange("disagree")}
          color="blue"
        />
      </Wrapper>
      <StyledButton text="투표하기" disabled={!isAnySelected} />
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
