import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// containers
import UserInfo from "../../containers/profile/UserInfo";
import TabMenu from "../../containers/profile/TabMenu";
import MenuList from "../../containers/profile/MenuList";
// types
import { PostDtoList } from "../../types/data/post";
// api
import axiosInstance from "../../api/config";

export default function ProfilePage() {
  const [posts, setPosts] = useState<PostDtoList>([]);
  const [currentTab, setClickTab] = useState(0);
  const [page, setPage] = useState(0);
  const { ref, inView } = useInView();
  const isFetching = useRef(false);

  const fetchPosts = async (condition: string) => {
    if (isFetching.current) return;
    isFetching.current = true;

    try {
      const response = await axiosInstance.get(
        `/posts?page=${page}&size=10&condition=${condition}`
      );

      if (response.data.posts.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      isFetching.current = false;
    }
  };

  useEffect(() => {
    setPage(0);
    setPosts([]);
    const condition = currentTab === 0 ? "WRITER" : "JOIN";
    fetchPosts(condition);

    window.scrollTo(0, 0);
  }, [currentTab]);

  useEffect(() => {
    if (inView && !isFetching.current) {
      const condition = currentTab === 0 ? "WRITER" : "JOIN";
      fetchPosts(condition);
      setPage(prevPage => prevPage + 1);
    }
  }, [inView, currentTab, page]);

  return (
    <>
      <UserInfo />
      <TabMenu currentTab={currentTab} setClickTab={setClickTab} />
      <MenuList currentTab={currentTab} posts={posts} inViewRef={ref} />
    </>
  );
}
