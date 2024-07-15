import styled from "@emotion/styled";
import { useState } from "react";
import { ImFilePicture } from "react-icons/im";
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
  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise(resole => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resole();
      };
    });
  };

  const handleDrop = e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    encodeFileToBase64(file);
  };

  const handleDragOver = e => {
    e.preventDefault();
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
      <Preview
        hasImage={!!imageSrc}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <FileInput
          type="file"
          onChange={e => {
            encodeFileToBase64(e.target.files[0]);
          }}
        />
        {!imageSrc && (
          <>
            <ImFilePicture size={25} />
            <Text>클릭 혹은 파일을 이곳에 드롭하세요.</Text>
          </>
        )}
        {imageSrc && <Img src={imageSrc} alt="preview-img" />}
      </Preview>
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

const Preview = styled.label`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: ${({ hasImage, theme }) =>
    hasImage ? "none" : `1px dashed ${theme.colors.gray100}`};
  cursor: pointer;
  color: ${props => props.theme.colors.gray100};

  p,
  svg {
    display: ${({ hasImage }) => (hasImage ? "none" : "block")};
  }
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

const FileInput = styled.input`
  display: none;
`;

const Text = styled.span`
  margin-top: 20px;
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 440px;
`;
