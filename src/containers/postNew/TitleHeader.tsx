import styled from "@emotion/styled";
// assets
import Thinkingface from "../../assets/thinkingface.svg";

const TitleHeader = () => {
  return (
    <Wrapper>
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png"
        alt="Face with Monocle"
        width="25"
        height="25"
      />
      <Title>당신의 고민은 무엇인가요?</Title>
    </Wrapper>
  );
};

export default TitleHeader;

const Wrapper = styled.div`
  margin: 15px 0 40px 0;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  margin: 0 5px;
  font-size: ${props => props.theme.typography.headers.h2};
`;
