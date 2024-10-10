// archivo carousel
const galeria = document.getElementById("galeria");

const carousel = (posicion) => {
    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    // definir objeto de configuracion
    const observerConfig = {
        root: galeria.querySelector(".galeria__carousel-slides"),
        rootMargin: "0px",
        threshold: 0.9,
    };

    // observador
    const observador = new IntersectionObserver((entradas) => {
        // entradas visibles
        const slidesVisibles = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) {
                return entrada.target;
            }
        });

        // anterior siguiente
        if (posicion === "siguiente") {
            const ultimoSlideVisible =
                slidesVisibles[slidesVisibles.length - 1];
            const indexUltimoSlideVisible =
                entradas.indexOf(ultimoSlideVisible);

            if (entradas.length - 1 > indexUltimoSlideVisible) {
                // hacer visible el elemento
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                });
            }
        } else if (posicion === "anterior") {
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible =
                entradas.indexOf(primerSlideVisible);

            if (indexPrimerSlideVisible > 0) {
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                });
            }
        }

        // dejar de observar slides
        slides.forEach((slide) => {
            observador.unobserve(slide);
        });
    }, observerConfig);

    // elementos a observar
    slides.forEach((slide) => {
        observador.observe(slide);
    });
};

export default carousel;
