import { model, Schema } from 'mongoose';
const PlantSchema = new Schema(
    {
        plantName: {
            type: String,
            required: [true, "Plant Name is required!"],
            minlength: [3, "Plant must be at least 3 characters long!"]
            
        },
        imageUrl: {
            type: String,
            required: [true, "Image URL is required!"]
            
        },
        price: {
            type: Number,
            required: [true, "The {PATH} is required!"],
            min: [10, "The {PATH} should be at least $10!"]
        },
        quantity: {
            type: Number,
            required: [true, "The {PATH} is required!"],
            min: [0, "The {PATH} cannot be negative!"]
        },
        hardinessZone: {
            type: String,
            required: [true, "Hardiness zone is required!"]
        },
        pollination: {
            type: String,
            required: [true, "Pollination information is required!"]
        }
        
    },
    { timestamps: true }
);
const Plant = model("Plant", PlantSchema);
export default Plant;

// look at {PATH}