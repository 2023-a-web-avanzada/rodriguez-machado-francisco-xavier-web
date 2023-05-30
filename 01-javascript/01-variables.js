// 01-javascript
//  01-variables.js
// Mutables e Inmutables
// Mutables  (re asignadas)
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Inmutables  (re asignadas)
const configuracionArchivos = 'PDF';
// configuracionArchivos = 'XML';
// vamos a preferir CONST > LET > VAR (mejor no usar)

// Tipos de variables (primitivas)
const numero = 1; // number
const sueldo = 1.2; // number
const texto = 'Francisco' // string
const apellidos = "Rodriguez" // string
const casado = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellidos);
console.log(typeof casado);
console.log(typeof hijos);
console.log(typeof zapatos);

// Truty y Falsy
if(true){
    console.log('Es verdadero');
} else {
    console.log('Es falso');
}
if(""){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // FALSY
}
if("Adrian"){ // string vacio
    console.log('Es verdadero'); // TRUTY
} else {
    console.log('Es falso');
}
if(-1){
    console.log('Es verdadero -1'); // Verdadero
} else {
    console.log('Es falso -1');
}
if(0){
    console.log('Es verdadero 0');
} else {
    console.log('Es falso 0'); // Falso
}
if(1){ // string vacio
    console.log('Es verdadero 1'); // Verdadero
} else {
    console.log('Es falso 1');
}

if(null){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // falso
}
if(undefined){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // falso
}

const francisco = {
    "nombre": "Francisco",
    'apellido': 'Rodriguez',
    edad: 23,
    hijos: null,
    casado: false,
    zapados: undefined,
    ropa: {
        color: 'plomo',
        talla: 40,
    },
    mascotas: ['Dostin', 'Peluchin'],
};
console.log(francisco);
// Acceder a las propiedades
francisco.nombre // "Francisco"
francisco.apellido // "Rodriguez"
francisco["nombre"] // "Francisco"
// Modificar valores
francisco.nombre = "Xavier";
francisco["nombre"] = "Francisco";
// Crear atributos
francisco.sueldo; // undefined
console.log(francisco.sueldo); // undefined
francisco.sueldo = 1.2;
console.log(francisco.sueldo); // 1.2
francisco["gastos"] = 0.8;
console.log(francisco.gastos);
console.log(francisco);
// Eliminar propiedades
francisco.nombre = undefined;
console.log(francisco);
console.log(Object.keys(francisco));
console.log(Object.values(francisco));
delete francisco.nombre;
console.log(Object.keys(francisco));
console.log(francisco);

// Variables por valor o por referencia
// Variables por valor
// Primitivas: number string boolean
let edadFrancisco = 23;
let edadVicente = edadFrancisco;
console.log(edadFrancisco); //23
console.log(edadVicente); //23
edadFrancisco = edadFrancisco + 1;
console.log(edadFrancisco); //23
console.log(edadVicente); //23
// Variables por referencia
// Object: {} []
let notas = {
    total: 10,
};
let notasSegundoBimestre = notas; // IGUALACION REFERENCIA
notasSegundoBimestre.total = notasSegundoBimestre.total + 1;
console.log(notas); // 11
console.log(notasSegundoBimestre); // 11
// Como clonar objetos
let notasTercerBimestre = Object.assign({}, notas);
// Object.assign([], arreglo);
notasTercerBimestre.total = notasTercerBimestre.total + 1;
console.log(notas); // 11
console.log(notasSegundoBimestre); // 11
console.log(notasTercerBimestre); // 12