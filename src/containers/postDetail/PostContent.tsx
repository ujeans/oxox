import styled from "@emotion/styled";
// components
import RoundButton from "../../components/common/RoundButton";
// types
import { PostDto } from "../../types/data/post";

interface PostProps {
  post?: PostDto;
}

const getTimeDifference = (createAt: string) => {
  const createdAtDate = new Date(createAt);
  const now = new Date();
  const diffInMs = now.getTime() - createdAtDate.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays}일 전`;
  } else {
    return `${diffInHours}시간 전`;
  }
};

const getRemainingTime = (createAt: string) => {
  const createdAtDate = new Date(createAt);
  const now = new Date();
  const deadline = new Date(createdAtDate.getTime() + 24 * 60 * 60 * 1000);
  const diffInMs = deadline.getTime() - now.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffInSeconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  return `${diffInHours}:${diffInMinutes < 10 ? "0" : ""}${diffInMinutes}:${
    diffInSeconds < 10 ? "0" : ""
  }${diffInSeconds}`;
};

const PostContent = ({ post }: PostProps) => {
  const timeDifference = post ? getTimeDifference(post.createAt) : "";
  const remainingTime = post ? getRemainingTime(post.createAt) : "";

  return (
    <>
      <Title>{post?.title}</Title>
      <Description>
        {post?.user.nickname} &middot; {timeDifference}
      </Description>
      <Image src={post?.thumbnailUrl} alt={post?.title} />
      <Content>{post?.content}</Content>
      <ButtonWrapper>
        <RoundButton text={remainingTime} size="medium" />
      </ButtonWrapper>
    </>
  );
};

export default PostContent;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  font-size: ${props => props.theme.typography.headers.h2};
`;

const Description = styled.div`
  margin: 13px 0;
  text-align: center;
  font-size: ${props => props.theme.typography.paragraphs.default};
  color: ${props => props.theme.colors.gray50};
`;

const Image = styled.img`
  min-width: 100%;
  min-height: 261px;
  margin-bottom: 17px;
  border-radius: 20px;
  background-color: aliceblue;
`;

const Content = styled.div`
  min-height: 50px;
  font-size: ${props => props.theme.typography.paragraphs.large};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 20px 0;
`;
