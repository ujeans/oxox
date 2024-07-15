import styled from "@emotion/styled";

const TotalComments = () => {
  return <CommentWrapper>댓글 20개 모두 보기</CommentWrapper>;
};

export default TotalComments;

const CommentWrapper = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray100};
  cursor: pointer;
`;
