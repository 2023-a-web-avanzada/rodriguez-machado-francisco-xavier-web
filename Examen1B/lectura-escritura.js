import fs from "fs";

export async function leerArchivo(path){
    // Se define una promesa que envuelve la operación de lectura del archivo
    let miPrimerPromesa = await new Promise(
        (resolve, reject)=>{
            // Se utiliza fs.readFile para leer el contenido del archivo
            fs.readFile(
                path,
                'utf-8',//codificación
                (errorLecturaPrimerArchivo , contenidoArchivo) =>{//callback
                    // Si se produce un error durante la lectura, se rechaza la promesa con el mensaje de error
                    if(errorLecturaPrimerArchivo){
                        reject('error leyendo el archivo');
                    }else{
                        // Si la lectura es exitosa, se resuelve la promesa con el contenido del archivo
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
    // Se devuelve la promesa, lo que permite al usuario esperar a que se resuelva la lectura del archivo y obtener el contenido leído
    return miPrimerPromesa
}

export async function escribirArchivo(path, contenidoArchivo){
    // Se espera a que se complete la escritura del archivo
    const miPromesa = await new Promise(
        (resolve, reject)=> {
            // Se utiliza fs.writeFile para escribir el contenido en el archivo
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {//callback
                    if (errorEscritura) {
                        // Si hay un error, se rechaza la promesa con el mensaje 'error escribiendo el archivo'
                        reject('error leyendo el archivo');
                    } else {
                        // Si la escritura es exitosa, se resuelve la promesa con el contenido del archivo
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
    // Se devuelve la promesa que representa la escritura del archivo
    return miPromesa
}
export async function leerEscribirArchivo(path, nuevoContenido){
    try {
        // Leer el contenido original del archivo
        let respuestaContenidoArchivoOriginal = await leerArchivo(path);
        // Si el archivo está vacío, se inicializa como un array vacío
        if(respuestaContenidoArchivoOriginal === ""){
            respuestaContenidoArchivoOriginal='[]'
        }
        // Parsear el contenido original como JSON
        respuestaContenidoArchivoOriginal = JSON.parse(respuestaContenidoArchivoOriginal);
        // Agregar el nuevo contenido al array
        respuestaContenidoArchivoOriginal.push(nuevoContenido)
        // Convertir el contenido modificado de nuevo a formato JSON
        const strMedico = JSON.stringify(respuestaContenidoArchivoOriginal);
        // Escribir el contenido modificado en el archivo
        await escribirArchivo(path, strMedico);
    }catch (error){
        console.error(error);
    }
}
