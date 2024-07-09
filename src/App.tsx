import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import Router from "./components/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
