import styled from "@emotion/styled";
// types
import { ChildrenProps } from "../../types/react";
import WelcomeMessage from "./WelcomeMessage";

function Container({ children }: ChildrenProps) {
  return (
    <StyledContainer>
      <WelcomeMessage />
      {children}
    </StyledContainer>
  );
}

export default Container;

const StyledContainer = styled.div`
  padding: 80px 50px;
`;
