import styled from "@emotion/styled";
// assets
import Emotion from "../../assets/emotion.svg";

interface Comment {
  id: number;
  user: string;
  time: string;
  content: string;
}

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <Container key={comment.id}>
      <Image />
      <InfoWrapper>
        <Top>
          <Nickname>{comment.user}</Nickname>
          <Time>{comment.time}</Time>
        </Top>
        <Content>{comment.content}</Content>
        <EmotionBtn>
          <img src={Emotion} alt="emotion" />
        </EmotionBtn>
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
  cursor: pointer;
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
  color: ${props => props.theme.colors.gray100};
`;

const Content = styled.div`
  margin-bottom: 5px;
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const EmotionBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 30px;
  padding: 2px 0;
  border: none;
  border-radius: 15px;
  background-color: #363b48;
  cursor: pointer;
`;
