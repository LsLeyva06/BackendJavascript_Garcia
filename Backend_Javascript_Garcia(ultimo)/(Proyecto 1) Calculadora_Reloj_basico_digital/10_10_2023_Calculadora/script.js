/* los querySelector es la conexión con el html y esto se almacenara 
en unas constantes (Son elementos DOM)*/

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

//funcionalidad codigo
//forEach es el recorrido desde ahi empieza

/*En la calculadora quiere decir que si botones es igual a la constante almacenada recorrera la parte del codigo
de lo contrario no se recorrera con el ForEach*/

botones.forEach(boton =>
{
    /*Un oyente de eventos asocia la capacidad de respuesta a un elemento dado, 
    lo que permite que el elemento espere o "escuche" a que se active el evento dado.*/

    // El click es un oyente de eventos, lo cual quiere decir que a penas se haga click el boton funcionara o recorrera el script

    boton.addEventListener("click", () =>
    {
        
        const botonOn = boton.textContent;

        if (boton.id === "limpiar")
        {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar")
        {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error")
            {
                pantalla.textContent = "0"
            } else
            {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        /*Verificación de cumplimiento con su id (HTML) */
        if (boton.id === "igual") {
            //Se abre un bloque try-catch el cual sirve para la verificación de errores o excepciones
//El uso de try-catch permite manejar errores sin que la calculadora se bloquee por completo en caso de una entrada incorrecta.
            try {
                /*Se va almacenar en la siguiemte variable el texto que sea ingresado (Numeros) */
                const expresion = pantalla.textContent;
                //en el siguiente if se va a verificar si se encuentra una secuencia // de esta forma sera un error matematico
                
                if (expresion.includes("//")) {
                    pantalla.textContent = "Error";
                } else {
                
                // como no se encuentra el error sigue y se realiza la operación con la función eval de javascript
                    const resultado = eval(expresion);

                    /*El siguiente if sirve para verificar el resultado  NaN (no es un número válido) o si no es finito
                     si cualquiera de estas es verdadera es error lo cual salia un error de darle igual dos veces salia error de sintaxis
                     lo cual al agregar el siguiente error lo que hace es que automaticamente evalue y solo agregue un error en vez de dos */

                    if (isNaN(resultado) || !isFinite(resultado)) {
                        pantalla.textContent = "Error";
                    } else {
                        //si la operación es correcta se imprimira el resultado siempre y cuando sea un numero valio y finito (1,2,3)
                        pantalla.textContent = resultado;
                    }
                }
            } catch (error) {
                pantalla.textContent = "Error";
            }
            return;
        }
        

        if (pantalla.textContent === "0" || pantalla.textContent === "Error")
        {
            pantalla.textContent = botonOn;

        } else
        {
            pantalla.textContent += botonOn;
        }



    })

})