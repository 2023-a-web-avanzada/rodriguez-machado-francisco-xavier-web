"use client";

import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation";

export default function EliminarBtnHabitante({ idHabitante }){

    const router = useRouter();
    const eliminarHabitante = async () =>{
        const confirmed = confirm('¿Está seguro de eliminar al habitante?');

        if (confirmed){
            const res = await fetch(`http://localhost:3000/api/habitantes?idHabitante=${idHabitante}`, {
                method: "DELETE",
            });

            if (res.ok){
                router.refresh();
            }
        }
    };

    return (
    <button onClick={eliminarHabitante} className = "text-red-400">
        <HiOutlineTrash size={24} />
    </button>
    );
}