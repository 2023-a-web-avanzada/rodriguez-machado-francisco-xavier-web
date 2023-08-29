import Link from "next/link";
import React from "react";

export default function Navbar(){
    return(
        <nav className = "flex justify-between items-center bg-slate-800 px-8 py-3 shadow-md rounded-lg">
            <Link className="text-white font-bold shadow-md rounded-lg bg-cyan-800 p-2" href={"/"}>CRUD - PROVINCIAS & HABITANTES</Link>
            <Link className="bg-white font-bold p-2 shadow-md rounded-lg" href={"/addProvincia"}>Agregar Provincia</Link>
        </nav>
    );
}