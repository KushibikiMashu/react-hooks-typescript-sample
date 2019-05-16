import React from "react";
import ReactDOM from "react-dom";
import CounterWithUseReducer from "../hooks/CounterWithUseReducer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CounterWithUseReducer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
