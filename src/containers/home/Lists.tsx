import styled from "@emotion/styled";
import { BiSolidComment } from "react-icons/bi";

const data = {
  posts: [
    {
      id: 0,
      title: "Beat among suffer politics deep.",
      content: "Season miss into lot how then. Break ability plan good.",
      thumbnailUrl: "https://www.lorempixel.com/726/755",
      createAt: "2023-09-24T16:27:13.931147",
      isDone: false,
      user: {
        id: 0,
        email: "dawnwilkins@yahoo.com",
        profileEmoji: "😎",
        nickname: "fergusontiffany",
        sequence: 2,
      },
      agreeCount: 53,
      disAgreeCount: 49,
    },
    {
      id: 1,
      title: "Realize cause lose toward.",
      content:
        "Red better job clearly off new power. Just near garden actually. Some rest fund relationship house.",
      thumbnailUrl: "https://dummyimage.com/566x74",
      createAt: "2023-07-16T16:27:13.932323",
      isDone: true,
      user: {
        id: 1,
        email: "william13@pena-smith.com",
        profileEmoji: "😂",
        nickname: "deborahryan",
        sequence: 1,
      },
      agreeCount: 45,
      disAgreeCount: 56,
    },
    {
      id: 2,
      title: "Level she character method region.",
      content: "Executive if career onto team sea age.",
      thumbnailUrl: "https://placekitten.com/891/205",
      createAt: "2024-02-10T16:27:13.933651",
      isDone: true,
      user: {
        id: 2,
        email: "mendezjose@gmail.com",
        profileEmoji: "😂",
        nickname: "jimenezpatrick",
        sequence: 1,
      },
      agreeCount: 29,
      disAgreeCount: 22,
    },
    {
      id: 3,
      title: "Answer environment reveal as could talk rich result.",
      content:
        "Available behind small edge month activity sing. Official final meeting manager policy. Catch direction traditional attention.",
      thumbnailUrl: "https://placekitten.com/324/6",
      createAt: "2023-09-08T16:27:13.934662",
      isDone: false,
      user: {
        id: 3,
        email: "jamesmalik@hotmail.com",
        profileEmoji: "😊",
        nickname: "zlamb",
        sequence: 2,
      },
      agreeCount: 36,
      disAgreeCount: 60,
    },
    {
      id: 4,
      title: "Effort none change on ability rise happen.",
      content: "End happy single close series.",
      thumbnailUrl: "https://placeimg.com/389/980/any",
      createAt: "2023-08-01T16:27:13.936393",
      isDone: false,
      user: {
        id: 4,
        email: "rlee@smith.net",
        profileEmoji: "😂",
        nickname: "marieknight",
        sequence: 1,
      },
      agreeCount: 53,
      disAgreeCount: 47,
    },
  ],
};

const Lists = () => {
  return (
    <ListContainer>
      <Title>oxox 리스트</Title>
      {data.posts.map(post => (
        <ListItem>
          <Image src={post.thumbnailUrl} alt={post.title} />
          <InfoWrapper>
            <Top>
              <RoundBtn>진행중</RoundBtn>
              <Comment>
                <BiSolidComment size={20} />
                <Count>14</Count>
              </Comment>
            </Top>
            <Question>{post.title}</Question>
            <Time>1시간 남음</Time>
            <Graph></Graph>
          </InfoWrapper>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default Lists;

const ListContainer = styled.div`
  padding: 30px 16px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: ${props => props.theme.typography.headers.h3};
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-gap: 10px;
  height: 90px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 90px;
  height: 100%;
  border-radius: 10px;
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
`;

const RoundBtn = styled.button`
  padding: 3px 8px;
  background: none;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.blue200};
  color: ${props => props.theme.colors.gray400};
  font-size: ${props => props.theme.typography.disclaimers.default};
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: ${props => props.theme.colors.gray100};
`;

const Count = styled.div`
  margin-left: 3px;
`;

const Question = styled.div`
  font-size: ${props => props.theme.typography.paragraphs.default};
`;

const Time = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray100};
`;

const Graph = styled.div`
  width: calc(100% - 50px);
  height: 12px;
  border-radius: 20px;
  background-color: aliceblue;
`;
