"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditDishForm({ idDish, name, starts, isTaxes, numberIngredients, idRestaurant }) {
    const [newName, setNewName] = useState(name);
    const [newStarts, setNewStarts] = useState(starts);
    const [newIsTaxes, setNewIsTaxes] = useState(isTaxes);
    const [newNumberIngredients, setNewNumberIngredients] = useState(numberIngredients);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/dishes/${idDish}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application JSON"
                },
                body: JSON.stringify({
                    newName, newStarts, newIsTaxes, newNumberIngredients
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to updated restaurant");
            }
            router.push(`http://localhost:3000/dishes/${idRestaurant}`);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className={"border border-slate-400 px-8 py-2"}>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
                    <input onChange={(e) => {
                        setNewName(e.target.value)
                    }} value={newName} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Name of the Dish"} />
                    <input onChange={(e) => {
                        setNewStarts(e.target.value)
                    }} value={newStarts} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Starts (0 to 5.0)"} />
                    <label>Do you have taxes?
                        <input onChange={(e) => {
                            setNewIsTaxes(e.target.value)
                        }} value={isTaxes} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"true or false"} />
                    </label>
                    <input onChange={(e) => {
                        setNewNumberIngredients(e.target.value)
                    }} value={numberIngredients} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Number of ingredients"} />

                    <button type={"submit"} className={"bg-green-600 font-bold text-white py-3 px-6 w-fit"}>Update Dish</button>
                </form>
            </div>
        </>
    )
}