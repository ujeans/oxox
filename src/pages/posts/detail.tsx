import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import ContentLayout from "../../components/posts/ContentLayout";
import Progressbar from "../../components/posts/Progressbar";
import EmojiButton from "../../components/common/EmojiButton";
import Modal from "../../components/common/Modal";
// containers
import PostContent from "../../containers/postDetail/PostContent";
import TotalComments from "../../containers/postDetail/TotalComments";
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

  const checkLogin = (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      return false;
    }
    return true;
  };

  const handleEmojiButtonClick = () => {
    if (checkLogin()) {
      openModal();
    }
  };

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    if (id) {
      fetchPostDetail();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <ContentLayout>
      <PostContent post={post} />
      <Progressbar
        agreeCount={post.agreeCount}
        disAgreeCount={post.disAgreeCount}
        showRatio={true}
      />
      <TotalComments post={post} checkLogin={checkLogin} />
      <EmojiButton onClick={handleEmojiButtonClick}>
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
