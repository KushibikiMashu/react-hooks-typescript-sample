import React from "react";
import ReactDOM from "react-dom";
import FibonacciCounterWithUseMemo from "../hooks/FibonacciCounterWithUseMemo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FibonacciCounterWithUseMemo n={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
