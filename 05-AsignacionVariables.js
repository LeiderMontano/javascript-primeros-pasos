// Las variables "const" no cambian nunca.

// Las variables "let" pueden cambiar durante la ejecucuión del programa, pero solo se puede acceder a ella dentro del {bloque de codigo}.

// Las variable "var" se almacena en la memoria del sistema, se almacena en el punto principal del programa (Tiene alcance global)

//Template String = " `` " (Coillas inveridas) {Alt Gr + boton de cerrar corchetes}

const valorPasaje = 2950;

let nombrePasajera = "Luna";
let apellidoPasajera = "Lunera";

console.log (nombrePasajera);
console.log (apellidoPasajera);
// Toca cambiar la variable a "let" o "var" para poder modificarla mas adelante.
nombrePasajera = nombrePasajera + " " + apellidoPasajera; 
console.log (nombrePasajera);