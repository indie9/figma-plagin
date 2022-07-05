import React from "react";
import ReactDom from "react-dom";
import App from "./App";

onmessage = (event) => {
  console.log(event);
};
ReactDom.render(<App />, document.querySelector("#figma-plugin-container"));
