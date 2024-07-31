import styled from "@emotion/styled";
import { FaCircleUser } from "react-icons/fa6";
// styles
// types
import { CommentDto } from "../../types/data/comment";
// hooks
import useTimeDifference from "../../hooks/useTimeDifference";
// components
import Emotion from "./Emotion";

interface CommentItemProps {
  comment: CommentDto;
  fetchComments: () => void;
}

const CommentItem = ({ comment, fetchComments }: CommentItemProps) => {
  const timeDifference = useTimeDifference(comment.createAt);

  return (
    <Container key={comment.id}>
      {comment.user?.profileImage ? (
        <Image src={comment.user.profileImage} alt={comment.user.nickname} />
      ) : (
        <FaCircleUser size={30} color="aliceblue" />
      )}
      <InfoWrapper>
        <Top>
          <Nickname>{comment.user?.nickname}</Nickname>
          <Time>{timeDifference}</Time>
        </Top>
        <Content>{comment.content}</Content>
        <Emotion comment={comment} fetchComments={fetchComments} />
      </InfoWrapper>
    </Container>
  );
};

export default CommentItem;

const Container = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 10px;
  margin-bottom: 30px;
  /* padding: 0 18px; */
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
  margin-bottom: 5px;
`;

const Nickname = styled.div`
  font-size: ${props => props.theme.typography.paragraphs.bold};
`;

const Time = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray50};
`;

const Content = styled.div`
  margin-bottom: 5px;
  font-size: ${props => props.theme.typography.paragraphs.default};
`;
