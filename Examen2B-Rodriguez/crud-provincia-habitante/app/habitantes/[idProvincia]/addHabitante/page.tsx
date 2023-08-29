"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import NavbarHabitante from "../../../../components/NavbarHabitante";
import Link from "next/link";

export default function AddHabitante({params}) {

    const idProvinciaA = params.idProvincia
    const idProvincia = idProvinciaA
    console.log("Funcion add", idProvinciaA);

    const [nombre, setNombreHabitante] = useState("");
    const [cedula, setCedula] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [estaCasado, setEstaCasado] = useState("");

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !cedula || !fechaNacimiento || !estaCasado) {
            alert("¡Por favor, llene todos los campos solicitados!");
            return;
        }
        console.log("antes de entrar al fetch")
        try {
            const res = await fetch('http://localhost:3000/api/habitantes', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({nombre, cedula, fechaNacimiento, estaCasado, idProvincia}),
            });
            console.log("respuesta res",res);
            if (res.ok) {
                router.push(`http://localhost:3000/habitantes/${idProvinciaA}`);
            } else {
                throw new Error("No se pudo crear el Habitante");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <>
            <NavbarHabitante params={idProvinciaA}/>
    <div className={"bg-white rounded-lg shadow-lg p-6"}>
        <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
            <input
                onChange={(e) => setNombreHabitante(e.target.value)}
                value={nombre}
                className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6"
                type="text"
                placeholder="Ingrese su nombre"
            />
            <input
                onChange={(e) => setCedula(e.target.value)}
                value={cedula}
                className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6"
                type="text"
                placeholder="Ingrese su número de cédula"
            />
            <input
                onChange={(e) => setFechaNacimiento(e.target.value)}
                value={fechaNacimiento}
                className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6"
                type="date"
                placeholder="Ingrese su fecha de nacimiento"
            />
            <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6">
                <label className="font-bold">¿Estado Civil?</label>
                <div className="flex gap-16">
                    <label>
                        <input
                            type="radio"
                            value="true"
                            checked={estaCasado === "true"}
                            onChange={(e) => setEstaCasado(e.target.value)}
                        />
                        <span className="ml-2">Casado</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="false"
                            checked={estaCasado === "false"}
                            onChange={(e) => setEstaCasado(e.target.value)}
                        />
                        <span className="ml-2">Soltero</span>
                    </label>
                </div>
            </div>
            <div className="flex justify-between items-center bg-white px-8 py-3 my-3 shadow-md rounded-lg">
                <button className="text-white font-bold  p-2 shadow-md rounded-lg bg-emerald-600">Agregar Habitante
                </button>
                <Link
                    href={`/habitantes/${idProvincia}`}
                    className="text-white bg-red-700 p-2 font-bold shadow-md rounded-lg">Cancelar
                </Link>
            </div>
        </form>
    </div>
        </>
    );
}