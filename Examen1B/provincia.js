import inquirer from "inquirer";
export class Provincia{

    constructor(nombre, comidaTipica, estaDeFiesta, Temperatura, numeroDeCantones, habitantes) {
        // Asignar el valor del parámetro 'nombre' a la propiedad 'nombre' de la instancia
        this.nombre = nombre
        this.comidaTipica = comidaTipica
        this.estaDeFiesta = estaDeFiesta
        this.Temperatura = Temperatura
        this.numeroDeCantones = numeroDeCantones
        this.habitantes = habitantes

    }

    async crearProvincia(){
        const nuevaProvincia = new Provincia()
        let promesaProvincia;
        // Se utiliza el método prompt de inquirer para solicitar información al usuario
        const respuestaM = await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre de la provincia:'},
                {type:'input',name:'comidaTipica',message:'Ingrese el nombre de la comida típica:'},
                {type:'input',name:'estaDeFiesta',message:'¿Esta la provincia de fiesta? si  o  no:'},
                {type:'input',name:'Temperatura',message:'Ingrese la temperatura promedio de la provincia:'},
                {type:'input',name:'numeroDeCantones',message:'Ingrese el número de cantones que tiene la provincia:'}
            ]).then(a=>{
                // Se crea una nueva promesa para almacenar el objeto Provincia creado
                promesaProvincia = new Promise(
                    res =>(
                        // Se asignan los valores ingresados por el usuario a las propiedades del objeto nuevaProvincia
                        nuevaProvincia.nombre = a.nombre,
                            nuevaProvincia.comidaTipica = a.comidaTipica,
                            nuevaProvincia.estaDeFiesta = (a.estaDeFiesta === 'si'),
                            nuevaProvincia.Temperatura = parseFloat(a.Temperatura),
                            nuevaProvincia.numeroDeCantones = parseInt(a.numeroDeCantones),
                            nuevaProvincia.habitantes = [],
                            // Se resuelve la promesa con el objeto nuevaProvincia
                            res(nuevaProvincia)
                    ));
            });
        // Se retorna la promesa que se resolverá con el objeto Provincia
        return promesaProvincia
    }

    async actualizarProvincia(listaProvincia){
        let promesaProvincia;
        let indiceProvincia;
        // Solicitar al usuario los datos para actualizar una provincia
        const respuestaProvincia = await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre de la provincia:'},
                {type:'rawlist',name:'eleccion',message:'Elige la opción que vas a cambiar:',
                    choices: ['nombre', 'comidaTipica', 'estaDeFiesta','Temperatura','numeroDeCantones']},
                {type:'input',name:'nuevoValor',message:'Ingrese el nuevo valor:'},
            ]).then(a=>{
                promesaProvincia = new Promise(
                    res =>(
                        listaProvincia
                            .forEach(
                                valorActual => {
                                    // Verificar si el nombre de la provincia coincide con el ingresado por el usuario
                                    if (valorActual.nombre == a.nombre) {
                                        indiceProvincia = listaProvincia.indexOf(valorActual)
                                        // Según la elección del usuario, actualizar el valor correspondiente en la provincia
                                        switch (a.eleccion){
                                            case "nombre":
                                                listaProvincia[indiceProvincia].nombre = a.nuevoValor
                                                break
                                            case "comidaTipica":
                                                listaProvincia[indiceProvincia].comidaTipica = a.nuevoValor
                                                break
                                            case "estaDeFiesta":
                                                listaProvincia[indiceProvincia].estaDeFiesta = (a.nuevoValor === 'si')
                                                break
                                            case "Temperatura":
                                                listaProvincia[indiceProvincia].Temperatura = parseFloat(a.nuevoValor)
                                                break
                                            case "numeroDeCantones":
                                                listaProvincia[indiceProvincia].numeroDeCantones = parseInt(a.nuevoValor)
                                                break
                                        }
                                    }
                                }
                            ),
                            res(listaProvincia)
                    ));
            });
        return promesaProvincia
    }

    async borrarProvincia(listaProvincia){
        let promesaProvincia;
        // Solicitar al usuario el nombre de la provincia a eliminar
        const respuestaProvincia = await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre de la provincia:'},
            ]).then(a=>{
                promesaProvincia = new Promise(
                    res =>(
                        // Filtrar la lista de provincias y devolver una nueva lista sin la provincia a eliminar
                        res(listaProvincia.filter(item => item.nombre !== a.nombre))
                    ));
            });
        return promesaProvincia
    }

}
