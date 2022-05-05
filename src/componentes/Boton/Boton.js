import React from "react";
import "./Boton.css";

const Boton = ({ className, value, onClick }) => {
  return (
    <button class="botones" className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Boton;
