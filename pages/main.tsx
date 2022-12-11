import {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import React, { useEffect, useState } from "react";
import { TodoProps } from "../components/todo/Todo";
import TodoList from "../components/todoList/TodoList";

function Main({ todos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default Main;

export const getStaticProps: GetStaticProps = async () => {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  return {
    props: { todos },
  };
};
