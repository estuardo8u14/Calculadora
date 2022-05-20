import React from "react";
import ReactDOM from "react-dom";
import Boton from "./../Boton";

it("renderiza sin crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Boton></Boton>, div);
});
