
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
  
    // Por defecto, asumimos que es la mañana y creamos una variable para esto

    let periodo = "AM"; 

    /*Creamos una condición esta sea para poder verificar si es por la mañana o tarde esto los haremos
    entonces si lo plantemos de que las horas son 0 a 23 horas esto quiere decir que igual o mayor a si ya es
    tarde (PM), quiere decir que si esto se cumple cambiamos el valor de la variable am por pm, esto indicandolo que 
    ya es tarde.*/

    if (hora >= 12) {
        periodo = "PM";

        /*en el siguiente if queremos decir que si la hora actual es mayor a 12 (12:59) ajustaremos el formato de las horas
        esto quiere decir (13 a 1 o 14 a 2) */
        if (hora > 12) {

            /*En el siguiente scritp indicaderemos que restamos 12 de las horas esto quiere decir que restamos para que el formato sea 
            visible de 1 a 12 y no se refleje en hora militar 13 a 24 */
            hora -= 12;
        }
    }

    /*Establecemos unos valores donde cumpla la instrucción que esta indicada para cada variable, entonces 
    si la hora, minuto y segundo son menores a 10 agregue un cero */

    hora = hora <10 ? "0" + hora : hora;
    minuto = minuto <10 ? "0" + minuto : minuto;
    segundo = segundo <10 ? "0" + segundo :segundo;


    //Esta variable va a concatenar las tres variables anteriores en el orden que desee yo
    
    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + periodo;

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