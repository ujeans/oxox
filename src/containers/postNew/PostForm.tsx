import styled from "@emotion/styled";
import { useEffect, useState } from "react";
// components
import Label from "../../components/common/Label";
import { Input } from "../../components/common/Input";
import Button from "../../components/common/Button";
// containers
import UploadImage from "./UploadImage";
// api
import axiosInstance from "../../api/config";

const PostForm = () => {
  const [value, setValue] = useState<{
    title: string;
    content: string;
    thumbnail: string | File;
  }>({
    title: "",
    content: "",
    thumbnail: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const isFormFilled = value.title || value.content || imageSrc;
    setIsDisabled(!isFormFilled);
  }, [value, imageSrc]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", value.title);
    formData.append("content", value.content);
    if (value.thumbnail) {
      formData.append("image", value.thumbnail);
    }

    console.log(value);

    const token = localStorage.getItem("token");

    try {
      const res = await axiosInstance.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // 성공 시 폼 초기화 및 다른 작업 수행
      // setValue({ title: "", desc: "", image: "" });
      // setImageSrc("");

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={value.content}
          onChange={handleChange}
          name="content"
        />
      </InputWrapper>
      <UploadImage
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        setValue={setValue}
      />
      <StyledButton text="공유하기" disabled={isDisabled} type="submit" />
    </form>
  );
};

export default PostForm;

const InputWrapper = styled.div`
  margin-bottom: 25px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray200};
  background: none;
  color: ${props => props.theme.colors.white};
  box-sizing: border-box;

  &::placeholder {
    color: ${props => props.theme.colors.gray200};
  }
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 440px;
`;
