import React, { useState, useEffect } from "react";
import axios from "axios";

// useEffect

interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

enum Status {
  Loading = "loading",
  Success = "success",
  Error = "error"
}

const Loading: React.FC = () => <>'Loading'</>;

const TodoItem: React.FC<Todo> = ({ userId, title, completed }) => {
  return (
    <>
      <p>User ID : {userId}</p>
      <p>Title : {title}</p>
      <p>Completed : {completed ? "true" : "false"}</p>
    </>
  );
};

/**
 * Todo
 */
// const todoItem = (status: Status, todo: Todo) => {
//   switch (status) {
//     case Status.Loading:
//       return <Loading/>;
//     case Status.Success:
//       return <TodoItem {...todo}/>;
//     case Status.Error:
//       return <>error</>;
//     default:
//       break;
//   }
// };

const TodoA: React.FC = () => {
  const [todoId, setTodoId] = useState(1);
  const [status, setStatus] = useState(Status.Loading);
  const [todo, setTodo] = useState(null);

  useEffect((): void => {
    async function fetch(): Promise<any> {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        setTodo(res.data);
        setStatus(Status.Success);
      } catch (e) {
        console.error(e.messages);
        setStatus(Status.Error);
      }
    }

    fetch();
  }, [todoId]);

  if (todo === null) {
    return <Loading />;
  }

  return (
    <>
      <button
        onClick={() => {
          setTodoId(todoId + 1);
          setStatus(Status.Loading);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTodoId(1);
          setStatus(Status.Loading);
        }}
      >
        reset
      </button>
      <p>Todo ID: {todoId}</p>
      {status === Status.Success ? <TodoItem {...todo} /> : Status.Loading}
    </>
  );
};

export default TodoA;
