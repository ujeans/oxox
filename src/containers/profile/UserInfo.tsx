import styled from "@emotion/styled";
import { useState } from "react";
import { HiPencil } from "react-icons/hi2";
import { useRecoilValue, useSetRecoilState } from "recoil";
// recoil
import { userState } from "../../recoil/atoms";
// api
import axiosInstance from "../../api/config";

const UserInfo = () => {
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const [isEditing, setIsEditing] = useState(false);
  const [newNickname, setNewNickname] = useState(user?.nickname || "");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };

  const handleEditSubmit = async () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("nickname", newNickname);

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      await axiosInstance.patch("/profiles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(prevUser =>
        prevUser ? { ...prevUser, nickname: newNickname } : null
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEditSubmit();
      setIsEditing(false);
    }
  };

  return (
    <Container>
      <Image src={user?.profileEmoji} alt={user?.nickname} />
      <InfoWrapper>
        <NicknameBox>
          {isEditing ? (
            <NicknameInput
              value={newNickname}
              onChange={handleNicknameChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <Nickname>{newNickname}</Nickname>
          )}
          <PencilIcon onClick={handleEditClick} />
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

const NicknameInput = styled.input`
  margin-bottom: 3px;
  border: none;
  background: none;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.typography.paragraphs.large};
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
  &:focus {
    outline: none;
  }
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
