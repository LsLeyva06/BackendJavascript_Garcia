//= un igual es asignación y dos comparación

let esqueleto = "off";
let esqueletostop = document.getElementById("esqueletoquieto");
let botonsonido = new Audio('./sound/botonbailar.mp3');
let botonaudio = new Audio('./sound/audio.mp3');



function bailar()
{
    if (esqueleto == "off")
    {
        esqueleto = "on";
        esqueletostop.classList.add("on");
        esqueletostop.addEventListener('click', () =>
        {
            botonsonido.play();
        })
        esqueletostop.addEventListener('click', () =>
        {
            botonaudio.play();
        })
        console.log("on");

    } else
    {
        esqueleto = "off"
        esqueletostop.classList.remove("on");
        esqueletostop.addEventListener('click', () =>
        {
            botonaudio.pause();
        })
        console.log("off");
    }


}

