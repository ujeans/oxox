// assets
import Pencil from "../../assets/pencil.svg";
// containers
import EmojiButton from "../../components/common/EmojiButton";
import Lists from "../../containers/home/Lists";

export default function HomePage() {
  return (
    <>
      <Lists />
      <EmojiButton>{<img src={Pencil} alt="pencil" />}</EmojiButton>
    </>
  );
}
