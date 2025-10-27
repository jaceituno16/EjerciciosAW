// Módulo de cálculos matemáticos

/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a y b
 */
function sum(a, b) {
    return a + b;
}

/**
 * Resta el segundo número del primero
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La resta de a - b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} El producto de a y b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide el primer número entre el segundo
 * @param {number} a - Numerador
 * @param {number} b - Denominador
 * @returns {number|string} El resultado de la división o un mensaje de error si b es cero
 */
function divide(a, b) {
    if (b === 0) {
        return 'Error: División por cero no permitida';
    }
    return a / b;
}

// Exportar las funciones para que puedan ser utilizadas en otros módulos
module.exports = {
    sum,
    subtract,
    multiply,
    divide
};
