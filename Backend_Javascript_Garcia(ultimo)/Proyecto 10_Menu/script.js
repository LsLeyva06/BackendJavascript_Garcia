//querySelector devuelve el elemento del html

const navegacion = document.querySelector(".menuPrincipal");
const abrir = document.querySelector(".abrirMenu");
const cerrar = document.querySelector(".cerrarMenu");

abrir.addEventListener("click" , () => {
//agrega una clase
    navegacion.classList.add("visible");
    
})

cerrar.addEventListener("click", () => {
// elimina la clase
    navegacion.classList.remove("visible");
})