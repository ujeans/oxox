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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isFormValid = Object.values(value).some(filed => filed.trim() !== "");
    setIsDisabled(!isFormValid);
  }, [value]);

  return (
    <FormWrapper>
      <InputWrapper>
        <Label text="이메일" />
        <Input
          placeholder="munchkin@oxox.kr"
          value={value.email}
          onChange={handleChange}
          name="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Label text="비밀번호" />
        <Input
          placeholder="최소 6자 이상(알파벳, 숫자 필수)"
          value={value.password}
          onChange={handleChange}
          name="password"
        />
      </InputWrapper>
      <InputWrapper>
        <Label text="닉네임" />
        <Input
          placeholder="별명을 알파벳, 한글, 숫자를 20자 이하로 입력해주세요"
          value={value.nickname || ""}
          onChange={handleChange}
          name="nickname"
        />
      </InputWrapper>
      <Button text="이메일로 시작하기" disabled={isDisabled} />
    </FormWrapper>
  );
};

export default SignupFom;

const FormWrapper = styled.form``;

const InputWrapper = styled.div`
  margin-bottom: 25px;
`;
