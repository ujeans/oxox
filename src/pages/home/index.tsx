import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const navigateTo = () => {
    navigate("/posts/new");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get(
          "/posts?page=0&size=10&condition=BEST_REACTION"
        );

        const postsData = response.data;

        if (Array.isArray(postsData)) {
          setPosts(postsData);
        } else if (postsData && Array.isArray(postsData.posts)) {
          setPosts(postsData.posts);
        } else {
          console.error("Unexpected response data format:", postsData);
        }

        console.log(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Lists posts={posts} />
      <EmojiButton onClick={navigateTo}>
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
