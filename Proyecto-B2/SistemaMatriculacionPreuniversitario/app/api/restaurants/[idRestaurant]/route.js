import connectMongoDB from "../../../../libs/mongodb";
import Restaurant from "../../../../models/restaurant";
import {NextResponse} from "next/server";

export async function PUT(request, {params}) {
    const {idRestaurant} = params;
    const {newName: name,
        newStarts:  starts,
        newIsOpen: isOpen,
        newNumberBranches: numberBranches} = await request.json();
    await  connectMongoDB();
    await Restaurant.findByIdAndUpdate(idRestaurant, {name, starts, isOpen, numberBranches})
    return NextResponse.json({message: "Restaurant updated"}, {status: 200});

}

export async function GET(request, {params}) {
    const {idRestaurant} = params;
    await  connectMongoDB();
    const restaurant = await Restaurant.findOne({_id: idRestaurant});
    return NextResponse.json({restaurant}, {status: 200});
}