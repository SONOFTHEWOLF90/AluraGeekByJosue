# AluraGeekByJosue
Aplicacion para agregar  y eliminar productos 

AluraGeek - Aplicación de Gestión de Productos
Bienvenido a la Aplicación de Gestión de Productos de AluraGeek, una solución robusta y eficiente diseñada para gestionar listados de productos con facilidad. Esta aplicación proporciona funcionalidades para añadir, ver y eliminar productos, asegurando una interacción y experiencia de usuario sin problemas.

Tabla de Contenidos
Introducción

Características

Instalación

Uso

Endpoints de la API

Tecnologías Utilizadas

Contribuir

Licencia

Contacto

Introducción
La Aplicación de Gestión de Productos de AluraGeek está diseñada para optimizar las tareas de gestión de productos. Ya sea que estés añadiendo nuevos productos, viendo los existentes o eliminando entradas obsoletas, esta aplicación lo hace simple y eficiente. Construida con escalabilidad y experiencia del usuario en mente, sirve como una herramienta esencial para cualquier plataforma de comercio electrónico.

Características
Agregar Productos: Añade nuevos productos a la base de datos fácilmente con nombre, precio y URL de la imagen.

Ver Productos: Muestra todos los productos en una interfaz fácil de usar.

Eliminar Productos: Elimina productos de la base de datos con un solo clic.

Diseño Responsivo: Garantiza que la aplicación sea accesible en todos los dispositivos.

Actualizaciones en Tiempo Real: Retroalimentación instantánea sobre la adición y eliminación de productos.

Instalación
Para ejecutar la Aplicación de Gestión de Productos de AluraGeek localmente, sigue estos pasos:

Clona el Repositorio:

bash
git clone https://github.com/tu-usuario/alurageek-product-management.git
Navega al Directorio del Proyecto:

bash
cd alurageek-product-management
Instala las Dependencias:

bash
npm install
Inicia el JSON Server:

bash
json-server --watch db.json --port 3001
Inicia el Servidor Express:

bash
node api/server.js
Uso
Una vez configurada la aplicación, abre tu navegador y navega a http://localhost:3001. Serás recibido con la interfaz principal de la aplicación donde podrás gestionar tus listados de productos.

Agregar un Producto: Rellena los detalles del producto en el formulario y haz clic en "Enviar".

Ver Productos: Desplázate por la lista de productos para ver todos los productos.

Eliminar un Producto: Haz clic en el ícono de la papelera en una tarjeta de producto para eliminarlo.

Endpoints de la API
GET /products
Obtiene todos los productos.

POST /products
Añade un nuevo producto.

DELETE /products/:id
Elimina un producto por ID.

Tecnologías Utilizadas
Frontend: HTML, CSS, JavaScript (ES6+)

Backend: Node.js, Express.js, JSON Server

Estilos: CSS personalizado

Herramientas: Git, npm

Contribuir
Damos la bienvenida a contribuciones de la comunidad. Para contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama:

bash
git checkout -b feature/tu-feature
Haz commit de tus cambios:

bash
git commit -m 'Añade una nueva funcionalidad'
Haz push a la rama:

bash
git push origin feature/tu-feature
Abre un pull request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
Para cualquier consulta o comentario, por favor contacta a nuestro equipo de desarrollo en contacto@alura.com.
