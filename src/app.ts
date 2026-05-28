import express, { json } from 'express';
import cors from 'cors';
import routes from './Routes/routes';
import {database} from './Database/database';
export default async function createApp() {
    const app = express();
    app.use(json());
    app.use(cors());
    app.use('/api', routes)
    try {
    await database.authenticate();
    //await database.sync({ alter: true });
    console.log("Database connected successfully");
} catch (error) {
    console.log("Error connecting to the database:", error);
}

    return app;
}