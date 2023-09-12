"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { BsFillTrashFill } from "react-icons/bs";

export default function RemoveBtn({ idRestaurant }) {
    const router = useRouter();

    const removeRestaurant = async () => {
        toast('Are you sure?', {
            icon: <BsFillTrashFill style={{ color: "red" }} />,
            action: {
                label: 'Delete',
                onClick: async () => {
                    const res = await fetch(`api/restaurants?idRestaurant=${idRestaurant}`, {
                        method: "DELETE",
                    });

                    if (res.ok) {
                        toast.success('Restaurant removed', { style: { fontSize: "1.5rem" } });
                        router.refresh();
                    } else {
                        toast.error('Error deleted', { style: { fontSize: "1.5rem" } });
                        console.log("Error deleted");
                    }
                },
            }, style: { fontSize: "1.5rem" }
        });


    };

    return (
        <div>
            <button onClick={removeRestaurant} className={"text-red-100"}>
                <HiOutlineTrash size={"24"} />
            </button>

            <Toaster position="top-center" closeButton />
        </div>
    );
}