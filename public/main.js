


// mostrar solo productos en la tienda 

document.addEventListener('DOMContentLoaded', () => {
    const tiendaLink = document.getElementById('tienda-link');
    const formSection = document.getElementById('form-section');
    const productsSection = document.getElementById('products-section');

    tiendaLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        formSection.style.display = 'none';
        productsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
