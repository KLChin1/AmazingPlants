import { Router } from 'express';
import PlantController from "../controllers/Plant.controller.js";

const router = Router();

router.route("/plants")
    .get(PlantController.getAll)
    .post(PlantController.create);

router.route("/Plants/:id")
    .get(PlantController.getOne) // read one
    .put(PlantController.updateOne) 
    .delete(PlantController.deleteOne) 

export default router;






