let operacion = "/",
  num1 = 2,
  num2 = 1;

switch (operacion) {
  case "+":
    resultado = num1 + num2;
    console.log("el resultado de la suma es: " + resultado);
    break;
  case "-":
    resultado = num1 - num2;
    console.log("el resultado de la resta es: " + resultado);
    break;
  case "/":
    resultado = num1 / num2;
    console.log("el resultado de la division es: " + resultado);

    break;
  case "*":
    resultado = num1 * num2;
    console.log("el resultado de la multiplicacion es: " + resultado);
    break;
}
