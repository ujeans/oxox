import styled from "@emotion/styled";
// types
import { InputProps } from "../../types/react";

export const Input = ({
  placeholder,
  icon,
  value,
  name,
  onChange,
  onKeyPress,
}: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        name={name}
        hasIcon={!!icon}
      />
      {icon && (
        <IconWrapper onClick={e => e.stopPropagation()}>{icon}</IconWrapper>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledInput = styled.input<{ hasIcon: boolean }>`
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray200};
  background: none;
  color: ${props => props.theme.colors.white};

  &::placeholder {
    color: ${props => props.theme.colors.gray200};
  }
`;
