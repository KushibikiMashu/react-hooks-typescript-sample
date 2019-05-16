import React from "react";
import ReactDOM from "react-dom";
import SampleOfCustomEffect from "../hooks/SampleOfCustomEffect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SampleOfCustomEffect />, div);
  ReactDOM.unmountComponentAtNode(div);
});
