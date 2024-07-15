// components
import ContentLayout from "../../components/posts/ContentLayout";
// containers
import PostContent from "../../containers/postDetail/PostContent";
import TotalComments from "../../containers/postDetail/ TotalComments";
import Progressbar from "../../containers/postDetail/Progressbar";

export default function PostDetail() {
  return (
    <ContentLayout>
      <PostContent />
      <Progressbar />
      <TotalComments />
    </ContentLayout>
  );
}
