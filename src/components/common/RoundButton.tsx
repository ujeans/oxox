import styled from "@emotion/styled";
// types
import { TextProps } from "../../types/react";

export interface ButtonStyleProps {
  size?: "small" | "medium" | "large";
  bgColor?: string;
  textColor?: string;
}

const RoundButton = ({
  text,
  size = "medium",
  isDone,
  ...props
}: TextProps &
  ButtonStyleProps & {
    isDone?: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton size={size} isDone={isDone} {...props}>
      {text}
    </StyledButton>
  );
};

export default RoundButton;

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return "padding: 6px 12px; font-size: 10px;";
    case "large":
      return "padding: 16px 32px; font-size: 18px;";
    case "medium":
    default:
      return "padding: 12px 24px; font-size: 16px;";
  }
};

const StyledButton = styled.button<{
  size: string;
  isDone?: boolean;
}>`
  border: none;
  border-radius: 20px;
  ${props => getSizeStyles(props.size)}
  background-color: ${props =>
    props.isDone ? props.theme.colors.gray300 : props.theme.colors.blue200};
  color: ${props =>
    props.isDone ? props.theme.colors.gray200 : props.theme.colors.gray400};
`;
