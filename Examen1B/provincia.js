import inquirer from "inquirer";
export class Provincia{

    constructor(nombre, comidaTipica, estaDeFiesta, Temperatura, numeroDeCantones, habitantes) {
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
        const respuestaM = await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre de la provincia:'},
                {type:'input',name:'comidaTipica',message:'Ingrese el nombre de la comida típica:'},
                {type:'input',name:'estaDeFiesta',message:'¿Esta la provincia de fiesta? si  o  no:'},
                {type:'input',name:'Temperatura',message:'Ingrese la temperatura promedio de la provincia:'},
                {type:'input',name:'numeroDeCantones',message:'Ingrese el número de cantones que tiene la provincia:'}
            ]).then(a=>{
                promesaProvincia = new Promise(
                    res =>(
                        nuevaProvincia.nombre = a.nombre,
                            nuevaProvincia.comidaTipica = a.comidaTipica,
                            nuevaProvincia.estaDeFiesta = (a.estaDeFiesta === 'si'),
                            nuevaProvincia.Temperatura = parseFloat(a.Temperatura),
                            nuevaProvincia.numeroDeCantones = parseInt(a.numeroDeCantones),
                            nuevaProvincia.habitantes = [],
                            res(nuevaProvincia)
                    ));
            });
        return promesaProvincia
    }

    async actualizarProvincia(listaProvincia){
        let promesaProvincia;
        let indiceProvincia;
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
                                    if (valorActual.nombre == a.nombre) {
                                        indiceProvincia = listaProvincia.indexOf(valorActual)
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
        const respuestaProvincia = await inquirer
            .prompt([
                {type:'input',name:'nombre',message:'Ingrese el nombre de la provincia:'},
            ]).then(a=>{
                promesaProvincia = new Promise(
                    res =>(
                        res(listaProvincia.filter(item => item.nombre !== a.nombre))
                    ));
            });
        return promesaProvincia
    }

}
