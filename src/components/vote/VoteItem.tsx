import styled from "@emotion/styled";

interface VoteBoxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  color: string;
  voteCount: number;
  showCheckbox: boolean;
}

const VoteItem = ({
  id,
  label,
  checked,
  onChange,
  color,
  voteCount,
  showCheckbox,
}: VoteBoxProps) => {
  return (
    <Wrapper>
      {showCheckbox && (
        <>
          <Checkbox
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <CheckboxLabel htmlFor={id} />
        </>
      )}
      <Box>
        <Label>{label}</Label>
        <Progressbar selected={checked} color={color}>
          {voteCount > 0 && (
            <Graph selected={checked} color={color} width={voteCount} />
          )}
        </Progressbar>
      </Box>
    </Wrapper>
  );
};

export default VoteItem;

const Wrapper = styled.div`
  display: flex;
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

const Progressbar = styled.div<{ selected: boolean; color: string }>`
  width: 100%;
  height: 13px;
  margin-top: 5px;
  border-radius: 20px;
  background-color: ${props =>
    props.selected
      ? props.color === "red"
        ? props.theme.colors.pink50
        : props.theme.colors.blue50
      : props.theme.colors.gray200};
`;

const Graph = styled.div<{ selected: boolean; color: string; width: number }>`
  height: 100%;
  border-radius: 20px;
  background-color: ${props =>
    props.selected
      ? props.color === "red"
        ? props.theme.colors.pink100
        : props.theme.colors.blue100
      : "transparent"};
  width: ${props => props.width}%;
`;
