import styled from "@emotion/styled";

interface MessageProps {
  message: string;
}

const NoList = ({ message }: MessageProps) => {
  return <Text>{message}</Text>;
};

export default NoList;

const Text = styled.div`
  margin-top: 200px;
  text-align: center;
  font-size: ${props => props.theme.typography.paragraphs.default};
`;
