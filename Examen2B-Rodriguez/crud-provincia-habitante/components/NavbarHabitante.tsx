import Link from "next/link";
import React from "react";

export default function NavbarHabitante({params}) {
    return (
        <nav className={"flex justify-between items-center bg-sky-300 px-8 py-3 my-3"}>
            <Link className={"text-white font-bold"} href={`/habitantes/${params}`}>Habitante</Link>
            <Link className={"text-white font-bold"} href={"/"}>CRUD - PROVINCIAS HABITANTES</Link>
            <Link className={"bg-white p-2"} href={`/habitantes/${params}/addHabitante`}>Agregar Habitante</Link>
        </nav>
    );
}