import React from "react";
import styles from "./Todo.module.css";

export interface TodoProps {
  id: number;
  title: string;
  contents?: string;
}

interface Props {
  todo: TodoProps;
}

const Todo = ({ todo }: Props) => {
  console.log("TODO rendered");
  return (
    <div className={styles.todoContainer}>
      <div>
        <h1>제목: {todo.title}</h1>
        <h4>내용: {todo.contents}</h4>
      </div>
    </div>
  );
};

export default React.memo(Todo);
