import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import ContentLayout from "../../components/posts/ContentLayout";
import EmojiButton from "../../components/common/EmojiButton";
import Modal from "../../components/common/Modal";
// containers
import PostContent from "../../containers/postDetail/PostContent";
import TotalComments from "../../containers/postDetail/TotalComments";
import Progressbar from "../../containers/postDetail/Progressbar";
import VoteModal from "../../containers/vote/Vote";
// api
import axiosInstance from "../../api/config";
// types
import { PostDto } from "../../types/data/post";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState<PostDto>();

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${id}`);
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    if (id) {
      fetchPostDetail();
    }
  }, [id]);

  return (
    <ContentLayout>
      <PostContent post={post} />
      <Progressbar />
      <TotalComments post={post} />
      <EmojiButton onClick={openModal}>
        {
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Ballot%20Box%20with%20Ballot.png"
            alt="Ballot Box with Ballot"
            width="25"
            height="25"
          />
        }
      </EmojiButton>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} height="300px">
        <VoteModal />
      </Modal>
    </ContentLayout>
  );
}
