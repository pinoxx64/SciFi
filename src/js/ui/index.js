import { films } from "../classes/scifi";

document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById('mostrar')
    boton.addEventListener('click', verPelicula)
})

async function verPelicula(event) {
    event.preventDefault()

    let nombre = document.getElementById('nombre').value
    let verPeli = document.getElementById('verPelicula')
    let verReparto = document.getElementById('verActores')

    for (let i = 0; i < films.length; i++) {
        if (films[i].title === nombre) {
            const peliElegida = `
                <article class="peli">
                    <h1>${films[i].title}</h1>
                    <h2>${films[i].original_title}</h2>
                    <img src="${films[i].cover_image}" alt="Imagen de ${films[i].title}">
                    <p>Director: ${films[i].director}</p>
                    <p>Fecha de estreno: ${films[i].release_date}</p>
                    <p>${films[i].description}</p>
                </article>
            `
            verPeli.innerHTML = peliElegida 

            verReparto.innerHTML = ""

            for (let j = 0; j < films[i].cast.length; j++) {
                const actor = `
                    <article class="actores">
                        <h3>Nombre: ${films[i].cast[j].name}</h3>
                        <p>Género: ${films[i].cast[j].gender}</p>
                        <p>Fecha de nacimiento: ${films[i].cast[j].birth_date}</p>
                    </article>   
                `
                verReparto.innerHTML += actor
            }
        }
    }
}
