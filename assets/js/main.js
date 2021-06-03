import {
    Animal
} from './animal.js'
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
    const nombre = document.getElementById('animal');
    const edad = document.getElementById('edad');
    const comentario = document.getElementById('edad')
    const datos = await mandarDatos.mostrar;
    const leon = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
    const lobo = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
    const oso = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[1].sonido);
    const serpiente = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[1].sonido);
    const aguila = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
    img.appendChild(imagen);
    let imagenAguila = aguila.img;
    let imagenLeon = leon.img;
    let imagenLobo = lobo.img;
    let imagenOso = oso.img;
    let imagenSerpiente = serpiente.img;

    if (!imagenAguila) {
        mostrarImagen(imagenAguila)       
    } else if (!imagenLeon){
        mostrarImagen(imagenLeon)     
    }else if(!imagenLobo){
        mostrarImagen(imagenLobo)
    
    }else if(!imagenSerpiente){   
        mostrarImagen(imagenSerpiente)
    }else if(!imagenOso){
        mostrarImagen(imagenOso)
    }



});


//mostrar imagen
const mostrarImagen = (imagenAnimal) => {

    imagen.setAttribute('src', `assets/imgs/${imagenAnimal}`)
    imagen.setAttribute('width', '80%')
    imagen.setAttribute('alt', '80%')
    /*  */

}