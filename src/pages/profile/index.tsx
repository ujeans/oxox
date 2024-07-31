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
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  const isFetching = useRef(false);

  const fetchPosts = async (page: number, condition: string) => {
    if (isFetching.current || !hasMore) return;
    isFetching.current = true;

    try {
      const response = await axiosInstance.get(
        `/posts?page=${page}&size=10&condition=${condition}`
      );

      if (response.data.posts.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      isFetching.current = false;
    }
  };

  useEffect(() => {
    setPage(0);
    setHasMore(true);
    setPosts([]);
    const condition = currentTab === 0 ? "WRITER" : "JOIN";
    fetchPosts(0, condition);

    window.scrollTo(0, 0);
  }, [currentTab]);

  useEffect(() => {
    if (inView && hasMore && !isFetching.current) {
      const condition = currentTab === 0 ? "WRITER" : "JOIN";
      fetchPosts(page + 1, condition);
      setPage(prevPage => prevPage + 1);
    }
  }, [inView, hasMore, currentTab, page]);

  return (
    <>
      <UserInfo />
      <TabMenu currentTab={currentTab} setClickTab={setClickTab} />
      <MenuList currentTab={currentTab} posts={posts} inViewRef={ref} />
    </>
  );
}
