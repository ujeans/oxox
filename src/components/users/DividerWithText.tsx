import styled from "@emotion/styled";
// types
import { TextProps } from "../../types/react";

const DividerWithText = ({ text }: TextProps) => {
  return <Box>{text}</Box>;
};

export default DividerWithText;

const Box = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray50};
  margin: 30px 0px;

  &:before {
    content: "";
    flex-grow: 1;
    background-color: ${props => props.theme.colors.gray50};
    height: 1px;
    font-size: 0;
    line-height: 0px;
    margin: 0px 16px 0px 0px;
  }
  &:after {
    content: "";
    flex-grow: 1;
    background-color: ${props => props.theme.colors.gray50};
    height: 1px;
    font-size: 0;
    line-height: 0px;
    margin: 0px 0px 0px 16px;
  }
`;
