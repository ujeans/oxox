import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface NavigateProps {
  currentPage: "login" | "signup";
}

const Navigate = ({ currentPage }: NavigateProps) => {
  const nav = useNavigate();

  const navigateTo = (content: "login" | "signup") => {
    if (content === "login") {
      nav("/users/login");
    } else {
      nav("/users/signup");
    }
  };

  return (
    <Wrapper>
      {currentPage === "signup" ? (
        <>
          <Text>이미 회원이신가요?</Text>
          <LinkText onClick={() => navigateTo("login")}>로그인</LinkText>
        </>
      ) : (
        <>
          <Text>아직 회원이 아니신가요?</Text>
          <LinkText onClick={() => navigateTo("signup")}>회원가입</LinkText>
        </>
      )}
    </Wrapper>
  );
};

export default Navigate;

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
