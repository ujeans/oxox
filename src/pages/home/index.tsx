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

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const handlePostNew = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsOpen(true);
    } else {
      navigateTo("/posts/new");
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axiosInstance.get(`/posts?page=${page}&size=10`);

      if (Array.isArray(response.data)) {
        setPosts(prevPosts => [...prevPosts, ...response.data]);
        setPage(page => page + 1);
      } else if (response.data && Array.isArray(response.data.posts)) {
        setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
        setPage(page => page + 1);
      } else {
        console.error("Unexpected response data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
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
