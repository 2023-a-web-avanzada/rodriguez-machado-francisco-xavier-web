//03-funciones.ts
function sumarNumeros(numeroInicial) {
    var numerosInfinitos = []; // requerido
    for (var _i = 1 // requerido
    ; _i < arguments.length // requerido
    ; _i++ // requerido
    ) {
        numerosInfinitos[_i - 1] = arguments[_i]; // requerido
    }
    return numeroInicial;
}
function imprimir(mensaje // opcional
) {
    console.log('Hola ' + mensaje ? mensaje : 'bienvenido');
}
var arregloNumeros = [1, 2];
var arregloNumerosDos = [1, 2];
var arregloNumerosTres = [1, 'dos', true, 1, 'dos', true];
var arregloNumerosCuatro = [1, 'dos', true, 1, 'dos', true];
var arregloNumerosCinco = [1, 2];
arregloNumerosCinco = ['uno', 'dos'];
