import React from "react";
import styles from "./Todo.module.css";

export interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  todo: TodoProps;
}

const Todo = ({ todo }: Props) => {
  return (
    <>
      {/* //? TODO 상세정보 페이지에 들어갈 컴포넌트 */}
      {/* 제목 | 내용 */}
      {/* 수정하기 | 삭제하기 버튼 */}
    </>
  );
};

export default React.memo(Todo);
