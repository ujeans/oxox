import { ReactNode } from "react";

export type ChildrenProps = {
  children?: ReactNode;
};

export interface TextProps {
  text: string;
}

export interface InputProps {
  placeholder?: string;
  icon?: React.ReactNode;
}
