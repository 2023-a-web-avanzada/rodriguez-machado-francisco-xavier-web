"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function EditarFormularioHabitante({idHabitante, nombre, cedula, fechaNacimiento, estaCasado, idProvincia}){

    const [nuevoNombre, setNuevoNombre] = useState(nombre);
    const [nuevaCedula, setNuevaCedula] = useState(cedula);
    const [nuevaFechaNacimiento, setNuevaFechaNacimiento] = useState(fechaNacimiento);
    const [nuevoEstaCasado, setNuevoEstaCasado] = useState(estaCasado);

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/habitantes/${idHabitante}`,{
                method: "PUT",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({nuevoNombre, nuevaCedula,
                    nuevaFechaNacimiento, nuevoEstaCasado}),
            });

            if (!res.ok){
                throw new Error("Error al actualizar los datos del Habitante");
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
                onChange={(e) => setNuevoNombre(e.target.value)}
                value={nuevoNombre}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese el nombre de la Nueva Provincia"
            />
            <input
                onChange={(e) => setNuevaCedula(e.target.value)}
                value={nuevaCedula}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese el número de habitantes"
            />
            <div className="border border-slate-500 px-8 py-2">
                <label htmlFor="fechaNacimiento" className="font-bold">
                    Fecha de Nacimiento:
                </label>
                <DatePicker
                    id="fechaNacimiento"
                    selected={nuevaFechaNacimiento}
                    onChange={date => setNuevaFechaNacimiento(date)}
                    className="w-full"
                />
            </div>
            <div className="border border-slate-500 px-8 py-2">
                <label className="font-bold">¿La Provincia está de fiestas?</label>
                <div className="flex gap-16">
                    <label>
                        <input
                            type="radio"
                            value="true"
                            checked={nuevoEstaCasado === "true"}
                            onChange={(e) => setNuevoEstaCasado(e.target.value)}
                        />
                        Verdadero
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="false"
                            checked={nuevoEstaCasado === "false"}
                            onChange={(e) => setNuevoEstaCasado(e.target.value)}
                        />
                        Falso
                    </label>
                </div>
            </div>
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Actualizar Habitante</button>
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