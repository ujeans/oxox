import styled from "@emotion/styled";
// components
import ListItem from "../../components/posts/ListItem";
// types
import { PostDto } from "../../types/data/post";

interface ListsProps {
  posts: PostDto[];
}

const Lists = ({ posts }: ListsProps) => {
  return (
    <Container>
      <Title>oxox 리스트</Title>
      <ListWrapper>
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))}
      </ListWrapper>
    </Container>
  );
};

export default Lists;

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding-right: 4px;
  flex-direction: column;
`;

const ListWrapper = styled.div`
  padding: 0 7px 0 16px;
  flex-grow: 1;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    height: 30px;
    border-radius: 6px;
    background: ${props => props.theme.colors.gray200};
  }
`;

const Title = styled.div`
  margin: 30px 0 20px 16px;
  font-size: ${props => props.theme.typography.headers.h3};
`;
