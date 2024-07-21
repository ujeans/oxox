import styled from "@emotion/styled";
// components
import RoundButton from "../../components/common/RoundButton";

const PostContent = () => {
  return (
    <>
      <Title>도지코인 지금 들어가는거 어떻게 생각함?</Title>
      <Description>달려라도지 . 13시간 전</Description>
      <Image></Image>
      <Content>
        이번주 비트코인 많이 내려갔다던데.. 비트코인 들어갈까? 이미 -50%라서 더
        잃을것도 없긴 하지만 마지막으로 한번 도전해보고 싶은데 어떻게 생각해?
      </Content>
      <ButtonWrapper>
        <RoundButton text={"11:00:00"} size="medium" />
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
  background-color: aliceblue;
  margin-top: 15px;
  font-size: ${props => props.theme.typography.headers.h2};
`;

const Description = styled.div`
  margin: 13px 0;
  text-align: center;
  font-size: ${props => props.theme.typography.paragraphs.default};
  color: ${props => props.theme.colors.gray50};
`;

const Image = styled.div`
  height: 261px;
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
