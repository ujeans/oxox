import styled from "@emotion/styled";
// types
import { ChildrenProps } from "../../types/react";

const EmojiButton = ({ children }: ChildrenProps) => {
  return <Button>{children}</Button>;
};

export default EmojiButton;

const Button = styled.button`
  position: fixed;
  right: calc(50% - 230px);
  bottom: 100px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.blue200};
  cursor: pointer;
`;
