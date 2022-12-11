import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { TodoProps } from "../../components/todo/Todo";

const Todo = ({ todo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {/* //? todo의 상세 정보 페이지 */}
      {/* TODO 컴포넌트 배치 */}
      {todo.id}
    </>
  );
};

export default Todo;

export const getStaticPaths: GetStaticPaths = async () => {
  const todos: TodoProps[] = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((res) => res.json());

  console.log("====== todos ======");
  console.log(todos);

  const params = todos.map((todo) => ({ params: { id: todo.id.toString() } }));

  return {
    paths: params,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const todo: TodoProps = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  ).then((res) => res.json());

  console.log(todo);

  return {
    props: { todo },
  };
};
