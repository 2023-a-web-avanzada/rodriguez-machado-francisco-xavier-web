import React from "react";
import EditRestaurantForm from "../../../components/EditRestaurantForm";


const getRestaurantById = async (idRestaurant) => {
    const apiUrl = process.env.API_URL;

    try {
        const res = await fetch(`${apiUrl}/api/restaurants/${idRestaurant}`,
            { cache: 'no-store' });

        if (!res.ok) {
            throw new Error("Failed to fetch restaurant");
        }

        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function editRestaurant({ params }) {
    const { idRestaurant } = params;
    try {
        const { restaurant } = await getRestaurantById(idRestaurant);

        const { name, starts, isOpen, numberBranches } = restaurant;

        // @ts-ignore
        return <EditRestaurantForm idRestaurant={idRestaurant} name={name} starts={starts} isOpen={isOpen} numberBranches={numberBranches} />;
    } catch (error) {
        console.log("Error: ", error);
    }


}