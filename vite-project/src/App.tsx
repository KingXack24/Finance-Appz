import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        Hey Zack, its a Finance Dashboard
      </ThemeProvider>
    </div>
  );
}

export default App;
