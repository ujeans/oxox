import styled from "@emotion/styled";

interface LogoProps {
  fontSize: string;
}

const Logo = ({ fontSize }: LogoProps) => {
  return (
    <StyledTitleContainer fontSize={fontSize}>
      <RedO>o</RedO>
      <BlueX>x</BlueX>
      <RedO>o</RedO>
      <BlueX>x</BlueX>
    </StyledTitleContainer>
  );
};

export default Logo;

const StyledTitleContainer = styled.span<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize || "50px"};
  display: flex;

  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const RedO = styled.span`
  color: #ff0055;
`;

const BlueX = styled.span`
  color: #0099ff;
`;
