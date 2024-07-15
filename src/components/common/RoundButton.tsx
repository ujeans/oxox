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
      {size === "medium" ? <Img src={Stopwatch} alt="stopwatch" /> : ""}
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
    props.isDone ? props.theme.colors.gray300 : props.theme.colors.blue200};
  color: ${props =>
    props.isDone ? props.theme.colors.gray200 : props.theme.colors.gray400};
`;

const Img = styled.img`
  width: 25px;
`;
