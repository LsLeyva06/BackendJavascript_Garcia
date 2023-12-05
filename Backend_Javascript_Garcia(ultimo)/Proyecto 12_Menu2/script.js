/*ubico mi clase principal del html y agrego un evento el cual apenas se le de click sin importar la lina que se le de click*/
//y me llama una función
document.querySelector(".menuBarra").addEventListener("click", animacionMenu);

//almaceno en variables mis span con un queryselector
let barra1 = document.querySelector(".fila1");
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");

function animacionMenu(){
/*classList.toggle alterna la presencia de una clase en este caso intercambia la clase que esta creada en el html y agrega otra donde se encuentra
los estilos de la animación */
//toggle por defecto esta en off
    barra1.classList.toggle("fila1Animacion");
    barra2.classList.toggle("fila2Animacion");
    barra3.classList.toggle("fila3Animacion");

}