import React, { useCallback, useEffect, useState } from "react";
import Todo, { TodoProps } from "../todo/Todo";
import { todosDummy } from "./dummy-data";
import styles from "./Main.module.css";

interface Inputs {
  title: string | undefined;
  subtitle: string | undefined;
}

const Main = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [inputs, setInputs] = useState<Inputs>();

  useEffect(() => {
    const todosData = JSON.parse(localStorage.getItem("todos") ?? "[]");
    setTodos(todosData);
  }, []);

  useEffect(() => {
    // TODO: 조건문 없으면 빈 배열로 저장됨 -> 조사하기
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // * useCallback 사용하면 이벤트 객체가 변경되는 것을 바로 감지하지 못함 -> 다른 input 선택하면 이전에 선택된 input 값이 ""이 되어버림
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({
      // ! spread 문법 안됨
      title: inputs?.title,
      subtitle: inputs?.subtitle,
      [name]: value,
    });
  };

  const handleAddSubmit = () => {
    const id =
      todos.reduce((maxId, currentTodo) => Math.max(maxId, currentTodo.id), 0) +
      1;

    const newTodo: TodoProps = {
      id,
      title: inputs?.title ? inputs.title : "",
      subtitle: inputs?.subtitle,
    };

    setTodos((prev: TodoProps[]) => [...prev, newTodo]);

    setInputs({
      title: "",
      subtitle: "",
    });
  };

  const handleRemoveClick = useCallback(
    (id: number) => {
      alert(`삭제할 todo id: ${id}`);
      const newTodos = todos.filter((value) => value.id !== id);
      setTodos([...newTodos]);
    },
    [todos]
  );

  return (
    <div className={styles.mainContainer}>
      <h3>== Todo 리스트 ==</h3>
      <div className={styles.todoContainer}>
        {todos.map((data, index) => (
          <Todo
            todo={data}
            handleRemoveClick={() => handleRemoveClick(data.id)}
          />
        ))}
      </div>

      <h3>== Todo 추가하기 ==</h3>
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
        <label htmlFor="subtitle">subtitle</label>
        <input
          id="subtitle"
          name="subtitle"
          type={"text"}
          value={inputs?.subtitle}
          onChange={handleInputChange}
        ></input>
      </div>
      <button type="submit" onClick={handleAddSubmit}>
        추가하기
      </button>
    </div>
  );
};

export default Main;
