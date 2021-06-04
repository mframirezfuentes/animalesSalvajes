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
    const comentario = document.getElementById('comentarios')

    
        if (nombre.value && edad.value && comentario.value) {
            const datos = await mandarDatos.mostrar;
            const leon = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
            const lobo = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
            const oso = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[1].sonido);
            const serpiente = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[1].sonido);
            const aguila = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
            img.appendChild(imagen);

            let imagenLeon = leon.img;
            let imagenLobo = lobo.img;
            let imagenOso = oso.img;
            let imagenSerpiente = serpiente.img;

            if (nombre.value == 'Aguila' && edad.value != null && comentario.value != null) {
                let imagenAguila = aguila.img;
                console.log('Estoy pasando por aquí')
                mostrarImagen(imagenAguila)
            } else if (nombre.value == 'Leon' && edad.value != null && comentario.value != null) {
                mostrarImagen(imagenLeon)
            } else if (nombre.value == 'Lobo' && edad.value != null && comentario.value != null) {
                mostrarImagen(imagenLobo)
            } else if (nombre.value == 'Serpiente' && edad.value != null && comentario.value != null) {
                mostrarImagen(imagenSerpiente)
                imagen.setAttribute('width', '110%')
                imagen.setAttribute('alt', 'auto')
            } else if (nombre.value == 'Oso' && edad.value != null && comentario.value != null) {
                mostrarImagen(imagenOso)
                imagen.setAttribute('width', '110%')
                imagen.setAttribute('alt', 'auto')
            }
         
        } else{
            alert('Tiene que ingresar todos los datos')
        }
    


       

    
});


//mostrar imagen
const mostrarImagen = (imagenAnimal) => {

    imagen.setAttribute('src', `assets/imgs/${imagenAnimal}`)
    imagen.setAttribute('width', '87%')
    imagen.setAttribute('alt', '100%')
    /*  */

}