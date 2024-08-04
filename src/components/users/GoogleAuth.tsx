import styled from "@emotion/styled";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../firebaseApp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import googleLogo from "../../assets/googlelogo.png";

const GoogleAuth = () => {
  const [userData, setUserData] = useState<User["providerData"] | null>(null);
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const data = await signInWithPopup(auth, provider);
      setUserData(data.user.providerData);
      console.log(data.user.providerData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Logo src={googleLogo} alt="logo" />
      <Text>구글 로그인</Text>
    </Container>
  );
};

export default GoogleAuth;

const Container = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.theme.colors.white};
  position: relative;
`;

const Logo = styled.img`
  width: 23px;
  position: absolute;
  left: 20px;
`;

const Text = styled.div`
  font-size: ${props => props.theme.typography.paragraphs.bold};
  color: black;
`;
