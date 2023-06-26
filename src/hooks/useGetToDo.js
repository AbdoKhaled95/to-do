import { useEffect, useState } from "react";

const useGetToDo = (id) => {
  const [toDoEdit, setToDoEdit] = useState({});

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("toDos") || "[]");
    setToDoEdit(todosFromStorage.find((toDo) => toDo?.id === parseInt(id)));
  }, []);
  return toDoEdit;
};
export default useGetToDo;
