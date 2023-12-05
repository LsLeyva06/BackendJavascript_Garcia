
function obtenerTiempoFaltante(fechaLimite) {
    
    let ahora = new Date();
    //queda en segundos gracias a la conversión
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    //Math.floor agrega entero por abajo
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);


    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }


};

//console.log(obtenerTiempoFaltante('dec 25 2023 00:00:00 GMT-0500'))

function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {
    const e = document.querySelector(".texto");

    const d = document.querySelector(".di");
    const h = document.querySelector(".hor");
    const m = document.querySelector(".min");
    const s = document.querySelector(".seg");

    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        //e.innerHTML = `${t.diasFaltantes}d:${t.horasFaltantes}h:${t.minutosFaltantes}m:${t.segundosFaltantes}s`;
        d.innerHTML = `${t.diasFaltantes}`;
        h.innerHTML = `${t.horasFaltantes}`;
        m.innerHTML = `${t.minutosFaltantes}`;
        s.innerHTML = `${t.segundosFaltantes}`;

        if(t.tiempoFaltante <1) {
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
        }


    }, 1000)
};

let bailar = "off"
function cantar()
{
    if (bailar == "off")
    {
        bailar = "on"
        
    }

}

//cuentaRegresiva('Nov 21 2023 14:11:00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad!')
cuentaRegresiva('Dec 25 2023 00:00:00 GMT-0500','cuentaRegresiva','¡Feliz Navidad!')