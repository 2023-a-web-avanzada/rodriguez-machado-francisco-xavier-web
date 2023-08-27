import EditarFormularioHabitante from "../../../../../components/EditarFormularioHabitante";
import React from "react";
import NavbarHabitante from "../../../../../components/NavbarHabitante";

const getHabitanteById = async (idHabitante) => {
    try {
        const res = await fetch(`http://localhost:3000/api/habitantes/${idHabitante}`,
            {cache: 'no-store'});

        if(!res.ok) {
            throw new Error("No se pudo recuperar la información de la Provincia");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditHabitante({params}){
    const idProvincia = params.idProvincia;
    const {idHabitante} = params;
    const {habitante} = await getHabitanteById(idHabitante);
    const {nombre, cedula, fechaNacimiento, estaCasado} = habitante;
    return (
        <>
        <NavbarHabitante params={idProvincia}/>
        <EditarFormularioHabitante idHabitante={idHabitante} nombre={nombre}
                                   cedula={cedula} fechaNacimiento={fechaNacimiento}
                                   estaCasado={estaCasado} idProvincia={idProvincia}/>
        </>
    )
};