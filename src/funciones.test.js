import { suma, resta, multi, dividir } from "./App";

describe("sumas validas", () => {
  test("1 + 1 = 2", () => {
    expect(suma(1, 1)).toEqual(2);
  });

  test("10 + 20 = 30", () => {
    expect(suma(10, 20)).toEqual(30);
  });
});

describe("restas validas", () => {
  test("10 - 2 = 8", () => {
    expect(resta(10, 2)).toEqual(8);
  });

  test("87 - 523 = -436", () => {
    expect(resta(87, 523)).toEqual(-436);
  });
});

describe("multiplicaciones validas", () => {
  test("10 * -2 = -20", () => {
    expect(multi(10, -2)).toEqual(-20);
  });

  test("5 * 5 = 25", () => {
    expect(multi(5, 5)).toEqual(25);
  });
});

describe("division valida", () => {
  test("256 / 4 = 64", () => {
    expect(dividir(256, 4)).toEqual(64);
  });

  test("1500 / 5 = 30", () => {
    expect(dividir(1500, 5)).toEqual(300);
  });
});
