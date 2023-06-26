import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetTodosFromLocalStorage from "../../hooks/useGetTodosFromLocalStorage";
import { Box, Button, Container, TextField } from "@mui/material";
import BackBtn from "../../components/common/buttons/BackBtn";
import mainBtn from "../../assets/styles/mainBtn";

const Edit = () => {
  const { id } = useParams();
  const toDos = useGetTodosFromLocalStorage();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const index = toDos.findIndex((item) => item.id === parseInt(id));
    console.log(index);
    if (index !== -1) {
      toDos[index] = { ...toDos[index], title, description };
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }
  };
  return (
    <Container maxWidth="container">
      <BackBtn />
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          sx={{ width: { xs: 300, md: 500, lg: 700 } }}
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        />
        <TextField
          sx={{ width: { xs: 300, md: 500, lg: 700 } }}
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
        />
        <Button sx={mainBtn} variant="contained" type="submit">
          Edit
        </Button>
      </Box>
    </Container>
  );
};

export default Edit;
