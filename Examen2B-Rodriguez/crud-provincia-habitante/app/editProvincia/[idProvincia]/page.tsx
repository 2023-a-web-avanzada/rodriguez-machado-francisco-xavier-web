import EditarFormularioProvincia from "../../../components/EditarFormularioProvincia";
import React from "react";

const getProvinciaById = async (idProvincia) => {
    try {
        const res = await fetch(`http://localhost:3000/api/provincias/${idProvincia}`,
            {cache: 'no-store'});

        if(!res.ok) {
            throw new Error("No se pudo recuperar la información de la Provincia");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function editProvincia({params}){
    const {idProvincia} = params;
    const {provincia} = await getProvinciaById(idProvincia);
    const {nombreProvincia, gradoSeguridad, numeroHabitantes, estaFiestas} = provincia;
    return (
        <EditarFormularioProvincia idProvincia= {idProvincia} nombreProvincia={nombreProvincia}
                                   gradoSeguridad={gradoSeguridad} numeroHabitantes={numeroHabitantes}
                                   estaFiestas={estaFiestas}/>
)};