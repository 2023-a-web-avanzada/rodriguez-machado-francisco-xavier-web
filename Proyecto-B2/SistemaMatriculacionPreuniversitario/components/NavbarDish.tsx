import Link from "next/link";
import React from "react";

export default function NavbarDish({ params }) {
    return (
        <nav className={"flex justify-between items-center bg-sky-300 px-8 py-3"}>
            <Link className={"text-white font-bold"} href={`/dishes/${params}`}>Dish</Link>
            <Link className={"text-white font-bold"} href={"/dashboard"}>CRUD R&D.</Link>
            <Link className={"bg-white p-2"} href={`/dishes/${params}/addDish`}>Add Dish</Link>
        </nav>
    );
}