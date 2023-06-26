import { RouterProvider } from "react-router-dom";
import "./App.css";
import mainRouter from "./assets/routers/mainRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMainThemeContext } from "./contexts/MainThemeContext";

const App = () => {
  const { theme } = useMainThemeContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={mainRouter} />
      </ThemeProvider>
    </>
  );
};

export default App;
