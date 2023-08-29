"use client";
import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation";

export default function EliminarBtn({ idProvincia }){

    const router = useRouter();
    const eliminarProvincia = async () =>{
        const confirmed = confirm('¿Está seguro de eliminar esta Provincia?');

        if (confirmed){
            const res = await fetch(`http://localhost:3000/api/provincias?idProvincia=${idProvincia}`, {
                method: "DELETE",
            });

            if (res.ok){
                router.refresh();
            }
        }
    };

    return (
    <button onClick={eliminarProvincia} className = "text-red-400">
        <HiOutlineTrash size={24} />
    </button>
    );
}