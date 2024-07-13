import styled from "@emotion/styled";
import { useLocation, matchPath, useNavigate } from "react-router-dom";
import { SiGoogledocs } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPostDetail = matchPath("/posts/:id", location.pathname);
  const isProfile = location.pathname === "/profile";
  const isHome = location.pathname === "/";

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <StyledFooter>
      <Wrapper>
        <TabBox
          isActive={isHome}
          onClick={() => {
            if (!isPostDetail) {
              navigateTo("/");
            }
          }}
        >
          {isPostDetail ? <CommentIcon /> : <FeedIcon />}
          <Text>{isPostDetail ? "댓글" : "피드"}</Text>
        </TabBox>
        <TabBox isActive={isProfile}>
          <UserIcon onClick={() => navigateTo("/profile")} />
          <Text>마이페이지</Text>
        </TabBox>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 490px;
  height: 80px;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  background-color: ${props => props.theme.colors.blue600};
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TabBox = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${props =>
    props.isActive ? props.theme.colors.blue200 : props.theme.colors.gray100};
`;

const FeedIcon = styled(SiGoogledocs)`
  font-size: 24px;
`;

const CommentIcon = styled(BiSolidCommentDetail)`
  font-size: 24px;
  color: ${props => props.theme.colors.gray100};
`;

const Text = styled.span`
  margin-top: 5px;
  font-size: ${props => props.theme.typography.disclaimers.default};
`;

const UserIcon = styled(FaUser)`
  font-size: 24px;
`;
