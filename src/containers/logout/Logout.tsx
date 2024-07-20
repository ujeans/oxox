import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
// components
import Button from "../../components/common/Button";

export interface ModalProps {
  onClose?: () => void;
}

const Logout = ({ onClose }: ModalProps) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/users/login");
  };

  return (
    <Container>
      <TextWrapper>
        <Text>로그아웃 하시겠어요?</Text>
        <SubText>언제든지 돌아오셔도 좋아요...</SubText>
      </TextWrapper>
      <ButtonWrapper>
        <StyledButton text="취소" onClick={onClose} />
        <Button text="로그아웃" onClick={navigateTo} />
      </ButtonWrapper>
    </Container>
  );
};

export default Logout;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Text = styled.span`
  margin-bottom: 10px;
  font-size: ${props => props.theme.typography.paragraphs.large};
  font-weight: bold;
`;

const SubText = styled.span`
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 18px;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  background-color: ${props => props.theme.colors.gray50};
  color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props => props.theme.colors.gray200};
  }
`;
