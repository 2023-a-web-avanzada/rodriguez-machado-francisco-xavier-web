"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
export default function EditRestaurantForm({ idRestaurant, name, starts, isOpen, numberBranches }) {
    const [newName, setNewName] = useState(name);
    const [newStarts, setNewStarts] = useState(starts);
    const [newIsOpen, setNewIsOpen] = useState(isOpen);
    const [newNumberBranches, setNewNumberBranches] = useState(numberBranches);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //const apiUrl = process.env.API_URL;
            //console.log("PUT", apiUrl)

            const res = await fetch(`http://localhost:3000/api/restaurants/${idRestaurant}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application JSON"
                },
                body: JSON.stringify({
                    newName, newStarts, newIsOpen, newNumberBranches
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to updated restaurant")
            }
            router.push('/dashboard');

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Navbar />
            <div className={"border border-slate-400 px-8 py-2"}>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
                    <input onChange={(e) => {
                        setNewName(e.target.value)
                    }} value={newName} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Name of the Restaurant"} />
                    <input onChange={(e) => {
                        setNewStarts(e.target.value)
                    }} value={newStarts} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Starts (0 to 5.0)"} />
                    <label>It is open?
                        <input onChange={(e) => {
                            setNewIsOpen(e.target.value)
                        }} value={newIsOpen} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"true or false"} />
                    </label>
                    <input onChange={(e) => {
                        setNewNumberBranches(e.target.value)
                    }} value={newNumberBranches} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Number of branches"} />

                    <button className={"bg-green-600 font-bold text-white py-3 px-6 w-fit"}>Update Restaurant</button>
                </form>

                <div className={"my-6 justify-center"}>
                    <Link className={"bg-amber-500 font-bold text-white py-3 px-6 w-fit"} href={`/dishes/${idRestaurant}`}>Dish</Link>
                </div>

            </div>
        </>
    );
}