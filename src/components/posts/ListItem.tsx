import styled from "@emotion/styled";
import { BiSolidComment } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// components
import RoundButton from "../common/RoundButton";
import Progressbar from "./Progressbar";
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

  const isAgree = post.done && post.agreeCount > post.disAgreeCount;
  const isDraw = post.done && post.agreeCount === post.disAgreeCount;

  const navigateTo = (post: PostDto) => {
    nav(`/posts/${post.id}`);
  };

  return (
    <Wrapper
      key={post.id}
      onClick={() => navigateTo(post)}
      hasThumbnail={!!post.thumbnailUrl}
    >
      {post.thumbnailUrl && <Image src={post.thumbnailUrl} alt={post.title} />}
      <InfoWrapper>
        <Top>
          <RoundButton
            text={post.done ? "마감" : "진행중"}
            isDone={post.done}
            size="small"
          />
          <Comment>
            <BiSolidComment size={20} />
            <Count>{post.commentCount}</Count>
          </Comment>
        </Top>
        <Question>{post.title}</Question>
        <Time isDone={post.done} isAgree={isAgree} isDraw={isDraw}>
          {post.done
            ? isDraw
              ? "찬반표가 똑같아요..."
              : isAgree
              ? "찬성"
              : "반대"
            : `${hoursLeft}시간 남음`}
        </Time>
        <Progressbar
          agreeCount={post.agreeCount}
          disAgreeCount={post.disAgreeCount}
          showRatio={false}
        />
      </InfoWrapper>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.div<{ hasThumbnail: boolean }>`
  display: grid;
  grid-template-columns: ${({ hasThumbnail }) =>
    hasThumbnail ? "90px 1fr" : "1fr"};
  grid-gap: 10px;
  height: 90px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  border: 1px solid rgba(18, 18, 18, 0.7);
  object-fit: cover;
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

const Time = styled.div<{ isDone: boolean; isAgree: boolean; isDraw: boolean }>`
  font-size: ${props =>
    props.isDone
      ? props.theme.typography.disclaimers.bold
      : props.theme.typography.disclaimers.default};
  color: ${props =>
    props.isDone
      ? props.isDraw
        ? props.theme.colors.green200
        : props.isAgree
        ? props.theme.colors.pink100
        : props.theme.colors.blue100
      : props.theme.colors.gray50};
`;
