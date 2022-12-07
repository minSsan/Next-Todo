import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { TodoProps } from "../../components/todo/Todo";
import { Inputs } from "../../components/todoForm/TodoForm";

const Todo = () => {
  const router = useRouter();
  const { id } = router.query;

  const [todoData, setTodoData] = useState<TodoProps>();

  //   useEffect(() => {
  //     const todos: TodoProps[] = JSON.parse(localStorage.getItem("todos") ?? "[]")
  //     const todoData: TodoProps = todos.filter((todo) => todo.id === parseInt(id))
  //   }, []);

  useLayoutEffect(() => {
    const todos: TodoProps[] = JSON.parse(
      localStorage.getItem("todos") ?? "[]"
    );

    setTodoData(
      todos.find((value) => value.id.toString() === id) ?? {
        id: 0,
        title: "잘못된 todo 정보입니다",
        contents: "잘못된 todo 정보입니다",
      }
    );
  }, []);

  return (
    <>
      <h1>TODO {id}</h1>
      <h3>할 일: {todoData?.title}</h3>
      <h2>Content</h2>
      <h3>내용: {todoData?.contents}</h3>

      <Link href={"/"}>
        <button>홈으로</button>
      </Link>
    </>
  );
};

export default Todo;
