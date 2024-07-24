// components
import Container from "../../components/users/Container";
import DividerWithText from "../../components/users/DividerWithText";
import Navigate from "../../components/users/NavigateTo";
// containers
import SignupFom from "../../containers/signup/SignupFom";

export default function SignupPage() {
  return (
    <Container>
      <DividerWithText text={"회원가입에 필요한 기본 정보를 입력해주세요."} />
      <SignupFom />
      <Navigate currentPage="signup" />
    </Container>
  );
}
