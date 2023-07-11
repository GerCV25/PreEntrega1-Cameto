/**
 * @param {*} cadena
 * @returns
 */
function obtenerDato(cadena) {
    const dato = prompt(cadena);
    console.log(cadena, ":", dato);
    return dato;
  }
  
  /**
   * @param {*} edad
   * @returns
   */
  function comprobarEdad(edad) {
    let respuesta = true;
    if (edad <= 17) {
      alert("Aún no tienes la edad suficiente para acceder al sitio.");
      respuesta = false;
    }
  
    if (edad === 16) {
      const consulta = prompt("¿Te acompaña alguien mayor s/n?").toLowerCase();
      if (consulta === "n") {
        respuesta = false;
      } else {
        const nombreAdulto = obtenerDato("Nombre del adulto");
        const apellidoAdulto = obtenerDato("Apellido del adulto");
        const edadAdulto = obtenerDato("Edad del adulto");
  
        if (comprobarDatos(nombreAdulto) && comprobarDatos(apellidoAdulto) && comprobarDatos(edadAdulto)) {
          alert("Bienvenido a Khali Design " + nombreAdulto);
        } else {
          respuesta = false;
          alert("Datos ingresados insuficientes");
        }
      }
    }
    return respuesta;
  }
  
  /**
   *
   * @param {string} dato
   * @returns {booleano}
   */
  const comprobarDatos = (dato) => dato !== "";
  
  function logIn() {
    const user = "GerCV";
    const pass = "1234567891";
    let inputUser = prompt("Ingresa tu usuario");
    let inputPass = prompt("Ingresa tu Password");
    if (inputUser === user && inputPass === pass) {
      alert("Login satisfactrio");
      console.log("Usuario " + user);
      console.log("Password " + "**");
      document.write("Bienvenido " + user);
      return true;
    } else {
      alert("Datos incorrectos");
      return false;
    }
  }
  
  function obtenerInfo() {
    let nombre = obtenerDato("Nombre");
    const apellido = obtenerDato("Apellido");
  
    if (comprobarDatos(nombre) && comprobarDatos(apellido)) {
      alert("Datos Correctos");
    } else {
      alert("Datos ingresados incorrectamente");
      return;
    }
    const edad = parseInt(obtenerDato("Edad"));
    const mayorEdad = comprobarEdad(edad);
  
    if (!mayorEdad) {
      return;
    }
    const email = obtenerDato("Email");
    alert("Bienvenido a Khali Design " + nombre + " " + apellido);
  }
  
  let continuar = true;
  while (continuar) {
    if (!logIn()) continue;
  
    obtenerInfo();
    let nuevoUsuario = prompt("Desea ingresar otro usuario s/n");
    if (nuevoUsuario === "n") {
      continuar = false;
    } else if (nuevoUsuario === "s") {
      continue;
    } else {
      alert("El valor ingresado no es el correcto");
      break;
    }
  }