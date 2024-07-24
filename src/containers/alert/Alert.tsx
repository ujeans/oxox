import styled from "@emotion/styled";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

interface AlertProps {
  onClose?: () => void;
}

const Alert = ({ onClose }: AlertProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <TextWrapper>
        <LargeSpan>로그인이 필요한 기능</LargeSpan>
        <Span>
          로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?
        </Span>
      </TextWrapper>
      <ButtonWrapper>
        <StyledButton text="취소" width={"100px"} onClick={onClose} />
        <Button
          text="확인"
          width={"100px"}
          onClick={() => navigate("/users/login")}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default Alert;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

const TextWrapper = styled.div`
  padding-top: 20px;
`;

const LargeSpan = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: ${props => props.theme.typography.paragraphs.large};
`;

const Span = styled.span`
  color: ${props => props.theme.colors.gray50};
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  background-color: ${props => props.theme.colors.gray50};
  color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props => props.theme.colors.gray200};
  }
`;
