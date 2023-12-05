
function calcularTiempo(){

    //DATE (es un objecto de javascript donde me trae la hora que tenga el sistema localmente )
    
    let tiempo = new Date();

    //Acontinuación se utilizan tres metodos de javascript
    /*los cuales voy a poder obtener por separado la hora, los minutos y
    los segundos, como se podra ver en las siguientes variables declaradas*/
    
    //todo esto se tomara de la fecha y hora del sistema 

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
  

    /*Establecemos unos valores donde cumpla la instrucción que esta indicada para cada variable, entonces 
    si la hora, minuto y segundo son menores a 10 agregue un cero */

    hora = hora <10 ? "0" + hora : hora;
    minuto = minuto <10 ? "0" + minuto : minuto;
    segundo = segundo <10 ? "0" + segundo :segundo;


    //Esta variable va a concatenar las tres variables anteriores en el orden que desee yo
    
    let pantallaReloj = hora + ":" + minuto + ":" + segundo;

    //guardaremos esto en un queryselector el cual .reloj es la clase del html
    
    let relojdigital = document.querySelector(".reloj");

    /*La siguiente propiedad innerHTML me sirve para devolver la sintaxis
    para poder insertar el reloj  */

    relojdigital.innerHTML = pantallaReloj;

}

// Despues de realizar la función con todos los parametros a realizar llamamos la función con el siguiente script

/* con el metodo javascrpt setInterval llamo a la función creada anteriormente
calcularTiempo y se va actualizar cada 1000 mil milisegundos */

setInterval (calcularTiempo,1000);