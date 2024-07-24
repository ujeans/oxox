import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// components
import NoList from "../../components/profile/NoList";
// containers
import UserInfo from "../../containers/profile/UserInfo";
import TabMenu from "../../containers/profile/TabMenu";
// types
import { PostDtoList } from "../../types/data/post";
// api
import axiosInstance from "../../api/config";
import ListItem from "../../components/posts/ListItem";
import styled from "@emotion/styled";

export default function ProfilePage() {
  const [posts, setPosts] = useState<PostDtoList>([]);
  const [currentTab, setClickTab] = useState(0);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  // 임시
  const myVotes = [];

  const fetchPosts = async (page: number, condition: string) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axiosInstance.get(
        `/posts?page=${page}&size=10&condition=${condition}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.posts.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...response.data.posts]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
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
    if (inView && hasMore) {
      const condition = currentTab === 0 ? "WRITER" : "JOIN";
      fetchPosts(page, condition);
      setPage(prevPage => prevPage + 1);
    }
  }, [inView, hasMore, currentTab]);

  return (
    <>
      <UserInfo />
      <TabMenu currentTab={currentTab} setClickTab={setClickTab} />
      <Wrapper>
        {currentTab === 0 ? (
          posts.length === 0 ? (
            <NoList message="앗, 공유한 글이 없어요" />
          ) : (
            <div>
              {posts.map((post, index) => (
                <ListItem key={`${post.id}-${index}`} post={post} />
              ))}
            </div>
          )
        ) : myVotes.length === 0 ? (
          <NoList message="앗, 투표애 참여한 글이 없어요" />
        ) : (
          <div>투표 참여 게시글 리스트</div>
        )}
        <div ref={ref} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 25px;
  height: calc(100vh - 300px);
  overflow-y: scroll;
`;
