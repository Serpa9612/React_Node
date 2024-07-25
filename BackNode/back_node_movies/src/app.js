import express from "express";
import { sequelize } from "./database/database.js";
import Entry from "./models/entry.js";
import apiRoutes from "./routes/api.js";
import cors from 'cors';


const app = express();

//Middleware Cors
app.use(cors({
    origin: 'http://localhost:3000' //Dominio de mi Front React
  }));

// Middleware Json
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('API is working!');
  });

export default app;