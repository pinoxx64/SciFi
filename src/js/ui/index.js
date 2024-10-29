import { films } from "../classes/scifi";

document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById('mostrar')
    boton.addEventListener('click', verPelicula)
})

async function verPelicula(event) {
    event.preventDefault()

    let nombre = document.getElementById('nombre').value
    let ver = document.getElementById('verPelicula')
    let pelis = films
   
    
}