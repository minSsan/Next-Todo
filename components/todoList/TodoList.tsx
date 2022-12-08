import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import Todo, { TodoProps } from "../todo/Todo";
import styles from "./TodoList.module.css";

interface Props {
  todos: TodoProps[];
}

function TodoList({ todos }: Props) {
  const handleCheckClick = async (e: React.MouseEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    console.log(id, checked);
  };

  return (
    <div>
      {/* //? TODO를 리스트로 나열하여 출력하는 컴포넌트 */}
      {todos.map((todo, index) => (
        <>
          <span className={styles.todoContainer}>
            <input
              id={todo.id.toString()}
              type={"checkbox"}
              checked={todo.completed}
              onClick={handleCheckClick}
            />
            <h1>{todo.title}</h1>
          </span>
        </>
      ))}
    </div>
  );
}

export default TodoList;
