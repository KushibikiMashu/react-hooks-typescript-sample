import React, { useState, useMemo, useRef } from "react";
import now from "performance-now";

interface Target {
  n: number;
}

// useMemo
const fibonacci = (n: number): number =>
  n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;

const FibonacciCounter: React.FC<Target> = props => {
  const [_, rerender] = useState<any>(null);
  const memoTimes = useRef<number[]>([]);
  const times = useRef<number[]>([]);

  // Memoize
  const memoStart = now();
  const memoResult = useMemo(() => fibonacci(props.n), [props.n]);
  const memoEnd = now();

  // No Memoize
  const start = now();
  const result = fibonacci(props.n);
  const end = now();

  memoTimes.current.push(memoEnd - memoStart);
  times.current.push(end - start);

  return (
    <div>
      <p>target: {props.n}</p>
      <p>fibonacci: {memoResult}</p>
      <button onClick={rerender}>rerender</button>
      <div style={{ display: "flex" }}>
        <div>
          <p>No Memomized</p>
          <ol>
            {times.current.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ol>
        </div>
        <div>
          <p>Memoized</p>
          <ol>
            {memoTimes.current.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FibonacciCounter;
