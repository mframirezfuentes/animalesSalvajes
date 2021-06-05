import {
    Aguila,
    Leon,
    Lobo,
    Oso,
    Serpiente
} from './animales.js'

import {
    mandarDatos
}
from './datos.js'
const animales = [];
let img = document.getElementById('preview')
let imagen = document.createElement('img')
const registrar = document.getElementById('btnRegistrar');
registrar.addEventListener('click', async () => {
    let nombre = document.getElementById('animal');
    let edad = document.getElementById('edad');
    let comentario = document.getElementById('comentarios')
    let animal;
    if (nombre.value && edad.value && comentario.value) {
        let datos = await mandarDatos.mostrar;
        if (nombre.value == 'Leon') {
            animal = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
            let imagenLeon = animal.img;
            mostrarImagen(imagenLeon);
        } else if (nombre.value == 'Lobo') {
            animal = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
            let imagenLobo = animal.img;
            mostrarImagen(imagenLobo);
        } else if (nombre.value == 'Oso') {
            animal = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[1].sonido);
            let imagenOso = animal.img;
            mostrarImagen(imagenOso);

        } else if (nombre.value == 'Serpiente') {
            animal = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[1].sonido);
            let imagenSerpiente = animal.img;
            mostrarImagen(imagenSerpiente);
        } else if (nombre.value == 'Aguila') {
            animal = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
            let imagenAguila = animal.img;
            mostrarImagen(imagenAguila);

        }
        img.appendChild(imagen);
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentario.value = ""
        img.setAttribute=""
        animales.push(animal)
        console.log(animales)
        mostrarTabla();
    } else {
        alert('Tiene que ingresar todos los datos');
    }
});
//mostrar imagen
const mostrarImagen = (imagenAnimal) => {
    imagen.setAttribute('src', `assets/imgs/${imagenAnimal}`);
    imagen.setAttribute('width', '200');

}
const mostrarTabla = () => {
    let animalesTemplate = document.getElementById('Animales');
    animalesTemplate.innerHTML = "";
    animales.forEach((a, i) => {
        animalesTemplate.innerHTML += `<div class="col-3>
        <div class="px-3 pb-2 animales" data-fighter="${a.getNombre()}">
        <div class="card-deck ml-1">
        <div class="card" style="width: 10rem;">
             <img src="assets/imgs/${a.getImg()}" alt="10" width="10 onclick="verDatos"
         class="card-img-top" />
          <div class="card-body">
            <button class="btn btn-outline-warning" onclick="activarSonido('${i}')">Sonido</button>
             </div>
              </div>
              </div>
              </div>
        </div>`
    })
}