import styled from "@emotion/styled";
// types
import { TextProps } from "../../types/react";
// assets
import Stopwatch from "../../assets/stopwatch.svg";

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
      {size === "medium" ? (
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Stopwatch.png"
          alt="Stopwatch"
          width="25"
          height="25"
        />
      ) : (
        ""
      )}
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
      return "padding: 6px 14px; font-size: 16px;";
  }
};

const StyledButton = styled.button<{
  size: string;
  isDone?: boolean;
}>`
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  ${props => getSizeStyles(props.size)}
  background-color: ${props =>
    props.isDone ? props.theme.colors.gray200 : props.theme.colors.green200};
  color: ${props =>
    props.isDone ? props.theme.colors.gray300 : props.theme.colors.gray500};
`;

const Img = styled.img`
  width: 25px;
`;
