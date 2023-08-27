import connectMongoDB from "../../../libs/mongodb";
import Habitante from "../../../models/habitante";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {nombre, cedula, fechaNacimiento, estaCasado, idProvincia} = await request.json();
    await connectMongoDB();
    await Habitante.create({nombre, cedula, fechaNacimiento, estaCasado, idProvincia});
    return NextResponse.json({message: "La información de habitante se creó con éxito"}, {status: 201})
}

/*export async function GET() {
    await connectMongoDB();
    const dishes = await Dish.find();
    return NextResponse.json({dishes});
}*/

export async function GET(request) {
    const idProvincia = request.nextUrl.searchParams.get("idProvincia");
    await connectMongoDB();
    const habitantes = await Habitante.find({idProvincia: idProvincia});
    return NextResponse.json({habitantes});
}

export async function DELETE(request) {
    const idHabitante = request.nextUrl.searchParams.get("idHabitante");
    await connectMongoDB();
    await Habitante.findByIdAndDelete(idHabitante);
    return NextResponse.json({message: "La información del habitante se eliminó con éxito"}, {status: 200})
}
