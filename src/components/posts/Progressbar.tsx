import styled from "@emotion/styled";

interface ProgressbarProps {
  agreeCount: number;
  disAgreeCount: number;
  showRatio?: boolean;
}

const Progressbar = ({
  agreeCount,
  disAgreeCount,
  showRatio = true,
}: ProgressbarProps) => {
  const totalVotes = agreeCount + disAgreeCount;
  const agreePercentage = Math.round((agreeCount / totalVotes) * 100);
  const disAgreePercentage = Math.round((disAgreeCount / totalVotes) * 100);

  return (
    <Wrapper showRatio={showRatio}>
      <Graph showRatio={showRatio}>
        <AgreeBar style={{ width: `${agreePercentage}%` }} />
        <DisAgreeBar style={{ width: `${disAgreePercentage}%` }} />
      </Graph>
      {showRatio && (
        <RatioBox>
          <AgreeRatio>{agreePercentage}%</AgreeRatio>
          <DisAgreeRatio>{disAgreePercentage}%</DisAgreeRatio>
        </RatioBox>
      )}
    </Wrapper>
  );
};

export default Progressbar;

const Wrapper = styled.div<{ showRatio: boolean }>`
  width: ${({ showRatio }) => (showRatio ? "100%" : "calc(100% - 50px)")};
`;

const Graph = styled.div<{ showRatio: boolean }>`
  height: ${({ showRatio }) => (showRatio ? "23px" : "12px")};
  display: flex;
`;

const AgreeBar = styled.div`
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${props => props.theme.colors.pink100};
`;

const DisAgreeBar = styled.div`
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => props.theme.colors.blue100};
`;

const RatioBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const AgreeRatio = styled.div`
  color: ${props => props.theme.colors.pink100};
`;

const DisAgreeRatio = styled.div`
  color: ${props => props.theme.colors.blue100};
`;
