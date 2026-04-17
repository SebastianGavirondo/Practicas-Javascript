let lado1 = 2,
  lado2 = 2,
  lado3 = 2;

if (lado1 === lado2 && lado1 === lado3) {
  console.log("Equilatero");
} else if (lado1 === lado2 || lado1 === lado3) {
  console.log("Isóseles");
} else console.log("Escaleno");
