import styled from "@emotion/styled";
// components
import Label from "../../components/common/Label";
import { Input } from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoinForm = () => {
  return (
    <FormWrapper>
      <InputWrapper>
        <Label text="이메일" />
        <Input />
      </InputWrapper>
      <InputWrapper>
        <Label text="비밀번호" />
        <Input />
      </InputWrapper>
      <Button text="이메일로 시작하기" />
    </FormWrapper>
  );
};

export default LoinForm;

const FormWrapper = styled.form``;

const InputWrapper = styled.div`
  margin-bottom: 25px;
`;
