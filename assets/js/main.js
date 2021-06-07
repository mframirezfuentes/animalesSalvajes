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
let nombre = document.getElementById('animal');
registrar.addEventListener('click', async () => {

    let edad = document.getElementById('edad');
    let comentario = document.getElementById('comentarios')
    let animal;

    if (nombre.value && edad.value && comentario.value) {
        let datos = await mandarDatos.mostrar;
        if (nombre.value == 'Leon') {
            animal = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
            let imagenLeon = animal.img;
            animal.Rugir();
            mostrarImagen(imagenLeon);
        } else if (nombre.value == 'Lobo') {
            animal = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
            let imagenLobo = animal.img;
            animal.Aullar()
            mostrarImagen(imagenLobo);
        } else if (nombre.value == 'Oso') {
            animal = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[1].sonido);
            let imagenOso = animal.img;
            animal.Gruñir();
            mostrarImagen(imagenOso);
        } else if (nombre.value == 'Serpiente') {
            animal = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[1].sonido);
            let imagenSerpiente = animal.img;
            animal.Sisear();
            mostrarImagen(imagenSerpiente);
        } else if (nombre.value == 'Aguila') {
            animal = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
            let imagenAguila = animal.img;
            animal.Chillar();
            mostrarImagen(imagenAguila);
        }
        img.appendChild(imagen);
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentario.value = ""
        animales.push(animal)
        mostrarTabla();
        console.log(animales)
    } else {
        alert('Tiene que ingresar todos los datos');
    }
});
//mostrar imagen
const mostrarImagen = (imagenAnimal) => {
    imagen.setAttribute('src', `assets/imgs/${imagenAnimal}`);
    imagen.setAttribute('width', '200');
    imagen.style.backgroundImage = "none"
}
const mostrarTabla = () => {
    let animalesTemplate = document.getElementById('Animales');
    animalesTemplate.innerHTML = "";
    animales.forEach((a, i) => {
        animalesTemplate.innerHTML += `<div class="col-3>
        <div class="px-3 pb-2 animales" data-fighter="${a.getNombre()}">
        <div class="card-deck ml-1">
        <div class="card" style="width: 10rem;">
             <img src="assets/imgs/${a.getImg()}" alt="10" width="10 onclick="verDatos(${i})"
         class="card-img-top" />
          <div class="card-body">
            <button class="btn btn-outline-warning sonido" onclick="sonido(${i})">Sonido</button>
             </div>
              </div>
              </div>
              </div>
        </div>`
    })

}
window.verDatos = (i) => {
    const animal = animales[i];
    const modal = document.getElementById('datos');
    animal.forEach(a => {
        modal.innerHTML = `<div>
        <img src="assets/imgs/${a.getImg()}" alt="10" width="10/>
        </div>
        <p>${a.getEdad()}</p>
        <p>${a.getComentarios()}</p>
        `
        console.log('pase por aquí')
    })
}

window.sonido = (i) => {
    const animal = animales[i];
    if (animal.getNombre() == 'Leon') {
        console.log('pase por aquí')
        animal.Rugir();
    } else if (animal.getNombre() == 'Lobo') {
        console.log('pase por aquí')
        animal.Aullar()
    } else if (animal.getNombre() == 'Oso') {
        console.log('pase por aquí')
        animal.Gruñir();
    } else if (animal.getNombre() == 'Serpiente') {
        console.log('pase por aquí')
        animal.Sisear();
    } else if (animal.getNombre() == 'Aguila') {
        console.log('pase por aquí')
        animal.Chillar();
    }
}