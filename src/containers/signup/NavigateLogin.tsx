import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const NavigateLogin = () => {
  const nav = useNavigate();

  const navigateTo = () => {
    nav("/users/login");
  };

  return (
    <Wrapper>
      <Text>이미 계정이 있나요?</Text>
      <LinkText onClick={navigateTo}>로그인</LinkText>
    </Wrapper>
  );
};

export default NavigateLogin;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Text = styled.span`
  margin-bottom: 5px;
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray50};
`;

const LinkText = styled.span`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.green200};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.blue400};
  }
`;
