// archivo eventos categorias
import data from "./data/fotos";
import { cargarImagen } from "./galeria/cargarImagen";

// categorias
const categorias = document.getElementById("categorias");
let categoriaActiva;
// galeria
const galeria = document.getElementById("galeria");

categorias.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.closest("a")) {
        categoriaActiva = e.target.closest("a").dataset.categoria;
        galeria.dataset.categoria = categoriaActiva;

        // reiniciar contenido de slides
        const carousel = document.querySelector(".galeria__carousel-slides");
        carousel.innerHTML = "";

        // fotos de categoria
        const fotos = data.fotos[categoriaActiva];

        // mostrar galeria
        galeria.classList.add("galeria--active");

        // ocultar scroll
        document.body.style.overflow = "hidden";

        // cargar imagen principal
        const { id, nombre, descripcion, ruta } = fotos[0];
        cargarImagen(id, nombre, descripcion, ruta);

        // agregar slides
        fotos.forEach((foto) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
                <img class="galeria__carousel-image" src="${foto.ruta}" alt="${foto.nombre}" data-id-foto="${foto.id}" />
            </a>
            `;
            carousel.innerHTML += slide;
        });
        // agregar estilo activo al primer slide
        galeria
            .querySelector(".galeria__carousel-slide")
            .classList.add("galeria__carousel-slide--active");
    }
});
