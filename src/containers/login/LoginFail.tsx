import styled from "@emotion/styled";
// icons
import { PiWarningCircleFill } from "react-icons/pi";
import React from "react";

interface LoginFailProps {
  message: string;
}

const LoginFail  = ({message}:LoginFailProps) => {
  return (
    <Wrapper>
      <StyledWarningIcon size={15} />
      <Message>로그인 실패</Message>
      <Description>{message}</Description>
    </Wrapper>
  );
};

export default LoginFail;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "icon message"
    "icon description";
  margin-top: 50px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.red50};
  background-color: ${props => props.theme.colors.red100};
  color: ${props => props.theme.colors.gray50};
  font-size: ${props => props.theme.typography.disclaimers.default};
`;

const StyledWarningIcon = styled(PiWarningCircleFill)`
  grid-area: icon;
  margin-right: 5px;
`;

const Message = styled.div`
  grid-area: message;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Description = styled.span`
  grid-area: description;
  font-size: ${props => props.theme.typography.disclaimers.default};
`;
