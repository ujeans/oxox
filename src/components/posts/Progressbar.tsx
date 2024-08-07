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
  const agreePercentage =
    totalVotes === 0 ? 0 : Math.round((agreeCount / totalVotes) * 100);
  const disAgreePercentage =
    totalVotes === 0 ? 0 : Math.round((disAgreeCount / totalVotes) * 100);

  const isSingleVote = agreeCount === 0 || disAgreeCount === 0;

  return (
    <Wrapper showRatio={showRatio}>
      <Graph showRatio={showRatio} totalVotes={totalVotes}>
        <AgreeBar
          style={{ width: `${agreePercentage}%` }}
          isSingleVote={isSingleVote}
        />
        <DisAgreeBar
          style={{ width: `${disAgreePercentage}%` }}
          isSingleVote={isSingleVote}
        />
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

const Graph = styled.div<{ showRatio: boolean; totalVotes: number }>`
  height: ${({ showRatio }) => (showRatio ? "23px" : "12px")};
  display: flex;
  border-radius: 20px;
  background-color: ${({ totalVotes, theme }) =>
    totalVotes === 0 ? theme.colors.gray200 : "transparent"};
`;
const AgreeBar = styled.div<{ isSingleVote: boolean }>`
  height: 100%;
  border-radius: ${({ isSingleVote }) =>
    isSingleVote ? "20px" : "20px 0 0 20px"};
  background-color: ${props => props.theme.colors.pink100};
`;

const DisAgreeBar = styled.div<{ isSingleVote: boolean }>`
  height: 100%;
  border-radius: ${({ isSingleVote }) =>
    isSingleVote ? "20px" : "0 20px 20px 0"};
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
