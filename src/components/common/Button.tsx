import styled from "@emotion/styled";
// types
import { TextProps } from "../../types/react";

const Button = ({
  text,
  ...props
}: TextProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 12px 0;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  font-size: ${props => props.theme.typography.disclaimers.bold};
  background-color: ${props =>
    props.disabled ? props.theme.colors.blue50 : props.theme.colors.blue200};
  color: ${props =>
    props.disabled ? props.theme.colors.blue300 : props.theme.colors.gray400};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${props => props.theme.colors.blue400};
  }
`;
