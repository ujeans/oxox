import styled from "@emotion/styled";
import { BiSolidComment } from "react-icons/bi";

const Lists = () => {
  return (
    <ListContainer>
      <Ti>oxox 리스트</Ti>
      <ListItem>
        <Image>이미지</Image>
        <InfoWrapper>
          <FF>
            <Ing>진행중</Ing>
            <Comment>
              <BiSolidComment size={20} />
              <SS>14</SS>
            </Comment>
          </FF>
          <S2>코카콜라 vs 펩시</S2>
          <S3>1시간 남음</S3>
          <Gra></Gra>
        </InfoWrapper>
      </ListItem>
    </ListContainer>
  );
};

export default Lists;

const ListContainer = styled.div`
  padding: 0 16px;
`;

const Ti = styled.div`
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

const Ing = styled.button`
  padding: 3px 8px;
  background: none;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.blue200};
  color: ${props => props.theme.colors.gray400};
  font-size: ${props => props.theme.typography.disclaimers.default};
`;

const S2 = styled.div`
  /* margin-bottom: 3px; */
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const S3 = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray100};
`;

const Gra = styled.div`
  width: calc(100% - 50px);
  height: 15px;
  border-radius: 20px;
  background-color: aliceblue;
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

const FF = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SS = styled.div`
  margin-left: 3px;
`;
