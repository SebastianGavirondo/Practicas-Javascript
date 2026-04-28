// Definición de funciones acá
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

// Definición de funciones acá

function calculadora(num1, num2, operador) {
  switch (operador) {
    case "+":
      resultado = num1 + num2;

      break;
    case "-":
      resultado = num1 - num2;

      break;
    case "/":
      resultado = num1 / num2;

      break;
    case "*":
      resultado = num1 * num2;

      break;
  }
  return resultado;
}
