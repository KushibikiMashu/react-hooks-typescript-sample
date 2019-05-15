import React from "react";
import ReactDOM from "react-dom";
import CounterWithReducer from "../hooks/CounterWithReducer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CounterWithReducer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
