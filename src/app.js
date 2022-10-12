//* eslint-disable */

import "./style.css";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generarExcusa();
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generarExcusa();
  });
  /*console.log("Hola desde el espacio");*/
};

let generarExcusa = () => {
  let who = ["El perro", "Mi vecino", "La jirafa", "El jefe"];
  let what = ["come", "canta", "pelea", "grita"];
  let when = [
    "antes de clase",
    "en la plaza",
    "cuando bosteza",
    "en el almuerzo",
    "cuando estoy corriendo"
  ];
  let whoRand = numRandom(who.length);
  let whaRand = numRandom(what.length);
  let wheRand = numRandom(when.length);
  return who[whoRand] + " " + what[whaRand] + " " + when[wheRand];
};
let numRandom = max => {
  /*No le pone parentesis a la variable de entrada*/
  let n = Math.floor(Math.random() * 10);
  while (n >= max) {
    n = Math.floor(Math.random() * 10);
  }
  return n;
};
