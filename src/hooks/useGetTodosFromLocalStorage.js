import { useState, useEffect } from "react";

const useGetTodosFromLocalStorage = (changing) => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("toDos") || "[]");
    setToDos(todosFromStorage);
  }, [changing]);

  return toDos;
};
export default useGetTodosFromLocalStorage;
