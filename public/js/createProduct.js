import { conexionApi } from "./api.js";

const formulario = document.querySelector("[data-formulario]");

function esURLValida(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

async function crearProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value.trim();
    const precio = document.querySelector("[data-precio]").value.trim();
    const imagen = document.querySelector("[data-imagen]").value.trim();

    console.log("Datos del producto:", { nombre, precio, imagen });

    if (!nombre || !precio || !imagen) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    if (!esURLValida(imagen)) {
        alert("Por favor, ingresa una URL válida.");
        return;
    }

    try {
        const nuevoProducto = await conexionApi.enviarProducto(nombre, precio, imagen);
        console.log("Producto agregado:", nuevoProducto);

        // Limpiar el formulario después del envío exitoso
        
        formulario.reset(); 
    } catch (error) {
        console.error("Error al enviar los datos: ", error);
    }
}

formulario.addEventListener("submit", crearProducto);
