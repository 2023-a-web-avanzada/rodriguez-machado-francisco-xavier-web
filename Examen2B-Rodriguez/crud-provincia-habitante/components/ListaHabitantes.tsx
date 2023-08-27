import Link from "next/link";
import EliminarBtnHabitante from "./EliminarBtnHabitante";
import {HiPencilAlt} from "react-icons/hi";
import {cache} from "browserslist";

const getHabitante = async (params) => {
    try {
        const res = await fetch(`http://localhost:3000/api/habitante/?idHabitante=${params}`, {
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

export default async function ListaProvincias({params}) {

    const { provincias } = await getHabitante({params});

    return (
        <>
            {provincias.map(h => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-4xl divide-black-y">{h.nombre}</h2>
                        <div className="grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">Número de Cédula:</span>
                            <span>{h.cedula}</span>
                        </div>
                        <div className="flex grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">Fecha de Nacimiento:</span>
                            <span>{h.fechaNacimiento}</span>
                        </div>
                        <div className="grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">¿Estado Civil?:</span>
                            <span>
                            {h.estaCasado
                                ? "El habitante SÍ está en casado"
                                : "El habitante NO está en casado"}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <EliminarBtnHabitante idHabitante={h._id}/>
                        <Link href={`/habitantes/${params}/editHabitante/${h._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}