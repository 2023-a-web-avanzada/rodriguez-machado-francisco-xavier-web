import Link from "next/link";
import EliminarBtnHabitante from "./EliminarBtnHabitante";
import {HiPencilAlt} from "react-icons/hi";
import {cache} from "browserslist";

const getHabitante = async (params) => {
    try {
        const res = await fetch(`http://localhost:3000/api/habitantes/?idProvincia=${params.params}`, {
            cache: "no-store"
        });
        // console.log("funcion api", params.params); // para destruction
        if(!res.ok){
            throw new Error('No se pudieron recuperar los datos de los habitantes');
        }
        return res.json();
    }catch (error){
        console.log("Error al cargar los habitantes", error);
    }
};

export default async function ListaHabitante({params}) {

    const { habitantes } = await getHabitante({params});
    //console.log(JSON.stringify(params));
    return (
        <>
            {habitantes.map(h => (
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
                                ? "El habitantes SÍ está en casado"
                                : "El habitantes NO está en casado"}
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