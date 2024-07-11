import styled from "@emotion/styled";
// types
import { TextProps } from "../../types/react";

const Button = ({ text }: TextProps) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px 0;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  font-size: ${props => props.theme.typography.disclaimers.bold};
  background-color: ${props => props.theme.colors.blue200};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.blue400};
  }
`;
