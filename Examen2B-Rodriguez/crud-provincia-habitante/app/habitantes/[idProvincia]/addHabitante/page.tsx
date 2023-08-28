"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import NavbarHabitante from "../../../../components/NavbarHabitante";

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
            alert("Llene todos los campos solicitados");
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
        <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
            <input
                onChange={(e) => setNombreHabitante(e.target.value)}
                value={nombre}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese su nombre"
            />
            <input
                onChange={(e) => setCedula(e.target.value)}
                value={cedula}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese su número de cédula"
            />
            <input
                onChange={(e) => setFechaNacimiento(e.target.value)}
                value={fechaNacimiento}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese su fecha de nacimiento"
            />
            <div className="border border-slate-500 px-8 py-2">
                <label className="font-bold">¿Estado Civil?</label>
                <div className="flex gap-16">
                    <label>
                        <input
                            type="radio"
                            value="true"
                            checked={estaCasado === "true"}
                            onChange={(e) => setEstaCasado(e.target.value)}
                        />
                        Casado
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="false"
                            checked={estaCasado === "false"}
                            onChange={(e) => setEstaCasado(e.target.value)}
                        />
                        Soltero
                    </label>
                </div>
            </div>
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Agregar Habitante</button>
        </form>
        </>
    );
}