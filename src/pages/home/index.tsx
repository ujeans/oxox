import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// containers
import EmojiButton from "../../components/common/EmojiButton";
import Lists from "../../containers/home/Lists";
import Alert from "../../containers/alert/Alert";
// components
import Modal from "../../components/common/Modal";
// types
import { PostDtoList } from "../../types/data/post";
// api
import axiosInstance from "../../api/config";

export default function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostDtoList>([]);
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView();

  const handlePostNew = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsOpen(true);
    } else {
      navigate("/posts/new");
    }
  };

  const updatePostsAndPage = (newPosts: PostDtoList) => {
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get(`/posts?page=${page}&size=10`);
        const newPosts = response.data.posts || response.data;

        if (Array.isArray(newPosts)) {
          updatePostsAndPage(newPosts);
        } else {
          console.error("Unexpected response data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (inView) {
      fetchPosts();
    }
  }, [inView]);

  return (
    <>
      <Lists posts={posts} inViewRef={ref} />
      <EmojiButton onClick={handlePostNew}>
        {
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Pencil.png"
            alt="Pencil"
            width="25"
            height="25"
          />
        }
      </EmojiButton>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        height={"150px"}
        position={"center"}
      >
        <Alert onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}
