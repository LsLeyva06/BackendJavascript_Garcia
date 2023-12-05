
let progreso = document.querySelector(".progreso");
let porcentaje = document.querySelector(".porcentaje");
let celebracion = document.querySelector("body");
let avance = 0;

/*setInterval es uan función de javascript la cual se utiliza para ejecutar repetidamente en un intervalo de tiempo entre cada ejecución*/
let tiempo = setInterval(() => {
    // avanza de uno en uno el tiempo
    avance += 1;

    // style.width es la propiedad en el cual permite accedee a los estilos en este caso seria el width del elemento seleccionado
    // y este avanzara de acuerdo al avance quiere decir de uno en uno
    progreso.style.width = `${avance}%`

    if (avance === 100) {
        clearInterval(tiempo)
        celebracion.classList.add("celebracion")
    }
    porcentaje.textContent = `${avance}%`

//mi intervalo de refreso sea de 75  milisegundos
}, 75);
