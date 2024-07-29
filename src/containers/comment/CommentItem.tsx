import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
// assets
import Emotion from "../../assets/emotion.svg";
// styles
import {buttonAnimation, iconAnimation} from "../../styles/animation";
import {CommentDto} from "../../types/data/comment";
import axiosInstance from "../../api/config";

interface CommentItemProps {
  comment: CommentDto;
  fetchComments: () => void;
}

interface EmotionItem {
  src: string;
  alt: string;
  count: number;
}

const iconList = [
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Smiling%20Eyes.png",
    alt: "Smile",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png",
    alt: "Heart",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Shaking%20Face.png",
    alt: "Shock",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Loudly%20Crying%20Face.png",
    alt: "Cry",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Symbols%20on%20Mouth.png",
    alt: "Angry",
  },
];

const CommentItem = ({comment, fetchComments}: CommentItemProps) => {
  const [showEmotions, setShowEmotions] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionItem[]>([]);

  useEffect(() => {
    console.log(comment.myReaction);
    const emotions = Object.entries(comment.reactions)
      .filter(([_, count]) => count > 0)
      .map(([key, count]) => {
        const icon = iconList.find(icon => icon.alt.toUpperCase() === key);
        return icon ? {...icon, count} : null;
      })
      .filter(icon => icon !== null) as EmotionItem[];

    setSelectedEmotion(emotions);
  }, [comment.reactions]);

  const showEmotion = () => {
    setShowEmotions(!showEmotions);
  };

  const handleEmotionClick = async (commentId: Number, emotion?: { src: string; alt: string }) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("토큰 없습니다.");
        return;
      }

      const url = emotion
        ? `/reactions?commentId=${commentId}&emoji=${emotion.alt.toUpperCase()}`
        : `/reactions?commentId=${commentId}`;

      await axiosInstance.post(url, {});

      fetchComments();
    } catch (error) {
      console.log(error);
    }
    setShowEmotions(false);
  };

  return (
    <Container key={comment.id}>
      <Image
        src={comment.user?.profileImage || ""}
        alt={comment.user?.nickname || "profile image"}
      />
      <InfoWrapper>
        <Top>
          <Nickname>{comment.user?.nickname}</Nickname>
          {/* <Time>{comment.time}</Time> */}
        </Top>
        <Content>{comment.content}</Content>
        <EmotionContainer>
          <EmotionBtn
            onClick={showEmotion}
            variants={buttonAnimation}
            initial="hidden"
            animate={showEmotions ? "visible" : "hidden"}
          >
            {showEmotions ? (
              <IconContainer>
                {iconList.map(icon => (
                  <Icon
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    onClick={() => handleEmotionClick(comment.id, icon)}
                    variants={iconAnimation}
                    initial="hidden"
                    animate="visible"
                  />
                ))}
              </IconContainer>
            ) : (
              <Icon src={Emotion} alt="emotion"/>
            )}
          </EmotionBtn>
          <SelectedEmotions>
            {selectedEmotion.map(emotion => (
              <SelectedEmotionWrapper
                key={emotion.alt}
                onClick={() => handleEmotionClick(comment.id)}
              >
                <Icon src={emotion.src} alt={emotion.alt}/>
                <Count isSelected={comment.myReaction == emotion.alt.toUpperCase()}>
                  {emotion.count}
                </Count>
              </SelectedEmotionWrapper>
            ))}
          </SelectedEmotions>
        </EmotionContainer>
      </InfoWrapper>
    </Container>
  );
};

export default CommentItem;

const Container = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-gap: 10px;
    margin-bottom: 30px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: aliceblue;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 5px;
`;

const Nickname = styled.div`
    font-size: ${props => props.theme.typography.paragraphs.bold};
`;

const Time = styled.div`
    font-size: ${props => props.theme.typography.disclaimers.default};
    color: ${props => props.theme.colors.gray50};
`;

const Content = styled.div`
    margin-bottom: 5px;
    font-size: ${props => props.theme.typography.paragraphs.default};
`;

const EmotionContainer = styled.div`
    display: flex;
`;

const EmotionBtn = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    border: none;
    border-radius: 15px;
    background-color: #363b48;
    cursor: pointer;
    overflow: hidden;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const SelectedEmotions = styled.div`
    display: flex;
`;

const SelectedEmotionWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;
    padding: 3px 3px;
    border-radius: 15px;
    background-color: #363b48;
`;

const Icon = styled(motion.img)`
    width: 17px;
    margin: 0 5px;
    cursor: pointer;
`;

const Count = styled.span<{ isSelected?: boolean }>`
    color: ${props => props.isSelected ? props.theme.colors.green200 : props.theme.colors.gray50};
    font-size: ${props => props.isSelected ? props.theme.typography.disclaimers.bold : props.theme.typography.disclaimers.default};
    margin: 0 5px 0 2px;
`;
