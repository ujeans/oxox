import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
// types
import { FormValues } from "../../types/data/user";
// components
import Label from "../../components/common/Label";
import { Input } from "../../components/common/Input";
import Button from "../../components/common/Button";
import ErrorMessage from "../../components/users/ErrorMessage";
// containers
import LoginFail from "./LoginFail";
// api
import axiosInstance from "../../api/config";
// recoil
import { userState } from "../../recoil/atoms";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [value, setValue] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormValues>({
    email: "",
    password: "",
    nickname: "",
  });
  const [loginFailed, setLoginFailed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormValues = { email: "", password: "", nickname: "" };

    if (!value.email) {
      newErrors.email = "이메일을 입력하세요";
    }
    if (!value.password) {
      newErrors.password = "비밀번호를 입력하세요.";
    }

    setErrors(newErrors);

    try {
      const response = await axiosInstance.post("/users/login", {
        email: value.email,
        password: value.password,
      });

      const token = response.headers["x-access-token"];
      const userData = response.data;

      if (token) {
        localStorage.setItem("token", token);
      }

      setUser(userData);

      setValue({ email: "", password: "" });

      setLoginFailed(false);

      navigate("/");
    } catch (error) {
      console.log(error);
      setLoginFailed(true);
    }
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <Label text="이메일" />
          <Input value={value.email} onChange={handleChange} name="email" />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Label text="비밀번호" />
          <Input
            value={value.password}
            onChange={handleChange}
            name="password"
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputWrapper>
        <Button text="이메일로 시작하기" />
      </FormWrapper>
      {loginFailed && <LoginFail />}
    </>
  );
};

export default LoginForm;

const FormWrapper = styled.form``;

const InputWrapper = styled.div`
  margin-bottom: 25px;
`;
