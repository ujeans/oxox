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
    if (isFetching.current || !hasMore) return; // 중복 호출 방지
    isFetching.current = true;

    try {
      const response = await axiosInstance.get(
        `/posts?page=${page}&size=10&condition=${condition}`
      );

      console.log(response.data);

      if (response.data.posts.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      isFetching.current = false; // 호출 종료 시 플래그 리셋
    }
  };

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setPosts([]);
    const condition = currentTab === 0 ? "WRITER" : "JOIN";
    fetchPosts(1, condition);
  }, [currentTab]);

  useEffect(() => {
    if (inView && hasMore && !isFetching.current) {
      const condition = currentTab === 0 ? "WRITER" : "JOIN";
      fetchPosts(page, condition);
      setPage(prevPage => prevPage + 1);
    }
  }, [inView, hasMore, currentTab]);

  return (
    <>
      <UserInfo />
      <TabMenu currentTab={currentTab} setClickTab={setClickTab} />
      <MenuList currentTab={currentTab} posts={posts} inViewRef={ref} />
    </>
  );
}
