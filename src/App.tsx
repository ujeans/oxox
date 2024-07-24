import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
// styles
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
// components
import Router from "./components/Router";
import Layout from "./components/common/Layout";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
