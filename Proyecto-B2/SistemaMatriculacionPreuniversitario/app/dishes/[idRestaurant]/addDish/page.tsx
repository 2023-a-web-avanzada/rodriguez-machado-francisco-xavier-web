"use client";

import React, { useState } from "react";
import NavbarDish from "../../../../components/NavbarDish";
import { useRouter } from "next/navigation";

export default function AddDish({ params }) {
    const idRestaurantP = params.idRestaurant
    const idRestaurant = idRestaurantP
    console.log(idRestaurantP)

    const [name, setName] = useState("");
    const [starts, setStarts] = useState("");
    const [isTaxes, setIsTaxes] = useState("");
    const [numberIngredients, setNumberIngredients] = useState("");

    const apiUrl = process.env.API_URL;

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !starts || !isTaxes || !numberIngredients) {
            alert('Name, starts, isTaxes and numberIngredients are required.');
            return;
        }

        try {
            // @ts-ignore
            const res = await fetch("/api/dishes", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name, starts, isTaxes, numberIngredients, idRestaurant })
            });

            if (res.ok) {
                router.push(`/dishes/${idRestaurantP}`);
            } else {
                throw new Error("Failed to create a new Restaurant");
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <NavbarDish params={idRestaurantP} />
            <div className={"border border-slate-400 px-8 py-2"}>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} value={name} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Name of the Dish"} />
                    <input onChange={(e) => {
                        setStarts(e.target.value)
                    }} value={starts} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Starts (0 to 5.0)"} />
                    <label>Do you have taxes?
                        <input onChange={(e) => {
                            setIsTaxes(e.target.value)
                        }} value={isTaxes} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"true or false"} />
                    </label>
                    <input onChange={(e) => {
                        setNumberIngredients(e.target.value)
                    }} value={numberIngredients} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Number of ingredients"} />

                    <button type={"submit"} className={"bg-green-600 font-bold text-white py-3 px-6 w-fit"}>Add Dish</button>
                </form>
            </div>
        </>
    )
}