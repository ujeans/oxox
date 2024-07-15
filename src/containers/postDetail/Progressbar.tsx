import styled from "@emotion/styled";

const Progressbar = () => {
  return (
    <Wrapper>
      <StyledProgressbar></StyledProgressbar>
      <RatioBox>
        <Ratio>53%</Ratio>
        <Ratio>47%</Ratio>
      </RatioBox>
    </Wrapper>
  );
};

export default Progressbar;

const Wrapper = styled.div``;

const StyledProgressbar = styled.div`
  width: 100%;
  height: 23px;
  border-radius: 20px;
  background-color: aliceblue;
`;

const RatioBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const Ratio = styled.div``;
