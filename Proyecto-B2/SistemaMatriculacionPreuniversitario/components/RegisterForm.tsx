"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSumbmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necesary.")
        }

        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User alredy exists.");
                return;
            }

            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }

    }

    return (
        <div className={"grid place-items-center h-screen"}>
            <div className={"shadow-lg p-5 rounded-lg border-t-4 border-green-400"}>
                <h1 className={"text-xl font-bold my-4"}>Register</h1>

                <form onSubmit={handleSumbmit} className={"flex flex-col gap-3"}>
                    <input onChange={(e) => setName(e.target.value)} className={"w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"} type="text" name="name" id="email" placeholder={"Full name"} />
                    <input onChange={(e) => setEmail(e.target.value)} className={"w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"} type="text" name="email" id="email" placeholder={"Email"} />
                    <input onChange={(e) => setPassword(e.target.value)} className={"w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"} type="password" name="password" id="password" placeholder={"Password"} />
                    <button className={"bg-green-600 text-white font-bold cursor-pointe px-6 py-2"}>Register</button>

                    {error && (
                        <div className={"bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2"}>{error}</div>)
                    }


                    <Link className={"text-sm mt-3 text-right"} href={'/'}>
                        Already have an account? <span className={"underline"}>Login</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}