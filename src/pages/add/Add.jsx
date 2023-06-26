import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import mainBtn from "../../assets/styles/mainBtn";
import BackBtn from "../../components/common/buttons/BackBtn";

const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      id: Date.now(),
      title,
      description,
      checked: false,
      createdAt: new Date().toISOString(),
      finishedAt: null,
      archiveAt: null,
    };
    const toDosFromStorage = JSON.parse(localStorage.getItem("toDos") || "[]");
    localStorage.setItem(
      "toDos",
      JSON.stringify([...toDosFromStorage, newToDo])
    );
    setTitle("");
    setDescription("");
  };
  return (
    <>
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
            Add
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Add;
