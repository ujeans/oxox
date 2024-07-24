import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
  width?: string;
}

const Button = ({
  text,
  width = "100%",
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton width={width} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ disabled?: boolean; width: string }>`
  width: ${props => props.width};
  padding: 12px 0;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  font-size: ${props => props.theme.typography.disclaimers.bold};
  background-color: ${props =>
    props.disabled ? props.theme.colors.green50 : props.theme.colors.green200};
  color: ${props =>
    props.disabled ? props.theme.colors.green100 : props.theme.colors.gray500};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${props => props.theme.colors.green300};
  }
`;
