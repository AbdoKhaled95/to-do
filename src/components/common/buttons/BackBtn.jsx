import React from "react";
import mainBtn from "../../../assets/styles/mainBtn";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BackBtn = () => {
  return (
    <Button component={RouterLink} variant="contained" sx={mainBtn} to="/">
      Back
    </Button>
  );
};

export default BackBtn;
