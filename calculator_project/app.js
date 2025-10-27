// Servidor Node.js para la calculadora web
const express = require('express');
const path = require('path');
const calculos = require('./calculos');

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Middleware para procesar los datos del formulario (ya incluido en express)
app.use(express.urlencoded({ extended: true }));

// Middleware para procesar JSON
app.use(express.json());

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta POST para procesar los cálculos
app.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operation = req.body.operation;
    
    let result;
    
    // Validar que los números sean válidos
    if (isNaN(num1) || isNaN(num2)) {
        return res.json({ 
            error: true, 
            result: 'Error: Por favor ingrese números válidos' 
        });
    }
    
    // Ejecutar la operación correspondiente
    switch (operation) {
        case 'sum':
            result = calculos.sum(num1, num2);
            break;
        case 'subtract':
            result = calculos.subtract(num1, num2);
            break;
        case 'multiply':
            result = calculos.multiply(num1, num2);
            break;
        case 'divide':
            result = calculos.divide(num1, num2);
            break;
        default:
            return res.json({ 
                error: true, 
                result: 'Error: Operación no válida' 
            });
    }
    
    // Devolver el resultado en formato JSON
    res.json({ 
        error: false, 
        result: result 
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
