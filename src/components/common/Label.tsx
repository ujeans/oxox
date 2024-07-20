import styled from "@emotion/styled";
// types
import { TextProps } from "../../types/react";

const Label = ({ text }: TextProps) => {
  return <StyledLabel>{text}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray50};
`;
