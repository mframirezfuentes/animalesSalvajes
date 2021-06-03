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
const registrar = document.getElementById('btnRegistrar');
registrar.addEventListener('click', async () => {
    const nombre = document.getElementById('animal');
    const edad = document.getElementById('edad');
    const comentario = document.getElementById('edad')

    const datos = await mandarDatos.mostrar;
    console.log(datos.animales[4].imagen)
    /*  const leon = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
    const lobo = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
    const oso = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[1].sonido);
    const serpiente = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[1].sonido);
   */
    const aguila = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
    img.appendChild(imagen);
    const imagenAguila = aguila.img;
    imagen.setAttribute('src', `assets/imgs/${imagenAguila}`)
    imagen.setAttribute('width', '80%')
    imagen.setAttribute('alt','80%')


});


/* 
const mostrarImagen = (imagen) => {
    if (imagen != null) {
        imagen.removeChild;
    } else {
        imagen.setAttribute('src', `assets/imgs/${imagen}`)
        imagen.setAttribute('width', '80%')
    }
} */