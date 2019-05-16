import React from "react";
import ReactDOM from "react-dom";
import SampleOfUseRef from "../hooks/SampleOfUseRef";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SampleOfUseRef />, div);
  ReactDOM.unmountComponentAtNode(div);
});
