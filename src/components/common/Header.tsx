import styled from "@emotion/styled";

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;

const StyledHeader = styled.header`
  width: 490px;
  height: 63px;
  position: fixed;
  margin: auto 0;
  top: 0;
  background-color: ${props => props.theme.colors.gray500};
`;
