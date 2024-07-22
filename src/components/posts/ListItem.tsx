import styled from "@emotion/styled";
import { BiSolidComment } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// components
import RoundButton from "../common/RoundButton";
// types
import { PostDto } from "../../types/data/post";

interface PostProps {
  post: PostDto;
}

const ListItem = ({ post }: PostProps) => {
  const nav = useNavigate();

  const createAt = new Date(post.createAt);
  const currentAt = new Date();

  const deadline = new Date(createAt.getTime() + 24 * 60 * 60 * 1000);

  const timeDiff = deadline.getTime() - currentAt.getTime();
  const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));

  const navigateTo = (post: PostDto) => {
    nav(`/posts/$${post.id}`);
  };

  return (
    <Wrapper key={post.id} onClick={() => navigateTo(post)}>
      <Image src={post.thumbnailUrl} alt={post.title} />
      <InfoWrapper>
        <Top>
          <RoundButton
            text={post.isDone ? "마감" : "진행중"}
            isDone={post.isDone}
            size="small"
          />
          <Comment>
            <BiSolidComment size={20} />
            <Count>{post.commentCount}</Count>
          </Comment>
        </Top>
        <Question>{post.title}</Question>
        <Time>{hoursLeft}시간 남음</Time>
        <Graph></Graph>
      </InfoWrapper>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-gap: 10px;
  height: 90px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 90px;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  background-color: aliceblue;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: ${props => props.theme.colors.gray50};
`;

const Count = styled.div`
  margin-left: 3px;
`;

const Question = styled.div`
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const Time = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray50};
`;

const Graph = styled.div`
  width: calc(100% - 50px);
  height: 12px;
  border-radius: 20px;
  background-color: aliceblue;
`;
