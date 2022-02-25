"use strict";
const documentReady = () => {
  const bienvenidaNombre = document.getElementById("bienvenidaNombre");
  const nombre = prompt("Hola, ¿cuál es tu nombre?");
  console.log("Hola usuari@, "+nombre);
  bienvenidaNombre.innerHTML += nombre;
}
document.addEventListener("DOMContentLoaded",documentReady);