import React from "react";
import ReactDOM from "react-dom";
import CounterWithUseState from "../hooks/CounterWithUseState";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CounterWithUseState />, div);
  ReactDOM.unmountComponentAtNode(div);
});
