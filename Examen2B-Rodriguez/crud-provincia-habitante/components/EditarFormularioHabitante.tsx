"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";
import {format} from 'date-fns';
import Link from "next/link";

export default function EditarFormularioHabitante({idHabitante, nombre, cedula, fechaNacimiento, estaCasado, idProvincia}) {

    const [nuevoNombre, setNuevoNombre] = useState(nombre);
    //const [nuevaCedula, setNuevaCedula] = useState(cedula);
    //const [nuevaFechaNacimiento, setNuevaFechaNacimiento] = useState(fechaNacimiento);
    const [nuevoEstaCasado, setNuevoEstaCasado] = useState(estaCasado);

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/habitantes/${idHabitante}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    nuevoNombre,// nuevaCedula,
                    /*nuevaFechaNacimiento,*/ nuevoEstaCasado
                }),
            });

            if (!res.ok) {
                throw new Error("Error al actualizar los datos del Habitante");
            }
            router.refresh();
            router.push(`/habitantes/${idProvincia}`);
        } catch (error) {
            console.log(error);
        }
    };

    const fechaActual = format(new Date(), 'yyyy-MM-dd');

    return (
        <div className={"bg-white rounded-lg shadow-lg p-6"}>
        <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
            <input
                onChange={(e) => setNuevoNombre(e.target.value)}
                value={nuevoNombre}
                className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6"
                type="text"
                placeholder="Ingrese el nuevo nombre"
            />
            <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6">
                <span className="font-bold">Número de Cédula:</span>
                <span className="text-black px-3">{cedula}</span>
            </div>

            <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6">
                <span className="font-bold">Fecha de Nacimiento:</span>
                <span className="text-black px-3">
                  {format(new Date(fechaNacimiento), 'dd/MM/yyyy')}
                </span>
            </div>
            <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6">
                <label className="font-bold">¿Estado Civil?</label>
                <div className="flex gap-16">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            value="true"
                            checked={nuevoEstaCasado === "true"}
                            onChange={(e) => setNuevoEstaCasado(e.target.value)}
                        />
                        <span className="ml-2">Casado</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            value="false"
                            checked={nuevoEstaCasado === "false"}
                            onChange={(e) => setNuevoEstaCasado(e.target.value)}
                        />
                        <span className="ml-2">Soltero</span>
                    </label>
                </div>
            </div>
            <div className="flex justify-between items-center bg-white px-8 py-3 my-3 shadow-md rounded-lg">
                <button className="text-white font-bold  p-2 shadow-md rounded-lg bg-emerald-600">Actualizar Habitante
                </button>
                <Link
                    href={`/habitantes/${idProvincia}`}
                    className="text-white bg-red-700 p-2 font-bold shadow-md rounded-lg">Cancelar
                </Link>
            </div>
        </form>
    </div>
    );
}