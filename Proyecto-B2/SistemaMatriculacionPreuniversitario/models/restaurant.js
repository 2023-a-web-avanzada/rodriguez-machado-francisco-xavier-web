import mongoose, { Schema } from "mongoose";

const restaurantSchema = new Schema(
    {
        name: String,
        starts:  String,
        isOpen: Boolean,
        numberBranches: Number,
    },
    {
        timestamps: true,
    }
);

const Restaurant = mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;