// components
import Container from "../../components/users/Container";
import DividerWithText from "../../components/users/DividerWithText";
import GoogleAuth from "../../components/users/GoogleAuth";
import Navigate from "../../components/users/NavigateTo";
// containers
import LoginForm from "../../containers/login/LoginForm";

export default function LoginPage() {
  return (
    <Container>
      <GoogleAuth />
      <DividerWithText text={"oxox 이메일로 로그인"} />
      <LoginForm />
      <Navigate currentPage="login" />
    </Container>
  );
}
