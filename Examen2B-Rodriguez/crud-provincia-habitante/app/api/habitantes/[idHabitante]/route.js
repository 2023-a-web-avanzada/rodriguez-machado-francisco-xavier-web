import connectMongoDB from "../../../../libs/mongodb";
import Habitante from "../../../../models/habitante";
import {NextResponse} from "next/server";

export async function PUT(request, {params}) {
    const {idHabitante} = params;
    const {nuevoNombre: nombre,
        nuevaCedula:  cedula,
        nuevaFechaNacimiento: fechaNacimiento,
        nuevoEstaCasado: estaCasado,
        //newIdRestaurant: idRestaurant
    } = await request.json();
    await  connectMongoDB();
    await Habitante.findByIdAndUpdate(idHabitante, {nombre,
        cedula, fechaNacimiento, estaCasado
    });
    return NextResponse.json({message: "La información de habitante se actualizó con éxito"}, {status: 200});
}

export async function GET(request, { params }) {
    const {idHabitante} = params;
    await  connectMongoDB();
    const habitante = await Habitante.findOne({_id: idHabitante});
    return NextResponse.json({habitante}, {status: 200});
}