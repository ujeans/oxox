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
        {posts.map((post, index) => (
          <ListItem key={`${post.id}-${index}`} post={post} />
        ))}
      </ListWrapper>
      <div ref={inViewRef}></div>
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
