const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta para servir db.json
app.get('/api/db', (req, res) => {
    const dbPath = path.join(__dirname, '../db.json');
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error leyendo la base de datos');
        } else {
            console.log('Datos leídos de db.json:', data); // Agregar log para depuración
            res.json(JSON.parse(data));
        }
    });
});

// Servir index.html desde la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Manejo de rutas inexistentes
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

module.exports = app;
