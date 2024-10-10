import data from "./../data/fotos";
const { fotos } = data;

const galeria = document.getElementById("galeria");

// cargar imagen principal
const cargarImagen = (id, nombre, descripcion, ruta) => {
    galeria.querySelector(".galeria__imagen").dataset.idImagen = id;
    galeria.querySelector(".galeria__titulo").innerText = nombre;
    galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
        descripcion;
    galeria.querySelector(".galeria__imagen").src = ruta;

    // agregar clase activa al slide
    const categoriaActual = galeria.dataset.categoria;
    const fotosCategoria = fotos[categoriaActual];

    let indexImagenActual;
    fotosCategoria.forEach((foto, index) => {
        if (foto.id === id) {
            indexImagenActual = index;
        }
    });

    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    if (slides.length > 0) {
        // remover clase activa|
        document
            .querySelector(".galeria__carousel-slide--active")
            .classList.remove("galeria__carousel-slide--active");

        slides[indexImagenActual].classList.add(
            "galeria__carousel-slide--active"
        );
    }
};

const cargarAnteriorSiguiente = (accion) => {
    let categoriaActual = galeria.dataset.categoria;
    let fotosCarousel = fotos[categoriaActual];

    let indexNuevaImagen;

    let idImagenActual = parseInt(
        galeria.querySelector(".galeria__imagen").dataset.idImagen
    );

    fotosCarousel.forEach((foto, index) => {
        if (foto.id === idImagenActual) {
            indexNuevaImagen = index;
        }
    });

    if (accion === "siguiente") {
        indexNuevaImagen++;
        if (fotosCarousel[indexNuevaImagen]) {
            // datos para la nueva imagen
            const {id, nombre, descripcion, ruta} = fotosCarousel[indexNuevaImagen];
            cargarImagen(id, nombre, descripcion, ruta);
        }
    } else if (accion === "anterior") {
        indexNuevaImagen--;
        if (fotosCarousel[indexNuevaImagen]) {
            // datos para la nueva imagen
            const {id, nombre, descripcion, ruta} = fotosCarousel[indexNuevaImagen];
            cargarImagen(id, nombre, descripcion, ruta);
        }
    }
};

export { cargarImagen, cargarAnteriorSiguiente };
