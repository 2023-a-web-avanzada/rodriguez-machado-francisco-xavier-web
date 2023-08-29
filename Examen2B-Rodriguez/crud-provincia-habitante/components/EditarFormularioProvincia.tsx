"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function EditarFormularioProvincia({idProvincia, nombreProvincia, gradoSeguridad, numeroHabitantes, estaFiestas}){

    const [nuevoNombre, setNuevoNombreProvincia] = useState(nombreProvincia);
    const [nuevaSeguridad, setNuevoGradoSeguridad] = useState(gradoSeguridad);
    const [nuevoNumHabitantes, setNuevoNumeroHabitantes] = useState(numeroHabitantes);
    const [nuevoEstado, setNuevoEstado] = useState(estaFiestas);

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/provincias/${idProvincia}`,{
                method: "PUT",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({nuevoNombre, nuevaSeguridad,
                    nuevoNumHabitantes, nuevoEstado}),
            });

            if (!res.ok){
                throw new Error("Error al actualizar los datos de la Provincia");
            }
            router.refresh();
            router.push("/");
        }catch (error){
            console.log(error);
        }
    };

    return (
        <div className={"bg-white rounded-lg shadow-lg p-6"}>
        <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
            <input
                onChange={(e) => setNuevoNombreProvincia(e.target.value)}
                value={nuevoNombre}
                className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg"
                type="text"
                placeholder="Ingrese el nombre de la Nueva Provincia"
            />
            <input
                onChange={(e) => setNuevoNumeroHabitantes(e.target.value)}
                value={nuevoNumHabitantes}
                className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg"
                type="text"
                placeholder="Ingrese el número de habitantes"
            />
            <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg">
                <label htmlFor="gradoSeguridad" className="font-bold">
                    Grado de Seguridad: {nuevaSeguridad}
                </label>
                <input
                    id="gradoSeguridad"
                    onChange={(e) => setNuevoGradoSeguridad(e.target.value)}
                    value={nuevaSeguridad}
                    className="w-full"
                    type="range"
                    min="1"
                    max="5"
                />
                <span className="text-gray-500 text-sm">
            Mueva la barra para seleccionar el grado de seguridad (1-5).
        </span>
            </div>
            <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg">
                <label className="font-bold">¿La Provincia está de fiestas?</label>
                <div className="flex gap-16">
                    <label>
                        <input
                            type="radio"
                            value="true"
                            checked={nuevoEstado === "true"}
                            onChange={(e) => setNuevoEstado(e.target.value)}
                        />
                        <span className="ml-2">Verdadero</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="false"
                            checked={nuevoEstado === "false"}
                            onChange={(e) => setNuevoEstado(e.target.value)}
                        />
                        <span className="ml-2">Falso</span>
                    </label>
                </div>
            </div>
            <div className="flex justify-between items-center bg-white px-8 py-3 my-3 shadow-md rounded-lg">
                <button className="text-white font-bold  p-2 shadow-md rounded-lg bg-emerald-600">Actualizar Provincia
                </button>
                <Link
                    href={`/`}
                    className="text-white bg-red-700 p-2 font-bold shadow-md rounded-lg">Cancelar
                </Link>
            </div>
        </form>
        </div>
    );
}