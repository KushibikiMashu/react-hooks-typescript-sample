import React, { createContext, useContext, useState } from "react";

// useContext

const MultiplyCounter: React.FC = () => {
  const count = useContext<number>(CounterContext);
  return (
    <>
      <p>multiply: {count * 2}</p>
      <SquareCounter />
    </>
  );
};

const SquareCounter: React.FC = () => {
  const count = useContext<number>(CounterContext);
  return <p>square: {count * count}</p>;
};

const CounterContext = createContext<number>(0);

const CounterWithUseContext: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <CounterContext.Provider value={count}>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <MultiplyCounter />
    </CounterContext.Provider>
  );
};

export default CounterWithUseContext;
