import {useState} from "react";
export type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
    colorIteracion?: string;
}

export default function CComponente(
    props: PropiedadesComponente
){
    //const url: props.url
    //const iteraciones = props.iteraciones
    //const mostrar = props.mostrar
    const { url , iteraciones, mostrar, colorIteracion = "bg-yellow-500"} = props;
    const arreglo = [0,1]
    //const numeroUno = arreglo[0]
    //const numeroDos = arreglo[1]
    const [numeroUno,numeroDos] = arreglo
    const contenidoAdicional = () => {
        if (mostrar){
            return <p>Mostrar</p>
        }
        return <p> Ocultar </p>
    }

    const objeto = {}

    //useState
    const [iteracionLocal, setIteracionLocal] = useState(
        iteraciones //valor de la variable
    )

    const [colorIteracionesLocal, setColorIteracionesLocal] = useState(
        colorIteracion
    )

    return(
        <div className="border border-solid border-white p-3 m-2">
            <a target="_blank" href={url}> IR A URL</a>
            <p className={colorIteracionesLocal}> Iteracion: {iteraciones} {iteracionLocal}</p>
            <p> Mostrar: {mostrar}</p>
            {contenidoAdicional()}
            { mostrar && <p> Mostrar Rapido</p>}
            <button className="border border-solid border-white bg-blue-500" onClick={
                (event) => {
                    setIteracionLocal(iteracionLocal + 1);
                    if(colorIteracionesLocal == "bg-yellow-500"){
                        setColorIteracionesLocal('bg-red-500')
                    } else {
                        setColorIteracionesLocal('bg-yellow-500')
                    }
                    console.log(event);
                }
            }> Aumentar </button>
        </div>
    )
}