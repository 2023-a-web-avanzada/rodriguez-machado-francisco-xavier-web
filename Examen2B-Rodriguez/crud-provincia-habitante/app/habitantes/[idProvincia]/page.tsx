
import React from "react";
import ListaHabitantes from "../../../components/ListaHabitantes";
import NavbarHabitante from "../../../components/NavbarHabitante";

export default function HomeHabitante({params}) {
    const idProvincia = params.idProvincia
    return (
        <>
            <NavbarHabitante params={idProvincia}/>
            <ListaHabitantes params={idProvincia}/>
        </>
    )
}