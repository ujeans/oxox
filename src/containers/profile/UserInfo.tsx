import styled from "@emotion/styled";
import { HiPencil } from "react-icons/hi2";

const UserInfo = () => {
  return (
    <Container>
      <Image />
      <InfoWrapper>
        <NicknameBox>
          <Nickname>흥청망청솔로몬</Nickname>
          <PencilIcon />
        </NicknameBox>
        <Email>dsdsdsds@gmail.com</Email>
      </InfoWrapper>
    </Container>
  );
};

export default UserInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.gray300};
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: aliceblue;
`;

const InfoWrapper = styled.div``;

const NicknameBox = styled.div`
  display: flex;
  align-items: center;
`;

const Nickname = styled.span`
  margin-bottom: 3px;
  border: none;
  background: none;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.paragraphs.large};
`;

const PencilIcon = styled(HiPencil)`
  margin-left: 5px;
  color: ${props => props.theme.colors.gray100};
  cursor: pointer;
`;

const Email = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
`;
