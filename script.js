document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar funcionalidad, como animaciones o manejo de clics.
    
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log('Botón "¡Entra YA!" clickeado. ¡Vamos a explorar!');
            // Por ejemplo, aquí podrías redirigir al usuario
            // window.location.href = '/login'; 
        });
    }
});
