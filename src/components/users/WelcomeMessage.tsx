import styled from "@emotion/styled";

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Logo>oxox</Logo>
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

const Logo = styled.span`
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: bold;
`;

const Title = styled.span`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`;

const Description = styled.span`
  margin-bottom: 40px;
  font-size: ${props => props.theme.typography.paragraphs.default};
`;
