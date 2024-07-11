import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;

const LayoutStyled = styled.div`
  max-width: 490px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${props => props.theme.colors.gray500};
`;
