# MANIPULACIÓN DEL DOM (Document Object Model) - EVENTOS Y MANEJADORES:

Este repositorio es una práctica básica sobre **JavaScript**, enfocada en:

1. Manipulación del DOM (Seleccionando elemtos, modificando contenido, estilos).
2. Eventos y manejadores (`addEventListener`, `onclick`, etc)

## Manipulación del DOM

El **DOM (Document Object Model)** es una interfaz de programación que representa el documento HTML como un árbol de nodos. 
Cada etiqueta (`<div>`, `<p>`, `<h1>`, etc.) se convierte en un nodo que puede ser manipulado con JavaScript. Es por eso que podemos **seleccionar y modificar elementos**.

## Métodos de selección:
- **getElementById("id")** ➡️ Selecciona un elemento por su ID.
- **getElementsByClassName("clase")** ➡️ Selecciona varios elementos que comparten una clase.
- **getElementsByTagName("etiqueta")** ➡️ Selecciona todos los elementos de una etiqueta (p, div, etc.).
- **querySelector("selector")** ➡️ Selecciona el primer elemento que coincida con un selector CSS.
- **querySelectorAll("selector")** ➡️ Selecciona todos los elementos que coincidan.

## Eventos y Manejadores:
Los eventos son acciones o sucesos, que ocurren en un elemento web, a través de métodos como `addEventListener()`.
Un manejador de eventos es la función que se ejecuta para responder a ese suceso.

### 🟤 **Onclick:**
Fácil de usar en ejemplos simples.

### 🟤**addEventListener:** 
Permite múltiples eventos, separación de lógica y presentación.
