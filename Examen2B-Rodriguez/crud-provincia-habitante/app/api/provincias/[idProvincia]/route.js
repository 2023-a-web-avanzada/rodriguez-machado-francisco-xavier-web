import connectMongoDB from "../../../../libs/mongodb";
import Provincia from "../../../../models/provincia";
import { NextResponse } from "next/server";

export async function PUT(request, { params }){
    const { idProvincia } = params;
    const {nuevoNombre: nombreProvincia, nuevaSeguridad: gradoSeguridad, nuevoNumHabitantes: numeroHabitantes, nuevoEstado: estaFiestas} = await request.json();
    await connectMongoDB();
    await Provincia.findByIdAndUpdate(idProvincia, { nombreProvincia, gradoSeguridad, numeroHabitantes, estaFiestas });
    return NextResponse.json({message: "Provincia Actualizada"}, {status: 200});
}

export async function GET(request, { params }){
    const { idProvincia } = params;
    await connectMongoDB();
    const provincia = await Provincia.findOne({ _id: idProvincia });
    return NextResponse.json({ provincia }, {status: 200});
}