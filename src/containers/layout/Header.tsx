import styled from "@emotion/styled";
import { IoIosArrowBack } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useState } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
// components
import Modal from "../../components/common/Modal";
import Logo from "../../components/logo/Logo";
// containers
import Logout from "../logout/Logout";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const matchPostDetail = useMatch("/posts/:id");
  const matchPostNew = useMatch("/posts/new");
  const matchPostEdit = useMatch("/posts/edit/:id");
  const matchProfile = useMatch("/profile");

  const getTitle = () => {
    if (matchPostNew)
      return (
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Writing%20Hand%20Medium-Light%20Skin%20Tone.png"
          alt="Writing Hand Medium-Light Skin Tone"
          width="25"
          height="25"
        />
      );
    if (matchPostEdit)
      return (
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Writing%20Hand%20Medium-Light%20Skin%20Tone.png"
          alt="Writing Hand Medium-Light Skin Tone"
          width="25"
          height="25"
        />
      );
    if (matchPostDetail)
      return (
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Eyes.png"
          alt="Eyes"
          width="25"
          height="25"
        />
      );
    if (matchProfile)
      return (
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Tipping%20Hand.png"
          alt="Person Tipping Hand"
          width="25"
          height="25"
        />
      );
    if (location.pathname === "/") return <Logo fontSize="50px" />;
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
  color: ${props => props.theme.colors.gray50};
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.gray50};
`;

const LogoutIcon = styled(LuLogOut)`
  position: absolute;
  right: 16px;
  font-size: 21px;
  color: ${props => props.theme.colors.gray50};
  cursor: pointer;
`;
