import React from "react";
import Contenedor from "./componentes/Contenedor/Contenedor";
import Pantalla from "./componentes/Pantalla/Pantalla";
import BotonBox from "./componentes/BotonBox/BotonBox";
import Boton from "./componentes/Boton/Boton";
import { useState } from "react";

const Valoresbtns = [
  ["C", "+-", "X", "-", "+"],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0, ".", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const App = () => {
  let [calc, setCalc] = useState({
    signo: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.signo ? 0 : calc.res,
      });
    }
  };

  const comaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signoClickHandler = (e) => {
    setCalc({
      ...calc,
      signo: e.target.innerHTML,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.signo && calc.num) {
      const math = (a, b, signo) =>
        signo === "+" ? a + b : signo === "-" ? a - b : a * b;

      setCalc({
        ...calc,
        res: toLocaleString(
          math(
            Number(removeSpaces(calc.res)),
            Number(removeSpaces(calc.num)),
            calc.signo
          )
        ),
        signo: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      signo: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      signo: "",
      num: 0,
      res: 0,
    });
  };

  return (
    <Contenedor>
      <Pantalla value={calc.num ? calc.num : calc.res} />
      <BotonBox>
        {Valoresbtns.flat().map((btn, i) => {
          return (
            <Boton
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "X" || btn === "-" || btn === "+"
                  ? signoClickHandler
                  : btn === "."
                  ? comaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </BotonBox>
    </Contenedor>
  );
};

export default App;
