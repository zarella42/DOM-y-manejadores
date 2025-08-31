# MANIPULACIÓN DEL DOM (Document Object Model)

Este repositorio es una práctica básica sobre **JavaScript**, enfocada en:

1. Manipulación del DOM (Seleccionando elemtos, modificando contenido, estilos).
2. Eventos y manejadores (`addEventListener`, `onclick`, etc)

## Manipulación del DOM

El **DOM (Document Object Model)** es una interfaz de programación que representa el documento HTML como un árbol de nodos. 
Cada etiqueta (`<div>`, `<p>`, `<h1>`, etc.) se convierte en un nodo que puede ser manipulado con JavaScript. Es por eso que podemos **seleccionar y modificar elementos**.

## Métodos de selección:
- **<span style="color:red">getElementById("id")</span>** ➡️ Selecciona un elemento por su ID.
- **getElementsByClassName("clase")** ➡️ Selecciona varios elementos que comparten una clase.
- **getElementsByTagName("etiqueta")** ➡️ Selecciona todos los elementos de una etiqueta (p, div, etc.).
- **querySelector("selector")** ➡️ Selecciona el primer elemento que coincida con un selector CSS.
- **querySelectorAll("selector")** ➡️ Selecciona todos los elementos que coincidan.

## Modificaciones comunes:
- **.textContent** ➡️ Cambiar texto.
- **.innerHTML** ➡️ Cambiar el contenido con HTML.
- **.style.propiedad** ➡️ Cambiar estilos (ej: color, fontSize).
- **.setAttribute("atributo", "valor")** ➡️ Cambiar o agregar atributos (ej: src, href, etc.).
- **.classList.add("clase"), .remove(), .toggle()** ➡️ Manejo de clases CSS.

### <span style="color:orange">Ejemplos:</span> 

```javascript
// Seleccionar por ID
let titulo = document.getElementById("titulo");

// Seleccionar por clase
let items = document.getElementsByClassName("item");

// Con querySelector
let parrafo = document.querySelector(".texto");

// Cambiar contenido
titulo.textContent = "Nuevo título";

// Modificar estilo
parrafo.style.color = "blue";
