import styled from "@emotion/styled";

const IndexCarousel = () => {
  return (
    <Container>
      <CarouselWrapper>
        <Item>
          <Img></Img>
          <Span1>도지코인 지금 들어가는거 어떻게 생각함?</Span1>
          <Span2>달려라 도지.13시간전</Span2>
          <Graph></Graph>
          <Result>
            <div>53%</div>
            <div>47%</div>
          </Result>
        </Item>
      </CarouselWrapper>
    </Container>
  );
};

export default IndexCarousel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 26px 0;
`;

const CarouselWrapper = styled.div``;

const Item = styled.div`
  width: 222px;
  padding: 10px;
  border-radius: 10px;
  background-color: #5b5145;
`;

const Img = styled.div`
  width: 100%;
  height: 222px;
  margin-bottom: 13px;
  border-radius: 10px;
  background-color: aliceblue;
`;

const Span1 = styled.div`
  text-align: center;
  font-size: ${props => props.theme.typography.headers.h3};
`;

const Span2 = styled.div`
  text-align: center;
  margin: 10px 0;
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray100};
`;

const Graph = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: aqua;
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.theme.typography.disclaimers.default};
`;
