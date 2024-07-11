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
  const [errors, setErrors] = useState<FormValues>({
    email: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormValues = { email: "", password: "", nickname: "" };

    if (!value.email) {
      newErrors.email = "이메일을 입력하세요";
    }
    if (!value.password) {
      newErrors.password = "비밀번호를 입력하세요.";
    }

    setErrors(newErrors);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <Label text="이메일" />
        <Input value={value.email} onChange={handleChange} name="email" />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Label text="비밀번호" />
        <Input value={value.password} onChange={handleChange} name="password" />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
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

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: ${props => props.theme.colors.red200};
  font-size: 0.8rem;
`;
