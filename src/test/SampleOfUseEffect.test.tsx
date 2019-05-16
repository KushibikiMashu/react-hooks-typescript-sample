import React from "react";
import ReactDOM from "react-dom";
import SampleOfUseEffect from "../hooks/SampleOfUseEffect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SampleOfUseEffect />, div);
  ReactDOM.unmountComponentAtNode(div);
});
