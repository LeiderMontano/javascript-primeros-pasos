//Listas  o Arrays//


//Definición de una lista con tipo de datos alfanumericos.
const paises = new Array(" Colombia", " Japon", " Paris", " Canadá");

//Listas abreviadas
const cuidades = [" Bogota", " Lima", " Santiago"];

//Agregar elementos al final

paises.push (" Francia");
cuidades.push (" Venecia");

//Agregar elementos al inicio
paises.unshift ("Bolivia");
cuidades.unshift ("Tumaco");

//Eliminar elementos y agregar elementos
cuidades.splice (0, "Reino Unido");

console.log(cuidades);
console.log(paises);

//console.log (" Cuidades: "+ cuidades[0]);
//console.log (" Paises: " + paises[0]);