const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para archivos estáticos
app.use(express.static('public'));
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// API de ejemplo para el parcial
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        project: 'Parcial TDM',
        timestamp: new Date().toISOString(),
        ready: true
    });
});

// Ruta de ejemplo para datos
app.get('/api/datos', (req, res) => {
    res.json([
        { id: 1, nombre: "Ejemplo 1", activo: true },
        { id: 2, nombre: "Ejemplo 2", activo: false },
        { id: 3, nombre: "Ejemplo 3", activo: true }
    ]);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});