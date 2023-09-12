"use client";

import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

export default function Navbar() {
    return (
        <nav className={"flex justify-between items-center bg-slate-700 px-8 py-3"}>
            <Link className={"text-white font-bold"} href={"/dashboard"}>CRUD R&D.</Link>
            <Link className={"bg-white font-bold p-2"} href={"/addRestaurant"}>Add Restaurant</Link>
            <button onClick={() => { signOut() }} className={"bg-red-500 text-white font-bold p-2"}>Log Out</button>
        </nav>
    );
}