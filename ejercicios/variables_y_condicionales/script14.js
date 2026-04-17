let email = "sebastian.gavirondo@estudiantes.utec.edu.uy",
  palabra = "@";
palabra2 = ".";
resultado = email.includes(palabra && palabra2);

if (email.includes(palabra && palabra2)) {
  console.log("valido");
} else console.log("invalido");

if (resultado == true) {
  console.log("valido");
} else console.log("invalido");
