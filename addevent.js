const boton = document.getElementById("btn");
const texto = document.getElementById("texto");

// Evento para cambiar el texto
boton.addEventListener("click", () => {
    texto.textContent = "¡Genial! Usaste addEventListener";
    texto.style.color = "blue"; // cambia color
    texto.style.fontWeight = "bold"; // lo pone en negrita
});

// Otro evento: Cuando se pasa el mouse por encima
boton.addEventListener("mouseover", () => {
    texto.textContent = "Estás pasando el mouse por el botón";
    texto.style.color = "orange";
});

// Otro evento: Cuando se quita el mouse
boton.addEventListener("mouseout", () => {
    texto.textContent = "Quitaste el mouse del botón";
    texto.style.color = "red";
});
