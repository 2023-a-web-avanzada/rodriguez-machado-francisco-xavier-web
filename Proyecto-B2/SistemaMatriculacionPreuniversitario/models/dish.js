import mongoose, { Schema } from "mongoose";

const dishSchema = new Schema(
    {
        name: String,
        starts: String,
        isTaxes: Boolean,
        numberIngredients: Number,
        idRestaurant: String,
    },
    {
        timestamps: true
    }
);

const Dish = mongoose.models.Dish || mongoose.model("Dish", dishSchema);

export default Dish;
