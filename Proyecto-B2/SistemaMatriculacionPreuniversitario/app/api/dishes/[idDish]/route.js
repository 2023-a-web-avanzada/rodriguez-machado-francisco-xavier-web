import connectMongoDB from "../../../../libs/mongodb";
import Dish from "../../../../models/dish";
import {NextResponse} from "next/server";

export async function PUT(request, {params}) {
    const {idDish} = params;
    const {newName: name,
        newStarts:  starts,
        newIsTaxes: isTaxes,
        newNumberIngredients: numberIngredients,
        //newIdRestaurant: idRestaurant
    } = await request.json();
    await  connectMongoDB();
    await Dish.findByIdAndUpdate(idDish, {name,
        starts, isTaxes, numberIngredients
    });
    return NextResponse.json({message: "Dish updated"}, {status: 200});
}

export async function GET(request, { params }) {
    const {idDish} = params;
    await  connectMongoDB();
    const dish = await Dish.findOne({_id: idDish});
    return NextResponse.json({dish}, {status: 200});
}