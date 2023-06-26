import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { useMainThemeContext } from "../../contexts/MainThemeContext";
import ToggleColorMode from "../common/buttons/ToggleColorMode";

export const MainLayout = () => {
  const {} = useMainThemeContext();
  return (
    <>
      <ToggleColorMode />
      <Outlet />
    </>
  );
};
