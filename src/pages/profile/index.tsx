import styled from "@emotion/styled";
// components
import ContentLayout from "../../components/posts/ContentLayout";
// containers
import UserInfo from "../../containers/profile/UserInfo";

export default function ProfilePage() {
  return (
    <ContentLayout>
      <UserInfo />
    </ContentLayout>
  );
}
