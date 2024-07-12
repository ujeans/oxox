import styled from "@emotion/styled";
// types
import { ChildrenProps } from "../../types/react";
// components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;

const Content = styled.div`
  min-height: 100%;
  margin-top: 63px;
  margin-bottom: 80px;
  background-color: ${props => props.theme.colors.gray500};
`;
