//Booleanos
//Operadores de comparación

const cuidadDestino = "Bogota";
const cuidadDisponible = ["Bogota", "Lima", "Santiago", "Venecia"];

//console.log (`Verificando viajes ${cuidadDestino}`);
if (cuidadDisponible.indexOf(cuidadDestino) >= 0) {
    console.log ("Disponible para venta");
} else {
    console.log ("No hay viajes disponibles");
}

//Operadores Logicos
//Y (AND) - O (OR) - NO (NOT)
// AND = && Cumple las dos condicones
//OR = || Deve de cumplir una de las dos cindiciones
// NOT = ! No se cumple la condición
const edadPasajeros = 17;

if ((cuidadDisponible.indexOf(cuidadDestino) >= 0) && edadPasajeros >= 17){
    console.log ("Cumple con la edad");
} else {
    console.log ("No cumple con la edad");
}