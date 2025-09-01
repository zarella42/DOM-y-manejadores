// 1. Seleccionar elementos
const titulo = document.getElementById("titulo");
const parrafo = document.querySelector("#parrafo"); // otra forma de seleccionar
const btnTexto = document.getElementById("btnTexto");
const btnColor = document.getElementById("btnColor");
const btnOcultar = document.getElementById("btnOcultar");

// 2. Modificar contenido y estilos con eventos
btnTexto.addEventListener("click", () => {
  parrafo.textContent = "¡El contenido ha cambiado con el DOM! 🎉";
});

btnColor.addEventListener("click", () => {
  titulo.style.color = titulo.style.color === "darkblue" ? "crimson" : "darkblue";
});

btnOcultar.addEventListener("click", () => {
  if (parrafo.style.display === "none") {
    parrafo.style.display = "block";
  } else {
    parrafo.style.display = "none";
  }
});