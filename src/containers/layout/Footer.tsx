import styled from "@emotion/styled";
import {useEffect, useState} from "react";

import {matchPath, useLocation, useNavigate} from "react-router-dom";
import {SiGoogledocs} from "react-icons/si";
import {FaUser} from "react-icons/fa";
import {BiSolidCommentDetail} from "react-icons/bi";
// components
import Modal from "../../components/common/Modal";
// containers
import Alert from "../alert/Alert";
import Comment from "../comment/Comment";
import axiosInstance from "../../api/config";
import {CommentDtoList} from "../../types/data/comment";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const isPostDetail = matchPath("/posts/:id", location.pathname);
  const isProfile = location.pathname === "/profile";
  const isHome = location.pathname === "/";

  const [comments, setComments] = useState<CommentDtoList | undefined>(
    undefined
  );

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const handleProfile = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAlertOpen(true);
    } else {
      navigateTo("/profile");
    }
  };

  const openModal = () => {
    if (checkLogin()) {
      fetchComments();
      setIsCommentOpen(true);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axiosInstance.get(`/comments/${isPostDetail?.params.id}/all`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const checkLogin = (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAlertOpen(true);
      return false;
    }
    return true;
  };

  return (
    <StyledFooter>
      <Wrapper>
        <TabBox
          isActive={isHome}
          onClick={() => {
            if (!isPostDetail) {
              navigateTo("/");
            } else {
              openModal();
            }
          }}
        >
          {isPostDetail ? <CommentIcon/> : <FeedIcon/>}
          <Text>{isPostDetail ? "댓글" : "피드"}</Text>
        </TabBox>
        {isPostDetail && <Modal
            isOpen={isCommentOpen}
            onClose={() => setIsCommentOpen(false)}
            height="600px"
        >
            <Comment
                postId={Number(isPostDetail?.params.id)}
                comments={comments}
                fetchComments={fetchComments}
            />
        </Modal>}
        <TabBox isActive={isProfile}>
          <UserIcon onClick={handleProfile}/>
          <Text>마이페이지</Text>
        </TabBox>
        <Modal
          isOpen={isAlertOpen}
          onClose={() => setIsAlertOpen(false)}
          height={"150px"}
          position={"center"}
        >
          <Alert onClose={() => setIsAlertOpen(false)}/>
        </Modal>
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
    background-color: ${props => props.theme.colors.gray500};
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
            props.isActive ? props.theme.colors.green200 : props.theme.colors.gray50};
`;

const FeedIcon = styled(SiGoogledocs)`
    font-size: 24px;
`;

const CommentIcon = styled(BiSolidCommentDetail)`
    font-size: 24px;
    color: ${props => props.theme.colors.gray50};
`;

const Text = styled.span`
    margin-top: 5px;
    font-size: ${props => props.theme.typography.disclaimers.default};
`;

const UserIcon = styled(FaUser)`
    font-size: 24px;
`;
