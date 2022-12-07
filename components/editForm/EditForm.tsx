import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TodoProps } from "../todo/Todo";
import { Inputs } from "../todoForm/TodoForm";

interface Props {
  id: number;
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
}

function EditForm({ id, setTodos }: Props) {
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    contents: "",
  });

  useEffect(() => {
    const todos: TodoProps[] | [] = JSON.parse(
      localStorage.getItem("todos") ?? "[]"
    );
    const todo = todos.find((value) => value.id === id);
    setInputs({
      title: todo?.title,
      contents: todo?.contents,
    });
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const editedTodo: TodoProps = {
      id,
      title: inputs.title ?? "",
      contents: inputs.contents ?? "",
    };

    let todos: TodoProps[] = JSON.parse(localStorage.getItem("todos") ?? "[]");
    todos = todos.filter((todo) => todo.id !== id);
    todos.push(editedTodo);
    todos.sort((a, b) => a.id - b.id);

    setTodos(todos);
  };

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
      <button type="submit" onClick={handleSubmit}>
        수정하기
      </button>
    </>
  );
}

export default EditForm;
