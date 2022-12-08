import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { TodoProps } from "../todo/Todo";

export interface Inputs {
  title: string | undefined;
  contents: string | undefined;
}

interface Props {
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
}

function TodoForm({ setTodos }: Props) {
  return (
    <>
      {/* //? TODO를 새로 추가 | 수정할 때 필요한 값을 입력받는 컴포넌트 */}
      {/* 제목 입력 */}
      {/* 내용 입력 */}
      {/* 작성하기 버튼 */}
      {/* 홈 버튼 */}
    </>
  );
}

export default React.memo(TodoForm);
