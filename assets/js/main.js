
import Aguila from './aguila.js'
import Leon from './leon.js'
import Lobo from './lobo.js'
import Serpiente from './serpiente.js'
import Oso from './oso.js'
import {
    mandarDatos
}
from './datos.js'
const animales = [];
let img = document.getElementById('preview')
let imagen = document.createElement('img')
/* let imagen = document.createElement('img')
let imagen = document.createElement('img')
let imagen = document.createElement('img') */
const registrar = document.getElementById('btnRegistrar');
registrar.addEventListener('click', async () => {
    let nombre = document.getElementById('animal');
    let edad = document.getElementById('edad');
    let comentario = document.getElementById('comentarios')
    if (nombre && edad && comentario) {
        let datos = await mandarDatos.mostrar;
        if (nombre.value == 'Leon') {
            let leon = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
            let imagenLeon = leon.img;
            mostrarImagen(imagenLeon);
            console.log(leon);
            animales.push(leon);
        } else if (nombre.value == 'Lobo') {
            let lobo = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
            let imagenLobo = lobo.img;
            mostrarImagen(imagenLobo);
            console.log(lobo);
            animales.push(lobo);
        } else if (nombre.value == 'Oso') {
            let oso = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[1].sonido);
            let imagenOso = oso.img;
            mostrarImagen(imagenOso);
            imagen.setAttribute('width', '110%');
            imagen.setAttribute('alt', 'auto');
            console.log(oso);
            animales.push(oso);
        } else if (nombre.value == 'Serpiente') {
            let serpiente = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[1].sonido);
            let imagenSerpiente = serpiente.img;
            mostrarImagen(imagenSerpiente);
            imagen.setAttribute('width', '110%');
            imagen.setAttribute('alt', 'auto');
            console.log(serpiente);
            animales.push(serpiente)
        } else if (nombre.value == 'Aguila') {
            let aguila = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
            let imagenAguila = aguila.img;
            mostrarImagen(imagenAguila);
            console.log(aguila);
            animales.push(aguila);
        }
        
        img.appendChild(imagen);
        nombre='';
        edad='';
        comentario=''
        console.log(animales)
     
    } else {
        alert('Tiene que ingresar todos los datos');
    }

});
//mostrar imagen
const mostrarImagen = (imagenAnimal) => {
    imagen.setAttribute('src', `assets/imgs/${imagenAnimal}`)
    imagen.setAttribute('width', '87%')
    imagen.setAttribute('alt', '100%')
}