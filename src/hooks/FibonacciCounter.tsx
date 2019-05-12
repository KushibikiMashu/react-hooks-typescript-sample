import React, { useState, useMemo } from "react";

// useMemo
const fibonacci = (n: number): number =>
  n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;

const FibonacciCounter: React.FC = () => {
  const [number, setNumber] = useState(1);
  const result = useMemo(() => fibonacci(number), [number]);

  return (
    <>
      <input
        type="number"
        onChange={e => setNumber(parseInt(e.target.value))}
        value={number}
      />
      <p>number: {number}</p>
      <p>fibonacci: {result}</p>
    </>
  );
};

export default FibonacciCounter;
