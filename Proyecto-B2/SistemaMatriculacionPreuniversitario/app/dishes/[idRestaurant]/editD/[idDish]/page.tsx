"use client"
import NavbarDish from "../../../../../components/NavbarDish";
import React from "react";
import EditDishForm from "../../../../../components/EditDishForm";

const getDishById = async (idDish) => {
    const apiUrl = process.env.API_URL;

    try {
        const res = await fetch(`http://localhost:3000/api/dishes/${idDish}`,
            { cache: 'no-store' });

        if (!res.ok) {
            throw new Error("Failed to fetch dish");
        }

        return res.json();
    } catch (error) {
        console.log(error)
    }
}
export default async function EditDish({ params }) {
    //console.log(params.idRestaurant);
    const idRestaurant = params.idRestaurant;
    const { idDish } = params;

    const { dish } = await getDishById(idDish)
    const { name, starts, isTaxes, numberIngredients } = dish;

    return (
        <>
            <NavbarDish params={idRestaurant} />
            <EditDishForm idDish={idDish} name={name} starts={starts} isTaxes={isTaxes} numberIngredients={numberIngredients} idRestaurant={idRestaurant} />
        </>
    )
}