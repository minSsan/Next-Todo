import Link from "next/link";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import Todo, { TodoProps } from "../todo/Todo";
import styles from "./TodoList.module.css";

interface Props {
  todos: TodoProps[];
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
  handleEditClick: (id: number) => any;
}

function TodoList({ todos, setTodos, handleEditClick }: Props) {
  const handleRemoveClick = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div>
      {todos?.map((data, index) => (
        <>
          <p>================================</p>
          <div className={styles.todoContainer}>
            <Link href={`/todos/${data.id}`}>
              <Todo todo={data} />
            </Link>
            <button onClick={() => handleEditClick(data.id)}>수정하기</button>
            <button onClick={() => handleRemoveClick(data.id)}>삭제하기</button>
          </div>
          <p>================================</p>
        </>
      ))}
    </div>
  );
}

export default React.memo(TodoList);
