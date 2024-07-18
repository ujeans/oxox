import styled from "@emotion/styled";
import { IoIosArrowBack } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useState } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
// assets
import Eyes from "../../assets/eyes.svg";
import Memo from "../../assets/memo.svg";
import Tippinghand from "../../assets/tippinghand.svg";
import Modal from "../../components/common/Modal";
import Logout from "../logout/Logout";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const matchPostDetail = useMatch("/posts/:id");
  const matchPostNew = useMatch("/posts/new");
  const matchPostEdit = useMatch("/posts/edit/:id");
  const matchProfile = useMatch("/profile");

  const getTitle = () => {
    if (matchPostNew) return <img src={Memo} alt="Post New" />;
    if (matchPostEdit) return <img src={Memo} alt="Post Edit" />;
    if (matchPostDetail) return <img src={Eyes} alt="Post Detail" />;
    if (matchProfile) return <img src={Tippinghand} alt="Profile" />;
    if (location.pathname === "/") return "oxox";
    return "App";
  };

  const showBackIcon = location.pathname !== "/";
  const showLogoutIcon = location.pathname === "/profile";

  const prevTo = () => {
    navigate(-1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <StyledHeader>
      <Wrapper>
        {showBackIcon && <BackIcon onClick={prevTo} />}
        <Title>{getTitle()}</Title>
        {showLogoutIcon && <LogoutIcon onClick={openModal} />}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} height="300px">
          <Logout onClose={() => setIsOpen(false)} />
        </Modal>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 490px;
  height: 63px;
  position: fixed;
  top: 0;
  margin: auto 0;
  background-color: ${props => props.theme.colors.gray500};
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackIcon = styled(IoIosArrowBack)`
  position: absolute;
  left: 16px;
  font-size: 24px;
  color: ${props => props.theme.colors.gray100};
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.gray100};
`;

const LogoutIcon = styled(LuLogOut)`
  position: absolute;
  right: 16px;
  font-size: 21px;
  color: ${props => props.theme.colors.gray100};
  cursor: pointer;
`;
