import { useState } from "react";

// assets
import Vote from "../../assets/vote.svg";
// components
import ContentLayout from "../../components/posts/ContentLayout";
import EmojiButton from "../../components/common/EmojiButton";
import Modal from "../../components/common/Modal";
// containers
import PostContent from "../../containers/postDetail/PostContent";
import TotalComments from "../../containers/postDetail/TotalComments";
import Progressbar from "../../containers/postDetail/Progressbar";

export default function PostDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <ContentLayout>
      <PostContent />
      <Progressbar />
      <TotalComments />
      <EmojiButton onClick={openModal}>
        {<img src={Vote} alt="vote" />}
      </EmojiButton>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </ContentLayout>
  );
}
