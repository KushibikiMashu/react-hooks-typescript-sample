import React from "react";
import ReactDOM from "react-dom";
import TodoA from "../hooks/TodoA";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoA />, div);
  ReactDOM.unmountComponentAtNode(div);
});
