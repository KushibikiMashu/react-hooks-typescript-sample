import React, { useState, useEffect } from "react";
import axios from "axios";

// custom hook

interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

function useFetchTodo(todoId: number): null | Todo {
  const [article, setTodo] = useState(null);

  useEffect((): void => {
    async function fetch(): Promise<any> {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      setTodo(res.data);
    }

    fetch();
  }, [todoId]);

  return article;
}

const Todo: React.FC = () => {
  const [todoId, setTodoId] = useState(1);
  const article = useFetchTodo(todoId);

  if (article === null) {
    return <>'Loading...'</>;
  }

  return (
    <>
      <button onClick={() => setTodoId(todoId + 1)}>+</button>
      <button onClick={() => setTodoId(1)}>reset</button>
      <p>User ID : {article.userId}</p>
      <p>Todo ID: {todoId}</p>
      <p>Title : {article.title}</p>
      <p>Completed : {article.completed ? "true" : "false"}</p>
    </>
  );
};

export default Todo;
