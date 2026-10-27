// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionar todos los enlaces del menú de navegación
    const enlacesNav = document.querySelectorAll('.nav-links a');

    // Añadir el evento de clic a cada enlace
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Evitar el salto brusco predeterminado
            
            // Obtener el ID de la sección a la que queremos ir (ej: #sobre-mi)
            const idSeccion = this.getAttribute('href');
            const seccionDestino = document.querySelector(idSeccion);
            
            // Hacer el scroll suave hacia esa sección
            seccionDestino.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
});