"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function AddProvincia() {
    const [nombreProvincia, setNombreProvincia] = useState("");
    const [gradoSeguridad, setGradoSeguridad] = useState("");
    const [numeroHabitantes, setNumeroHabitantes] = useState("");
    const [estaFiestas, setEstaFiestas] = useState("");

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombreProvincia || !gradoSeguridad || !numeroHabitantes || !estaFiestas) {
            alert("Llene todos los campos solicitados");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/provincias', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({nombreProvincia, gradoSeguridad, numeroHabitantes, estaFiestas}),
            });

            if (res.ok) {
                router.push('/');
            } else {
                throw new Error("No se pudo crear la Provincia");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
            <input
                onChange={(e) => setNombreProvincia(e.target.value)}
                value={nombreProvincia}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese el nombre de la Provincia"
            />
            <input
                onChange={(e) => setNumeroHabitantes(e.target.value)}
                value={numeroHabitantes}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ingrese el número de habitantes"
            />
            <div className="border border-slate-500 px-8 py-2">
                <label htmlFor="gradoSeguridad" className="font-bold">
                    Grado de Seguridad: {gradoSeguridad}
                </label>
                <input
                    id="gradoSeguridad"
                    onChange={(e) => setGradoSeguridad(e.target.value)}
                    value={gradoSeguridad}
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
                            checked={estaFiestas === "true"}
                            onChange={(e) => setEstaFiestas(e.target.value)}
                        />
                        Verdadero
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="false"
                            checked={estaFiestas === "false"}
                            onChange={(e) => setEstaFiestas(e.target.value)}
                        />
                        Falso
                    </label>
                </div>
            </div>
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Agregar Provincia</button>
        </form>

    );
}