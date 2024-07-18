import styled from "@emotion/styled";
import { useState } from "react";
import { motion } from "framer-motion";
// assets
import Emotion from "../../assets/emotion.svg";
import Emotion0 from "../../assets/emotion0.svg";
import Emotion1 from "../../assets/emotion1.svg";
import Emotion2 from "../../assets/emotion2.svg";
import Emotion3 from "../../assets/emotion3.svg";
import Emotion4 from "../../assets/emotion4.svg";
import Emotion5 from "../../assets/emotion5.svg";
import Emotion6 from "../../assets/emotion6.svg";
import Emotion7 from "../../assets/emotion7.svg";
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
  { src: Emotion0, alt: "emotion0" },
  { src: Emotion1, alt: "emotion1" },
  { src: Emotion2, alt: "emotion2" },
  { src: Emotion3, alt: "emotion3" },
  { src: Emotion4, alt: "emotion4" },
  { src: Emotion5, alt: "emotion5" },
  { src: Emotion6, alt: "emotion6" },
  { src: Emotion7, alt: "emotion7" },
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
  padding: 2px 3px;
  border-radius: 15px;
  background-color: #363b48;
`;

const Icon = styled(motion.img)`
  margin: 0 5px;
  cursor: pointer;
`;

const Count = styled.span`
  color: ${props => props.theme.colors.gray100};
  font-size: ${props => props.theme.typography.disclaimers.default};
  margin: 0 5px 0 2px;
`;
