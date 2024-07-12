import { Global, css, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        body {
          margin: 0;
          width: 490px;
          height: 100%;
          overflow-y: scroll;
          position: relative;
          color: ${theme.colors.white};
        }

        #root {
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
};

export default GlobalStyle;
