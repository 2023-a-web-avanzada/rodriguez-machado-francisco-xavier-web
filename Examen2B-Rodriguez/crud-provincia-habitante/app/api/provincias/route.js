import connectMongoDB from "../../../libs/mongodb";
import Provincia from "../../../models/provincia";
import { NextResponse } from "next/server";

export async function POST(request){
    const { nombreProvincia, gradoSeguridad, numeroHabitantes, estaFiestas } = await request.json();
    await connectMongoDB();
    await Provincia.create({nombreProvincia, gradoSeguridad, numeroHabitantes, estaFiestas});
    return NextResponse.json({ message: "Provincia Creada" }, { status: 201 });
}

export async function GET(){
    await connectMongoDB();
    const provincias = await Provincia.find();
    return NextResponse.json({ provincias });
}

export async function DELETE(request){
    const idProvincia = request.nextUrl.searchParams.get("idProvincia");
    await connectMongoDB();
    await Provincia.findByIdAndDelete(idProvincia);
    return NextResponse.json({message: "Provincia Eliminada"}, {status: 200});
}