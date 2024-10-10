// archivo eventos galeria
import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import anteriorSiguienteCatousel from "./carousel";

const galeria = document.getElementById("galeria");
galeria.addEventListener("click", (e) => {
    e.preventDefault();

    // boton al que se le hizo clic
    const boton = e.target.closest("button");

    if (boton?.dataset?.accion === "cerrar-galeria") {
        cerrarGaleria();
    }

    if (e.target.closest("img")?.dataset?.idFoto) {
        slideClick(e);
    }

    // controles imagen principal
    // siguiente imagen
    if (boton?.dataset?.accion === "siguiente-imagen") {
        cargarAnteriorSiguiente("siguiente");
    }

    // anterior imagen
    if (boton?.dataset?.accion === "anterior-imagen") {
        cargarAnteriorSiguiente("anterior");
    }

    // controles carousel
    // siguiente
    if (boton?.dataset?.accion === "siguiente-slide") {
        anteriorSiguienteCatousel("siguiente");
    }
    // anterior
    if (boton?.dataset?.accion === "anterior-slide") {
        anteriorSiguienteCatousel("anterior");
    }
});
