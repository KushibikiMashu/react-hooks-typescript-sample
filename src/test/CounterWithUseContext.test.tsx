import React from "react";
import ReactDOM from "react-dom";
import CounterWithUseContext from "../hooks/CounterWithUseContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CounterWithUseContext />, div);
  ReactDOM.unmountComponentAtNode(div);
});
