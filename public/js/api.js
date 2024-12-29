const apiURL = "http://localhost:3001/products"; // Cambia el puerto según sea necesario

// Método GET para obtener productos
async function listarProductos() {
    try {
        const conexion = await fetch(apiURL);
        if (!conexion.ok) {
            throw new Error(`HTTP error! status: ${conexion.status}`);
        }
        const productos = await conexion.json();
        return productos;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

// Método POST para crear un nuevo producto
async function enviarProducto(nombre, precio, imagen) {
    try {
        const conexion = await fetch(apiURL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: nombre,
                price: precio,
                image: imagen
            })
        });
        const nuevoProducto = await conexion.json();
        return nuevoProducto;
    } catch (error) {
        console.error('Error al enviar el producto:', error);
    }
}

// Método DELETE para eliminar un producto
const borrarProducto = async (id) => {
    try {
        const res = await fetch(`${apiURL}/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
}

export const conexionApi = {
    listarProductos,
    enviarProducto,
    borrarProducto
};
