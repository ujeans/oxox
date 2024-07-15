import { useState } from "react";
// components
import ContentLayout from "../../components/posts/ContentLayout";
import NoList from "../../components/profile/NoList";
// containers
import UserInfo from "../../containers/profile/UserInfo";
import TabMenu from "../../containers/profile/TabMenu";

export default function ProfilePage() {
  const [currentTab, setClickTab] = useState(0);

  // 임시
  const myPosts = [1, 2, 3];
  const myVotes = [];

  return (
    <ContentLayout>
      <UserInfo />
      <TabMenu currentTab={currentTab} setClickTab={setClickTab} />
      {currentTab === 0 ? (
        myPosts.length === 0 ? (
          <NoList message="앗, 공유한 글이 없어요" />
        ) : (
          <div>내가 쓴 게시글 리스트</div>
        )
      ) : myVotes.length === 0 ? (
        <NoList message="앗, 투표애 참여한 글이 없어요" />
      ) : (
        <div>투표 참여 게시글 리스트</div>
      )}
    </ContentLayout>
  );
}
