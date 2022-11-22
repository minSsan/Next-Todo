import React, { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import { todosDummy } from "./dummy-data";
import styles from "./Main.module.css";

interface TodoProps {
  id: number;
  title: string;
  subtitle?: string;
}

const Main = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    setTodos(todosDummy);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1>Main</h1>
      <h3>Todo</h3>
      <div className={styles.todoContainer}>
        {todos.map((data, index) => (
          <Todo title={data.title} />
        ))}
      </div>
    </div>
  );
};

export default Main;
