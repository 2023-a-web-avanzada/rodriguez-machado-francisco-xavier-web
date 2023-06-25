import inquirer from "inquirer";

export class Habitante{

    constructor(nombre, apellido, numeroDeCedula, fechaDeNacimiento, esMiembroProvincia) {
        this.nombre = nombre
        this.apellido = apellido
        this.numeroDeCedula = numeroDeCedula
        this.fechaDeNacimiento = fechaDeNacimiento
        this.esMiembroProvincia = esMiembroProvincia
    }

    async indiceProvincia(listaProvincia){
        var promIndiceProvincia
        var indiceProvincia;
        await inquirer.prompt([
            {type:'input',name:'opciones',message:'Ingrese el nombre de la Provincia:'},
        ]).then(respuestaProvincia => {
            promIndiceProvincia = new Promise(
                res => (
                    listaProvincia
                        .forEach(
                            valorActual => {
                                if (valorActual.nombre == respuestaProvincia.opciones) {
                                    indiceProvincia = listaProvincia.indexOf(valorActual)
                                }
                            }
                        ),
                        res(indiceProvincia)
                ));
        });
        return promIndiceProvincia
    }

    async crearHabitante(){
        const nuevoHabitante = new Habitante()
        let promesaHabitante;
        await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre:'},
                {type:'input',name:'apellido',message:'Ingrese el apellido:'},
                {type:'input',name:'numeroDeCedula',message:'Ingrese el número de cédula:'},
                {type:'input',name:'fechaDeNacimiento',message:'Ingrese la fecha de nacimiento en (AAAA-MM-DD):'},
                {type:'input',name:'esMiembroProvincia',message:'¿Lo puede encontrar en la provincia?  si  o  no:'}
            ]).then(a=>{
                promesaHabitante = new Promise(
                    res =>(
                        nuevoHabitante.nombre = a.nombre,
                            nuevoHabitante.apellido = a.apellido,
                            nuevoHabitante.numeroDeCedula = parseInt(a.numeroDeCedula),
                            nuevoHabitante.fechaDeNacimiento = new Date(a.fechaDeNacimiento.split('-')[0],a.fechaDeNacimiento.split('-')[1],a.fechaDeNacimiento.split('-')[2]),
                            nuevoHabitante.esMiembroProvincia = (a.esMiembroProvincia === 'si'),
                            res(nuevoHabitante)
                    ));
            });
        return promesaHabitante
    }

    async actualizarHabitante(listaProvincias, indiceProvincia){
        let promesaProvincia;
        let indiceHabitante;
        await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre del habitante:'},
                {type:'rawlist',name:'eleccion',message:'Elige la opción que va a cambiar:',
                    choices: ['nombre', 'apellido', 'numeroDeCedula','fechaDeNacimiento','esMiembroProvincia']},
                {type:'input',name:'nuevoValor',message:'Ingrese el nuevo valor:'},
            ]).then(a=>{
                promesaProvincia = new Promise(
                    res => {
                        listaProvincias[indiceProvincia].habitantes
                            .forEach(
                                paciente => {
                                    if (paciente.nombre == a.nombre) {
                                        indiceHabitante = listaProvincias[indiceProvincia].habitantes.indexOf(paciente)
                                        switch (a.eleccion) {
                                            case "nombre":
                                                listaProvincias[indiceProvincia].habitantes[indiceHabitante].nombre = a.nuevoValor
                                                break
                                            case "apellido":
                                                listaProvincias[indiceProvincia].habitantes[indiceHabitante].apellido = a.nuevoValor
                                                break
                                            case "numeroDeCedula":
                                                listaProvincias[indiceProvincia].habitantes[indiceHabitante].numeroDeCedula = parseInt(a.nuevoValor)
                                                break
                                            case "fechaDeNacimiento":
                                                listaProvincias[indiceProvincia].habitantes[indiceHabitante].fechaDeNacimiento = new Date(a.nuevoValor.split('-')[0], a.nuevoValor.split('-')[1], a.nuevoValor.split('-')[2])
                                                break
                                            case "esMiembroProvincia":
                                                listaProvincias[indiceProvincia].habitantes[indiceHabitante].esMiembroProvincia = (a.nuevoValor === 'si' ? true : false)
                                                break
                                        }
                                    }
                                }
                            )
                        res(listaProvincias);
                    });
            });
        return promesaProvincia
    }

    async borrarHabitante(listaProvincia, indiceProvincia){
        let promesaProvincia;
        let listaHabitantes = listaProvincia[indiceProvincia].habitantes;
        await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre del Habitante:'},
            ]).then(a=>{
                promesaProvincia = new Promise(
                    res =>(
                        listaProvincia[indiceProvincia].habitantes=listaHabitantes.filter(item => item.nombre !== a.nombre),
                            res(listaProvincia)
                    ));
            });
        return promesaProvincia
    }

}
