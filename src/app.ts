import express, { json } from 'express';
import cors from 'cors';
import routes from './Routes/routes';
export default async function creatApp() {
    const app = express();
    app.use(json());
    app.use(cors());
    app.use('/api', routes)

    return app;
}