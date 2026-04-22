let palabras = ["sol", "montaña", "mar", "elefante", "río", "cascada"];
let palabrasLargas = [];

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 5) {
    palabrasLargas.push(palabras[i]);
  }
  console.log(palabrasLargas);
}
