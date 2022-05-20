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
  [0, ".", "/", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removerEspacios = (num) => num.toString().replace(/\s/g, "");

export const App = () => {
  let [calc, setCalc] = useState({
    signo: "",
    num: 0,
    res: 0,
  });

  const numeroHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removerEspacios(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removerEspacios(calc.num) % 1 === 0
            ? toLocaleString(Number(removerEspacios(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.signo ? 0 : calc.res,
      });
    }
  };

  const decimalHandler = (e) => {
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

  const igualHandler = () => {
    if (calc.signo && calc.num) {
      const math = (a, b, signo) =>
        signo === "+"
          ? a + b
          : signo === "-"
          ? a - b
          : signo === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.signo === "/"
            ? "EROR EN DIVISION"
            : toLocaleString(
                math(
                  Number(removerEspacios(calc.res)),
                  Number(removerEspacios(calc.num)),
                  calc.signo
                )
              ),
        signo: "",
        num: 0,
      });
    }
  };

  const invertirNumHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removerEspacios(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removerEspacios(calc.res) * -1) : 0,
      signo: "",
    });
  };

  const cHandler = () => {
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
                  ? cHandler
                  : btn === "+-"
                  ? invertirNumHandler
                  : btn === "="
                  ? igualHandler
                  : btn === "X" || btn === "-" || btn === "+" || btn === "/"
                  ? signoClickHandler
                  : btn === "."
                  ? decimalHandler
                  : numeroHandler
              }
            />
          );
        })}
      </BotonBox>
    </Contenedor>
  );
};

const suma = (x, y) => {
  return x + y;
};

const resta = (x, y) => {
  return x - y;
};

const multi = (x, y) => {
  return x * y;
};

const dividir = (x, y) => {
  return x / y;
};

module.exports = {
  suma,
  resta,
  multi,
  dividir,
  App,
};
