import { Global, css, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        body {
          margin: 0;
          color: ${theme.colors.white};
        }
      `}
    />
  );
};

export default GlobalStyle;
