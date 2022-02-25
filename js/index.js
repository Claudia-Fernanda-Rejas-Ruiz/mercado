"use strict";
const documentReady = () => {
  const bienvenidaNombre = document.getElementById("bienvenidaNombre");
  const nombre = prompt("Hola, ¿cuál es tu nombre?");
  try{ 
      if (nombre==="") throw new Error("Ingrese su nombre, por favor")
        else if (nombre=="null") throw new Error("Ingrese su nombre, por favor")
      else alert(`Hola ${nombre}, qué bueno encontrarte aquí`)
      }
  catch(e){ 
      alert(e)
    }
  finally { 
      alert("😳👉👈")}
    
  
  console.log("Hola usuari@, "+nombre);
  const usuariosVisitantes=[]
  usuariosVisitantes.push(nombre)
  console.log(usuariosVisitantes)
  bienvenidaNombre.innerHTML += nombre;
}
document.addEventListener("DOMContentLoaded",documentReady);

function currentTime() {
  let date = new Date(); /*Se crea objeto Date*/
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
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

