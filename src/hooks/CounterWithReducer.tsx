import React, { useReducer } from "react";

// useReducer

type State = {
  count: number;
};

enum Action {
  Increment = "Increment",
  Decrement = "Decrement",
  Reset = "Reset"
}

const reducer = (state: State, action: Action): State => {
  switch (action) {
    case Action.Increment:
      return { count: state.count + 1 };
    case Action.Decrement:
      return { count: state.count - 1 };
    case Action.Reset:
      return { count: 0 };
    default:
      throw new Error();
  }
};

const initialState = { count: 0 };

const CounterWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch(Action.Increment)}>+</button>
      {state.count}
      <button onClick={() => dispatch(Action.Decrement)}>-</button>
      <button onClick={() => dispatch(Action.Reset)}>reset</button>
    </>
  );
};

export default CounterWithReducer;
