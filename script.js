// Esperar a que todo el documento HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const botonCuriosidades = document.getElementById('btn-curiosidades');
    const listaCuriosidades = document.getElementById('contenedor-lista-curiosidades');

    // Evento de clic en el botón de Curiosidades
    botonCuriosidades.addEventListener('click', () => {
        const estaOculto = listaCuriosidades.classList.contains('oculto');

        if (estaOculto) {
            listaCuriosidades.classList.remove('oculto');
            botonCuriosidades.textContent = 'Ocultar Curiosidades';
        } else {
            listaCuriosidades.classList.add('oculto');
            botonCuriosidades.textContent = 'Ver Curiosidades de Santa Cruz';
        }
    });
});
