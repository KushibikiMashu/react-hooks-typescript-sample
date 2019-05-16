import React, { useReducer } from "react";

// useReducer

interface State {
  count: number;
}

interface Action {
  type: ActionType;
}

enum ActionType {
  Increment = "Increment",
  Decrement = "Decrement",
  Reset = "Reset"
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.Increment:
      return { count: state.count + 1 };
    case ActionType.Decrement:
      return { count: state.count - 1 };
    case ActionType.Reset:
      return { count: 0 };
    default:
      throw new Error();
  }
};

const initialState: State = { count: 0 };

const CounterWithUseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: ActionType.Increment })}>
        +
      </button>
      <button onClick={() => dispatch({ type: ActionType.Decrement })}>
        -
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: ActionType.Reset })}>
        reset
      </button>
    </>
  );
};

export default CounterWithUseReducer;
