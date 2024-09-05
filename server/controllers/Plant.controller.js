// OH C R U D
import Plant from "../models/Plant.model.js";

const PlantController = {
    getAll: async (req, res) => {
        try{
            const allPlants = await Plant.find();
            res.json(allPlants)
        }catch(err){
            console.log(err);
            res.status(400).json(err); 
        }
    },
    create: async (req, res) => {
        try{
            const newPlant = await Plant.create(req.body);
            res.json(newPlant);
        }catch(err){
            console.log(err);
            res.status(400).json(err); 
        }
    },
    getOne: async (req, res) => {
        try{
            const onePlant = await Plant.findById(req.params.id)
            res.json(onePlant);
        }catch(err){
            console.log(err);
            res.status(400).json(err); 
        }
    },

    updateOne: async (req, res) => {
        const options = {
            new: true, // returning the updated Plant
            runValidators: true, // to run the validation 
        };
        try{
            const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, options )
            res.json(updatedPlant)
        }catch(err){
            console.log(err);
            res.status(400).json(err); 
        }
    },
    deleteOne: async (req, res) => {
        try{
            const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
            res.json(deletedPlant);
        }catch(err){
            console.log(err);
            res.status(400).json(err); 
        }
    },
}

export default PlantController;