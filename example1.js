// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("example1.js gonorreas");
  // Funcion anonima
  var calcular = function (a, b) {
    return a + b;
  };
  console.log(calcular(1, 2));

  loadApp();
})();

// Funcion normal
function loadApp() {
  console.log("loadApp");
  // Funcion flecha
  let saluda = () => console.log("Hola");
  saluda();
  let nombre = "NABUCODONOSOR";
  let apellido = "Perez";
  //template string
  console.log(`Hola, ${nombre} ${apellido}!`);

  console.log(nombre.length); // 13
  console.log(nombre.toUpperCase()); // NABUCODONOSOR
  console.log(nombre.toLowerCase()); // nabucodonosor
  console.log(nombre.substring(0, 5)); // NABUC

  // Identificador unico
  const simbolo = Symbol();

  const emperador = {
    nombre: "NABUCODONOSOR",
    apellido: "Perez",
    edad: 30,
    hobbies: ["futbol", "basket", "tenis"], // array
    direccion: {
      calle: "Av. Siempreviva",
      numero: 123,
      ciudad: "Springfield",
      pais: "USA",
    },
    [simbolo]: "Identificador unico",
  };

  console.log(emperador);
  console.log(emperador.nombre);
  console.log(emperador.hobbies[0]);
  console.log(emperador.direccion.pais);
  console.log(emperador[simbolo]);

  function returnDataType(data) {
    return typeof data;
  }

  console.log(returnDataType(1)); // number
}
