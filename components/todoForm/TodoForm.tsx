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
  console.log("todo form");
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    contents: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInputs((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleAddSubmit = useCallback(() => {
    setTodos((prev: TodoProps[]) => [
      ...prev,
      {
        id:
          prev.reduce(
            (maxId, currentTodo) => Math.max(maxId, currentTodo.id),
            0
          ) + 1,
        title: inputs?.title ?? "",
        contents: inputs?.contents ?? "",
      },
    ]);

    setInputs({
      title: "",
      contents: "",
    });
  }, [inputs]);

  return (
    <>
      <div>
        <label htmlFor="title">title</label>
        <input
          id="title"
          name="title"
          type={"text"}
          value={inputs?.title}
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <label htmlFor="contents">contents</label>
        <input
          id="contents"
          name="contents"
          type={"text"}
          value={inputs?.contents}
          onChange={handleInputChange}
        ></input>
      </div>
      <button type="submit" onClick={handleAddSubmit}>
        추가하기
      </button>
    </>
  );
}

export default React.memo(TodoForm);
