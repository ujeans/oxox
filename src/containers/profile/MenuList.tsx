import styled from "@emotion/styled";
// components
import NoList from "../../components/profile/NoList";
import ListItem from "../../components/posts/ListItem";
// types
import { PostDto } from "../../types/data/post";

interface MenuListProps {
  currentTab: number;
  posts: PostDto[];
  inViewRef: (node?: Element | null) => void;
}

const MenuList = ({ currentTab, posts, inViewRef }: MenuListProps) => {
  return (
    <Wrapper>
      {currentTab === 0 ? (
        posts.length === 0 ? (
          <NoList message="앗, 공유한 글이 없어요" />
        ) : (
          <>
            {posts.map((post, index) => (
              <ListItem key={`${post.id}-${index}`} post={post} />
            ))}
          </>
        )
      ) : posts.length === 0 ? (
        <NoList message="앗, 투표애 참여한 글이 없어요" />
      ) : (
        <>
          {posts.map((post, index) => (
            <ListItem key={`${post.id}-${index}`} post={post} />
          ))}
        </>
      )}
      <div ref={inViewRef} />
    </Wrapper>
  );
};

export default MenuList;

const Wrapper = styled.div`
  padding: 0 25px;
  height: calc(100vh - 300px);
  overflow-y: scroll;
`;
