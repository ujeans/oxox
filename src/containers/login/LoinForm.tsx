import styled from "@emotion/styled";
import { useState } from "react";
// types
import { FormValues } from "../../types/data/user";
// components
import Label from "../../components/common/Label";
import { Input } from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoinForm = () => {
  const [value, setValue] = useState<FormValues>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <Label text="이메일" />
        <Input value={value.email} onChange={handleChange} name="email" />
      </InputWrapper>
      <InputWrapper>
        <Label text="비밀번호" />
        <Input value={value.password} onChange={handleChange} name="password" />
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
