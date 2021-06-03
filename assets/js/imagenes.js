export default obtenerImagen = async () => {
    const url = 'http://127.0.0.1:5500/animales.json';
    const json = await fetch(url);
    const respuesta = await json.json();
    return respuesta;

}