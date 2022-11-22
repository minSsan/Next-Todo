import React from "react";
import styles from "./Todo.module.css";

interface Todo {
  title: string;
  subtitle?: string;
}

const Todo = (data: Todo) => {
  const { title, subtitle } = data;
  return (
    <div className={styles.todoContainer}>
      <h1>{title}</h1>
    </div>
  );
};

export default Todo;
