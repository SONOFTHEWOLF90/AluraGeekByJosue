import { getProducts } from '../js/api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.querySelector('.product-list');
    const form = document.querySelector('form');

    // Renderizacion de productos 

    const renderProducts = (products) => {
        if (products.length === 0) {
            productList.innerHTML = '<p>No se han agregado productos</p>';
        } else {
            productList.innerHTML = products.map(product => `
                <div class="card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="card-container--info">
                        <p>${product.name}</p>
                        <div class="card-container--value">
                            <p>$ ${product.price}</p>
                            <img src="./assets/deleteicon.png" alt="Eliminar producto" data-id="${product.id}">
                        </div>
                    </div>
                </div>
            `).join('');
        }
    };

    // obtencion de productos y renderizado
    const fetchAndRenderProducts = async () => {
        const products = await getProducts();
        renderProducts(products);
    };

    // Envia formulario para agregar producto
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const newProduct = {
            name: formData.get('nombre'),
            price: formData.get('precio'),
            image: formData.get('imagen')
        };

        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }
            await fetchAndRenderProducts();
            form.reset();
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // inicia la carga de productos 
    fetchAndRenderProducts();
});
