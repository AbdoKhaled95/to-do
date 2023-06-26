import { createTheme } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";

const MainThemeContext = createContext({
  mode: "light",
  setMode: () => {},
  theme: {},
  setColorMode: () => {},
});
const MainThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage?.getItem("mode") || "light");
  useEffect(() => {
    localStorage?.getItem("mode") && setMode(localStorage?.getItem("mode"));
  }, [mode]);
  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            container: 1920,
          },
        },
        direction: "ltr",
        palette: {
          mode: mode,
          // primary: {
          // },
          // secondary: {},

          // text: {},
        },

        typography: {
          // h1: {  },
          // h2: {},
          // h3: {},
          // h4: {},
          // h5: {},
          // body1: {},
          // body2: {},
          // caption: {},
          // button: {},
          // fontFamily: ,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                padding: 0,
                fontSize: 14,
              },
            },
          },
        },
      }),
    [mode]
  );

  const setColorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(() =>
          localStorage?.getItem("mode") === "light"
            ? localStorage?.setItem("mode", "dark")
            : localStorage?.setItem("mode", "light")
        );
      },
    }),
    [mode]
  );

  return (
    <MainThemeContext.Provider
      value={{
        mode,
        setColorMode,
        theme,
      }}
    >
      {children}
    </MainThemeContext.Provider>
  );
};

export default MainThemeProvider;
export const useMainThemeContext = () => {
  return useContext(MainThemeContext);
};
