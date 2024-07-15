import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
// types
import { ChildrenProps } from "../../types/react";
// components
import Header from "../../containers/layout/Header";
import Footer from "../../containers/layout/Footer";

const Layout = ({ children }: ChildrenProps) => {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname === "/users/login" ||
    location.pathname === "/users/signup";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Content hideHeaderFooter={hideHeaderFooter}>{children}</Content>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;

const Content = styled.div<{ hideHeaderFooter: boolean }>`
  min-height: ${({ hideHeaderFooter }) =>
    hideHeaderFooter ? "100%" : "calc(100% - 143px)"};
  padding-top: ${({ hideHeaderFooter }) => (hideHeaderFooter ? "0" : "63px")};
  padding-bottom: ${({ hideHeaderFooter }) =>
    hideHeaderFooter ? "0" : "80px"};
  background-color: ${props => props.theme.colors.gray500};
`;
