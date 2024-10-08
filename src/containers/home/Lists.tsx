import styled from "@emotion/styled";
// components
import ListItem from "../../components/posts/ListItem";
// types
import { PostDto } from "../../types/data/post";

interface ListsProps {
  posts: PostDto[];
  inViewRef: (node?: Element | null) => void;
}

const Lists = ({ posts, inViewRef }: ListsProps) => {
  return (
    <Container>
      <Title>oxox 리스트</Title>
      <ListWrapper>
        {posts.length === 0 ? (
          <NoPosts>아직 등록된 게시글이 없어요</NoPosts>
        ) : (
          posts.map((post, index) => (
            <ListItem key={`${post.id}-${index}`} post={post} />
          ))
        )}
        <div ref={inViewRef} />
      </ListWrapper>
    </Container>
  );
};

export default Lists;

const Container = styled.div`
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
`;

const ListWrapper = styled.div`
  padding: 0 16px;
  overflow-y: scroll;
`;

const Title = styled.div`
  margin: 30px 0 20px 16px;
  font-size: ${props => props.theme.typography.headers.h3};
`;

const NoPosts = styled.div`
  margin-top: 100px;
  text-align: center;
`;
