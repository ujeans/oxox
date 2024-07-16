import styled from "@emotion/styled";
import { BsFillSendFill } from "react-icons/bs";
import { ChangeEvent, KeyboardEvent } from "react";
// components
import { Input } from "../../components/common/Input";

interface CommentFormProps {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const CommentForm = ({
  inputValue,
  handleChange,
  handleKeyPress,
}: CommentFormProps) => {
  return (
    <FormWrapper>
      <InputWrapper>
        <Input
          placeholder="댓글 작성하기"
          value={inputValue}
          onChange={handleChange}
          name="email"
          icon={<SendIcon />}
          onKeyPress={handleKeyPress}
        />
      </InputWrapper>
    </FormWrapper>
  );
};

export default CommentForm;

const FormWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  background-color: ${props => props.theme.colors.blue600};
  border-top: 1px solid #363b48;
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 10px 18px;
`;

const SendIcon = styled(BsFillSendFill)`
  color: ${props => props.theme.colors.gray100};
`;
