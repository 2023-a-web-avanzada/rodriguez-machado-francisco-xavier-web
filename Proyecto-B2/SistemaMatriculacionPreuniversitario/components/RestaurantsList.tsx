import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencil, HiPencilAlt } from "react-icons/hi";



const getRestaurants = async () => {
    const apiUrl = process.env.API_URL;

    try {
        const res = await fetch(`${apiUrl}/api/restaurants`, { cache: "no-store" });
        //const res = await fetch(`https://crud-restaurant-dish-q3q4cx2fy-wize6669.vercel.app/api/restaurants`, { cache: "no-store" });

        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }

        return res.json();
    } catch (error) {
        console.log("Error loading restaurant ", error);
    }
}

export default async function RestaurantsList() {
    try {
        const { restaurants } = await getRestaurants();
        return (
            <>
                {restaurants.map((restaurant: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode; starts: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode; isOpen: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode; numberBranches: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode; _id: string; }) => (
                    <div key={restaurant._id} className={"p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"}>
                        <div>
                            <h2 className={"font-bold text-2xl"}>{restaurant.name}</h2>
                            <div className="grid grid-cols-1 divide-y gap-x-5">
                                <div><label className={"font-semibold"}>Starts: </label> {restaurant.starts}</div>
                                <div><label className={"font-semibold"}>It is open? </label> {restaurant.isOpen.toString()}</div>
                                <div><label className={"font-semibold"}>Number of branches: </label> {restaurant.numberBranches}</div>
                                {/*{restaurant._id}*/}
                            </div>
                        </div>

                        <div className={"flex gap-2"}>
                            <RemoveBtn idRestaurant={restaurant._id} />
                            <Link href={`/editRestaurant/${restaurant._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                        </div>
                    </div>
                ))}
            </>
        );

    } catch (error) {
        console.error("Error fetching restaurants:", error);
    }
    //const { restaurants } = await getRestaurants();

}