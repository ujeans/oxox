import styled from "@emotion/styled";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
// styles
import { buttonAnimation, iconAnimation } from "../../styles/animation";
// types
import { CommentDto } from "../../types/data/comment";
// api
import axiosInstance from "../../api/config";
// assets
import EmotionIcon from "../../assets/emotion.svg";

interface EmotionItem {
  src: string;
  alt: string;
  count: number;
}

interface EmotionProps {
  comment: CommentDto;
  fetchComments: () => void;
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

const Emotion = ({ comment, fetchComments }: EmotionProps) => {
  const [showEmotions, setShowEmotions] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionItem[]>([]);

  useEffect(() => {
    const emotions = iconList.map(icon => {
      const reactionKey = icon.alt.toUpperCase();
      const count = comment.reactions[reactionKey];
      return count ? { ...icon, count } : null;
    }).filter((icon): icon is EmotionItem => icon !== null);

    setSelectedEmotion(emotions);
  }, [comment.reactions]);

  const showEmotion = useCallback(() => {
    setShowEmotions(prev => !prev);
  }, []);

  const handleEmotionClick = useCallback(
    async (commentId: number, emotion: { src: string; alt: string }) => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.log("토큰 없습니다.");
          return;
        }

        const url =
          emotion.alt.toUpperCase() !== comment.myReaction
            ? `/reactions?commentId=${commentId}&emoji=${emotion.alt.toUpperCase()}`
            : `/reactions?commentId=${commentId}`;

        await axiosInstance.post(url, {});

        fetchComments();
      } catch (error) {
        console.log(error);
      }
      setShowEmotions(false);
    },
    [comment.myReaction, fetchComments]
  );

  return (
    <Container>
      <EmotionBtn
        onClick={showEmotion}
        variants={buttonAnimation}
        initial="hidden"
        animate={showEmotions ? "visible" : "hidden"}
      >
        {showEmotions ? (
          <IconWrapper>
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
          </IconWrapper>
        ) : (
          <Icon src={EmotionIcon} alt="emotion" />
        )}
      </EmotionBtn>
      <SelectedEmotionWrapper>
        {selectedEmotion.map(emotion => (
          <SelectedEmotions
            key={emotion.alt}
            onClick={() => handleEmotionClick(comment.id, emotion)}
          >
            <Icon src={emotion.src} alt={emotion.alt} />
            <Count
              isSelected={comment.myReaction === emotion.alt.toUpperCase()}
            >
              {emotion.count}
            </Count>
          </SelectedEmotions>
        ))}
      </SelectedEmotionWrapper>
    </Container>
  );
};

export default Emotion;

const Container = styled.div`
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

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SelectedEmotionWrapper = styled.div`
  display: flex;
`;

const SelectedEmotions = styled.div`
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
  color: ${props =>
    props.isSelected ? props.theme.colors.green200 : props.theme.colors.gray50};
  font-size: ${props =>
    props.isSelected
      ? props.theme.typography.disclaimers.bold
      : props.theme.typography.disclaimers.default};
  margin: 0 5px 0 2px;
`;
