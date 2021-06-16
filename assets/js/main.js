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
let animales = [];
let img = document.getElementById('preview')
let audio = document.getElementById('player')
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
        } else if (nombre.value == 'Lobo') {
            animal = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
        } else if (nombre.value == 'Oso') {
            animal = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[2].sonido);
        } else if (nombre.value == 'Serpiente') {
            animal = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[3].sonido);
        } else if (nombre.value == 'Aguila') {
            animal = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
        }
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentario.value = ""
        img.innerHTML = `<img src="">`
        animales.push(animal)
        mostrarTabla();
        console.log(animales)
    } else {
        alert('Tiene que ingresar todos los datos');
    }
});
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
            <button class="btn btn-outline-warning"id="sonido" onclick="sonido(${i})">Sonido</button>
             </div>
              </div>
              </div>
              </div>
        </div>`
    })
}
window.verDatos = (i) => {
    let datos = animales[i];
    const modal = document.querySelector('#datos');
    datos.forEach(a => {
        modal.innerHTML = `<div>
        <img src="assets/imgs/${a.getImg()}" alt="10" width="10/>
        </div>
        <p>${a.getEdad()}</p>
        <p>${a.getComentarios()}</p>`
        console.log('pase por aquí')
    })
}
window.sonido = (i) => {
    let animal = animales[i];
    let sonido=animal.getSonido();
    audio.src=`assets/sounds/${sonido}`
    audio.play();
}
document.getElementById('animal').addEventListener('change',
    function cambiarImg() {
        let nombre = document.getElementById('animal')
        if (nombre.value == 'Leon') {
            img.innerHTML = `<img src="assets/imgs/Leon.png" width="200">`
        } else if (nombre.value == 'Lobo') {
            img.innerHTML = `<img src="assets/imgs/Lobo.jpg" width="200">`
        } else if (nombre.value == 'Oso') {
            img.innerHTML = `<img src="assets/imgs/Oso.jpg" width="250">`
        } else if (nombre.value == 'Serpiente') {
            img.innerHTML = `<img src="assets/imgs/Serpiente.jpg" width="250" alt="200">`
        } else if (nombre.value == 'Aguila') {
            img.innerHTML = `<img src="assets/imgs/Aguila.png" width="200">`
        }
    })