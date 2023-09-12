"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function AddRestaurant() {
    const [name, setName] = useState("");
    const [starts, setStarts] = useState("");
    const [isOpen, setIsOpen] = useState("");
    const [numberBranches, setNumberBranches] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !starts || !isOpen || !numberBranches) {
            alert('Name, starts, isOpen and numberBranches are required.');
            return;
        }

        try {
            const res = await fetch("/api/restaurants", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name, starts, isOpen, numberBranches })
            });

            if (res.ok) {
                router.push('/dashboard');
            } else {
                throw new Error("Failed to create a new Restaurant");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <div className={"border border-slate-400 px-8 py-2"}>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} value={name} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Name of the Restaurant"} />
                    <input onChange={(e) => {
                        setStarts(e.target.value)
                    }} value={starts} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Starts (0 to 5.0)"} />
                    <label>It is open?
                        <input onChange={(e) => {
                            setIsOpen(e.target.value)
                        }} value={isOpen} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"true or false"} />
                    </label>
                    <input onChange={(e) => {
                        setNumberBranches(e.target.value)
                    }} value={numberBranches} className={"border border-slate-200 px-8 py-2"} type={"text"} placeholder={"Number of branches"} />

                    <button type={"submit"} className={"bg-green-600 font-bold text-white py-3 px-6 w-fit"}>Add Restaurant</button>
                </form>
            </div>
        </>
    );
}