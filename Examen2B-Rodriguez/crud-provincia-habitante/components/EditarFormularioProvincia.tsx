"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";

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
        <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
            <input
                onChange={(e) => setNuevoNombreProvincia(e.target.value)}
                value={nuevoNombre}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese el nombre de la Nueva Provincia"
            />
            <input
                onChange={(e) => setNuevoNumeroHabitantes(e.target.value)}
                value={nuevoNumHabitantes}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese el número de habitantes"
            />
            <div className="border border-slate-500 px-8 py-2">
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
            <div className="border border-slate-500 px-8 py-2">
                <label className="font-bold">¿La Provincia está de fiestas?</label>
                <div className="flex gap-16">
                    <label>
                        <input
                            type="radio"
                            value="true"
                            checked={nuevoEstado === "true"}
                            onChange={(e) => setNuevoEstado(e.target.value)}
                        />
                        Verdadero
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="false"
                            checked={nuevoEstado === "false"}
                            onChange={(e) => setNuevoEstado(e.target.value)}
                        />
                        Falso
                    </label>
                </div>
            </div>
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Actualizar Provincia</button>
        </form>
        /*<form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => {setNuevoNombreProvincia(e.target.value)}
                } value={nuevoNombreProvincia}
                className="border border-slate-500 px-8 py-2" type="text" placeholder= "Nombre de la Provincia"/>
            <input
                onChange={(e) => {setNuevoGradoSeguridad(e.target.value)}
                } value={nuevoGradoSeguridad}
                className="border border-slate-500 px-8 py-2" type="text" placeholder= "Grado de Seguridad"/>
            <input
                onChange={(e) => {setNuevoNumeroHabitantes(e.target.value)}
                } value={nuevoNumeroHabitantes}
                className="border border-slate-500 px-8 py-2" type="text" placeholder= "Número de Habitantes"/>
            <input
                onChange={(e) => {setNuevoEstado(e.target.value)}
                } value={nuevoEstado}
                className="border border-slate-500 px-8 py-2" type="text" placeholder= "¿Está en fiestas la Provincia?"/>
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Actualizar Provincia</button>
        </form>*/
    );
}