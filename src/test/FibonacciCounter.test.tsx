import React from "react";
import ReactDOM from "react-dom";
import FibonacciCounter from "../hooks/FibonacciCounter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FibonacciCounter n={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
