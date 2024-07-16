import styled from "@emotion/styled";
import React, { useState } from "react";
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
      <ProgressWrapper>
        <VoteBox>
          <Checkbox
            id="agree-checkbox"
            type="checkbox"
            checked={selected.agree}
            onChange={() => handleCheckboxChange("agree")}
          />
          <CheckboxLabel htmlFor="agree-checkbox" />
          <RR>
            <div>찬성</div>
            <Progressbar selected={selected.agree} color="red" />
          </RR>
        </VoteBox>
        <VoteBox>
          <Checkbox
            id="disagree-checkbox"
            type="checkbox"
            checked={selected.disagree}
            onChange={() => handleCheckboxChange("disagree")}
          />
          <CheckboxLabel htmlFor="disagree-checkbox" />
          <RR>
            <div>반대</div>
            <Progressbar selected={selected.disagree} color="blue" />
          </RR>
        </VoteBox>
      </ProgressWrapper>
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

const ProgressWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VoteBox = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: none;
  border: 2px solid ${props => props.theme.colors.gray100};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: ${props =>
      props.id === "agree-checkbox"
        ? props.theme.colors.red100
        : props.theme.colors.blue500};
    border: none;
  }

  &:checked + label {
    background: url("/path-to-your-check-icon.svg") no-repeat center center;
  }
`;

const CheckboxLabel = styled.label`
  width: 25px;
  height: 25px;
  margin-left: -25px;
  cursor: pointer;
`;

const RR = styled.div`
  width: calc(100% - 36px);
`;

const Progressbar = styled.div<{ selected: boolean; color: string }>`
  width: 100%;
  height: 13px;
  margin-top: 5px;
  border-radius: 20px;
  background-color: ${props =>
    props.selected
      ? props.color === "red"
        ? props.theme.colors.red100
        : props.theme.colors.blue500
      : props.theme.colors.gray300};
`;

const StyledButton = styled(Button)`
  margin: 18px 0;
`;
