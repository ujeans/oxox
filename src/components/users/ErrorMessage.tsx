import styled from "@emotion/styled";
// icons
import { PiWarningCircleFill } from "react-icons/pi";
// types
import { ChildrenProps } from "../../types/react";

const ErrorMessage = ({ children }: ChildrenProps) => {
  return (
    <Wrapper>
      <StyledWarningIcon size={12} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default ErrorMessage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  color: ${props => props.theme.colors.red50};
`;
const Text = styled.div`
  font-size: 10px;
`;

const StyledWarningIcon = styled(PiWarningCircleFill)`
  margin-right: 3px;
`;
