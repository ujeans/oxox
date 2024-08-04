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
import Vote from "../../containers/vote/Vote";
import Alert from "../../containers/alert/Alert";
// api
import axiosInstance from "../../api/config";
// types
import { PostDetailDto } from "../../types/data/post";
import { CommentDtoList } from "../../types/data/comment";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetailDto>();
  const [comments, setComments] = useState<CommentDtoList | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<"vote" | "alert">("vote");
  const [commentCount, setCommentCount] = useState(0);

  const openModal = (content: "vote" | "alert") => {
    setModalContent(content);
    setIsOpen(true);
  };

  const checkLogin = (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) {
      openModal("alert");
      return false;
    }
    return true;
  };

  const handleEmojiButtonClick = () => {
    if (checkLogin()) {
      openModal("vote");
    }
  };

  const fetchPostDetail = async () => {
    try {
      const response = await axiosInstance.get(`/posts/${id}`);
      setPost(response.data);
      setCommentCount(response.data.commentCount);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axiosInstance.get(`/comments/${id}/all`);
      setComments(response.data);
      setCommentCount(response.data.length);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
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
      <TotalComments
        postId={post.id}
        comments={comments}
        checkLogin={checkLogin}
        fetchComments={fetchComments}
        commentCount={commentCount}
      />
      <EmojiButton onClick={handleEmojiButtonClick}>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Ballot%20Box%20with%20Ballot.png"
          alt="Ballot Box with Ballot"
          width="25"
          height="25"
        />
      </EmojiButton>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        height={modalContent === "vote" ? "300px" : "150px"}
        position={modalContent === "vote" ? "bottom" : "center"}
      >
        {modalContent === "vote" ? (
          <Vote post={post} />
        ) : (
          <Alert onClose={() => setIsOpen(false)} />
        )}
      </Modal>
    </ContentLayout>
  );
}
