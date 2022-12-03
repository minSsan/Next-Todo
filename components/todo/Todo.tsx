import React from "react";
import styles from "./Todo.module.css";

export interface TodoProps {
  id: number;
  title: string;
  subtitle?: string;
}

interface Props {
  todo: TodoProps;
  handleRemoveClick: () => any;
}

const Todo = ({ todo, handleRemoveClick }: Props) => {
  return (
    <div className={styles.todoContainer}>
      <h1>{todo.title}</h1>
      <button onClick={handleRemoveClick}>삭제하기</button>
    </div>
  );
};

export default Todo;
