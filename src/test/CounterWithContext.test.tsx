import React from "react";
import ReactDOM from "react-dom";
import CounterWithContext from "../hooks/CounterWithContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CounterWithContext />, div);
  ReactDOM.unmountComponentAtNode(div);
});
