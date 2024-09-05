import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from "./routes/Plant.routes.js";
const app = express();

// middleware
app.use(express.json(), cors());

// env vars
dotenv.config();
const PORT = process.env.PORT;

// db connection
const DB_NAME = "plantsDb";
dbConnect(DB_NAME);

// routes
app.use("/api", router);

app.listen(PORT, () =>
    console.log(` Server up on PORT: ${PORT}`)
);