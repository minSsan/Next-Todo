import React, { useCallback, useEffect, useState } from "react";
import EditForm from "../editForm/EditForm";
import { TodoProps } from "../todo/Todo";
import TodoForm, { Inputs } from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";
import styles from "./Main.module.css";

const Main = () => {
  console.log("main rendered");
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<number>(0);

  useEffect(() => {
    console.log("first rendering - useEffect");
    const todosData = JSON.parse(localStorage.getItem("todos") ?? "[]");
    setTodos(todosData);
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEditClick = (id: number) => {
    setIsEdit(true);
    setEditId(id);
  };

  return (
    <div className={styles.mainContainer}>
      {!isEdit || todos.length === 0 ? (
        <>
          <h3>== Todo 추가하기 ==</h3>
          <TodoForm setTodos={setTodos} />
        </>
      ) : (
        <>
          <h3>== Todo 수정하기 ==</h3>
          <EditForm id={editId} setTodos={setTodos}></EditForm>
        </>
      )}

      <TodoList
        todos={todos}
        setTodos={setTodos}
        handleEditClick={handleEditClick}
      />
    </div>
  );
};

export default Main;
