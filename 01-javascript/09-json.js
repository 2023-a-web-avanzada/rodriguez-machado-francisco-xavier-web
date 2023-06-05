// Stringify y Parse
const arregloUsuarios = [
    {
        id: 1,
        nombre: 'Adrian',
    }
];
const arregloGuardado = JSON.stringify(arregloUsuarios) // Arreglos, Objetos
const usuario = {
    id: 1,
    nombre: 'Adrian',
};
const objetoGuardado = JSON.stringify(usuario) // Arreglos, Objetos
console.log('arregloGuardado', arregloGuardado);
console.log('objetoGuardado', objetoGuardado);
const arregloRestaurado = JSON.parse(arregloGuardado);
const objetoRestaurado = JSON.parse(arregloGuardado);
console.log('arregloRestaurado', arregloRestaurado);
console.log('objetoRestaurado', objetoRestaurado);