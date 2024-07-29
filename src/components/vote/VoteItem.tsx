import styled from "@emotion/styled";

interface VoteBoxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const VoteItem = ({ id, label, checked, onChange }: VoteBoxProps) => {
  return (
    <Wrapper>
      <>
        <Checkbox
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <CheckboxLabel htmlFor={id} />
      </>
      <Box>
        <Label>{label}</Label>
      </Box>
    </Wrapper>
  );
};

export default VoteItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: none;
  border: 2px solid ${props => props.theme.colors.gray50};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: ${props =>
      props.id === "agree-checkbox"
        ? props.theme.colors.pink100
        : props.theme.colors.blue100};
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

const Box = styled.div`
  width: calc(100% - 36px);
`;

const Label = styled.div`
  font-size: ${props => props.theme.typography.paragraphs.default};
`;
