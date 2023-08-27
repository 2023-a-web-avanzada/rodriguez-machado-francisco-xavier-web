import mongoose, {Schema} from "mongoose";

const habitanteSchema = new Schema(
    {
        nombre: String,
        cedula: Number,
        fechaNacimiento: Date,
        estaCasado: Boolean,
        idProvincia: String

    },
    {
        timestamps: true,
    }
);

const Habitante = mongoose.models.Habitante || mongoose.model("Habitante", habitanteSchema);

export default Habitante;