// components
import Container from "../../components/users/Container";
import DividerWithText from "../../components/users/DividerWithText";
import Navigate from "../../components/users/NavigateTo";
// containers
import LoinForm from "../../containers/login/LoinForm";

export default function LoginPage() {
  return (
    <Container>
      <DividerWithText text={"oxox 이메일로 로그인"} />
      <LoinForm />
      <Navigate currentPage="login" />
    </Container>
  );
}
