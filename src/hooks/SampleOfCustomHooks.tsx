import React, { useState, useEffect } from "react";
import axios from "axios";

// custom hook

interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

enum ActionType {
  Loading = "Loading",
  Success = "Success",
  Error = "Error"
}

function useFetch(todoId: number): [ActionType, Todo | null] {
  const [status, setStatus] = useState(ActionType.Loading);
  const [todo, setTodo] = useState(null);

  useEffect((): void => {
    async function fetch(): Promise<any> {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        setTodo(res.data);
        setStatus(ActionType.Success);
      } catch (e) {
        setStatus(ActionType.Error);
        console.error(e.message);
      }
    }

    fetch();
  }, [todoId]);

  return [status, todo];
}

const Loading: React.FC = () => <>Loading</>;

const Error: React.FC = () => <>Error</>;

const TodoItem: React.FC<Todo> = ({ userId, title, completed }) => {
  return (
    <>
      <p>User ID : {userId}</p>
      <p>Title : {title}</p>
      <p>Completed : {completed ? "true" : "false"}</p>
    </>
  );
};

const SampleOfCustomHooks: React.FC = () => {
  const [todoId, setTodoId] = useState<number>(1);
  const [status, todo] = useFetch(todoId);

  if (todo === null) {
    return <Loading />;
  }

  const buttons = (
    <div>
      <button onClick={() => setTodoId(todoId + 1)}>+</button>
      <button onClick={() => setTodoId(1)}>reset</button>
      <p>Todo ID: {todoId}</p>
    </div>
  );

  if (status === ActionType.Loading || status === ActionType.Error) {
    return (
      <>
        {buttons}
        {status === ActionType.Loading ? <Loading /> : <Error />}
      </>
    );
  }

  return (
    <>
      {buttons}
      <TodoItem {...todo} />
    </>
  );
};

export default SampleOfCustomHooks;
