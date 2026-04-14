/* Se selecciona el formulario */
const form = document.querySelector("form");
/* Se selecciona el contenedor que va a mostrar la info */
const showData = document.querySelector("#showData");

// Se captura el evento submit (boton submit)
form.addEventListener("submit", (e) => {
  /* Se previene el comportamiento por defecto (redirigir) */
  e.preventDefault();

  /* Se utiliza FormData para obtener la información en el formulario */
  const formData = new FormData(form);

  /* Se definen y cargan las variables con los datos */
  const name = formData.get("nombre");
  const email = formData.get("correo");
  const pass = formData.get("contraseña");
  const genero = formData.get("genero") || "S/D";

  /* Caso particular: tenemos una lista de hobbies */
  /* En el caso que la lista sea 0, se guarda "S/D" */
  /* En el caso contrario se guarda la lista */
  const hobbies =
    formData.getAll("hobbies").length == 0 ? "S/D" : formData.getAll("hobbies");

  /* console.log(
    `Nombre: ${name}\nCorreo: ${email}\nContraseña: ${pass}\n\nGenero: ${genero}\nHobbies: ${hobbies}`,
  ); */

  /* Se agrega la clase .hidden al formulario que aplica los estilos de hidden */
  form.classList.add("hidden");
  /* Se quita la clase .hidden del showData */
  showData.classList.remove("hidden");

  /* Se obtienen y cargan las etiquetas que van a mostrar la información */
  showData.querySelector("#nombre").innerHTML = name;
  showData.querySelector("#correo").innerHTML = email;
  showData.querySelector("#contraseña").innerHTML = pass;
  showData.querySelector("#genero").innerHTML = genero;

  /* Se trabaja el caso particular de hidden */
  /* Si es igual a S/D simplemente se carga ese valor */
  if (hobbies == "S/D") {
    const child = document.createElement("li");
    child.innerHTML = hobbies;
    showData.querySelector("#hobbies").appendChild(child);
  } else {
    /* En caso que sea una lista, se recorre cada item y se agregan las etiquetas */
    hobbies.forEach((item) => {
      const child = document.createElement("li");
      child.innerHTML = item;
      showData.querySelector("#hobbies").appendChild(child);
    });
  }
});
