// archivo cargar categorias
import data from "./data/categorias";

// categorias
const { categorias } = data;
const contenedorCategorias = document.getElementById("categorias");

categorias.forEach((categoria) => {
    // contenedor categoria
    const nuevaCategoria = document.createElement("a");
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="imagenCategoria" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
        </div>
    `;

    // atributos de la etiqueta a
    nuevaCategoria.href = '#';
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.dataset.categoria = categoria.id;
    nuevaCategoria.innerHTML = plantilla;
    
    // agregar al contenedor
    contenedorCategorias.appendChild(nuevaCategoria);
});
