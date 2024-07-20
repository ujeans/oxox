import styled from "@emotion/styled";
// components
import Logo from "../logo/Logo";

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Logo fontSize="60px" />
      <Title>oxox에 오신 것을 환영합니다.</Title>
      <Description>
        oxox는 당신의 고민을 해결할 수 있는 서비스입니다.
      </Description>
    </Wrapper>
  );
};

export default WelcomeMessage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  margin: 30px 0 10px 0;
  font-size: 30px;
  font-weight: 700;
`;

const Description = styled.span`
  margin-bottom: 40px;
  font-size: ${props => props.theme.typography.paragraphs.default};
`;
