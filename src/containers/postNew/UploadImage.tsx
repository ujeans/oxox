import styled from "@emotion/styled";
import { ImFilePicture } from "react-icons/im";
import React, { Dispatch, SetStateAction } from "react";
// types
import { CreatePostDto } from "../../types/data/post";

interface UploadImageProps {
  imageSrc: string;
  setImageSrc: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<CreatePostDto>>;
}

const UploadImage = ({ imageSrc, setImageSrc, setValue }: UploadImageProps) => {
  const handleFileChange = (file: File) => {
    setImageSrc(URL.createObjectURL(file));
    setValue(prev => ({
      ...prev,
      thumbnail: file,
    }));
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      handleFileChange(file);
    }
  };

  return (
    <Preview
      hasImage={!!imageSrc}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <FileInput type="file" onChange={handleChange} />
      {!imageSrc && (
        <>
          <ImFilePicture size={25} />
          <Text>클릭 혹은 파일을 이곳에 드롭하세요.</Text>
        </>
      )}
      {imageSrc && <Img src={imageSrc} alt="preview-img" />}
    </Preview>
  );
};

export default UploadImage;

const Preview = styled.label<{ hasImage: boolean }>`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: ${({ hasImage, theme }) =>
    hasImage ? "none" : `1px dashed ${theme.colors.gray200}`};
  cursor: pointer;
  color: ${props => props.theme.colors.gray200};

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
