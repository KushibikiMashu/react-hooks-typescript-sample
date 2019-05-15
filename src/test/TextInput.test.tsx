import React from "react";
import ReactDOM from "react-dom";
import TextInput from "../hooks/TextInput";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
