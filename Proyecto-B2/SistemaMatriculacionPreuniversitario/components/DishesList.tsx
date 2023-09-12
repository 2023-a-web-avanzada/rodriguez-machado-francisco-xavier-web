import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import React from "react";
import RemoveBtnDish from "./RemoveBtnDish";

const getDishes = async (params) => {
    const apiUrl = process.env.API_URL;

    try {
        const res = await fetch(`${apiUrl}/api/dishes/?idRestaurant=${params}`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error("Failed to fetch dishes");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading dishes; ", error);
    }
}

export default async function DishesList({ params }) {
    //console.log("id "+params)

    try {
        const { dishes } = await getDishes(params);
        return (
            <>
                {dishes.map((d: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode; starts: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode; isTaxes: { toString: () => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode; }; numberIngredients: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode; _id: any; }) => (
                    <div key={d._id} className={"p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"}>
                        <div>
                            <h2 className={"font-bold text-2xl"}>{d.name}</h2>
                            <div className="grid grid-cols-1 divide-y gap-x-5">
                                <div><label className={"font-semibold"}>Starts: </label> {d.starts} </div>
                                <div><label className={"font-semibold"}>Do you have taxes? </label> {d.isTaxes.toString()} </div>
                                <div><label className={"font-semibold"}>Number of ingredients: </label> {d.numberIngredients} </div>

                            </div>
                        </div>

                        <div className={"flex gap-2"}>
                            <RemoveBtnDish idDish={d._id} />
                            <Link href={`/dishes/${params}/editD/${d._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                        </div>
                    </div>
                ))}

            </>
        )

    } catch (error) {
        console.error("Error fetching dishes:", error);
    }
    //const { dishes } = await getDishes(params);

}