import styled from "@emotion/styled";
import { useState } from "react";
// components
import Label from "../../components/common/Label";
import { Input } from "../../components/common/Input";
import Button from "../../components/common/Button";

const PostForm = () => {
  const [value, setValue] = useState({
    title: "",
    desc: "",
    image: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;

    setValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <Label text="제목" />
        <Input
          placeholder="제목을 입력해주세요"
          value={value.title}
          onChange={handleChange}
          name="title"
        />
      </InputWrapper>
      <InputWrapper>
        <Label text="내용" />
        <Textarea
          placeholder="내용을 입력해주세요"
          type="textarea"
          value={value.desc}
          onChange={handleChange}
          name="desc"
        />
      </InputWrapper>
      <ImageInput></ImageInput>
      <StyledButton text="공유하기" disabled={isDisabled} type="submit" />
    </FormWrapper>
  );
};

export default PostForm;

const FormWrapper = styled.form``;

const InputWrapper = styled.div`
  margin-bottom: 25px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray100};
  background: none;
  color: ${props => props.theme.colors.white};
  box-sizing: border-box;

  &::placeholder {
    color: ${props => props.theme.colors.gray300};
  }
`;

const ImageInput = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  border: 1px dashed ${props => props.theme.colors.gray100};
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 440px;
`;
