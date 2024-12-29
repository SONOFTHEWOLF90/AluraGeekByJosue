//importa la conexion a la api desde api.js
import { conexionApi } from "./api.js";


const lista = document.querySelector("[data-lista]");

function crearCard(id, nombre, precio, imagen, mostrarEliminar = true) {
    const card = document.createElement("div");
    card.className = "marco-fluor";

    card.innerHTML = `
        <img src="${imagen}" alt="Imagen producto" class="imagen-producto">
        <p class="titulo-producto">${nombre}</p>
        <p class="precio">${precio}</p>
    `;

    if (mostrarEliminar) {
        const botonEliminar = document.createElement("button");
        botonEliminar.className = "eliminar";
        botonEliminar.dataset.id = id;
        botonEliminar.innerHTML = `
            <div class="icono-papelera">
                <img src="./assets/deleteicon.png" alt="Eliminar producto">
            </div>
        `;

        botonEliminar.addEventListener("click", () => {
            conexionApi.borrarProducto(id)
                .then(() => {
                    card.remove();
                })
                .catch(err => console.log(err));
        });

        card.appendChild(botonEliminar);
    }

    lista.appendChild(card);
}

const cargarProductos = async () => {
    try {
        const listaApi = await conexionApi.listarProductos();
        console.log('Lista API:', listaApi);

        const mostrarEliminar = !window.location.pathname.includes('tienda.html');

        if (Array.isArray(listaApi)) {
            listaApi.forEach(producto => {
                crearCard(producto.id, producto.name, producto.price, producto.image, mostrarEliminar);
            });
        } else {
            console.error('La respuesta de la API no es un arreglo:', listaApi);
        }
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
};

cargarProductos();
