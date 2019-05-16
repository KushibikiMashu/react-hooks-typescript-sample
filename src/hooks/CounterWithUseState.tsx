import React, { useState } from "react";

// useState

const CounterWithUseState: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
};

export default CounterWithUseState;
