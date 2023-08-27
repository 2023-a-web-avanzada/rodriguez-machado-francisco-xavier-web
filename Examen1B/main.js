import inquirer from "inquirer";
import {leerEscribirArchivo, escribirArchivo, leerArchivo} from './lectura-escritura.js';
import {Provincia} from './provincia.js';
import {Habitante} from './habitante.js';

const path = './provincia-habitantes.txt'

async function main(){

    try{
        const nuevaProvincia = new Provincia()
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: 'SISTEMA DE GESTIÓN DE PROVINCIAS Y HABITANTES\n'
                        + 'Elija una opción:',
                    choices: ['Crear', 'Mostrar Provincia', 'Actualizar', 'Gestión de Habitantes', 'Borrar Provincia', 'Salir']
                }
            ]).then((answer) => {
                    switch (answer.opcion) {
                        case 'Crear':
                            nuevaProvincia.crearProvincia().then(
                                (datos) => {
                                    leerEscribirArchivo(path, datos)
                                    main()
                                })
                            break

                        case 'Mostrar Provincia':
                            leerArchivo(path).then(
                                datos => {
                                    console.log(JSON.parse(datos))
                                    main()
                                }
                            )
                            break

                        case 'Actualizar':
                            leerArchivo(path).then(
                                datos =>{
                                    const listaProvincia = JSON.parse(datos)
                                    nuevaProvincia.actualizarProvincia(listaProvincia).then(
                                        newData =>{
                                            escribirArchivo(path,JSON.stringify(newData))
                                            console.log('La información ha sido actualizada')
                                            main()
                                        }
                                    )
                                }
                            )
                            break

                        case 'Gestión de Habitantes':
                            var nuevoHabitante = new Habitante()
                            var indiceProvincia;
                            leerArchivo(path).then(
                                datos =>{
                                    const listaProvincia = JSON.parse(datos)
                                    nuevoHabitante.indiceProvincia(listaProvincia).then(
                                        indice =>{
                                            indiceProvincia = parseInt(indice)
                                            mainHabitante();
                                        }
                                    )
                                }
                            )
                        async function mainHabitante() {
                            try {
                                nuevoHabitante = new Habitante()
                                var habitantes = leerArchivo(path).then(
                                    datos =>{
                                        habitantes = JSON.parse(datos)
                                    }
                                )
                                const respuestaHabitante = await inquirer
                                    .prompt([
                                        {
                                            type: 'rawlist',
                                            name: 'opcion',
                                            message: 'Elige una opción:',
                                            choices: ['Crear', 'Mostrar Habitantes', 'Actualizar', 'Borrar Habitantes', 'Salir']
                                        }
                                    ]).then((ansHabitante) => {
                                        switch (ansHabitante.opcion) {
                                            case 'Crear':
                                                nuevoHabitante.crearHabitante().then(
                                                    (dataHabitante) => {
                                                        habitantes[indiceProvincia].habitantes.push(dataHabitante)
                                                        escribirArchivo(path, JSON.stringify(habitantes))
                                                        mainHabitante()
                                                    })
                                                break

                                            case 'Mostrar Habitantes':
                                                console.log(habitantes[indiceProvincia].habitantes)
                                                mainHabitante()
                                                break

                                            case 'Actualizar':
                                                nuevoHabitante.actualizarHabitante(habitantes, indiceProvincia).then(
                                                    newData => {
                                                        escribirArchivo(path, JSON.stringify(newData))
                                                        console.log('La información ha sido actualizada')
                                                        mainHabitante()
                                                    }
                                                )
                                                break

                                            case 'Borrar Habitantes':
                                                nuevoHabitante.borrarHabitante(habitantes, indiceProvincia).then(
                                                    newData => {
                                                        escribirArchivo(path, JSON.stringify(newData))
                                                        console.log('La información ha sido borrada')
                                                        mainHabitante()
                                                    }
                                                )
                                                break
                                            case 'Salir':
                                                main()
                                                break
                                        }
                                    });
                            } catch (e) {
                                console.error(e);
                            }
                        }
                            break

                        case 'Borrar Provincia':
                            leerArchivo(path).then(
                                dataProvincia =>{
                                    const listaProvincia = JSON.parse(dataProvincia)
                                    nuevaProvincia.borrarProvincia(listaProvincia).then(
                                        newData =>{
                                            escribirArchivo(path,JSON.stringify(newData))
                                            console.log('La Información ha sido borrada')
                                            main()
                                        }
                                    )
                                }
                            )
                            break

                        case 'Salir':
                            console.log('Gracias, vuelva pronto!!')
                            break

                    }
                }
            );
    }catch(e){
        console.error(e);
    }
}
main();
