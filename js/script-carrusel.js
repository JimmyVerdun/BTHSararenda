document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        // Efecto de deslizamiento
        effect: 'coverflow', // Otrs efectos son: fade, cube, slide
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true, // Permite que el carrusel se deslice en forma circular, indefinidamente, no muestra espacios entre la primer y ultima imagen
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        // Paginación
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navegación con flechas
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Carrusel autodeslizante, al llegar al final se repite la secuencia, muestra un espacio al iniciar la secuencia
        autoplay: {
            delay: 3000, // Duración por imagen de 3 segundos
            disableOnInteraction: false,
        },
        // Responsive
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
});