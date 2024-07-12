import styled from "@emotion/styled";

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  width: 490px;
  height: 80px;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  background-color: ${props => props.theme.colors.blue600};
`;
