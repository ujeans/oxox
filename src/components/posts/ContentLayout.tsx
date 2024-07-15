import styled from "@emotion/styled";
// types
import { ChildrenProps } from "../../types/react";

const ContentLayout = ({ children }: ChildrenProps) => {
  return <Container>{children}</Container>;
};

export default ContentLayout;

const Container = styled.div`
  padding: 25px;
`;
