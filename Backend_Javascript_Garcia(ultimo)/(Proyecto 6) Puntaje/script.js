//con el querySelector me traigo la clase del html puntaje.
const marcoPuntaje = document.querySelector('.puntaje');

/*creamos dos constantes en el cual una va a estar inicianizada en 0que hace referencia a las estrellas del puntaje de la misma forma la
siguiente constatnte para el puntaje limite*/
let puntajeActual = 0;
const puntajeLimite = 5;

/*Con el siguiente script se crean las clases adicionales, mapeo html(Vamos a realizar esa funcionalidad),(Array.from(Array(puntajeLimite))
Creamos un arreglo (.map) esto sirve para dibujar en el html ((item,i) En este nos sirve para saber la posción del arreglo en este caso el puntaje limite ) */
//map es de html
const html = Array.from(Array(puntajeLimite)).map((item, i) =>{
    /*me va a retornar un div class,esto crea una división dependiendo mi puntaje limite teniendo en cuenta la posción, se van a crear 5 div por el total de 
    puntaje limite, en el cual se ejecute este script los div se crean aca    */
    return  `<div class="item item-${i}" data-pos="${i}"></div>`;

});
//el anterior script le voy a decir que me inserte los datos en el html especificamente en el html en el a clase puntaje
marcoPuntaje.innerHTML = html.join("");

//traemos nuestra clase item y vamos a recorrer cada item
document.querySelectorAll(".item").forEach(item =>{
    //addEventListener me va a escuchar o tener en cuenta  cada vez que yo pase mi mouse 
    item.addEventListener("mouseover", e =>{
        console.log("Funciona");
        //va atraer la posición de cada elemento
        //getAttribute es un método en JavaScript que se utiliza para obtener el valor de un atributo de un elemento HTML. 
        const position =item.getAttribute("data-pos");

        if (puntajeActual === parseInt(position) +1) {
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris => {
            if (cuadraditoGris.classList.contains("selec")){
                cuadraditoGris.classList.remove("selec");
            }
        });
        
        //aumentara de 1 en 1
        for (let i = 0; i<= position; i++){
            //traera el indice del item(0,1,2,3,4)
            const cuadradito =document.querySelector(`.item-${i}`);
            //valido//si no encuentra el cuadradito gris va agregar esa clase
            if(!cuadradito.classList.contains("selec")) {
                //cambia del html item por selec
                cuadradito.classList.add("selec");
            }
        }
        //se va actualizar segun la posición en la que se encuentre
        puntajeActual= parseInt(position) + 1;

    });


    item.addEventListener("click",(e) => {
        const position = item.getAttribute("data-pos");
        puntajeActual = parseInt(position) + 1;
        console.log(puntajeActual);
    });

});


