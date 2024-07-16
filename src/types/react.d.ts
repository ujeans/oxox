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
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
