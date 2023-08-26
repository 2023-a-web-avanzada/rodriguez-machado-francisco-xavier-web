import mongoose, {Schema} from "mongoose";

const provinciaSchema = new Schema(
    {
        nombreProvincia: String,
        gradoSeguridad: Number,
        numeroHabitantes: Number,
        estaFiestas: Boolean,

    },
    {
        timestamps: true,
    }
);

const Provincia = mongoose.models.Provincia || mongoose.model("Provincia", provinciaSchema);

export default Provincia;