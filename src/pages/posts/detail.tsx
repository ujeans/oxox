// assets
import Vote from "../../assets/vote.svg";
// components
import ContentLayout from "../../components/posts/ContentLayout";
import EmojiButton from "../../components/common/EmojiButton";
// containers
import PostContent from "../../containers/postDetail/PostContent";
import TotalComments from "../../containers/postDetail/TotalComments";
import Progressbar from "../../containers/postDetail/Progressbar";

export default function PostDetail() {
  return (
    <ContentLayout>
      <PostContent />
      <Progressbar />
      <TotalComments />
      <EmojiButton>{<img src={Vote} alt="vote" />}</EmojiButton>
    </ContentLayout>
  );
}
