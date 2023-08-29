import Link from "next/link";
import React from "react";

export default function NavbarHabitante({params}) {
    return (
        <nav className={"flex justify-between items-center bg-emerald-600 px-8 py-3 my-3 shadow-md rounded-lg"}>
            <Link className={"text-black font-bold  p-2 shadow-md rounded-lg bg-cyan-300"} href={`/habitantes/${params}`}>Listar Habitantes</Link>
            <Link className={"bg-white p-2 font-bold shadow-md rounded-lg"} href={`/habitantes/${params}/addHabitante`}>Agregar Habitante</Link>
        </nav>
    );
}