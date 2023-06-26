import { IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useMainThemeContext } from "../../../contexts/MainThemeContext";
const ToggleColorMode = ({}) => {
  const { mode, setColorMode } = useMainThemeContext();
  const { toggleColorMode } = setColorMode;

  return (
    <IconButton
      onClick={() => toggleColorMode()}
      sx={{
        color: "primary.main",
      }}
    >
      {mode === "light" ? (
        <LightModeIcon fontSize="large" />
      ) : (
        <DarkModeIcon fontSize="large" />
      )}
    </IconButton>
  );
};

export default ToggleColorMode;
