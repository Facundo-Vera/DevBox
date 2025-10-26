const modo = document.getElementById("modo")
modo.addEventListener("click",modoOscuro)
const body = document.querySelector("body")

function modoOscuro(){
    body.classList.toggle("oscuro")

}