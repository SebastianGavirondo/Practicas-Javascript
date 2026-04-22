const numeros = [4, 17, 3, 25, 8, 11];
let mayor = numeros[0];

for (let contador = 0; contador < numeros.length; contador++) {
  if (numeros[contador] > mayor) {
    mayor = numeros[contador];
  }
}
console.log("El número mayor es: ", mayor);
