//creamos una constante la cual esta tendra un valor de 6 
const deg = 6;

//Seleccionan los elementos de html (Clases dentro de este)

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

// función anonima en la cual sirve para ejecutar 

setInterval(() =>
{

    //llamar hora del equipo y la almacena en tiempo
    let tiempo = new Date();

    //dividir el tiempo sobre el reloj rotación necesaria (División de los grados)
    
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    /*Se llama las clases del html y utilizamos una propiedad CSS la cual es style.transform
    donde aplica a un elemento especifico anteriormente llamado y se realiza en este caso la rotación
    */

    horas.style.transform = `rotate(${(hr) + (min / 12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;



})