import Link from "next/link";
import EliminarBtn from "./EliminarBtn";
import {HiPencilAlt} from "react-icons/hi";
import { FaUser } from 'react-icons/fa';
import {cache} from "browserslist";

const getProvincias = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/provincias', {
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error('No se pudieron recuperar las provincias');
        }
        return res.json();
    }catch (error){
        console.log("Error al cargar las provincias", error);
    }
};

export default async function ListaProvincias() {

    const { provincias } = await getProvincias();

    return (
        <>
            {provincias.map(p => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-4xl divide-black-y">{p.nombreProvincia}</h2>
                        <div className="grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">Grado de Seguridad:</span>
                            <span>{p.gradoSeguridad}</span>
                        </div>
                        <div className="flex grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">Número de Habitantes:</span>
                            <span>{p.numeroHabitantes}</span>
                        </div>
                        <div className="grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">¿La Provincia está de Fiestas?:</span>
                            <span>
                            {p.estaFiestas
                                ? "La provincia SÍ está en fiestas"
                                : "La provincia NO está en fiestas"}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <EliminarBtn idProvincia={p._id}/>
                        <Link href={`/editProvincia/${p._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                        <Link href={`/habitantes/${p._id}`}>
                            <FaUser size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}