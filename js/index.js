"use strict";
const documentReady = () => {
  const bienvenidaNombre = document.getElementById("bienvenidaNombre");
  const nombre = prompt("Hola, ¿cuál es tu nombre?");
  console.log("Hola usuari@, "+nombre);
  bienvenidaNombre.innerHTML += nombre;
}
document.addEventListener("DOMContentLoaded",documentReady);

function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* Estableciendo el tiempo */
    var t = setTimeout(function(){ currentTime() }, 1000); /* Estableciendo el reloj */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); /* Iniciando el proceso */