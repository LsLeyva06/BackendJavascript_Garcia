let eventos = [];
//me guarda los arreglos en el jeison 
let arr = [];

//#se llaman por id del html
const nombreEvento = document.querySelector("#nombreEvento");
const fechaEvento = document.querySelector("#fechaEvento");
const botnAgregar = document.querySelector("#agregar");
const listaEventos = document.querySelector("#listaEventos");

//busca si esta algo guardado en el localStorage
const json = cargar();

//convierte en JSON
try {
    arr = JSON.parse(json);
} catch (error) {
    arr=[]
}

eventos = arr ? [...arr] : [];

mostrarEventos();

//traemos todo eñ formulario y esto quiere decir que cuando presione mi boton haga lo que necesite
document.querySelector("form").addEventListener("submit", e =>
{
    //dejar limpio la caja si se envia con el boton (preventDefault)
    e.preventDefault();
    agregarEvento();
});

function agregarEvento()
{
    if (nombreEvento.value === "" || fechaEvento.value === "")
    {
        return;
    }

    if (diferenciaFecha(fechaEvento.value) < 0)
    {
        return;
    }

    const nuevoEvento = {
        //slice cortar posiciones 
        id: (Math.random() * 100).toString(36).slice(3),
        nombre: nombreEvento.value,
        fecha: fechaEvento.value,
    };

    //unshift envia al arreglo
    eventos.unshift(nuevoEvento);

    //me convierta mis datos tipos script
    guardar(JSON.stringify(eventos));

    nombreEvento.value = "";

    mostrarEventos();

}

function diferenciaFecha(destino)
{
    let fechaDestino = new Date(destino);
    let fechaActual = new Date();
    //getTime me traigo la fecha
    let diferencia = fechaDestino.getTime() - fechaActual.getTime();
    //ceil aproxima al entero mas cercano
    let dias = Math.ceil(diferencia / (1000 * 3600 * 24));
    return dias;
}

function mostrarEventos() {
    // me dibuja un arreglo
    const eventosHTML = eventos.map((evento) =>
    {
        return `
            <div class="evento">
                <div class="dias">
                    <span class="diasFaltantes">${diferenciaFecha(evento.fecha)}</span>
                    <span class="texto">dias para</span>
                </div>
                    <div class="nombreEvento">${evento.nombre}</div>
                    <div class="fechaEvento">${evento.fecha}</div>
                    <div class="acciones">
                        <button data-id="${evento.id}" class="eliminar">Eliminar</button>
                        </div>

            </div>
        `;
    });
    //devuelve la sintaxis html(eventosHTML) esto lo inserta en el html
    listaEventos.innerHTML = eventosHTML.join("");

    document.querySelectorAll('.eliminar').forEach(button => {
        button.addEventListener("click", e => {
            const id = button.getAttribute('data-id');
            //filter es un filtro de elementos de un arreglo 
            eventos = eventos.filter(evento => evento.id !== id);

            guardar(JSON.stringify(eventos));
            
            mostrarEventos();
        });
    });
}

function guardar(datos) {
    //almacenamiento de lo que pase en html
    //setItem guarda los datos
    localStorage.setItem("lista", datos)
}

function cargar() {
    //traer los datos de la lista getItem
    return localStorage.getItem("lista");

}