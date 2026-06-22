// Definición de funciones acá
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

// Definición de funciones acá

function calculadora(num1, num2, operador) {
  let resultado;
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

function areaRectangulo(base, altura) {
  return base * altura;
}

function esPar(numero) {
  if (numero % 2 == 0) {
    return "es par";
  }
  return "es impar";
}

function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function calificarNota(num) {
  if (num > 85) {
    return "A";
  } else if (num >= 50) {
    return "B";
  }
  return "C";
}

function sumarArray(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return suma;
}

function encontrarMaximoPar(array) {
  let maximo = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && maximo < array[i]) {
      maximo = array[i];
    }
  }

  return maximo;
}

function contarVocales(texto) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (
      texto[i] == "a" ||
      texto[i] == "e" ||
      texto[i] == "i" ||
      texto[i] == "o" ||
      texto[i] == "u"
    ) {
      contador++;
    }
  }
  return contador;
}

function dobleNumeros(array) {
  let doble = [];
  for (let i = 0; i < array.length; i++) {
    doble.push(array[i] * 2);
  }

  return doble;
}
