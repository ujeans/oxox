import styled from "@emotion/styled";
import { HiPencil } from "react-icons/hi2";
import { useRecoilValue } from "recoil";
// recoil
import { userState } from "../../recoil/atoms";

const UserInfo = () => {
  const user = useRecoilValue(userState);

  return (
    <Container>
      <Image src={user?.profileEmoji} alt={user?.nickname} />
      <InfoWrapper>
        <NicknameBox>
          <Nickname>{user?.nickname}</Nickname>
          <PencilIcon />
        </NicknameBox>
        <Email>{user?.email}</Email>
      </InfoWrapper>
    </Container>
  );
};

export default UserInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 25px 15px 25px;
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
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
  color: ${props => props.theme.colors.gray50};
  cursor: pointer;
`;

const Email = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
`;
