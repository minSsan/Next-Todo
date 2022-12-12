import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import { PostProps } from "../post/Post";
import styles from "./PostList.module.css";

interface Props {
  todos: PostProps[];
}

function PostList({ todos }: Props) {
  return (
    <div>
      {/* //? TODO를 리스트로 나열하여 출력하는 컴포넌트 */}
      {todos.map((todo, index) => (
        <>
          <Link href={`/todos/${todo.id}`}>
            <div className={styles.todoContainer}>
              <h1>{todo.title}</h1>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}

export default PostList;
