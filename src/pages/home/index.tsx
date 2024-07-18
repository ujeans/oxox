// assets
import { useNavigate } from "react-router-dom";
import Pencil from "../../assets/pencil.svg";
// containers
import EmojiButton from "../../components/common/EmojiButton";
import Lists from "../../containers/home/Lists";

export default function HomePage() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/posts/new");
  };

  return (
    <>
      <Lists />
      <EmojiButton onClick={navigateTo}>
        {
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Pencil.png"
            alt="Pencil"
            width="25"
            height="25"
          />
        }
      </EmojiButton>
    </>
  );
}
