import styled from "@emotion/styled";
// components
import Logo from "../logo/Logo";

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Logo fontSize="60px" />
      <Title>OXOX에 오신 것을 환영합니다.</Title>
      <Description>
        OXOX는 당신의 고민을 해결할 수 있는 서비스입니다.
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

const Title = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  font-size: 1.5rem;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.gray50};
  font-size: ${props => props.theme.typography.paragraphs.default};
`;
