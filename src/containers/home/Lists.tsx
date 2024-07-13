import styled from "@emotion/styled";
import { BiSolidComment } from "react-icons/bi";

const Lists = () => {
  return (
    <ListContainer>
      <Title>oxox 리스트</Title>
      <ListItem>
        <Image>이미지</Image>
        <InfoWrapper>
          <Top>
            <RoundBtn>진행중</RoundBtn>
            <Comment>
              <BiSolidComment size={20} />
              <Count>14</Count>
            </Comment>
          </Top>
          <Question>코카콜라 vs 펩시</Question>
          <Time>1시간 남음</Time>
          <Graph></Graph>
        </InfoWrapper>
      </ListItem>
    </ListContainer>
  );
};

export default Lists;

const ListContainer = styled.div`
  padding: 30px 16px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: ${props => props.theme.typography.headers.h3};
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-gap: 10px;
  height: 90px;
  margin-bottom: 30px;
`;

const Image = styled.div`
  width: 90px;
  height: 100%;
  border-radius: 10px;
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

const RoundBtn = styled.button`
  padding: 3px 8px;
  background: none;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.blue200};
  color: ${props => props.theme.colors.gray400};
  font-size: ${props => props.theme.typography.disclaimers.default};
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: ${props => props.theme.colors.gray100};
`;

const Count = styled.div`
  margin-left: 3px;
`;

const Question = styled.div`
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const Time = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray100};
`;

const Graph = styled.div`
  width: calc(100% - 50px);
  height: 12px;
  border-radius: 20px;
  background-color: aliceblue;
`;
