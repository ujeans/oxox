import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
// types
import { ChildrenProps } from "../../types/react";
// components
import Header from "../../containers/layout/Header";
import Footer from "../../containers/layout/Footer";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname === "/users/login" ||
    location.pathname === "/users/signup";

  const hideFooter =
    hideHeaderFooter ||
    location.pathname === "/posts/new" ||
    location.pathname === "/posts/edit/:id";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <ContentWrapper>
        <MotionContainer>
          <Content hideHeaderFooter={hideHeaderFooter}>{children}</Content>
        </MotionContainer>
      </ContentWrapper>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;

const ContentWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: ${props => props.theme.colors.gray400};
`;

const MotionContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div<{ hideHeaderFooter: boolean }>`
  padding-top: ${({ hideHeaderFooter }) => (hideHeaderFooter ? "0" : "63px")};
  padding-bottom: ${({ hideHeaderFooter }) =>
    hideHeaderFooter ? "0" : "80px"};
  background-color: ${props => props.theme.colors.gray400};
`;
