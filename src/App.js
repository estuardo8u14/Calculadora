import React from "react";
import Contenedor from "./componentes/Contenedor/Contenedor";
import Pantalla from "./componentes/Pantalla/Pantalla";
import BotonBox from "./componentes/BotonBox/BotonBox";
import Boton from "./componentes/Boton/Boton";

const btnValues = [
  ["C", "+-", "+", "-", "X"],
  [0, 1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [".", "="],
];

const App = () => {
  return (
    <Contenedor>
      <Pantalla value="0" />
      <BotonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Boton
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          );
        })}
      </BotonBox>
    </Contenedor>
  );
};

export default App;
