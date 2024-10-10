import data from "../data/fotos";
import { cargarImagen } from "./cargarImagen";

const slideClick = (e) => {
    let id, nombre, descripcion, ruta;

    const idFoto = parseInt(e.target.closest("img").dataset.idFoto);
    const categoriaActiva = galeria.dataset.categoria;

    data.fotos[categoriaActiva].forEach((foto) => {
        if (foto.id === idFoto) {
            id = foto.id;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
            ruta = foto.ruta;
        }
    });

    // cargar informacion de la imagen
    cargarImagen(id, nombre, descripcion, ruta);
};

export default slideClick;
