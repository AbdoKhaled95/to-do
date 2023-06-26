import React, { useState } from "react";
import ToDoTable from "../../components/common/Tables/ToDoTable";
import { Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import mainBtn from "../../assets/styles/mainBtn";
import useGetTodosFromLocalStorage from "../../hooks/useGetTodosFromLocalStorage";
const Home = () => {
  mainBtn.my = 2; // btn style
  const [isDeleted, setIsDeleted] = useState(false);
  const toDos = useGetTodosFromLocalStorage(isDeleted);

  return (
    <>
      <Container maxWidth="container">
        <Button
          sx={mainBtn}
          variant="contained"
          component={RouterLink}
          to="/add"
        >
          Add
        </Button>
        <ToDoTable
          toDos={toDos}
          setIsDeleted={setIsDeleted}
          isDeleted={isDeleted}
        />
      </Container>
    </>
  );
};

export default Home;
