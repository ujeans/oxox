import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// containers
import EmojiButton from "../../components/common/EmojiButton";
import Lists from "../../containers/home/Lists";
// types
import { PostDtoList } from "../../types/data/post";
// api
import axiosInstance from "../../api/config";

export default function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostDtoList>([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const { ref, inView } = useInView();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const handlePostNew = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigateTo("/login/users");
    } else {
      navigateTo("/posts/new");
    }
  };

  const fetchPosts = async (page: number) => {
    try {
      const response = await axiosInstance.get(`/posts?page=${page}&size=10`);

      const { posts: postsData, totalPage: fetchedTotalPage } = response.data;

      if (Array.isArray(postsData)) {
        setPosts(prevPosts => [...prevPosts, ...postsData]);
        setTotalPage(fetchedTotalPage);
      } else if (postsData && Array.isArray(postsData.posts)) {
        setPosts(prevPosts => [...prevPosts, ...postsData.posts]);
        setTotalPage(fetchedTotalPage);
      } else {
        console.error("Unexpected response data format:", postsData);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(0);
  }, []);

  useEffect(() => {
    if (inView && page < totalPage - 1) {
      console.log(inView, "무한 스크롤 요청");
      fetchPosts(page + 1);
      setPage(prevPage => prevPage + 1);
    }
  }, [inView, page, totalPage]);

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
    </>
  );
}
