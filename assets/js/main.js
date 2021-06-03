import {
    Animal
} from './animal.js'
import Aguila from './aguila.js'
import Leon from './leon.js'
import Lobo from './lobo.js'
import Serpiente from './serpiente.js'
import Oso from './oso.js'
import {
    mandarDatos,
    obtenerDatos
}
from './datos.js'

const animales = [];
const registrar = document.getElementById('btnRegistrar');
registrar.addEventListener('click', async () => {
    const nombre = document.getElementById('animal');
    const edad = document.getElementById('edad');
    const comentario = document.getElementById('edad')
    const img = document.getElementById('preview')
    const imagen = document.createElement('img')
    const datos = await obtenerDatos();
    const leon = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
    const lobo = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
    const oso = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[1].sonido);
    const serpiente = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[1].sonido);
    const aguila = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
    img.appendChild(imagen);
    imagen.setAttribute('src', `assets/imgs/${aguila.img}`)
    imagen.setAttribute('width', '80%')



})