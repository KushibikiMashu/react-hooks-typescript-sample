import React, { useState } from "react";

// useState

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={_ => setCount(count + 1)}>+</button>
      {count}
      <button onClick={_ => setCount(count - 1)}>-</button>
      <button onClick={_ => setCount(0)}>reset</button>
    </>
  );
};

export default Counter;
