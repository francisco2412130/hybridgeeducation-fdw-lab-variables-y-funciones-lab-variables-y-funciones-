// Ejercicio 5: Área de un Rectángulo
// Declara una función llamada "calcularAreaRectangulo" que acepte dos parámetros, "ancho" y "alto", y retorne el área del rectángulo

//escribe tu función aquí. Recuerda que el nombre exacto de la función es "calcularAreaRectangulo"
function calcularAreaRectangulo (ancho, alto){
    return (ancho*alto)/2
}

console.log(calcularAreaRectangulo(19,18))

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    calcularAreaRectangulo
};
