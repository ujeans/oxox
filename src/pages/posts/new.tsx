// components
import ContentLayout from "../../components/posts/ContentLayout";
// containers
import TitleHeader from "../../containers/postNew/TitleHeader";
import PostForm from "../../containers/postNew/PostForm";

export default function PostNew() {
  return (
    <ContentLayout>
      <TitleHeader />
      <PostForm />
    </ContentLayout>
  );
}
