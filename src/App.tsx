import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import Router from "./components/Router";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/common/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
