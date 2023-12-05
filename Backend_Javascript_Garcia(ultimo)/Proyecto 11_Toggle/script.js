
const body = document.querySelector("body");
//getElementById
const toggle = document.getElementById("toggle");


toggle.addEventListener('click', () =>{
//classList.toggle lo que hace es alternar la clase en html dependiendo el evento en este caso el click
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");

})
