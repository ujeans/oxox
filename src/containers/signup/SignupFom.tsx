import styled from "@emotion/styled";
import { useEffect, useState } from "react";
// types
import { FormValues } from "../../types/data/user";
// components
import Label from "../../components/common/Label";
import { Input } from "../../components/common/Input";
import Button from "../../components/common/Button";

const SignupFom = () => {
  const [value, setValue] = useState<FormValues>({
    email: "",
    password: "",
    nickname: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
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
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const validateField = (name: string, value: string) => {
    let errorMessage = "";

    switch (name) {
      case "email":
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          errorMessage = "유효한 이메일 주소를 입력해주세요.";
        }
        break;
      case "password":
        if (value.length < 6) {
          errorMessage = "비밀번호는 최소 6자 이상 입력하세요.";
        } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(value)) {
          errorMessage = "알파벳, 숫자를 조합한 비밀번호를 입력하세요.";
        }
        break;
      case "nickname":
        if (value.trim().length === 0) {
          errorMessage = "닉네임은 최소 1자 이상 입력하세요.";
        }
        break;
      default:
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  useEffect(() => {
    const isFormValid =
      Object.values(value).some(filed => filed.trim() !== "") &&
      Object.values(errors).every(error => error === "");

    setIsDisabled(!isFormValid);
  }, [value, errors]);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <Label text="이메일" />
        <Input
          placeholder="munchkin@oxox.kr"
          value={value.email}
          onChange={handleChange}
          name="email"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Label text="비밀번호" />
        <Input
          placeholder="최소 6자 이상(알파벳, 숫자 필수)"
          value={value.password}
          onChange={handleChange}
          name="password"
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Label text="닉네임" />
        <Input
          placeholder="별명을 알파벳, 한글, 숫자를 20자 이하로 입력해주세요"
          value={value.nickname || ""}
          onChange={handleChange}
          name="nickname"
        />
        {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
      </InputWrapper>
      <Button text="이메일로 시작하기" disabled={isDisabled} type="submit" />
    </FormWrapper>
  );
};

export default SignupFom;

const FormWrapper = styled.form``;

const InputWrapper = styled.div`
  margin-bottom: 25px;
`;

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: ${props => props.theme.colors.red200};
  font-size: 0.8rem;
`;
