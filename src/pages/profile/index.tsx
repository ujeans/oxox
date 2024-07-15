import styled from "@emotion/styled";
// components
import ContentLayout from "../../components/posts/ContentLayout";
// containers
import UserInfo from "../../containers/profile/UserInfo";
import { useState } from "react";

export default function ProfilePage() {
  const [currentTab, clickTab] = useState(0);

  return (
    <ContentLayout>
      <UserInfo />
      <TabWrapper>
        <Menu isActive={currentTab === 0} onClick={() => clickTab(0)}>
          내가 쓴
        </Menu>
        <Menu isActive={currentTab === 1} onClick={() => clickTab(1)}>
          투표 참여
        </Menu>
      </TabWrapper>
    </ContentLayout>
  );
}

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  padding: 3px;
  border-radius: 24px;

  background-color: ${props => props.theme.colors.blue600};
`;

const Menu = styled.div<{ isActive: boolean }>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: ${props =>
    props.isActive
      ? props.theme.typography.paragraphs.bold
      : props.theme.typography.paragraphs.default};
  color: ${props =>
    props.isActive ? props.theme.colors.gray400 : props.theme.colors.white};
  background-color: ${props =>
    props.isActive ? props.theme.colors.blue400 : "transparent"};
  cursor: pointer;
`;
