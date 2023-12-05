
const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

// función
setInterval(() =>
{

    //llamar hora del equipo
    let tiempo = new Date();

    //dividir el tiempo sobre el reloj
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr) + (min / 12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

    //El siguiente script funciona para agregar el reloj digital
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();

    let periodo = "AM"

    if (hora>=12){
        periodo ="PM";

        if (hora>12){
            hora -= 12;
        }
    }

    hora = hora <10 ? "0" + hora : hora;
    minuto = minuto <10 ? "0" + minuto : minuto;

    //conactenación reloj digital
    let pantallaReloj = hora + ":" + minuto +" " + periodo;

    //Se utiliza para encontrar un elemento HTML que tenga la clase "digital" y guardarlo en una variable llamada "relojdigital".
    let relojdigital = document.querySelector(".digital");

    /*La siguiente propiedad innerHTML me sirve para devolver la sintaxis
    para poder insertar el reloj  */

    relojdigital.innerHTML = pantallaReloj;


})

