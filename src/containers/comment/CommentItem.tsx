import styled from "@emotion/styled";
import { useState } from "react";
import { motion } from "framer-motion";
// assets
import Emotion from "../../assets/emotion.svg";
// styles
import { buttonAnimation, iconAnimation } from "../../styles/animation";

interface Comment {
  id: number;
  user: string;
  time: string;
  content: string;
}

interface CommentItemProps {
  comment: Comment;
}

interface EmotionItem {
  src: string;
  alt: string;
  count: number;
}

const iconList = [
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Smiling%20Eyes.png",
    alt: "Grinning Face with Smiling Eyes",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png",
    alt: "Red Heart",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Shaking%20Face.png",
    alt: "Shaking Face",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Loudly%20Crying%20Face.png",
    alt: "Loudly Crying Face",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Symbols%20on%20Mouth.png",
    alt: "Face with Symbols on Mouth",
  },
];

const CommentItem = ({ comment }: CommentItemProps) => {
  const [showEmotions, setShowEmotions] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionItem[]>([]);

  const showEmotion = () => {
    setShowEmotions(!showEmotions);
  };

  const handleEmotionClick = (emotion: { src: string; alt: string }) => {
    setSelectedEmotion(prevEmotions => {
      const existingEmotion = prevEmotions.find(e => e.alt === emotion.alt);
      if (existingEmotion) {
        return prevEmotions.map(e =>
          e.alt === emotion.alt ? { ...e, count: e.count + 1 } : e
        );
      } else {
        return [...prevEmotions, { ...emotion, count: 1 }];
      }
    });
    setShowEmotions(false);
  };

  return (
    <Container key={comment.id}>
      <Image />
      <InfoWrapper>
        <Top>
          <Nickname>{comment.user}</Nickname>
          <Time>{comment.time}</Time>
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
                    onClick={() => handleEmotionClick(icon)}
                    variants={iconAnimation}
                    initial="hidden"
                    animate="visible"
                  />
                ))}
              </IconContainer>
            ) : (
              <Icon src={Emotion} alt="emotion" />
            )}
          </EmotionBtn>
          <SelectedEmotions>
            {selectedEmotion.map(emotion => (
              <SelectedEmotionWrapper key={emotion.alt}>
                <Icon src={emotion.src} alt={emotion.alt} />
                <Count>{emotion.count}</Count>
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
  color: ${props => props.theme.colors.gray100};
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

const Count = styled.span`
  color: ${props => props.theme.colors.gray100};
  font-size: ${props => props.theme.typography.disclaimers.default};
  margin: 0 5px 0 2px;
`;
