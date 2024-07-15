import styled from "@emotion/styled";
import Emotion from "../../assets/emotion.svg";
import { Input } from "../../components/common/Input";
import { BsFillSendFill } from "react-icons/bs";

const Comment = () => {
  const handleChange = () => {};
  return (
    <Container>
      <CommentCountWrapper>
        댓글 <Count>20개</Count>
      </CommentCountWrapper>
      <ListWrapper>
        <ListWrappere>
          <Image />
          <InfoWrapper>
            <Top>
              <Nickname>user1</Nickname>
              <Time>1시간 전</Time>
            </Top>
            <Content>fdjsshfdksashfdhh</Content>
            <EmotionBtn>
              <img src={Emotion} alt="emotion" />
            </EmotionBtn>
          </InfoWrapper>
        </ListWrappere>
      </ListWrapper>
      <FormWrapper>
        <InputWrapper>
          <Input
            placeholder="댓글 작성하기"
            value={""}
            onChange={handleChange}
            name="email"
            icon={<SendIcon />}
          />
        </InputWrapper>
      </FormWrapper>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  /* padding: 18px; */
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CommentCountWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 18px;
  font-size: ${props => props.theme.typography.headers.h3};
`;

const Count = styled.div`
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.gray100};
`;

const ListWrapper = styled.div`
  max-height: 465px;
  padding: 0 18px;
  overflow-y: auto;
`;

const ListWrappere = styled.div`
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

const FormWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  background-color: ${props => props.theme.colors.blue600};
  border-top: 1px solid #363b48;
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 10px 18px;
`;

const SendIcon = styled(BsFillSendFill)`
  color: ${props => props.theme.colors.gray100};
`;
