import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRecoilState } from "recoil";
// firebase
import { auth } from "../../firebaseApp";
// assets
import googleLogo from "../../assets/googlelogo.png";
// api
import axiosInstance from "../../api/config";
// recoil
import { userState } from "../../recoil/atoms";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const data = await signInWithPopup(auth, provider);

      const user = data.user;

      const userData = {
        email: user.email,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        uid: user.uid,
      };

      const response = await axiosInstance.post(
        "/users/login/social",
        userData
      );

      const token = response.headers["x-access-token"];

      if (token) {
        localStorage.setItem("token", token);
      }

      setUser(response.data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container onClick={handleGoogleSignUp}>
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
  cursor: pointer;
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
