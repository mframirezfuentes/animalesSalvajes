

export const mandarDatos=()=>{

    const obtenerDatos = async () => {
        const url = 'http://127.0.0.1:5500/animales.json';
        const json = await fetch(url);
        const respuesta = await json.json();
        return respuesta;    
    }

    return{
        mostrar: ()=>{
            obtenerDatos
        }
             
    }


}
export const obtenerDatos = async () => {
    const url = 'http://127.0.0.1:5500/animales.json';
    const json = await fetch(url);
    const respuesta = await json.json();
    return respuesta;    
}