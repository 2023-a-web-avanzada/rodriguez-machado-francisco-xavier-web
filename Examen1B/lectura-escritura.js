import fs from "fs";

export async function leerArchivo(path){
    let miPrimerPromesa = await new Promise(
        (resolve, reject)=>{
            fs.readFile(
                path,
                'utf-8',//codificación
                (errorLecturaPrimerArchivo , contenidoArchivo) =>{//callback
                    if(errorLecturaPrimerArchivo){
                        reject('error leyendo el archivo');
                    }else{
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
    return miPrimerPromesa
}

export async function escribirArchivo(path, contenidoArchivo){
    const miPromesa = await new Promise(
        (resolve, reject)=> {
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {//callback
                    if (errorEscritura) {
                        reject('error leyendo el archivo');
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
    return miPromesa
}
export async function leerEscribirArchivo(path, nuevoContenido){
    try {
        let respuestaContenidoArchivoOriginal = await leerArchivo(path); //espera una respuesta
        if(respuestaContenidoArchivoOriginal == ""){
            respuestaContenidoArchivoOriginal='[]'
        }
        respuestaContenidoArchivoOriginal = JSON.parse(respuestaContenidoArchivoOriginal);
        respuestaContenidoArchivoOriginal.push(nuevoContenido)
        const strMedico = JSON.stringify(respuestaContenidoArchivoOriginal);
        await escribirArchivo(path, strMedico);
    }catch (error){
        console.error(error);
    }
}
