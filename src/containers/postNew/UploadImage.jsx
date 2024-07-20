import styled from "@emotion/styled";
import { ImFilePicture } from "react-icons/im";

const UploadImage = ({ imageSrc, setImageSrc, setValue }) => {
  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise(resole => {
      reader.onload = () => {
        setImageSrc(reader.result);
        setValue(prev => ({
          ...prev,
          image: reader.result,
        }));
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

  const handleChange = e => {
    encodeFileToBase64(e.target.files[0]);
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

const Preview = styled.label`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: ${({ hasImage, theme }) =>
    hasImage ? "none" : `1px dashed ${theme.colors.gray50}`};
  cursor: pointer;
  color: ${props => props.theme.colors.gray50};

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
