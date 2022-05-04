import React from "react";
import { Textfit } from "react-textfit";
import "./Pantalla.css";

const Pantalla = ({ value }) => {
  return (
    <Textfit className="pantalla" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Pantalla;
