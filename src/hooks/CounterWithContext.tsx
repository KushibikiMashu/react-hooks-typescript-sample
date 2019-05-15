import React, { createContext, useContext, useState } from "react";

// useContext

const MultiplyCounter: React.FC = () => {
  const count = useContext(CounterContext);
  return (
    <>
      {count * 2}
      <SquareCounter />
    </>
  );
};

const SquareCounter: React.FC = () => {
  const count = useContext(CounterContext);
  return <>{count * count}</>;
};

const CounterContext = createContext({} as any);

const CounterWithContext: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <CounterContext.Provider value={count}>
      <button onClick={() => setCount(count + 1)}>+</button>
      <MultiplyCounter />
    </CounterContext.Provider>
  );
};

export default CounterWithContext;
